import copy
import unittest
from import_release import remove_card_label, is_generated_footer


def card(runs):
    return {"rows": [["".join(r["text"] for r in runs)]], "cells": [[[{"type": "paragraph", "sourceId": "test/r0/c0/p0", "runs": runs}]]]}


class CardLabelTest(unittest.TestCase):
    def test_only_generated_footer_is_removed(self):
        self.assertTrue(is_generated_footer("|（注：部分内容可能由 AI 生成）"))
        self.assertFalse(is_generated_footer("Compliance note: AI-generated imagery must be labeled."))
        self.assertFalse(is_generated_footer("Safety tip: Work in a test folder."))

    def test_split_runs_preserve_format_and_body(self):
        block = card([{"text": "te"}, {"text": "xt\nToday", "bold": True}, {"text": "\n  1. Keep this\ntext\nText analysis"}])
        removed = remove_card_label(block)
        self.assertEqual(removed["displayText"], "Today\n  1. Keep this\ntext\nText analysis")
        self.assertEqual(block["cells"][0][0][0]["runs"][0], {"text": "Today", "bold": True})

    def test_normal_text_and_later_labels_unchanged(self):
        for text in ["Text analysis is useful", "text-generation", "Plain text is useful", "Start here\ntext\nBody"]:
            block = card([{"text": text}])
            before = copy.deepcopy(block)
            self.assertIsNone(remove_card_label(block))
            self.assertEqual(block, before)

    def test_separate_label_paragraph(self):
        block = card([{"text": "text"}])
        block["rows"] = [["text\nBody"]]
        block["cells"][0][0].append({"type": "paragraph", "sourceId": "test/r0/c0/p1", "runs": [{"text": "Body"}]})
        remove_card_label(block)
        self.assertEqual(len(block["cells"][0][0]), 1)
        self.assertEqual(block["rows"], [["Body"]])

    def test_only_single_cell_cards(self):
        block = card([{"text": "text\nBody"}])
        block["rows"][0].append("Other column")
        before = copy.deepcopy(block)
        self.assertIsNone(remove_card_label(block))
        self.assertEqual(block, before)

    def test_plain_text_label(self):
        block = card([{"text": "Plain Text\n  Body"}])
        remove_card_label(block)
        self.assertEqual(block["rows"], [["  Body"]])


if __name__ == "__main__":
    unittest.main()
