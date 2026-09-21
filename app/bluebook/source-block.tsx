import { Fragment, type ReactNode } from "react";
import { assetPath } from "../site-paths";
import { type RichRun, type PlaybookBlock } from "../playbook-data";
import tableLayouts from "./table-layouts.json";
import { AiTaskFlowDiagram, HrScenarioChainDiagram, ProcessFlowDiagram, SkillFolderDiagram, InvoiceSkillDiagram } from "./diagrams";

function SourceRuns({ runs }: { runs: RichRun[] }) {
  return runs.map((run, index) => {
    let content: ReactNode = run.text;
    if (run.bold) content = <strong>{content}</strong>;
    if (run.italic) content = <em>{content}</em>;
    if (run.underline) content = <u>{content}</u>;
    if (run.strike) content = <s>{content}</s>;
    if (run.href) content = <a href={run.href}>{content}</a>;
    return <Fragment key={index}>{content}</Fragment>;
  });
}

export function SourceBlockView({ block, index = 0 }: { block: PlaybookBlock; index?: number }) {
  if (block.type === "diagram") {
    return <div data-source-id={block.sourceId} data-retained-diagram="ai"><AiTaskFlowDiagram /></div>;
  }
  if (block.type === "image") {
    return (
      <figure className="doc-image" data-source-id={block.sourceId}>
        <img src={assetPath(block.src)} alt={block.alt || `Playbook image ${index + 1}`} width={block.width} height={block.height} loading="lazy" />
      </figure>
    );
  }
  if (block.type === "paragraph" || block.type === "heading") {
    const content = <SourceRuns runs={block.runs} />;
    if (block.marker) {
      return <div className="source-list-item" data-source-id={block.sourceId} data-source-marker={block.marker} style={{ marginLeft: `${(block.level ?? 0) * 20}px` }}>
        <span className="source-list-marker" aria-hidden="true">{block.marker}</span>
        <p>{content}</p>
      </div>;
    }
    if (block.type === "heading") {
      const Tag = (`h${block.headingLevel ?? 3}`) as "h2" | "h3" | "h4" | "h5" | "h6";
      return <Tag className="source-heading" data-source-id={block.sourceId}>{content}</Tag>;
    }
    return <p data-source-id={block.sourceId}>{content}</p>;
  }
  if (block.type !== "table") return null;
  if (block.diagram) {
    return <div data-source-id={block.sourceId} data-retained-diagram={block.diagram}>
      {block.diagram === "hr" ? <HrScenarioChainDiagram /> : block.diagram === "skill" ? <SkillFolderDiagram /> : block.diagram === "invoice" ? <InvoiceSkillDiagram /> : <ProcessFlowDiagram stages={block.stages ?? []} />}
    </div>;
  }
  const cell = (row: number, column: number) => block.cells[row][column].map((item, i) => <SourceBlockView key={i} block={item} index={i} />);
  if (block.rows.length === 1 && block.rows[0].length === 1) {
    return <blockquote className="source-prompt" data-source-id={block.sourceId}>{cell(0, 0)}</blockquote>;
  }
  const layout = (tableLayouts as Record<string, { columns: string[]; minWidth: number }>)[block.sourceId];
  return <div className="table-wrap source-table" data-source-id={block.sourceId}>
    <table style={{ tableLayout: layout ? "fixed" : "auto", minWidth: layout?.minWidth ?? "100%" }}>
      {layout && <colgroup>{layout.columns.map((width, i) => <col key={i} style={{ width }} />)}</colgroup>}
      <thead><tr>{block.rows[0].map((_, ci) => <th scope="col" key={ci}>{cell(0, ci)}</th>)}</tr></thead>
      <tbody>{block.rows.slice(1).map((row, ri) => <tr key={ri}>{row.map((_, ci) => <td key={ci}>{cell(ri + 1, ci)}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}
