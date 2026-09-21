"""Independently compare imported nodes with raw WordprocessingML text and images."""
import hashlib
import json
import re
import sys
import zipfile
from pathlib import Path
from lxml import etree

source = Path(sys.argv[1])
root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / "qa/source-manifest.json").read_text())
ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main", "a": "http://schemas.openxmlformats.org/drawingml/2006/main", "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"}
with zipfile.ZipFile(source) as archive:
    doc = etree.fromstring(archive.read("word/document.xml"))
    rels = etree.fromstring(archive.read("word/_rels/document.xml.rels"))
    targets = {r.get("Id"): r.get("Target") for r in rels}
    expected = {}
    image_sequence = []
    for i, child in enumerate(doc.find("w:body", ns)):
        sid = f"body-{i}"
        if child.tag.endswith("}p"):
            paragraphs = [(sid, child)]
        else:
            paragraphs = [(f"{sid}/r{ri}/c{ci}/p{pi}", p) for ri, row in enumerate(child.findall("w:tr", ns)) for ci, cell in enumerate(row.findall("w:tc", ns)) for pi, p in enumerate(cell.findall("w:p", ns))]
        for key, p in paragraphs:
            text = "".join(n.text or "" if n.tag.endswith("}t") else "\t" if n.tag.endswith("}tab") else "\n" for n in p.xpath(".//w:t|.//w:br|.//w:cr|.//w:tab", namespaces=ns))
            if text:
                expected[key] = text
            for blip in p.xpath(".//a:blip", namespaces=ns):
                rel = blip.get("{" + ns["r"] + "}embed")
                blob = archive.read("word/" + targets[rel])
                image_sequence.append((key, hashlib.sha256(blob).hexdigest()))

actual = {}
def collect(block):
    if "runs" in block:
        actual[block["sourceId"]] = actual.get(block["sourceId"], "") + "".join(r["text"] for r in block["runs"])
    if "cells" in block:
        for row in block["cells"]:
            for cell in row:
                for item in cell:
                    collect(item)
for section in manifest["sections"]:
    for block in section["blocks"]:
        collect(block)
for change in manifest.get("removedCardLabels", []):
    key = change["sourceId"]
    assert key.endswith("/r0/c0/p0")
    assert expected[key] == change["originalText"]
    cleaned = re.sub(r"^[ \t]*(?:text|plain text)[ \t]*(?:\r?\n|$)", "", expected[key], count=1, flags=re.I)
    assert cleaned != expected[key] and cleaned == change["displayText"]
    if cleaned:
        expected[key] = cleaned
    else:
        del expected[key]
for change in manifest.get("removedSourceNotes", []):
    key = change["sourceId"]
    assert expected[key] == change["originalText"]
    assert expected[key].strip().lstrip("|").strip() == "（注：部分内容可能由 AI 生成）"
    assert key not in actual
    del expected[key]
headings = {section["title"] for section in manifest["sections"]} | {chapter["title"] for chapter in manifest["chapters"]} | {"BasilAOS AOS Work Playbook (English Release)"}
assert all(text == actual.get(key) or text in headings for key, text in expected.items()), [(key, text[:100]) for key, text in expected.items() if text != actual.get(key) and text not in headings]
assert all(expected.get(key) == text for key, text in actual.items())
assert image_sequence == [(i["sourceId"], i["sha256"]) for i in manifest["images"]]
assert hashlib.sha256(source.read_bytes()).hexdigest() == manifest["sourceSha256"]
report = {"sourceParagraphsIncludingCells": len(expected), "importedTextBlocks": len(actual), "exactTextExceptApprovedRemovals": True, "removedCardLabels": len(manifest.get("removedCardLabels", [])), "removedSourceNotes": len(manifest.get("removedSourceNotes", [])), "exactImageOrderAndBytes": True, "imageOccurrences": len(image_sequence)}
(root / "qa/source-report.json").write_text(json.dumps(report, indent=2))
print(report)
