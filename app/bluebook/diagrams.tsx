import { Fragment } from "react";

export function ProcessFlowDiagram({ stages }: { stages: string[] }) {
  const isLong =
    stages.length > 6 ||
    (stages.length <= 3 && Math.max(...stages.map((stage) => stage.length)) > 220);

  return (
    <figure className="process-flow-diagram" aria-label="Process flow">
      <figcaption>Process flow</figcaption>
      <div className={`process-flow-track${isLong ? " process-flow-track--long" : ""}`}>
        {stages.map((stage, index) => (
          <div className="process-flow-step" key={`${stage}-${index}`}>
            <div className="process-flow-node">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage}</strong>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function AiTaskFlowDiagram() {
  return (
    <figure className="ai-flow-diagram" aria-label="What happens inside an AI task">
      <figcaption>How an AI task moves</figcaption>
      <div className="ai-flow-mainline" aria-label="Main path">
        {[
          ["01", "User goal + materials"],
          ["02", "Agent plans"],
          ["03", "LLM understands & generates"],
          ["04", "Checkpoint & review"],
          ["05", "Final output"],
        ].map(([index, label], nodeIndex, nodes) => (
          <Fragment key={index}>
            <div className="ai-flow-node">
              <span className="ai-flow-node-index">{index}</span>
              <strong>{label}</strong>
            </div>
            {nodeIndex < nodes.length - 1 ? <span className="ai-flow-connector" aria-hidden="true">→</span> : null}
          </Fragment>
        ))}
      </div>
      <div className="ai-flow-branch" aria-label="Execution branch">
        <div className="ai-flow-branch-label">Execution branch</div>
        <div className="ai-flow-branchline">
          {[
            ["A", "Skill methods & scripts"],
            ["B", "Tool / Connector"],
            ["C", "MCP / API"],
            ["D", "Files, spreadsheets & business systems"],
          ].map(([index, label], nodeIndex, nodes) => (
            <Fragment key={index}>
              <div className="ai-flow-node">
                <span className="ai-flow-node-index">{index}</span>
                <strong>{label}</strong>
              </div>
              {nodeIndex < nodes.length - 1 ? <span className="ai-flow-connector" aria-hidden="true">→</span> : null}
            </Fragment>
          ))}
        </div>
        <p className="ai-flow-branch-note">
          The Agent loads Skills, calls tools, and sends results back to the checkpoint before final output.
        </p>
      </div>
    </figure>
  );
}

export function SkillFolderDiagram() {
  const tree = [
    { line: "my-skill/", note: "Skill package root" },
    { line: "├── SKILL.md", note: "Required: skill description" },
    { line: "│" },
    { line: "├── scripts/", note: "Optional: executable scripts" },
    { line: "│   └── check.py" },
    { line: "│" },
    { line: "├── references/", note: "Optional: reference materials" },
    { line: "│   └── guide.md" },
    { line: "│" },
    { line: "└── templates/", note: "Optional: output templates" },
    { line: "    └── template.pptx" },
  ];

  return (
    <figure className="skill-diagram" aria-label="Standard Skill folder structure">
      <figcaption>Code block</figcaption>
      <div className="skill-code" role="list">
        {tree.map((row, index) => (
          <div className="skill-code-row" role="listitem" key={`${row.line}-${index}`}>
            <span className="skill-line-number">{index + 1}</span>
            <code>{row.line}</code>
            {row.note ? <span className="skill-note"># {row.note}</span> : null}
          </div>
        ))}
      </div>
    </figure>
  );
}

export function InvoiceSkillDiagram() {
  const tree = [
    { line: "invoice-skill/", note: "Skill package root" },
    { line: "├── SKILL.md", note: "Triggers, steps, boundaries, output" },
    { line: "├── references/", note: "Fields, categories, business rules" },
    { line: "├── scripts/", note: "OCR, validation, table processing" },
    { line: "├── templates/", note: "Excel and report templates" },
    { line: "└── tests/", note: "Normal and edge-case samples" },
  ];

  return (
    <figure className="skill-diagram" aria-label="Invoice Skill folder structure">
      <figcaption>Code block</figcaption>
      <div className="skill-code" role="list">
        {tree.map((row, index) => (
          <div className="skill-code-row" role="listitem" key={`${row.line}-${index}`}>
            <span className="skill-line-number">{index + 1}</span>
            <code>{row.line}</code>
            <span className="skill-note"># {row.note}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function WorkflowDiagram() {
  const stages = [
    "State the goal",
    "Read Library and table data",
    "Plan steps and pick tools",
    "Execute and produce output",
  ];

  return (
    <figure className="workflow-diagram" aria-label="AOS Work task workflow">
      <div className="workflow-lane">
        <div className="workflow-lane-label">
          <span>Agent Work</span>
        </div>
        <div className="workflow-mainline">
          {stages.map((stage, index) => (
            <div className="workflow-node" key={stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="workflow-lane">
        <div className="workflow-lane-label">
          <span>Human Review</span>
        </div>
        <div className="workflow-branches">
          <div className="workflow-branch workflow-branch--revise">
            <small>Needs Revision</small>
            <span>Revise issue and rerun</span>
          </div>
          <div className="workflow-branch">
            <small>Approved</small>
            <span>Archive or publish</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function HrScenarioChainDiagram() {
  const lanes = [
    {
      label: "Scenario A",
      title: "Generate JD",
      steps: [
        ["Role Brief", "Collect role goals, requirements, must-haves"],
        ["JD Draft", "Generate channel-ready job description"],
        ["Publish", "Send to hiring channels and job boards"],
      ],
    },
    {
      label: "Scenario B",
      title: "Screen Resumes",
      steps: [
        ["Resume Intake", "New resumes land in the same candidate Base"],
        ["Match Ranking", "Score skills, experience, language, availability"],
        ["Interview Queue", "Shortlist candidates and schedule interviews"],
      ],
    },
    {
      label: "Close Loop",
      title: "Update Candidate Status",
      steps: [
        ["Interview Notes", "Write feedback back to the candidate record"],
        ["Status Update", "Move each candidate to the next hiring stage"],
      ],
    },
  ];

  return (
    <figure className="hr-chain-diagram" aria-label="HR hiring scenario chain">
      <figcaption>HR Scenario Chain</figcaption>
      <div className="hr-chain-lanes">
        {lanes.map((lane) => (
          <section className="hr-chain-lane" key={lane.label}>
            <div className="hr-chain-lane-head">
              <small>{lane.label}</small>
              <strong>{lane.title}</strong>
            </div>
            <div className="hr-chain-steps">
              {lane.steps.map(([title, body], index) => (
                <div className="hr-chain-step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="hr-chain-base">
        <small>Shared Base</small>
        <strong>One structured candidate table carries the whole workflow.</strong>
        <p>JD requirements, resumes, rankings, interview feedback, reminders, and final status stay connected without switching tools.</p>
      </div>
    </figure>
  );
}
