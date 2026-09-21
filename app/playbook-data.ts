export type RichRun = { text: string; bold?: boolean; italic?: boolean; underline?: boolean; strike?: boolean; href?: string };
export type TextBlock = { type: 'paragraph' | 'heading'; runs: RichRun[]; marker?: string; level?: number; headingLevel?: number; sourceId: string };
export type ImageBlock = { type: 'image'; src: string; alt: string; width?: number; height?: number; sourceId: string };
export type PlaybookBlock = TextBlock | ImageBlock
  | { type: 'table'; rows: string[][]; cells: (TextBlock | ImageBlock)[][][]; diagram?: 'process' | 'hr' | 'skill' | 'invoice'; stages?: string[]; sourceId: string }
  | { type: 'diagram'; diagram: 'ai'; sourceId: string; runs: RichRun[] };
export type PlaybookSection = { id: string; title: string; chapterId: string; chapterTitle: string; index: number; prev: string | null; next: string | null; summary: string; blocks: PlaybookBlock[] };
export type PlaybookChapter = { id: string; title: string; sections: Array<{ id: string; title: string }> };

export const playbookTitle = "BasilAOS AOS Work Playbook (English Release)";
export const playbookChapters: PlaybookChapter[] = [
  {
    "id": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "title": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "sections": [
      {
        "id": "1-1-meet-workbench-it-s-not-just-another-chat-box",
        "title": "1.1 Meet BasilAOS — It's Not Just Another Chat Box"
      },
      {
        "id": "1-2-workbench-main-interface-workspace",
        "title": "1.2 AOS Work Main Interface & Workspace"
      },
      {
        "id": "1-3-your-first-task-in-seconds",
        "title": "1.3 Your First Task in Seconds"
      },
      {
        "id": "1-4-drop-your-files-in",
        "title": "1.4 Library — Your Single Source of Truth for Work"
      },
      {
        "id": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
        "title": "1.5 Base — Structured Data Your Agent Can Work With"
      },
      {
        "id": "1-6-install-your-first-skill",
        "title": "1.6 Install Your First Skill"
      },
      {
        "id": "1-7-connect-your-first-service",
        "title": "1.7 Connect Your First Service"
      },
      {
        "id": "1-8-getting-more-like-your-actual-personal-assistant",
        "title": "1.8 Getting More Like Your Actual Personal Assistant"
      },
      {
        "id": "1-9-what-basil-can-and-can-t-do",
        "title": "1.9 AOS Work — What It Can and Can't Do"
      }
    ]
  },
  {
    "id": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "title": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "sections": [
      {
        "id": "scenario-1-email-management-structured-follow-ups",
        "title": "2.1 Email Management & Structured Follow-ups"
      },
      {
        "id": "scenario-2-document-summarization-translation",
        "title": "2.2 Document Summarization & Translation"
      },
      {
        "id": "scenario-3-data-analysis-insights",
        "title": "2.3 Data Analysis & Insights"
      },
      {
        "id": "scenario-4-storytelling-ppt-html-generation-production",
        "title": "2.4 Storytelling — PPT/HTML Generation"
      },
      {
        "id": "scenario-5-fashion-industry-news-inspiration-search",
        "title": "2.5 Fashion Industry News & Inspiration Search"
      },
      {
        "id": "scenario-6-personal-folder-organization",
        "title": "2.6 Personal Folder Organization"
      }
    ]
  },
  {
    "id": "chapter-3-role-specific-scenarios",
    "title": "Chapter 3 · Role-Specific Scenarios",
    "sections": [
      {
        "id": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
        "title": "3.1 HR: JD Generation, Resume Screening & Candidate Follow-ups"
      },
      {
        "id": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
        "title": "3.2 Legal: Supplier Contract Review, Template Generation & Expiry Tracking"
      },
      {
        "id": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
        "title": "3.3 Finance: Invoice Processing, Reconciliation & Reporting"
      },
      {
        "id": "scenario-4-designers-ai-image-generation-fabric-recoloring",
        "title": "3.4 Designers: AI Image Generation for Fashion"
      },
      {
        "id": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
        "title": "3.5 E-commerce Operations: Multi-Channel Product Content Generation"
      },
      {
        "id": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
        "title": "3.6 Marketing: Competitor Social Media Monitoring, Content Planning & Campaign Execution"
      },
      {
        "id": "scenario-7-sales-lead-automation-multi-source-prospecting",
        "title": "3.7 Sales: Lead Automation & Multi-Source Prospecting"
      },
      {
        "id": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
        "title": "3.8 Merchandise Planning: Product Operations Analysis & Inventory Risk Alerts"
      }
    ]
  },
  {
    "id": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "title": "Chapter 4 · Workspace, Skill & Work — Turn One-Time Wins Into a System",
    "sections": [
      {
        "id": "4-1-project-a-permanent-home-for-ongoing-work",
        "title": "4.1 Workspace — A Permanent Home for Ongoing Work"
      },
      {
        "id": "4-2-understanding-skill-what-it-is-and-why-it-matters",
        "title": "4.2 Understanding Skill: What It Is and Why It Matters"
      },
      {
        "id": "4-3-mastering-skills-from-installation-to-creation",
        "title": "4.3 Mastering Skills: From Installation to Creation"
      },
      {
        "id": "4-4-tuning-skills-when-standard-isn-t-enough",
        "title": "4.4 Tuning Skills: When Standard Isn't Enough"
      },
      {
        "id": "4-5-work-package-skills-into-a-role",
        "title": "4.5 Work: Package Skills Into a Role"
      },
      {
        "id": "appendix-the-ai-work-system-in-one-chapter",
        "title": "4.6 Appendix: The AI Work System in One Chapter"
      }
    ]
  }
];

export const playbookSections: PlaybookSection[] = [
  {
    "id": "1-1-meet-workbench-it-s-not-just-another-chat-box",
    "title": "1.1 Meet BasilAOS — It's Not Just Another Chat Box",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 1,
    "prev": null,
    "next": "1-2-workbench-main-interface-workspace",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You've probably used ChatGPT or something like it. Type a question, get an answer. Tools like that are capable assistants — but they work outside your company: they aren't connected to your company's files, tables, or systems, so you upload material by hand and copy the results back out yourself."
          }
        ],
        "sourceId": "body-3"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-001.png",
        "alt": "",
        "sourceId": "body-4",
        "width": 552,
        "height": 298
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "BasilAOS is not that."
          }
        ],
        "sourceId": "body-5"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "BasilAOS is an enterprise-grade AI agent operating system. Its unified work interface is called "
          },
          {
            "text": "AOS Work",
            "bold": true
          },
          {
            "text": ". Think of it as hiring a coworker who lives inside your computer: reads your files, queries your data tables, remembers your preferences, runs tasks on schedule, and hands you finished work."
          }
        ],
        "sourceId": "body-6"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AOS Work is an autonomous agent — not just a general-purpose AI, but one equipped with role-specific Skills that connect your company's data and third-party tools.Here's the difference at a glance:"
          }
        ],
        "sourceId": "body-7"
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool",
            "What it does",
            "What it doesn't do"
          ],
          [
            "Chatbot",
            "Answers preset FAQs",
            "Can't create files or access your data"
          ],
          [
            "AI Assistant (e.g. ChatGPT)\n",
            "Powerful general-purpose AI: writes, analyzes, codes, generates images",
            "Personal memory only — can't read, modify, or create your company data; no automated workflows or team collaboration"
          ],
          [
            "AOS Work\n",
            "Autonomous agent with role-specific Skills; connects Library, Base, and third-party tools to read, modify, and create your files; runs scheduled tasks and workflows ",
            "You still make the final call — it's your work partner, not your replacement\n"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool"
                  }
                ],
                "sourceId": "body-8/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What it does"
                  }
                ],
                "sourceId": "body-8/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What it doesn't do"
                  }
                ],
                "sourceId": "body-8/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Chatbot"
                  }
                ],
                "sourceId": "body-8/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Answers preset FAQs"
                  }
                ],
                "sourceId": "body-8/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Can't create files or access your data"
                  }
                ],
                "sourceId": "body-8/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "AI Assistant (e.g. ChatGPT)"
                  }
                ],
                "sourceId": "body-8/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Powerful general-purpose AI: writes, analyzes, codes, generates images"
                  }
                ],
                "sourceId": "body-8/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Personal memory only — can't read, modify, or create your company data; no automated workflows or team collaboration"
                  }
                ],
                "sourceId": "body-8/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "AOS Work"
                  }
                ],
                "sourceId": "body-8/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Autonomous agent with role-specific Skills; connects Library, Base, and third-party tools to read, modify, and create your files; runs scheduled tasks and workflows "
                  }
                ],
                "sourceId": "body-8/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "You still make the final call — it's your work partner, not your replacement"
                  }
                ],
                "sourceId": "body-8/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-8"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-002.png",
        "alt": "",
        "sourceId": "body-9",
        "width": 552,
        "height": 315
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-003.png",
        "alt": "",
        "sourceId": "body-10",
        "width": 552,
        "height": 317
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AOS Work is where all of this happens. It's not a web page with a chat box attached to the side. It's a complete workspace built from the ground up around one idea: "
          },
          {
            "text": "AI doing the work for you.",
            "bold": true
          }
        ],
        "sourceId": "body-11"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "From \"Answering Questions\" to \"Delivering Work\"",
            "bold": true
          }
        ],
        "sourceId": "body-12",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Unlike traditional AI assistants, AOS Work doesn't just chat, answer questions, or give advice. You describe what you need in natural language — one sentence — and the Agent understands the goal, plans the steps, and executes complex multi-step tasks. Through Library file references, Base access, and Connector authorization (external tool integrations, see 1.6), the Agent can read and process your files and data — automatically generating documents, analyzing spreadsheets, building slide decks, translating across languages, surfacing insights, and pulling information across systems."
          }
        ],
        "sourceId": "body-13"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "For even more complex tasks, the Agent breaks down the steps, uses Skills and system tools in parallel, and cuts the cost of switching between different tools, files, and tasks."
          }
        ],
        "sourceId": "body-14"
      },
      {
        "type": "table",
        "rows": [
          [
            "State the goal → Read Library/Table data → Break down tasks & pick tools → Execute & produce output → Human review → Archive or publish"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "State the goal → Read Library/Table data → Break down tasks & pick tools → Execute & produce output → Human review → Archive or publish"
                  }
                ],
                "sourceId": "body-15/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-15",
        "diagram": "process",
        "stages": [
          "State the goal",
          "Read Library/Table data",
          "Break down tasks & pick tools",
          "Execute & produce output",
          "Human review",
          "Archive or publish"
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "For example: tell AOS Work \"analyze the sales data in my Base and build a presentation deck.\" The Agent queries the data, understands the content, completes the analysis and summary, and generates a finished presentation you can view and edit. Your data, analysis, and final output all stay in one place — no exporting files between tools. You can even email the finished report directly from this interface."
          }
        ],
        "sourceId": "body-16"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-004.png",
        "alt": "",
        "sourceId": "body-17",
        "width": 552,
        "height": 315
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AOS Work is built for "
          },
          {
            "text": "complete work tasks",
            "bold": true
          },
          {
            "text": ". Its core capability comes down to three things: it understands natural language, it can plan and reason on its own, and it actually delivers completed work."
          }
        ],
        "sourceId": "body-18"
      }
    ]
  },
  {
    "id": "1-2-workbench-main-interface-workspace",
    "title": "1.2 AOS Work Main Interface & Workspace",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 2,
    "prev": "1-1-meet-workbench-it-s-not-just-another-chat-box",
    "next": "1-3-your-first-task-in-seconds",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The AOS Work interface has three zones: the left sidebar for task management and navigation, the center conversation area for assigning and tracking tasks, and the right result panel for viewing files, changes, previews, and final output."
          }
        ],
        "sourceId": "body-20"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-005.png",
        "alt": "",
        "sourceId": "body-21",
        "width": 552,
        "height": 297
      },
      {
        "type": "table",
        "rows": [
          [
            "Zone",
            "Primary Use",
            "Check This When Using"
          ],
          [
            "Sidebar",
            "Create, search, switch, and manage tasks; access Library, Base, Explore, Settings",
            "Are you in the right task\n"
          ],
          [
            "Conversation area",
            "Describe what you need, add context, confirm goals and constraints",
            "Are goals and constraints complete\n"
          ],
          [
            "Result panel",
            "Review output, all files, changes, and previews",
            "Do file names, paths, and changes match expectations"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Zone"
                  }
                ],
                "sourceId": "body-22/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Primary Use"
                  }
                ],
                "sourceId": "body-22/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Check This When Using"
                  }
                ],
                "sourceId": "body-22/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sidebar"
                  }
                ],
                "sourceId": "body-22/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Create, search, switch, and manage tasks; access Library, Base, Explore, Settings"
                  }
                ],
                "sourceId": "body-22/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Are you in the right task"
                  }
                ],
                "sourceId": "body-22/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Conversation area"
                  }
                ],
                "sourceId": "body-22/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Describe what you need, add context, confirm goals and constraints"
                  }
                ],
                "sourceId": "body-22/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Are goals and constraints complete"
                  }
                ],
                "sourceId": "body-22/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Result panel"
                  }
                ],
                "sourceId": "body-22/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Review output, all files, changes, and previews"
                  }
                ],
                "sourceId": "body-22/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Do file names, paths, and changes match expectations"
                  }
                ],
                "sourceId": "body-22/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-22"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The difference between \"Task\" and \"Workspace\" (a persistent workspace for related tasks, see 4.1) in the sidebar comes down to whether you've set a \"Workspace\" directory."
          }
        ],
        "sourceId": "body-23"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A \"Workspace\" is a directory AOS Work uses to organize tasks. Each task gets its own directory space where it can operate. Without a workspace directory, tasks run in the default installation directory, and conversations are saved under the \"Tasks\" folder."
          }
        ],
        "sourceId": "body-24"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-006.png",
        "alt": "",
        "sourceId": "body-25",
        "width": 552,
        "height": 296
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can also open the result panel from the left menu by clicking \"Task Outputs\" — it shows all outputs produced across your conversation tasks."
          }
        ],
        "sourceId": "body-26"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-007.png",
        "alt": "",
        "sourceId": "body-27",
        "width": 552,
        "height": 290
      }
    ]
  },
  {
    "id": "1-3-your-first-task-in-seconds",
    "title": "1.3 Your First Task in Seconds",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 3,
    "prev": "1-2-workbench-main-interface-workspace",
    "next": "1-4-drop-your-files-in",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Click "
          },
          {
            "text": "New Task",
            "bold": true
          },
          {
            "text": " in the left sidebar. That's it — no setup, no configuration. Just type what you need. Like talking to a coworker:"
          }
        ],
        "sourceId": "body-29"
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Summarize these meeting notes and pull out the action items.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Summarize these meeting notes and pull out the action items.\""
                  }
                ],
                "sourceId": "body-30/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-30"
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Translate this product description into English, French, and German.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Translate this product description into English, French, and German.\""
                  }
                ],
                "sourceId": "body-32/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-32"
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Look at this sell-in sell-out spreadsheet and tell me which SKUs sold best and slowest in each country.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Look at this sell-in sell-out spreadsheet and tell me which SKUs sold best and slowest in each country.\""
                  }
                ],
                "sourceId": "body-34/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-34"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-008.png",
        "alt": "",
        "sourceId": "body-35",
        "width": 552,
        "height": 297
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can also use the "
          },
          {
            "text": "+",
            "bold": true
          },
          {
            "text": " menu next to the input box to add files, specify a Skill (reusable task template, see 1.6), or assign a Work (configured workflow, see 4.5). The Agent automatically recognizes everything you add and uses it as context for your task."
          }
        ],
        "sourceId": "body-36"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Model selection is optional — the default model handles most daily tasks, so you can skip this step."
          }
        ],
        "sourceId": "body-37"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Simply put: You talk, AOS Work works. No tab switching. No tool setup first."
          }
        ],
        "sourceId": "body-38"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Creating a Task in 4 Steps",
            "bold": true
          }
        ],
        "sourceId": "body-39"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Write your task description",
            "bold": true
          },
          {
            "text": " — like talking to a coworker. State the goal, input materials, constraints, and expected output."
          }
        ],
        "sourceId": "body-40",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-009.png",
        "alt": "",
        "sourceId": "body-41",
        "width": 552,
        "height": 297
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Add attachments (optional)",
            "bold": true
          },
          {
            "text": " — upload files from the "
          },
          {
            "text": "+",
            "bold": true
          },
          {
            "text": " menu, or reference files from Library."
          }
        ],
        "sourceId": "body-42",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Send",
            "bold": true
          },
          {
            "text": " — watch the Agent's plan, tool calls, and file changes in real time."
          }
        ],
        "sourceId": "body-43",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Review",
            "bold": true
          },
          {
            "text": " — preview the output in the result panel, confirm it's correct, then use it."
          }
        ],
        "sourceId": "body-44",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 Safety tip: For your first time, work in a test folder in Library — a folder with copies of your files, not the originals. Watch what the Agent can access. Double-check your task description before working with real business data. "
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "💡 "
                  },
                  {
                    "text": "Safety tip:",
                    "bold": true
                  },
                  {
                    "text": " For your first time, work in a test folder in Library — a folder with copies of your files, not the originals. Watch what the Agent can access. Double-check your task description before working with real business data. "
                  }
                ],
                "sourceId": "body-45/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-45"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How to Write a Good Task Description",
            "bold": true
          }
        ],
        "sourceId": "body-46"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The quality of your task description directly determines the quality of the Agent's output. A good description answers six questions:"
          }
        ],
        "sourceId": "body-47"
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "What to answer"
          ],
          [
            "Goal",
            "What problem are you solving"
          ],
          [
            "Input",
            "Which files, directories, or links to use"
          ],
          [
            "Action",
            "Analyze, organize, convert, or generate"
          ],
          [
            "Constraints",
            "What not to change, which standards to follow"
          ],
          [
            "Output",
            "What to deliver, where to put it"
          ],
          [
            "Acceptance",
            "What counts as done"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Element"
                  }
                ],
                "sourceId": "body-48/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What to answer"
                  }
                ],
                "sourceId": "body-48/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Goal"
                  }
                ],
                "sourceId": "body-48/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What problem are you solving"
                  }
                ],
                "sourceId": "body-48/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Input"
                  }
                ],
                "sourceId": "body-48/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Which files, directories, or links to use"
                  }
                ],
                "sourceId": "body-48/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Action"
                  }
                ],
                "sourceId": "body-48/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Analyze, organize, convert, or generate"
                  }
                ],
                "sourceId": "body-48/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Constraints"
                  }
                ],
                "sourceId": "body-48/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What not to change, which standards to follow"
                  }
                ],
                "sourceId": "body-48/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Output"
                  }
                ],
                "sourceId": "body-48/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What to deliver, where to put it"
                  }
                ],
                "sourceId": "body-48/r5/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Acceptance"
                  }
                ],
                "sourceId": "body-48/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What counts as done"
                  }
                ],
                "sourceId": "body-48/r6/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-48"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Good example:",
            "bold": true
          }
        ],
        "sourceId": "body-49"
      },
      {
        "type": "table",
        "rows": [
          [
            "Analyze this sell-in and sell-out data, calculate the sell-through rate per SKU in Italy, sort by sell-through ascending, and output an Excel file with five columns: SKU ID, Product Name, Units Sold, Stock on Hand, Sell-Through Rate. Don't modify the original data."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Analyze this sell-in and sell-out data, calculate the sell-through rate per SKU in Italy, sort by sell-through ascending, and output an Excel file with five columns: SKU ID, Product Name, Units Sold, Stock on Hand, Sell-Through Rate. Don't modify the original data."
                  }
                ],
                "sourceId": "body-50/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-50"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Bad example:",
            "bold": true
          }
        ],
        "sourceId": "body-51"
      },
      {
        "type": "table",
        "rows": [
          [
            "Analyze this spreadsheet."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Analyze this spreadsheet."
                  }
                ],
                "sourceId": "body-52/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-52"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The difference: a good description tells the Agent what to do, how to do it, what format to use, and what counts as done. A vague description makes the Agent guess — and the output may not match what you had in mind."
          }
        ],
        "sourceId": "body-53"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter Tasks",
            "bold": true
          }
        ],
        "sourceId": "body-54"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Here are three beginner-friendly tasks, from easy to hard, to help you get started:"
          }
        ],
        "sourceId": "body-55"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-010.png",
        "alt": "",
        "sourceId": "body-56",
        "width": 552,
        "height": 298
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter A: Organize Files",
            "bold": true
          }
        ],
        "sourceId": "body-57"
      },
      {
        "type": "table",
        "rows": [
          [
            "Goal: Organize files in a Library folder so they're easy to find by type.\nInput: The \"Test Files\" folder in Library.\nAction: Identify file types, propose a categorization and rename scheme.\nConstraints: Don't delete or overwrite original files; keep duplicates with a sequence number.\nOutput: First generate a file inventory table and a categorization plan.\nAcceptance: File count matches the actual folder, all actions are traceable.\nDon't move files until I confirm the plan."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Goal: Organize files in a Library folder so they're easy to find by type."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Input: The \"Test Files\" folder in Library."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Action: Identify file types, propose a categorization and rename scheme."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Constraints: Don't delete or overwrite original files; keep duplicates with a sequence number."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output: First generate a file inventory table and a categorization plan."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Acceptance: File count matches the actual folder, all actions are traceable."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Don't move files until I confirm the plan."
                  }
                ],
                "sourceId": "body-58/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-58"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter B: Generate Meeting Minutes ",
            "bold": true
          }
        ],
        "sourceId": "body-59"
      },
      {
        "type": "table",
        "rows": [
          [
            "Here are my typed notes from today's meeting — turn them into structured meeting minutes.\nMust include: conclusions, action items, owners, deadlines, and open questions.\nIf an owner or deadline isn't clear from the notes, write \"TBD\" — don't fill in guesses.\nOutput: a meeting minutes document and an action-item table.\nAcceptance: every conclusion is traceable to the notes; no action item is missing owner or status."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Here are my typed notes from today's meeting — turn them into structured meeting minutes."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Must include: conclusions, action items, owners, deadlines, and open questions."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "If an owner or deadline isn't clear from the notes, write \"TBD\" — don't fill in guesses."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output: a meeting minutes document and an action-item table."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Acceptance: every conclusion is traceable to the notes; no action item is missing owner or status."
                  }
                ],
                "sourceId": "body-60/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-60"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter C: Word to PPT",
            "bold": true
          }
        ],
        "sourceId": "body-61"
      },
      {
        "type": "table",
        "rows": [
          [
            "Convert this project report Word doc into an internal presentation (10 slides max).\nAudience: department heads; presentation time: 8 minutes.\nKeep all facts and numbers from the original — don't add unverified data.\nStructure: background, current state, problems, solutions, plan, decisions needed.\nOutput: a PPT file plus a slide-by-slide content summary.\nAcceptance: each slide has one core idea, numbers match the original, body text is readable in projection mode."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Convert this project report Word doc into an internal presentation (10 slides max)."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Audience: department heads; presentation time: 8 minutes."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Keep all facts and numbers from the original — don't add unverified data."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Structure: background, current state, problems, solutions, plan, decisions needed."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output: a PPT file plus a slide-by-slide content summary."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Acceptance: each slide has one core idea, numbers match the original, body text is readable in projection mode."
                  }
                ],
                "sourceId": "body-62/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-62"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-011.png",
        "alt": "",
        "sourceId": "body-63",
        "width": 552,
        "height": 316
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 Pro tip: The best way to learn AOS Work is to use it. Pick a real task you're working on — a report to write, a spreadsheet to analyze, a document to summarize — and learn by doing. It's much more effective than following a generic tutorial."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "💡 "
                  },
                  {
                    "text": "Pro tip:",
                    "bold": true
                  },
                  {
                    "text": " The best way to learn AOS Work is to use it. Pick a real task you're working on — a report to write, a spreadsheet to analyze, a document to summarize — and learn by doing. It's much more effective than following a generic tutorial."
                  }
                ],
                "sourceId": "body-64/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-64"
      }
    ]
  },
  {
    "id": "1-4-drop-your-files-in",
    "title": "1.4 Library — Your Single Source of Truth for Work",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 4,
    "prev": "1-3-your-first-task-in-seconds",
    "next": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Library is a built-in app in AOS Work that manages all your files — PDFs, images, videos, all kinds of Office documents, and more."
          }
        ],
        "sourceId": "body-66"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You probably have many files that live in different places — your laptop, SharePoint or other systems — places the Agent cannot access. Once uploaded to Library, they become readable and accessible to the Agent, turning into important work context that the Agent can read, reference, and work on. "
          }
        ],
        "sourceId": "body-67"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Library needs a one-time authorization in Explore. "
          }
        ],
        "sourceId": "body-68"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Here's how:"
          }
        ],
        "sourceId": "body-69"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open Explore → Apps",
            "bold": true
          },
          {
            "text": " — Click Explore in the left sidebar, then select the Apps tab. You will see both Library and Base listed."
          }
        ],
        "sourceId": "body-70",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-012.png",
        "alt": "",
        "sourceId": "body-71",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Enable Library and click Authorize",
            "bold": true
          },
          {
            "text": " — Click on the Library app card to open its detail page. Toggle the Enabled switch on, then click the Authorize button."
          }
        ],
        "sourceId": "body-72",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-013.png",
        "alt": "",
        "sourceId": "body-73",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Complete OAuth Authorization",
            "bold": true
          },
          {
            "text": " — A pop-up window will appear asking you to log in to your BasilAOS account and grant permissions. Click \"Allow\" or \"Authorize\" to complete the process."
          }
        ],
        "sourceId": "body-74",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-014.png",
        "alt": "",
        "sourceId": "body-75",
        "width": 552,
        "height": 290
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-015.png",
        "alt": "",
        "sourceId": "body-76",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Verify Connection",
            "bold": true
          },
          {
            "text": " — Once authorized, Library will show \"Enabled\" status."
          }
        ],
        "sourceId": "body-77",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can now access Library from the left sidebar anytime — one click away. "
          }
        ],
        "sourceId": "body-78"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-016.png",
        "alt": "",
        "sourceId": "body-79",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What's in Library: "
          }
        ],
        "sourceId": "body-81"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "My Space — your personal file storage"
          }
        ],
        "sourceId": "body-82",
        "marker": "•",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-017.png",
        "alt": "",
        "sourceId": "body-83",
        "width": 552,
        "height": 297
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Team Space — shared team folders"
          }
        ],
        "sourceId": "body-84",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Recent / Shared with Me / Favorites — quick access to what you need"
          }
        ],
        "sourceId": "body-85",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Search — find any file without digging through folders"
          }
        ],
        "sourceId": "body-86",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How to Use Library "
          }
        ],
        "sourceId": "body-88"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upload Files",
            "bold": true
          },
          {
            "text": " "
          }
        ],
        "sourceId": "body-89"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Click the Upload button in Library. Choose to upload to My Space (personal) or Team Space (shared). "
          }
        ],
        "sourceId": "body-90"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can upload files or entire folders in batch. "
          }
        ],
        "sourceId": "body-91"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-018.png",
        "alt": "",
        "sourceId": "body-92",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Find Files",
            "bold": true
          },
          {
            "text": " "
          }
        ],
        "sourceId": "body-93"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Use the search box in Library to search by name, tag, or content. "
          }
        ],
        "sourceId": "body-94"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-019.png",
        "alt": "",
        "sourceId": "body-95",
        "width": 552,
        "height": 290
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-020.png",
        "alt": "",
        "sourceId": "body-96",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Or click + in the task input box, select the Library app, and simply type the file name or page content keywords, then the Agent will search for you."
          }
        ],
        "sourceId": "body-97"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-021.png",
        "alt": "",
        "sourceId": "body-98",
        "width": 552,
        "height": 290
      }
    ]
  },
  {
    "id": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
    "title": "1.5 Base — Structured Data Your Agent Can Work With",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 5,
    "prev": "1-4-drop-your-files-in",
    "next": "1-6-install-your-first-skill",
    "summary": "",
    "blocks": [
      {
        "type": "image",
        "src": "/playbook-images/release-image-022.png",
        "alt": "",
        "sourceId": "body-100",
        "width": 552,
        "height": 316
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Base is where you manage structured data — tables, records, and fields that the Agent can query and update."
          }
        ],
        "sourceId": "body-101"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "A New Way to Organize Work",
            "bold": true
          }
        ],
        "sourceId": "body-102",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Base is designed for business workflows, not just calculations. It brings together data management, visualization, and automation in one place:"
          }
        ],
        "sourceId": "body-103"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Multiple views, one data source",
            "bold": true
          },
          {
            "text": " — Switch between Table, Kanban, Gallery, Gantt, and Calendar views instantly. The same data looks different depending on what you need to see."
          },
          {
            "text": " "
          }
        ],
        "sourceId": "body-104",
        "marker": "•",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-023.png",
        "alt": "",
        "sourceId": "body-105",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Automation without code",
            "bold": true
          },
          {
            "text": " — Set up rules like \"When status changes to 'Done', notify the team\" — no programming required."
          }
        ],
        "sourceId": "body-106",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Real-time collaboration",
            "bold": true
          },
          {
            "text": " — Multiple people work on the same data simultaneously, with role-based permissions (Owner/Admin/Reader)."
          }
        ],
        "sourceId": "body-107",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Real Magic: Tables Meet Conversation",
            "bold": true
          }
        ],
        "sourceId": "body-108",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Base becomes even more powerful when connected to the Agent. Instead of manually checking data, just ask:"
          }
        ],
        "sourceId": "body-109"
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Check the product table and list everything with stock below 200.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Check the product table and list everything with stock below 200.\""
                  }
                ],
                "sourceId": "body-110/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-110"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent queries the table, returns results, and embeds a live preview in the conversation. You can even update records directly from the chat."
          }
        ],
        "sourceId": "body-111"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Like Library, Base is embedded from the original BasilAOS system. If you haven't authorized Base yet, follow the same steps in Explore → Apps: enable Base, click Authorize, and complete the OAuth login."
          }
        ],
        "sourceId": "body-112"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Permission Management",
            "bold": true
          }
        ],
        "sourceId": "body-113",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-024.png",
        "alt": "",
        "sourceId": "body-114",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Base comes with built-in permission management, so you can control who accesses your data and what they can do with it."
          }
        ],
        "sourceId": "body-115"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Base supports three system roles:"
          }
        ],
        "sourceId": "body-116"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Owner",
            "bold": true
          },
          {
            "text": " — full control over the Base, including permission settings"
          }
        ],
        "sourceId": "body-117",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Administrator",
            "bold": true
          },
          {
            "text": " — can read, edit, and manage data within the Base"
          }
        ],
        "sourceId": "body-118",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Reader",
            "bold": true
          },
          {
            "text": " — read-only access to view data"
          }
        ],
        "sourceId": "body-119",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Custom roles are coming soon, giving you even more flexibility to define exactly what each team member can do."
          }
        ],
        "sourceId": "body-120"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With permission management, you can share your Base with team members for reading or collaborative editing — keeping your data secure while enabling teamwork."
          }
        ],
        "sourceId": "body-121"
      }
    ]
  },
  {
    "id": "1-6-install-your-first-skill",
    "title": "1.6 Install Your First Skill",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 6,
    "prev": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
    "next": "1-7-connect-your-first-service",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Library and Base give the Agent context. Skills give it capabilities. This is where AOS Work becomes powerful."
          }
        ],
        "sourceId": "body-123"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What is a Skill?",
            "bold": true
          }
        ],
        "sourceId": "body-124"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Think of a Skill like an app on your phone."
          }
        ],
        "sourceId": "body-125"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Your phone has basic capabilities — calling, texting — but to order food, watch videos, or book a ride, you need to install apps."
          }
        ],
        "sourceId": "body-126"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent works the same way. It comes with built-in capabilities — reading files, writing text, querying tables. But to write product descriptions in your brand voice, or monitor competitor listings daily, it needs a Skill."
          }
        ],
        "sourceId": "body-127"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Skill is a reusable playbook for the Agent — it tells the AI how to handle a specific type of task, which tools to use, and what format to deliver. Think of it as a standard operating procedure (SOP) that tells your AI coworker how to complete a specific task from start to finish. Technically, a Skill is a folder containing instructions (SKILL.md) and supporting materials. We'll get into the technical details later. (See Chapter 4 for more details.)"
          }
        ],
        "sourceId": "body-128"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Installing a Skill from Explore",
            "bold": true
          }
        ],
        "sourceId": "body-129"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open "
          },
          {
            "text": "Explore",
            "bold": true
          },
          {
            "text": " in the left sidebar — it's like an app store, but instead of apps, it installs AI capabilities."
          }
        ],
        "sourceId": "body-130"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Installing a Skill takes three steps:"
          }
        ],
        "sourceId": "body-131"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-025.png",
        "alt": "",
        "sourceId": "body-132",
        "width": 552,
        "height": 298
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-026.png",
        "alt": "",
        "sourceId": "body-133",
        "width": 552,
        "height": 298
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Browse",
            "bold": true
          },
          {
            "text": " — open Explore and see what's available. Each Skill has a description of what it does."
          }
        ],
        "sourceId": "body-134",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Install",
            "bold": true
          },
          {
            "text": " — click Add, confirm, done."
          }
        ],
        "sourceId": "body-135",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Use",
            "bold": true
          },
          {
            "text": " — the Skill is ready. Some Skills load automatically when the Agent detects relevant keywords. You can also type / to manually select a Skill if it doesn't load automatically."
          }
        ],
        "sourceId": "body-136",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you find a Skill is not commonly used after loading, you can uninstall it (just like uninstalling a phone app)."
          }
        ],
        "sourceId": "body-137"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill vs. Prompt — What's the Difference",
            "bold": true
          }
        ],
        "sourceId": "body-138"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You might be wondering: why do I need Skills? What's the difference between a Skill and a Prompt? Let's take a look."
          }
        ],
        "sourceId": "body-139"
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Prompt",
            "Skill"
          ],
          [
            "Core purpose",
            "Describe the current task",
            "Define how to do a class of tasks"
          ],
          [
            "Lifespan",
            "Usually one-off",
            "Long-term reusable"
          ],
          [
            "Trigger",
            "User types it in",
            "Agent auto-selects, or user explicitly invokes"
          ],
          [
            "Format",
            "Mostly text",
            "Folder of Markdown files — instructions, scripts, references, templates"
          ],
          [
            "Context usage",
            "Usually goes straight into context",
            "Loaded on demand, doesn't take space when not in use"
          ],
          [
            "Reusability",
            "Copy-paste every time",
            "Natively reusable"
          ],
          [
            "Sharing",
            "Send text",
            "Full capability package, shareable with the team"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Dimension"
                  }
                ],
                "sourceId": "body-140/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Prompt"
                  }
                ],
                "sourceId": "body-140/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Skill"
                  }
                ],
                "sourceId": "body-140/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Core purpose"
                  }
                ],
                "sourceId": "body-140/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Describe the current task"
                  }
                ],
                "sourceId": "body-140/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Define how to do a class of tasks"
                  }
                ],
                "sourceId": "body-140/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Lifespan"
                  }
                ],
                "sourceId": "body-140/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Usually one-off"
                  }
                ],
                "sourceId": "body-140/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Long-term reusable"
                  }
                ],
                "sourceId": "body-140/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Trigger"
                  }
                ],
                "sourceId": "body-140/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "User types it in"
                  }
                ],
                "sourceId": "body-140/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Agent auto-selects, or user explicitly invokes"
                  }
                ],
                "sourceId": "body-140/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Format"
                  }
                ],
                "sourceId": "body-140/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Mostly text"
                  }
                ],
                "sourceId": "body-140/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Folder of Markdown files — instructions, scripts, references, templates"
                  }
                ],
                "sourceId": "body-140/r4/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Context usage"
                  }
                ],
                "sourceId": "body-140/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Usually goes straight into context"
                  }
                ],
                "sourceId": "body-140/r5/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Loaded on demand, doesn't take space when not in use"
                  }
                ],
                "sourceId": "body-140/r5/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Reusability"
                  }
                ],
                "sourceId": "body-140/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Copy-paste every time"
                  }
                ],
                "sourceId": "body-140/r6/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Natively reusable"
                  }
                ],
                "sourceId": "body-140/r6/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sharing"
                  }
                ],
                "sourceId": "body-140/r7/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Send text"
                  }
                ],
                "sourceId": "body-140/r7/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Full capability package, shareable with the team"
                  }
                ],
                "sourceId": "body-140/r7/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-140"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Simplest version:"
          }
        ],
        "sourceId": "body-141"
      },
      {
        "type": "table",
        "rows": [
          [
            "Prompt = task\nSkill = method"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Prompt = task"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Skill = method"
                  }
                ],
                "sourceId": "body-142/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-142"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example: Every time you ask the Agent to write a product description, you repeat the same thing — \"use our brand voice, include fabric composition, add care instructions, format for SEO, three languages.\" Make that a Skill, and next time you just say \"write product descriptions for these SKUs.\" The brand guide, format, and language requirements are all handled automatically."
          },
          {
            "text": "\n"
          },
          {
            "text": "In short, a Skill captures your expert knowledge and hands it to the Agent."
          }
        ],
        "sourceId": "body-143"
      }
    ]
  },
  {
    "id": "1-7-connect-your-first-service",
    "title": "1.7 Connect Your First Service",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 7,
    "prev": "1-6-install-your-first-skill",
    "next": "1-8-getting-more-like-your-actual-personal-assistant",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills tell the Agent "
          },
          {
            "text": "how to do things",
            "bold": true
          },
          {
            "text": ". Connectors give it "
          },
          {
            "text": "a channel to the outside world",
            "bold": true
          },
          {
            "text": "."
          }
        ],
        "sourceId": "body-145"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What is a Connector?",
            "bold": true
          }
        ],
        "sourceId": "body-146"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If Skills are apps for the Agent, Connectors are the data cables to external services."
          }
        ],
        "sourceId": "body-147"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you want the Agent to:"
          }
        ],
        "sourceId": "body-148"
      },
      {
        "type": "table",
        "rows": [
          [
            "Read supplier emails from Outlook / Gmail"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Read supplier emails from Outlook / Gmail"
                  }
                ],
                "sourceId": "body-149/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-149"
      },
      {
        "type": "table",
        "rows": [
          [
            "Create meetings in Google Calendar"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Create meetings in Google Calendar"
                  }
                ],
                "sourceId": "body-151/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-151"
      },
      {
        "type": "table",
        "rows": [
          [
            "Call your company's internal API"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Call your company's internal API"
                  }
                ],
                "sourceId": "body-153/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-153"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Those external services need a Connector."
          }
        ],
        "sourceId": "body-154"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Connectors let the Agent talk to external services — some are built on MCP (Model Context Protocol), a standard interface for AI tools; others connect directly through third-party APIs. The Explore catalog already has pre-built connectors for popular services, with more being added regularly. No coding required — just install, authorize, and start using."
          }
        ],
        "sourceId": "body-155"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Installing and Authorizing a Connector",
            "bold": true
          }
        ],
        "sourceId": "body-156"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Here's how it works:"
          }
        ],
        "sourceId": "body-157"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Find",
            "bold": true
          },
          {
            "text": " — browse Connectors in Explore. The Connector catalog is managed by your IT admin — Connectors need IT approval before they're available, so if one you need isn't there, request it through IT"
          }
        ],
        "sourceId": "body-158",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Install",
            "bold": true
          },
          {
            "text": " — click to add it to the Agent"
          }
        ],
        "sourceId": "body-159",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Authorize",
            "bold": true
          },
          {
            "text": " — authorize via OAuth to your Outlook or Gmail account (AOS Work never sees your password — you grant access through the provider's secure login page)"
          }
        ],
        "sourceId": "body-160",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Use",
            "bold": true
          },
          {
            "text": " — there are two ways to call a Connector:"
          }
        ],
        "sourceId": "body-161",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Natural language:",
            "bold": true
          },
          {
            "text": " just describe what you need, e.g. \"check my inbox for supplier emails\". The Agent automatically calls the connected Connector."
          }
        ],
        "sourceId": "body-162",
        "marker": "￮",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Manual selection:",
            "bold": true
          },
          {
            "text": " click the \"+\" button in the input box, then select the Connector you want to use."
          }
        ],
        "sourceId": "body-163",
        "marker": "￮",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-027.png",
        "alt": "",
        "sourceId": "body-164",
        "width": 552,
        "height": 316
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-028.png",
        "alt": "",
        "sourceId": "body-165",
        "width": 552,
        "height": 298
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-029.png",
        "alt": "",
        "sourceId": "body-166",
        "width": 552,
        "height": 316
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Currently, we offer two types of Connectors: AI model services (like image generation with Image 2.0 or video generation with Happy House) and external applications (like Outlook, Apify). For specific use cases, refer to Chapters 2 and 3."
          }
        ],
        "sourceId": "body-167"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A few key things:"
          }
        ],
        "sourceId": "body-168"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Each user gets "
          },
          {
            "text": "one Connection",
            "bold": true
          },
          {
            "text": " per Connector. Switching accounts? Re-authorize — it replaces the old one"
          }
        ],
        "sourceId": "body-169",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Disconnect anytime — AOS Work cleanly revokes access"
          }
        ],
        "sourceId": "body-170",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Connector vs. Skill",
            "bold": true
          }
        ],
        "sourceId": "body-171"
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Skill",
            "Connector"
          ],
          [
            "Core purpose",
            "Tells the Agent how to do a type of task",
            "Gives the Agent a channel to external services"
          ],
          [
            "Analogy",
            "App (provides a capability)",
            "Cable (connects to the outside)"
          ],
          [
            "Contains",
            "Instructions, scripts, templates",
            "API credentials, endpoint definitions"
          ],
          [
            "Typical examples",
            "Product Description Generator, Competitive Analysis Skill, Listing Optimization Skill\n",
            "Model type: OpenAI Image Generation, Nano Banana Image Generator, Gemini; Service type: Outlook, Gmail, Google Calendar, Slack, Apify, Tavily Search"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Dimension"
                  }
                ],
                "sourceId": "body-172/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Skill"
                  }
                ],
                "sourceId": "body-172/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Connector"
                  }
                ],
                "sourceId": "body-172/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Core purpose"
                  }
                ],
                "sourceId": "body-172/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tells the Agent how to do a type of task"
                  }
                ],
                "sourceId": "body-172/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Gives the Agent a channel to external services"
                  }
                ],
                "sourceId": "body-172/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Analogy"
                  }
                ],
                "sourceId": "body-172/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "App (provides a capability)"
                  }
                ],
                "sourceId": "body-172/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Cable (connects to the outside)"
                  }
                ],
                "sourceId": "body-172/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Contains"
                  }
                ],
                "sourceId": "body-172/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Instructions, scripts, templates"
                  }
                ],
                "sourceId": "body-172/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "API credentials, endpoint definitions"
                  }
                ],
                "sourceId": "body-172/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Typical examples"
                  }
                ],
                "sourceId": "body-172/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Product Description Generator, Competitive Analysis Skill, Listing Optimization Skill"
                  }
                ],
                "sourceId": "body-172/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Model type: OpenAI Image Generation, Nano Banana Image Generator, Gemini; Service type: Outlook, Gmail, Google Calendar, Slack, Apify, Tavily Search"
                  }
                ],
                "sourceId": "body-172/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-172"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-030.png",
        "alt": "",
        "sourceId": "body-173",
        "width": 552,
        "height": 273
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A typical combo: create an email assistant Skill that needs an Outlook or Gmail Connector. The Skill tells the Agent \"how to process emails, what fields to extract, which table to write to.\" The Connector provides \"read inbox, send email.\" Together, they complete the workflow from email to structured data."
          }
        ],
        "sourceId": "body-174"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Connectors are what turn AOS Work from a \"smart assistant\" into an integration platform. We'll cover specific setups and real-world examples in a dedicated chapter."
          }
        ],
        "sourceId": "body-175"
      }
    ]
  },
  {
    "id": "1-8-getting-more-like-your-actual-personal-assistant",
    "title": "1.8 Getting More Like Your Actual Personal Assistant",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 8,
    "prev": "1-7-connect-your-first-service",
    "next": "1-9-what-basil-can-and-can-t-do",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Now that you've connected external tools, let's see how AOS Work learns about you — the other key to making it work better over time."
          }
        ],
        "sourceId": "body-177"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The more you use AOS Work, the more it knows you — thanks to "
          },
          {
            "text": "Memory",
            "bold": true
          },
          {
            "text": "."
          }
        ],
        "sourceId": "body-178"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Memory stores your "
          },
          {
            "text": "User Profile",
            "bold": true
          },
          {
            "text": " — your role, preferences, work habits, all the \"always do it this way\" instructions you've given AOS Work. It's not chat history. It's a living, structured, growing personal profile."
          }
        ],
        "sourceId": "body-179"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How it updates:",
            "bold": true
          }
        ],
        "sourceId": "body-180"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Automatic:",
            "bold": true
          },
          {
            "text": " Every day, AOS Work aggregates all your tasks and updates the profile automatically"
          }
        ],
        "sourceId": "body-181",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Manual:",
            "bold": true
          },
          {
            "text": " Type a sentence at the bottom of the Memory page — \"remember to use formal tone for all client-facing content\" or \"forget the old brand guide\" — AOS Work processes it and updates immediately"
          }
        ],
        "sourceId": "body-182",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Transparent:",
            "bold": true
          },
          {
            "text": " You can view the full profile anytime. It's read-only — you can't edit it directly, but you can always ask AOS Work to change or delete something"
          }
        ],
        "sourceId": "body-183",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Versioned:",
            "bold": true
          },
          {
            "text": " Every change creates an immutable new version. Use the calendar heatmap and side-by-side diff view to see how your profile evolves over time"
          }
        ],
        "sourceId": "body-184",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Memory Follows You",
            "bold": true
          }
        ],
        "sourceId": "body-185",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-031.png",
        "alt": "",
        "sourceId": "body-186",
        "width": 552,
        "height": 298
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Key point: Memory is tied to your user account, not to a specific conversation or project."
          }
        ],
        "sourceId": "body-187"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What this means:"
          }
        ],
        "sourceId": "body-188"
      },
      {
        "type": "table",
        "rows": [
          [
            "You might think",
            "What actually happens"
          ],
          [
            "Switch sessions, memory resets",
            "No — memory works across sessions"
          ],
          [
            "Switch projects, preferences reset",
            "No — memory works across projects"
          ],
          [
            "Each session has its own profile",
            "No — you have one profile"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "You might think"
                  }
                ],
                "sourceId": "body-189/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What actually happens"
                  }
                ],
                "sourceId": "body-189/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Switch sessions, memory resets"
                  }
                ],
                "sourceId": "body-189/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "No — memory works across sessions"
                  }
                ],
                "sourceId": "body-189/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Switch projects, preferences reset"
                  }
                ],
                "sourceId": "body-189/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "No — memory works across projects"
                  }
                ],
                "sourceId": "body-189/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Each session has its own profile"
                  }
                ],
                "sourceId": "body-189/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "No — you have one profile"
                  }
                ],
                "sourceId": "body-189/r3/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-189"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Specifically:"
          }
        ],
        "sourceId": "body-190"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Cross-conversation:",
            "bold": true
          },
          {
            "text": " You tell AOS Work in conversation A \"use formal tone for client content.\" In conversation B, it still knows. The system aggregates all your tasks daily (across all sessions and tasks) and updates the same profile. Work from different sessions is all included in the daily summary — there's no \"this preference only works in this session.\""
          }
        ],
        "sourceId": "body-191",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Cross-project:",
            "bold": true
          },
          {
            "text": " Projects (explained in Chapter 4) are what you see grouped in the sidebar, but memory doesn't split by project. Preferences formed in Workspace A apply in Workspace B. You always have one user profile, and the daily summary collects data across all workspaces and projects."
          }
        ],
        "sourceId": "body-192",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Manual updates work across all sessions and projects too:",
            "bold": true
          },
          {
            "text": " When you submit an update on the Memory page — \"remember to use Italian for all my reports\" — it doesn't belong to any session, task, or workspace. Once written, it applies to all subsequent sessions and projects."
          }
        ],
        "sourceId": "body-193",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In summary: Your preferences follow you across all sessions and projects."
          }
        ],
        "sourceId": "body-194"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Who Can See Your Profile",
            "bold": true
          }
        ],
        "sourceId": "body-195",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Your profile is "
          },
          {
            "text": "visible only to you",
            "bold": true
          },
          {
            "text": "."
          }
        ],
        "sourceId": "body-196"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tenant admins can't read your profile content through the product interface"
          }
        ],
        "sourceId": "body-197",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "System audit logs record update time, source type, result, and version number — not profile content"
          }
        ],
        "sourceId": "body-198",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AOS Work only stores what you explicitly provide or what can be objectively identified from your work behavior — no sensitive data, no passwords, no guessing"
          }
        ],
        "sourceId": "body-199",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The more you use it, the less you need to repeat yourself — your Agent learns your preferences and becomes a real assistant."
          }
        ],
        "sourceId": "body-200"
      }
    ]
  },
  {
    "id": "1-9-what-basil-can-and-can-t-do",
    "title": "1.9 AOS Work — What It Can and Can't Do",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet BasilAOS   — Your New Work Partner",
    "index": 9,
    "prev": "1-8-getting-more-like-your-actual-personal-assistant",
    "next": "scenario-1-email-management-structured-follow-ups",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Let's be honest. AOS Work is powerful, but it's not magic. Here's what you should know:"
          }
        ],
        "sourceId": "body-202"
      },
      {
        "type": "table",
        "rows": [
          [
            "AOS Work Can ✅",
            "AOS Work Can't ❌"
          ],
          [
            "Understand natural language tasks and execute them with tools",
            "Make creative or business decisions for you — it produces drafts and options, you make the call"
          ],
          [
            "Read Library files and use them to get work done",
            "Post to social media on your behalf — it writes the copy, you hit publish"
          ],
          [
            "Query Base and return structured results",
            "Replace professional judgment — compliance, legal, and technical specs still need a human"
          ],
          [
            "Install Skills to gain new capabilities",
            "Guarantee 100% accuracy — AI can hallucinate. Always review before using"
          ],
          [
            "Call external services through Connectors",
            "Monitor your behavior — Memory stores work preferences, not performance metrics"
          ],
          [
            "Remember your preferences and work habits",
            "Bind multiple accounts to the same Connector (not yet) — one connection per Connector per user"
          ],
          [
            "Produce downloadable files, formatted documents, and data tables",
            "Replace your data verification — AI-extracted data needs human review; the right people make the final approval"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "AOS Work Can ✅"
                  }
                ],
                "sourceId": "body-203/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "AOS Work Can't ❌"
                  }
                ],
                "sourceId": "body-203/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Understand natural language tasks and execute them with tools"
                  }
                ],
                "sourceId": "body-203/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Make creative or business decisions for you — it produces drafts and options, you make the call"
                  }
                ],
                "sourceId": "body-203/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Read Library files and use them to get work done"
                  }
                ],
                "sourceId": "body-203/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Post to social media on your behalf — it writes the copy, you hit publish"
                  }
                ],
                "sourceId": "body-203/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Query Base and return structured results"
                  }
                ],
                "sourceId": "body-203/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Replace professional judgment — compliance, legal, and technical specs still need a human"
                  }
                ],
                "sourceId": "body-203/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Install Skills to gain new capabilities"
                  }
                ],
                "sourceId": "body-203/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Guarantee 100% accuracy — AI can hallucinate. Always review before using"
                  }
                ],
                "sourceId": "body-203/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Call external services through Connectors"
                  }
                ],
                "sourceId": "body-203/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Monitor your behavior — Memory stores work preferences, not performance metrics"
                  }
                ],
                "sourceId": "body-203/r5/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Remember your preferences and work habits"
                  }
                ],
                "sourceId": "body-203/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Bind multiple accounts to the same Connector (not yet) — one connection per Connector per user"
                  }
                ],
                "sourceId": "body-203/r6/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Produce downloadable files, formatted documents, and data tables"
                  }
                ],
                "sourceId": "body-203/r7/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Replace your data verification — AI-extracted data needs human review; the right people make the final approval"
                  }
                ],
                "sourceId": "body-203/r7/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-203"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you're thinking this could save you a few hours a week — you're right. Next steps:"
          }
        ],
        "sourceId": "body-204"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "No AOS Work account yet?",
            "bold": true
          },
          {
            "text": " — Contact your IT admin or team lead"
          }
        ],
        "sourceId": "body-205",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Already have an account?",
            "bold": true
          },
          {
            "text": " — Open AOS Work, click New Task, try something."
          }
        ],
        "sourceId": "body-206",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Want the full walkthrough?",
            "bold": true
          },
          {
            "text": " — Keep reading. Next chapter takes you through your first real conversation step by step"
          }
        ],
        "sourceId": "body-207",
        "marker": "•",
        "level": 0
      }
    ]
  },
  {
    "id": "scenario-1-email-management-structured-follow-ups",
    "title": "2.1 Email Management & Structured Follow-ups",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 10,
    "prev": "1-9-what-basil-can-and-can-t-do",
    "next": "scenario-2-document-summarization-translation",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You get 10+ supplier emails a day, each with a Tech Pack PDF, product images, or a quote. Information is scattered across your inbox — untrackable, unqueryable. A general-purpose AI assistant can help you draft replies, but it isn't connected to your inbox or your tables — you'd still move everything in and out by hand. AOS Work turns key information from emails directly into structured records in a Base."
          }
        ],
        "sourceId": "body-210"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What you can do:",
            "bold": true
          }
        ],
        "sourceId": "body-211"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Read Outlook / Gmail inbox emails, extract key info (supplier/order/amount/delivery date) and write it to a Base"
          }
        ],
        "sourceId": "body-212",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Auto-extract email attachments (images/PDFs/Excel files), save them to Library with tags"
          }
        ],
        "sourceId": "body-213",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Draft multi-language email replies, confirm, then send — all from AOS Work"
          }
        ],
        "sourceId": "body-214",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ],
        "sourceId": "body-215"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In Explore, install the Outlook or Gmail Connector and authorize it (Connectors are enabled and approved by your IT admin — ask IT if it isn't listed)"
          }
        ],
        "sourceId": "body-216",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tell the Agent which emails to process, what fields to extract, and which table to write to"
          }
        ],
        "sourceId": "body-217",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent reads the emails, extracts the data, and creates structured records"
          }
        ],
        "sourceId": "body-218",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Attachments are saved to Library automatically, linked to the table records"
          }
        ],
        "sourceId": "body-219",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Need to reply? State your key points and language — the Agent drafts the email"
          }
        ],
        "sourceId": "body-220",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Confirm, send — all inside AOS Work"
          }
        ],
        "sourceId": "body-221",
        "marker": "6.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Tip: The Agent drafts the email for you — review the content carefully before sending. You stay in control of what goes out."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tip:",
                    "bold": true
                  },
                  {
                    "text": " The Agent drafts the email for you — review the content carefully before sending. You stay in control of what goes out."
                  }
                ],
                "sourceId": "body-222/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-222"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-223"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-032.png",
        "alt": "",
        "sourceId": "body-224",
        "width": 552,
        "height": 316
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-033.png",
        "alt": "",
        "sourceId": "body-225",
        "width": 552,
        "height": 314
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-034.png",
        "alt": "",
        "sourceId": "body-226",
        "width": 552,
        "height": 315
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-035.png",
        "alt": "",
        "sourceId": "body-227",
        "width": 552,
        "height": 316
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-036.png",
        "alt": "",
        "sourceId": "body-228",
        "width": 552,
        "height": 314
      },
      {
        "type": "table",
        "rows": [
          [
            "Read the last 10 supplier emails from my inbox. Extract the following and write to a Base: supplier, email date, order number, amount, key request, attachment list. Save any images from attachments to Library, named \"supplier_order_date\" and tagged \"supplier email.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Read the last 10 supplier emails from my inbox. Extract the following and write to a Base: supplier, email date, order number, amount, key request, attachment list. Save any images from attachments to Library, named \"supplier_order_date\" and tagged \"supplier email.\""
                  }
                ],
                "sourceId": "body-229/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-229"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:",
            "bold": true
          }
        ],
        "sourceId": "body-230"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "10 emails → one structured Base"
          }
        ],
        "sourceId": "body-231",
        "marker": "•",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-037.png",
        "alt": "",
        "sourceId": "body-232",
        "width": 552,
        "height": 315
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Attached images saved to Library, searchable by supplier/order"
          }
        ],
        "sourceId": "body-233",
        "marker": "•",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-033.png",
        "alt": "",
        "sourceId": "body-234",
        "width": 552,
        "height": 314
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-038.png",
        "alt": "",
        "sourceId": "body-235",
        "width": 552,
        "height": 298
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Later, you can just ask the Agent \"What did Hartmann send this week?\" and get the answer from the table"
          }
        ],
        "sourceId": "body-236",
        "marker": "•",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-039.png",
        "alt": "",
        "sourceId": "body-237",
        "width": 552,
        "height": 315
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario 1-A: Customer Service — Batch Complaint Email Follow-ups",
            "bold": true
          }
        ],
        "sourceId": "body-238",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You're a customer service lead. Your team gets 20+ complaint emails a day, each with attached photos (quality issue shots). Complaints scatter across individual inboxes — trends stay invisible, progress is hard to track."
          }
        ],
        "sourceId": "body-239"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, the Agent batch-reads complaint emails, auto-classifies and rates severity, files images to Library, and writes everything to a trackable Base."
          }
        ],
        "sourceId": "body-240"
      },
      {
        "type": "table",
        "rows": [
          [
            "Read the last 20 complaint emails from my inbox. Extract and write to a Base: customer name, order number, complaint type (quality/logistics/sizing/other), issue description, severity (P1-P3), attached images, handling status, assignee. Requirements: 1. Auto-classify complaint type by analyzing email body keywords; 2. Auto-rate severity (P1 = batch impact/escalation, P2 = single-item issue, P3 = general inquiry); 3. Auto-save attached images to Library, named \"customer_order_number.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Read the last 20 complaint emails from my inbox. Extract and write to a Base: customer name, order number, complaint type (quality/logistics/sizing/other), issue description, severity (P1-P3), attached images, handling status, assignee. Requirements: 1. Auto-classify complaint type by analyzing email body keywords; 2. Auto-rate severity (P1 = batch impact/escalation, P2 = single-item issue, P3 = general inquiry); 3. Auto-save attached images to Library, named \"customer_order_number.\""
                  }
                ],
                "sourceId": "body-241/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-241"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-242"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "20 scattered emails → one structured Base within minutes"
          }
        ],
        "sourceId": "body-243",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Complaint images auto-filed in Library, searchable by customer/order"
          }
        ],
        "sourceId": "body-244",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Supervisors can spot trends directly from the table: \"Quality complaints are up this month\""
          }
        ],
        "sourceId": "body-245",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Downstream: the Agent can reference \"Hartmann's complaint photos\" in later conversations — less time digging through emails"
          }
        ],
        "sourceId": "body-246",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario 1-B: Project Manager (see Chapter 4) — Supplier Emails + Attachments → Project Tracking Table",
            "bold": true
          }
        ],
        "sourceId": "body-247",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You're a project manager. 10+ supplier emails a day, each with a Tech Pack PDF, product images, or sample photos. Information lives in your inbox. When you meet with the team, you're digging through emails."
          }
        ],
        "sourceId": "body-248"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, the Agent reads recent supplier emails, auto-extracts key info and attachments, and writes to a project tracking table grouped by supplier."
          }
        ],
        "sourceId": "body-249"
      },
      {
        "type": "table",
        "rows": [
          [
            "Read supplier emails from my inbox (last 7 days). Extract and write to a project tracking Base: supplier, project/style number, email subject, email date, key content summary, attachment list, attachment type, sampling stage, action needed, deadline. Requirements: 1. Auto-classify attachments: Tech Pack PDFs → extract key parameters (fabric/size/color) into the table; 2. Product images → save to Library, named \"supplier_style_date\"; 3. Highlight the \"action needed\" column so it's easy to review in meetings."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Read supplier emails from my inbox (last 7 days). Extract and write to a project tracking Base: supplier, project/style number, email subject, email date, key content summary, attachment list, attachment type, sampling stage, action needed, deadline. Requirements: 1. Auto-classify attachments: Tech Pack PDFs → extract key parameters (fabric/size/color) into the table; 2. Product images → save to Library, named \"supplier_style_date\"; 3. Highlight the \"action needed\" column so it's easy to review in meetings."
                  }
                ],
                "sourceId": "body-250/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-250"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-251"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Scattered supplier emails → one project tracking table grouped by supplier"
          }
        ],
        "sourceId": "body-252",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tech Pack parameters are no longer buried in PDFs — they're queryable in the table"
          }
        ],
        "sourceId": "body-253",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sample photos auto-filed in Library, linked to the supplier row"
          }
        ],
        "sourceId": "body-254",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Project manager asks AOS Work: \"What did Hartmann send this week? How's the progress?\" → the Agent answers from the table"
          }
        ],
        "sourceId": "body-255",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Downstream: Friday's weekly report auto-pulls table data to generate a progress update."
          }
        ],
        "sourceId": "body-256",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Under GDPR, emails contain personal data (sender name, contact details, content). Ensure:\n1) You have a lawful basis for processing (e.g., legitimate interest for business communications);\n2) Extracted data is used only for business follow-up;\n3) Delete data that is no longer needed."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note:",
                    "bold": true
                  },
                  {
                    "text": " Under GDPR, emails contain personal data (sender name, contact details, content). Ensure:"
                  }
                ],
                "sourceId": "body-257/r0/c0/p0"
              },
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1) You have a lawful basis for processing (e.g., legitimate interest for business communications);"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2) Extracted data is used only for business follow-up;"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3) Delete data that is no longer needed."
                  }
                ],
                "sourceId": "body-257/r0/c0/p1"
              }
            ]
          ]
        ],
        "sourceId": "body-257"
      }
    ]
  },
  {
    "id": "scenario-2-document-summarization-translation",
    "title": "2.2 Document Summarization & Translation",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 11,
    "prev": "scenario-1-email-management-structured-follow-ups",
    "next": "scenario-3-data-analysis-insights",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A supplier sends a 30-page English technical document. You don't have time to read it, and it's hard to follow anyway. An AI assistant can summarize it, but the output stays in the conversation. AOS Work saves the summary to Library, where it can be referenced by weekly reports, search, and other Skills."
          }
        ],
        "sourceId": "body-260"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-040.png",
        "alt": "",
        "sourceId": "body-261",
        "width": 552,
        "height": 289
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ],
        "sourceId": "body-262"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Extract the document from the email and save it to Library, or upload it directly in the conversation"
          }
        ],
        "sourceId": "body-263",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-041.png",
        "alt": "",
        "sourceId": "body-264",
        "width": 552,
        "height": 288
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tell the Agent what language you want the summary in and what dimensions to focus on"
          }
        ],
        "sourceId": "body-265",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent pulls out the core points (with page references) and translates them"
          }
        ],
        "sourceId": "body-266",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-042.png",
        "alt": "",
        "sourceId": "body-267",
        "width": 552,
        "height": 298
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The summary is saved to the right Library folder with tags"
          }
        ],
        "sourceId": "body-268",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Later, any task can reference that summary"
          }
        ],
        "sourceId": "body-269",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-270"
      },
      {
        "type": "table",
        "rows": [
          [
            "Summarize this 30-page supplier technical document into 5 core points in Italian, each with the original page number. Focus on: fabric specs, certification standards, delivery terms. Save the result to the \"Supplier Documents\" folder in Library."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Summarize this 30-page supplier technical document into 5 core points in Italian, each with the original page number. Focus on: fabric specs, certification standards, delivery terms. Save the result to the \"Supplier Documents\" folder in Library."
                  }
                ],
                "sourceId": "body-271/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-271"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-272"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "5 core points, each with the original page number for traceability"
          }
        ],
        "sourceId": "body-273",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Translated into the specified language with accurate terminology"
          }
        ],
        "sourceId": "body-274",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A brief analysis report highlighting key info and terms to watch"
          }
        ],
        "sourceId": "body-275",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Summary saved to the right Library folder, ready to be referenced by future tasks"
          }
        ],
        "sourceId": "body-276",
        "marker": "•",
        "level": 0
      }
    ]
  },
  {
    "id": "scenario-3-data-analysis-insights",
    "title": "2.3 Data Analysis & Insights",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 12,
    "prev": "scenario-2-document-summarization-translation",
    "next": "scenario-4-storytelling-ppt-html-generation-production",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You have sales data, inventory data, and supplier cost data, scattered across different Base. Field names don't match, formats differ, languages differ. A regular AI assistant typically requires you to upload Excel files manually and analyze one source at a time. AOS Work can connect multiple data sources from Base simultaneously — it auto-cleans data, maps fields, and runs cross-source analysis."
          }
        ],
        "sourceId": "body-279"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills involved:",
            "bold": true
          },
          {
            "text": " "
          },
          {
            "text": "data-cleaning"
          },
          {
            "text": " — cleans messy data into analysis-ready tables; "
          },
          {
            "text": "analysis-methodology"
          },
          {
            "text": " — provides reusable methods for retail analysis scenarios"
          }
        ],
        "sourceId": "body-280"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ],
        "sourceId": "body-281"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Make sure data sources are in Base (sales table, inventory table, supplier table, etc.)"
          }
        ],
        "sourceId": "body-282",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tell the Agent what to analyze and which tables to pull from"
          }
        ],
        "sourceId": "body-283",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent auto-queries multiple tables and identifies field mappings"
          }
        ],
        "sourceId": "body-284",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Merges data and runs analysis (trends, rankings, anomalies, margin, etc.)"
          }
        ],
        "sourceId": "body-285",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Results are written back to the Base or formatted as an analysis report"
          }
        ],
        "sourceId": "body-286",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-287"
      },
      {
        "type": "table",
        "rows": [
          [
            "From the \"E-commerce Sales\" table and the \"Inventory\" table, use sell-in, sell-out data to calculate the sell-through rate by SKU in Italy. Rank SKUs by sell-through ascending and write to a \"Sell-Through Analysis\" Base. Also generate a brief analysis report identifying the 10 slowest-selling SKUs and possible reasons."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "From the \"E-commerce Sales\" table and the \"Inventory\" table, use sell-in, sell-out data to calculate the sell-through rate by SKU in Italy. Rank SKUs by sell-through ascending and write to a \"Sell-Through Analysis\" Base. Also generate a brief analysis report identifying the 10 slowest-selling SKUs and possible reasons."
                  }
                ],
                "sourceId": "body-288/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-288"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-289"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sell-through analysis written to the Base, sorted ascending"
          }
        ],
        "sourceId": "body-290",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The slowest-selling SKUs in Italy are clearly listed"
          }
        ],
        "sourceId": "body-291",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Analysis report identifies the 10 slowest-selling SKUs with possible reasons"
          }
        ],
        "sourceId": "body-292",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Later, you can ask the Agent to drill into any SKU's details"
          }
        ],
        "sourceId": "body-293",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Advanced: Multi-Source Data Cleaning",
            "bold": true
          }
        ],
        "sourceId": "body-294"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you have multiple data sources from different systems — SAP sales CSV, Magento e-commerce Excel, supplier quotes in Italian — field names don't match, formats differ, languages differ. Just aligning the fields takes half a day."
          }
        ],
        "sourceId": "body-295"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, you hand all the data to the Agent. AI auto-identifies field mappings, cleans the data, merges it into one unified table, and gives you a clean data foundation for analysis."
          }
        ],
        "sourceId": "body-296"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ],
        "sourceId": "body-297"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upload each dataset to a Base "
          }
        ],
        "sourceId": "body-298",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tell the Agent what each dataset is and ask it to auto-identify field mappings"
          }
        ],
        "sourceId": "body-299",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The AI shows you the field mappings (e.g. SAP's \"Product Code\" = supplier's \"Codice\"), you confirm"
          }
        ],
        "sourceId": "body-300",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The AI runs data cleaning: deduplication, date format unification, currency normalization, missing value annotation, anomaly detection"
          }
        ],
        "sourceId": "body-301",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The cleaned, merged data is written back to the Base, ready for analysis"
          }
        ],
        "sourceId": "body-302",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-303"
      },
      {
        "type": "table",
        "rows": [
          [
            "Here are three datasets: SAP store sales (fields in English: Store_ID, Product Code, Revenue, Date), Magento online orders (fields in English: Product Code, Total order, Discount, Revenue), and supplier product costs (fields in Italian: Codice, Prezzo, Categoria). Auto-identify field mappings between these datasets — fields that mean the same thing but have different names — and show me the mapping for confirmation. After confirmation, clean the merged data: 1) Deduplicate and mark duplicate records; 2) Unify dates to YYYY-MM-DD, amounts to EUR; 3) Mark missing values and suggest how to handle them; 4) Detect anomalies and flag them. Write the cleaned merged data back to a Base."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Here are three datasets: SAP store sales (fields in English: Store_ID, Product Code, Revenue, Date), Magento online orders (fields in English: Product Code, Total order, Discount, Revenue), and supplier product costs (fields in Italian: Codice, Prezzo, Categoria). Auto-identify field mappings between these datasets — fields that mean the same thing but have different names — and show me the mapping for confirmation. After confirmation, clean the merged data: 1) Deduplicate and mark duplicate records; 2) Unify dates to YYYY-MM-DD, amounts to EUR; 3) Mark missing values and suggest how to handle them; 4) Detect anomalies and flag them. Write the cleaned merged data back to a Base."
                  }
                ],
                "sourceId": "body-304/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-304"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-043.png",
        "alt": "",
        "sourceId": "body-305",
        "width": 552,
        "height": 316
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-044.png",
        "alt": "",
        "sourceId": "body-306",
        "width": 552,
        "height": 314
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-307"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Field mapping inventory: AI auto-identifies field mappings across the three datasets"
          }
        ],
        "sourceId": "body-308",
        "marker": "•",
        "level": 0
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-045.png",
        "alt": "",
        "sourceId": "body-309",
        "width": 552,
        "height": 316
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Cleaned merged table: deduplicated, format-normalized, missing values annotated, anomalies flagged"
          }
        ],
        "sourceId": "body-310",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Data quality report: number of duplicate records, missing value distribution, anomaly list"
          }
        ],
        "sourceId": "body-311",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Merged data written back to the Base — ready for analysis without re-cleaning"
          }
        ],
        "sourceId": "body-312",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Data cleaning is the prerequisite for analysis.  Let AI handle the alignment and cleaning. You just confirm the mappings and rules. Want to know what to do with the cleaned data? → See 3.8: \"Merchandise Planning: Product Operations Analysis & Inventory Risk Alerts.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Data cleaning is the prerequisite for analysis.  Let AI handle the alignment and cleaning. You just confirm the mappings and rules. Want to know what to do with the cleaned data? → See 3.8: \"Merchandise Planning: Product Operations Analysis & Inventory Risk Alerts.\""
                  }
                ],
                "sourceId": "body-313/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-313"
      }
    ]
  },
  {
    "id": "scenario-4-storytelling-ppt-html-generation-production",
    "title": "2.4 Storytelling — PPT/HTML Generation",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 13,
    "prev": "scenario-3-data-analysis-insights",
    "next": "scenario-5-fashion-industry-news-inspiration-search",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You need a project presentation or a data report. Generic AI tools pull from generic templates. AOS Work pulls your real data from Base and your brand assets from Library. AI builds the narrative arc (background → current state → problem → solution → plan) and delivers a downloadable, editable PPT or a presentation-ready HTML file."
          }
        ],
        "sourceId": "body-316"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills involved:",
            "bold": true
          },
          {
            "text": "ppt-master"
          },
          {
            "text": " — generates editable PPTX from your topic; "
          },
          {
            "text": "single-html-generator"
          },
          {
            "text": " — creates a shareable HTML page"
          }
        ],
        "sourceId": "body-317"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ],
        "sourceId": "body-318"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prepare your content — either in Base/Library, or upload directly in the conversation (Excel, Word, Markdown, etc.)"
          }
        ],
        "sourceId": "body-319",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tell the Agent the audience, duration, structure, and output format"
          }
        ],
        "sourceId": "body-320",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent pulls data from tables and brand PPT templates from Library (or you upload directly)"
          }
        ],
        "sourceId": "body-321",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI builds the narrative framework: background → current state → problem → solution → plan"
          }
        ],
        "sourceId": "body-322",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Outputs a PPT or HTML file, one core idea per slide"
          }
        ],
        "sourceId": "body-323",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-324"
      },
      {
        "type": "table",
        "rows": [
          [
            "Based on the Q3 sales data in the Base and the brand PPT template in Library, generate an 8-minute internal presentation. Audience: department heads. Structure: background, current state, problems, solutions, plan, decisions needed. Use the color and font specs from the brand-guide.pdf in Library. One core idea per slide. Numbers must match the data source."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Based on the Q3 sales data in the Base and the brand PPT template in Library, generate an 8-minute internal presentation. Audience: department heads. Structure: background, current state, problems, solutions, plan, decisions needed. Use the color and font specs from the brand-guide.pdf in Library. One core idea per slide. Numbers must match the data source."
                  }
                ],
                "sourceId": "body-325/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-325"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-046.png",
        "alt": "",
        "sourceId": "body-326",
        "width": 552,
        "height": 316
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-327"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A PPT or HTML file, one core idea per slide"
          }
        ],
        "sourceId": "body-328",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Data from Base, brand assets from Library — not generic templates"
          }
        ],
        "sourceId": "body-329",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Complete narrative arc: background → current state → problem → solution → plan"
          }
        ],
        "sourceId": "body-330",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Downloadable PPT for editing"
          }
        ],
        "sourceId": "body-331",
        "marker": "•",
        "level": 0
      }
    ]
  },
  {
    "id": "scenario-5-fashion-industry-news-inspiration-search",
    "title": "2.5 Fashion Industry News & Inspiration Search",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 14,
    "prev": "scenario-4-storytelling-ppt-html-generation-production",
    "next": "scenario-6-personal-folder-organization",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generic search engines give you one answer at a time, but the source isn't guaranteed, timeliness isn't assured, and there's no scheduled tracking. AOS Work's fashion industry search uses a curated list of fashion industry sources, routes to the Tavily Search Connector, and writes structured results to a Base."
          }
        ],
        "sourceId": "body-334"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills involved:",
            "bold": true
          },
          {
            "text": " Tavily Search Connector — searches the web and provides summaries with source links; "
          },
          {
            "text": "fashion-inspiration-skill"
          },
          {
            "text": " — scrapes fashion images from social media on schedule; "
          },
          {
            "text": "single-html-generator"
          },
          {
            "text": " — turns results into a shareable HTML brief"
          }
        ],
        "sourceId": "body-335"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ],
        "sourceId": "body-336"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tell the Agent what topic to search and which sources to use"
          }
        ],
        "sourceId": "body-337",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent searches from the curated source list and extracts key information"
          }
        ],
        "sourceId": "body-338",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Results are structured and written to Base or Library by topic/date/source"
          }
        ],
        "sourceId": "body-339",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Need scheduled tracking? Set it as a recurring task (e.g. auto-run every morning)"
          }
        ],
        "sourceId": "body-340",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-341"
      },
      {
        "type": "table",
        "rows": [
          [
            "Search the past week's industry news about \"sustainable fabrics.\" Limit sources to the curated industry list. For each result, extract: title, source, date, key insight, relevance to us (high/medium/low). Write to an \"Industry News\" Base."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Search the past week's industry news about \"sustainable fabrics.\" Limit sources to the curated industry list. For each result, extract: title, source, date, key insight, relevance to us (high/medium/low). Write to an \"Industry News\" Base."
                  }
                ],
                "sourceId": "body-342/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-342"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-047.png",
        "alt": "",
        "sourceId": "body-343",
        "width": 552,
        "height": 315
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-047.png",
        "alt": "",
        "sourceId": "body-344",
        "width": 552,
        "height": 315
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-048.png",
        "alt": "",
        "sourceId": "body-345",
        "width": 552,
        "height": 317
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Advanced: Scheduled Inspiration Scraping",
            "bold": true
          }
        ],
        "sourceId": "body-346"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Designers spend 1–2 hours a day browsing Instagram and Pinterest for inspiration. Use Apify to scrape specified brands/styles on a schedule. By the time designers get to the office, the inspiration board is ready."
          }
        ],
        "sourceId": "body-347"
      },
      {
        "type": "table",
        "rows": [
          [
            "Set up a designer inspiration scraper: brands = Ralph Lauren, Diesel, Guess; channels = Instagram and Pinterest; schedule = daily at 7:00 AM; focus on: new launches, runway looks, street style, color trends. Save results to the Library inspiration folder."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up a designer inspiration scraper: brands = Ralph Lauren, Diesel, Guess; channels = Instagram and Pinterest; schedule = daily at 7:00 AM; focus on: new launches, runway looks, street style, color trends. Save results to the Library inspiration folder."
                  }
                ],
                "sourceId": "body-348/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-348"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-349"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Structured news written to a Base: title, source, date, key insight, relevance"
          }
        ],
        "sourceId": "body-350",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sources limited to a curated list — results are trustworthy and traceable"
          }
        ],
        "sourceId": "body-351",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Once set as a recurring task, it runs daily — no manual trigger needed"
          }
        ],
        "sourceId": "body-352",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Inspiration images auto-saved to Library — designers see them when they arrive"
          }
        ],
        "sourceId": "body-353",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Scraping covers publicly available brand content only and is used for internal research. Under the EU Database Directive (96/9/EC), outputs should not be redistributed as a competitor database."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note:",
                    "bold": true
                  },
                  {
                    "text": " Scraping covers publicly available brand content only and is used for internal research. Under the EU Database Directive (96/9/EC), outputs should not be redistributed as a competitor database."
                  }
                ],
                "sourceId": "body-354/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-354"
      }
    ]
  },
  {
    "id": "scenario-6-personal-folder-organization",
    "title": "2.6 Personal Folder Organization",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 15,
    "prev": "scenario-5-fashion-industry-news-inspiration-search",
    "next": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
    "summary": "",
    "blocks": [
      {
        "type": "image",
        "src": "/playbook-images/release-image-049.png",
        "alt": "",
        "sourceId": "body-357",
        "width": 552,
        "height": 315
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Files in Library pile up. Naming is inconsistent, categories are outdated, the folder structure gets messy. AOS Work can analyze your folder structure, suggest improvements, and batch-manage, create, or rename folders."
          }
        ],
        "sourceId": "body-358"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tool involved:",
            "bold": true
          }
        ],
        "sourceId": "body-359"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Explore — Library App: provides enterprise digital asset management; authorization is required before use. Supports folder browsing, structured search, file upload, and rename/move/replace/delete operations for files and folders, plus natural language metadata & tag management"
          }
        ],
        "sourceId": "body-360"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ],
        "sourceId": "body-361"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Specify which Library folder to organize"
          }
        ],
        "sourceId": "body-362",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent scans the folder structure and file names"
          }
        ],
        "sourceId": "body-363",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Analyzes current issues: inconsistent naming, poor subfolder hierarchy, outdated structure"
          }
        ],
        "sourceId": "body-364",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Suggests improvements (categorization scheme, naming convention, folder structure changes)"
          }
        ],
        "sourceId": "body-365",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After confirmation, batch-executes: rename files, create subfolders, move files into the new categories. For uploaded files, batch-add metadata and tags based on your personal tagging preferences (e.g., project name, season, product category) — your personal workspace follows your own tagging conventions"
          }
        ],
        "sourceId": "body-366"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-367"
      },
      {
        "type": "table",
        "rows": [
          [
            "Organize the \"2026SS Product Images\" folder in Library. Scan all files and check: 1) Whether naming follows the convention \"category_SKU_color_date\"; 2) Whether the subfolder hierarchy makes sense; 3) Whether any files are in the wrong folder. Propose a folder optimization plan (new subfolders, rename suggestions, file move suggestions). Don't execute until I confirm. Don't delete any original files."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Organize the \"2026SS Product Images\" folder in Library. Scan all files and check: 1) Whether naming follows the convention \"category_SKU_color_date\"; 2) Whether the subfolder hierarchy makes sense; 3) Whether any files are in the wrong folder. Propose a folder optimization plan (new subfolders, rename suggestions, file move suggestions). Don't execute until I confirm. Don't delete any original files."
                  }
                ],
                "sourceId": "body-368/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-368"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-050.png",
        "alt": "",
        "sourceId": "body-369",
        "width": 552,
        "height": 317
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-051.png",
        "alt": "",
        "sourceId": "body-370",
        "width": 552,
        "height": 315
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-049.png",
        "alt": "",
        "sourceId": "body-371",
        "width": 552,
        "height": 315
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-052.png",
        "alt": "",
        "sourceId": "body-372",
        "width": 552,
        "height": 315
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-053.png",
        "alt": "",
        "sourceId": "body-373",
        "width": 552,
        "height": 316
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ],
        "sourceId": "body-374"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Folder optimization plan: new subfolder suggestions, rename suggestions, file move suggestions"
          }
        ],
        "sourceId": "body-375",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After confirmation, batch execution: consistent file naming, clean subfolder structure"
          }
        ],
        "sourceId": "body-376",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "No original files deleted — all operations traceable"
          }
        ],
        "sourceId": "body-377",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Future uploads follow the new structure, and the Agent can auto-classify them"
          }
        ],
        "sourceId": "body-378",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Next chapter: Chapter 3 · Role-Specific Scenarios →"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Next chapter:",
                    "bold": true
                  },
                  {
                    "text": " Chapter 3 · Role-Specific Scenarios →"
                  }
                ],
                "sourceId": "body-379/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-379"
      }
    ]
  },
  {
    "id": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
    "title": "3.1 HR: JD Generation, Resume Screening & Candidate Follow-ups",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 16,
    "prev": "scenario-6-personal-folder-organization",
    "next": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a recruiter or an HRBP, the hiring flow is similar:"
          }
        ],
        "sourceId": "body-382"
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Write JD",
            "Copy from old JDs, reformat for each channel",
            "Multilingual, multi-format adaptation takes time"
          ],
          [
            "2. Screen resumes",
            "Open each one, score manually",
            "Low efficiency at volume, easy to miss candidates"
          ],
          [
            "3. Manage candidates",
            "Excel tracking, easy to forget follow-ups",
            "Candidates go cold after a week without contact"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-383/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-383/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-383/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Write JD"
                  }
                ],
                "sourceId": "body-383/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Copy from old JDs, reformat for each channel"
                  }
                ],
                "sourceId": "body-383/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Multilingual, multi-format adaptation takes time"
                  }
                ],
                "sourceId": "body-383/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Screen resumes"
                  }
                ],
                "sourceId": "body-383/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Open each one, score manually"
                  }
                ],
                "sourceId": "body-383/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Low efficiency at volume, easy to miss candidates"
                  }
                ],
                "sourceId": "body-383/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Manage candidates"
                  }
                ],
                "sourceId": "body-383/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Excel tracking, easy to forget follow-ups"
                  }
                ],
                "sourceId": "body-383/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Candidates go cold after a week without contact"
                  }
                ],
                "sourceId": "body-383/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-383"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, these three steps happen in one platform. Data flows automatically. No tool switching."
          }
        ],
        "sourceId": "body-384"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: HR Scenario Stack",
            "bold": true
          }
        ],
        "sourceId": "body-385",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Candidate data management, JD management, ranking table",
            "Throughout the chapter — all structured data goes into tables",
            "Set up the table structure first"
          ],
          [
            "JD Generation Skill\n",
            "Multi-language JD writing, channel format adaptation",
            "Scenario A",
            "Confirm implementation with the product team\n"
          ],
          [
            "Resume Parsing Skill",
            "Batch resume parsing, quantify-scoring on JD match, auto-ranking, full candidate assessment workflow",
            "Scenario B",
            "Resumes must be uploaded to AOS Work"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool / Skill"
                  }
                ],
                "sourceId": "body-386/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-386/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How we use it"
                  }
                ],
                "sourceId": "body-386/r0/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Note"
                  }
                ],
                "sourceId": "body-386/r0/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-386/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Candidate data management, JD management, ranking table"
                  }
                ],
                "sourceId": "body-386/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Throughout the chapter — all structured data goes into tables"
                  }
                ],
                "sourceId": "body-386/r1/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up the table structure first"
                  }
                ],
                "sourceId": "body-386/r1/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "JD Generation Skill"
                  }
                ],
                "sourceId": "body-386/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Multi-language JD writing, channel format adaptation"
                  }
                ],
                "sourceId": "body-386/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario A"
                  }
                ],
                "sourceId": "body-386/r2/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Confirm implementation with the product team"
                  }
                ],
                "sourceId": "body-386/r2/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Resume Parsing Skill"
                  }
                ],
                "sourceId": "body-386/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Batch resume parsing, quantify-scoring on JD match, auto-ranking, full candidate assessment workflow"
                  }
                ],
                "sourceId": "body-386/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario B"
                  }
                ],
                "sourceId": "body-386/r3/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Resumes must be uploaded to AOS Work"
                  }
                ],
                "sourceId": "body-386/r3/c3/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-386"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: JD Generation — One Role, Multiple Languages & Formats, Ready to Publish",
            "bold": true
          }
        ],
        "sourceId": "body-387",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-388",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"One role needs to go on LinkedIn, Indeed, Glassdoor, and our website. Each channel has a different format. Plus it needs Italian and English versions. Every time I spend half an hour reformatting.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"One role needs to go on LinkedIn, Indeed, Glassdoor, and our website. Each channel has a different format. Plus it needs Italian and English versions. Every time I spend half an hour reformatting.\""
                  }
                ],
                "sourceId": "body-389/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-389"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-390",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prepare the role info.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Tell the AI the following elements:"
          }
        ],
        "sourceId": "body-391",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "Role name",
            "In English and local language",
            "Senior Merchandiser"
          ],
          [
            "Level",
            "Junior / Mid / Senior",
            "Senior"
          ],
          [
            "Core responsibilities",
            "3–5 items",
            "Merchandise planning, SKU analysis, seasonal buying plan"
          ],
          [
            "Requirements",
            "Hard requirements",
            "5+ years fashion industry, fluent Italian and English"
          ],
          [
            "Nice-to-haves",
            "Preferred conditions",
            "Luxury brand experience, SAP knowledge"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Element"
                  }
                ],
                "sourceId": "body-392/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-392/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Example"
                  }
                ],
                "sourceId": "body-392/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Role name"
                  }
                ],
                "sourceId": "body-392/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "In English and local language"
                  }
                ],
                "sourceId": "body-392/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Senior Merchandiser"
                  }
                ],
                "sourceId": "body-392/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Level"
                  }
                ],
                "sourceId": "body-392/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Junior / Mid / Senior"
                  }
                ],
                "sourceId": "body-392/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Senior"
                  }
                ],
                "sourceId": "body-392/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Core responsibilities"
                  }
                ],
                "sourceId": "body-392/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3–5 items"
                  }
                ],
                "sourceId": "body-392/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Merchandise planning, SKU analysis, seasonal buying plan"
                  }
                ],
                "sourceId": "body-392/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Requirements"
                  }
                ],
                "sourceId": "body-392/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Hard requirements"
                  }
                ],
                "sourceId": "body-392/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "5+ years fashion industry, fluent Italian and English"
                  }
                ],
                "sourceId": "body-392/r4/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Nice-to-haves"
                  }
                ],
                "sourceId": "body-392/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Preferred conditions"
                  }
                ],
                "sourceId": "body-392/r5/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Luxury brand experience, SAP knowledge"
                  }
                ],
                "sourceId": "body-392/r5/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-392"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Specify output requirements.",
            "bold": true
          }
        ],
        "sourceId": "body-393",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Languages: Italian + English"
          }
        ],
        "sourceId": "body-394",
        "marker": "￮",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Channel formats: LinkedIn / Indeed / Glassdoor / Company website"
          }
        ],
        "sourceId": "body-395",
        "marker": "￮",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Special requirements: Exclude discriminatory language, generate formal and social-media versions"
          }
        ],
        "sourceId": "body-396",
        "marker": "￮",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI generates the JDs.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI creates multiple versions based on your input."
          }
        ],
        "sourceId": "body-397",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Review and write to the Base.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "After confirming, the AI writes the JDs to the table for easy management and publishing."
          }
        ],
        "sourceId": "body-398",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-399",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Generate Italian + English JDs for the following role:\n- Role: Senior Merchandiser\n- Level: Senior\n- Core responsibilities: Merchandise planning, SKU four-quadrant analysis, seasonal buying plan development\n- Requirements: 5+ years fashion industry, fluent Italian and English, proficient in data analysis tools\n- Nice-to-haves: Luxury brand experience, SAP knowledge\n\nOutput requirements:\n1. Adapt for LinkedIn / Indeed / Glassdoor / Company website — four channel formats\n2. Exclude discriminatory language (age/gender/race/religion/marital status, compliant with EU Anti-Discrimination Directive 2000/78/EC)\n3. Generate formal and social-media short versions\n4. Write all versions to the Base"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Generate Italian + English JDs for the following role:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Role: Senior Merchandiser"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Level: Senior"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Core responsibilities: Merchandise planning, SKU four-quadrant analysis, seasonal buying plan development"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Requirements: 5+ years fashion industry, fluent Italian and English, proficient in data analysis tools"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Nice-to-haves: Luxury brand experience, SAP knowledge"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output requirements:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Adapt for LinkedIn / Indeed / Glassdoor / Company website — four channel formats"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Exclude discriminatory language (age/gender/race/religion/marital status, compliant with EU Anti-Discrimination Directive 2000/78/EC)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Generate formal and social-media short versions"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Write all versions to the Base"
                  }
                ],
                "sourceId": "body-400/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-400"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-401",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-054.png",
        "alt": "",
        "sourceId": "body-402",
        "width": 552,
        "height": 273
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-055.png",
        "alt": "",
        "sourceId": "body-403",
        "width": 552,
        "height": 269
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "2 languages × 4 channels (LinkedIn / Indeed / Glassdoor / Website) × 2 versions = "
          },
          {
            "text": "16 JDs",
            "bold": true
          }
        ],
        "sourceId": "body-404",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All written to the Base, organized by channel and language"
          }
        ],
        "sourceId": "body-405",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Ready to copy and publish directly from the table"
          }
        ],
        "sourceId": "body-406",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: When generating JDs for multiple roles at once, start with one role, confirm quality, then batch the rest. Batch results are written to the same table."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: When generating JDs for multiple roles at once, start with one role, confirm quality, then batch the rest. Batch results are written to the same table."
                  }
                ],
                "sourceId": "body-407/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-407"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-056.png",
        "alt": "",
        "sourceId": "body-408",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-056.png",
        "alt": "",
        "sourceId": "body-409",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-057.png",
        "alt": "",
        "sourceId": "body-410",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-058.png",
        "alt": "",
        "sourceId": "body-411",
        "width": 552,
        "height": 273
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-059.png",
        "alt": "",
        "sourceId": "body-412",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-060.png",
        "alt": "",
        "sourceId": "body-413",
        "width": 552,
        "height": 273
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Resume Screening & Matching — 200 Resumes, Ranked in Minutes",
            "bold": true
          }
        ],
        "sourceId": "body-414",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-415",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"200 resumes for one role. If I spend 5 minutes on each, that's 16 hours of screening. And I still miss great candidates.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"200 resumes for one role. If I spend 5 minutes on each, that's 16 hours of screening. And I still miss great candidates.\""
                  }
                ],
                "sourceId": "body-416/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-416"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-417",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-061.png",
        "alt": "",
        "sourceId": "body-418",
        "width": 552,
        "height": 274
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upload resumes.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Upload a batch of resumes (PDF/Word) to the AOS Work conversation."
          }
        ],
        "sourceId": "body-419",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-parses.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI reads each resume and extracts key info:"
          }
        ],
        "sourceId": "body-420",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Field",
            "Description"
          ],
          [
            "Name",
            "Full name"
          ],
          [
            "Experience",
            "Total years of work"
          ],
          [
            "Skills",
            "Industry tools, professional skills, software"
          ],
          [
            "Languages",
            "Languages and proficiency"
          ],
          [
            "Last employer",
            "Most recent company"
          ],
          [
            "Current role",
            "Most recent job title"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Field"
                  }
                ],
                "sourceId": "body-421/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-421/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Name"
                  }
                ],
                "sourceId": "body-421/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Full name"
                  }
                ],
                "sourceId": "body-421/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Experience"
                  }
                ],
                "sourceId": "body-421/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Total years of work"
                  }
                ],
                "sourceId": "body-421/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Skills"
                  }
                ],
                "sourceId": "body-421/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Industry tools, professional skills, software"
                  }
                ],
                "sourceId": "body-421/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Languages"
                  }
                ],
                "sourceId": "body-421/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Languages and proficiency"
                  }
                ],
                "sourceId": "body-421/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Last employer"
                  }
                ],
                "sourceId": "body-421/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Most recent company"
                  }
                ],
                "sourceId": "body-421/r5/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Current role"
                  }
                ],
                "sourceId": "body-421/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Most recent job title"
                  }
                ],
                "sourceId": "body-421/r6/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-421"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Input job requirements, AI scores the match.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Tell the AI which role you're hiring for. It calculates a match score (0–100) for each candidate and ranks them."
          }
        ],
        "sourceId": "body-422",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Results written to the Base.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The match ranking table goes into the table. Hiring managers can view, filter, and sort. Original resume files (PDF/Word) can also be linked to the corresponding records."
          }
        ],
        "sourceId": "body-423",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Natural language follow-up queries.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "You can filter candidates directly with natural language:"
          }
        ],
        "sourceId": "body-424",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "List all candidates with 3+ years luxury experience, Italian B2 or above, currently in Milan. Sort by match score descending."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "List all candidates with 3+ years luxury experience, Italian B2 or above, currently in Milan. Sort by match score descending."
                  }
                ],
                "sourceId": "body-425/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-425"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-426",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Parse the following resumes, extract key info (name, experience years, skills, languages, education, current role).\nMatch against the following job requirements:\n- Role: Senior Merchandiser\n- Requirements: 5+ years fashion industry, Italian native or C1+, English B2+, proficient in Excel and data analysis tools\n\nGenerate a match ranking table (0–100 points), write to the Base, including:\nName, Experience years, Current role, Last employer, Skills, Languages, Match score, Rank.\nLink original resume files to the corresponding records."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Parse the following resumes, extract key info (name, experience years, skills, languages, education, current role)."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Match against the following job requirements:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Role: Senior Merchandiser"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Requirements: 5+ years fashion industry, Italian native or C1+, English B2+, proficient in Excel and data analysis tools"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Generate a match ranking table (0–100 points), write to the Base, including:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Name, Experience years, Current role, Last employer, Skills, Languages, Match score, Rank."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Link original resume files to the corresponding records."
                  }
                ],
                "sourceId": "body-427/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-427"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-428",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-062.png",
        "alt": "",
        "sourceId": "body-429",
        "width": 552,
        "height": 274
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-063.png",
        "alt": "",
        "sourceId": "body-430",
        "width": 552,
        "height": 273
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All resumes auto-parsed, match scores clear at a glance"
          }
        ],
        "sourceId": "body-431",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Base supports filtering and sorting — hiring managers can view directly"
          }
        ],
        "sourceId": "body-432",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can query specific candidates using natural language"
          }
        ],
        "sourceId": "body-433",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Auto-update Interview Feedback",
            "bold": true
          }
        ],
        "sourceId": "body-434",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After the interview, type your evaluation directly in AOS Work:"
          }
        ],
        "sourceId": "body-435"
      },
      {
        "type": "table",
        "rows": [
          [
            "Candidate Marco Rossi interview feedback: Strong industry experience, deep understanding of merchandising, fluent English, Italian needs improvement. Result: proceeding to second round. Recommend scheduling a technical interview with the team lead."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Candidate Marco Rossi interview feedback: Strong industry experience, deep understanding of merchandising, fluent English, Italian needs improvement. Result: proceeding to second round. Recommend scheduling a technical interview with the team lead."
                  }
                ],
                "sourceId": "body-436/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-436"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The AI auto-updates the feedback and result in the Base."
          }
        ],
        "sourceId": "body-437"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-064.png",
        "alt": "",
        "sourceId": "body-438",
        "width": 552,
        "height": 273
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Auto-reminder for Candidates Without Follow-up",
            "bold": true
          }
        ],
        "sourceId": "body-439",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set up a scheduled reminder: candidates not followed up within 7 days are auto-flagged:"
          }
        ],
        "sourceId": "body-440"
      },
      {
        "type": "table",
        "rows": [
          [
            "Set up reminder: In the Base, candidates with status \"Pending\" and no update for 7+ days should be auto-flagged in red for the recruiter."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up reminder: In the Base, candidates with status \"Pending\" and no update for 7+ days should be auto-flagged in red for the recruiter."
                  }
                ],
                "sourceId": "body-441/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-441"
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Under GDPR and EU Anti-Discrimination Directive (2000/78/EC), personal data in resumes is sensitive. Ensure: 1) Only collect information directly relevant to the role; 2) Do not use age, gender, race, religion, or marital status as scoring criteria; 3) Retain candidate data only as long as needed for the hiring purpose (recommend deleting un-hired candidate data within 6 months)."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: Under GDPR and EU Anti-Discrimination Directive (2000/78/EC), personal data in resumes is sensitive. Ensure: 1) Only collect information directly relevant to the role; 2) Do not use age, gender, race, religion, or marital status as scoring criteria; 3) Retain candidate data only as long as needed for the hiring purpose (recommend deleting un-hired candidate data within 6 months)."
                  }
                ],
                "sourceId": "body-443/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-443"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-065.png",
        "alt": "",
        "sourceId": "body-444",
        "width": 552,
        "height": 273
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "HR Scenario Chain",
            "bold": true
          }
        ],
        "sourceId": "body-445",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "These two scenarios aren't isolated. String them together into a complete hiring workflow:"
          }
        ],
        "sourceId": "body-446"
      },
      {
        "type": "table",
        "rows": [
          [
            "Scenario A (Generate JD) → Publish to channels → Receive resumes\n    ↓\nScenario B (Screen resumes) → Match ranking → Schedule interviews\n    ↓\nInterview feedback written to table → Candidate status updated"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario A (Generate JD) → Publish to channels → Receive resumes"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "    ↓"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Scenario B (Screen resumes) → Match ranking → Schedule interviews"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "    ↓"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Interview feedback written to table → Candidate status updated"
                  }
                ],
                "sourceId": "body-447/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-447",
        "diagram": "hr"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All data flows through the same Base. No tool switching."
          }
        ],
        "sourceId": "body-448"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-449",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles JD generation and resume screening; you focus on candidate judgment."
          }
        ],
        "sourceId": "body-450"
      }
    ]
  },
  {
    "id": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
    "title": "3.2 Legal: Supplier Contract Review, Template Generation & Expiry Tracking",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 17,
    "prev": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
    "next": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Corporate legal work isn't legal research — it's managing contracts. Supplier T&Cs need comparing against company standard terms, NDA and distribution agreements are copied from old documents, and contract expiry dates are scattered across emails and folders. These three tasks take up most of the legal team's time, and each one is a perfect fit for AOS Work — using your own documents and data."
          }
        ],
        "sourceId": "body-452"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Legal Workflow",
            "bold": true
          }
        ],
        "sourceId": "body-453",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Review contract",
            "Supplier sends T&Cs, legal compares line by line against company standards",
            "20–30 page contract, 2–3 hours manual review, easy to miss things"
          ],
          [
            "2. Generate document",
            "Copy from old NDA/distribution agreement, manually modify clauses",
            "Reformatting, version confusion"
          ],
          [
            "3. Track expiry",
            "Expiry dates in Excel or email",
            "Miss renewal windows, auto-renewal clauses get ignored"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-454/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-454/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-454/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Review contract"
                  }
                ],
                "sourceId": "body-454/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Supplier sends T&Cs, legal compares line by line against company standards"
                  }
                ],
                "sourceId": "body-454/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "20–30 page contract, 2–3 hours manual review, easy to miss things"
                  }
                ],
                "sourceId": "body-454/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Generate document"
                  }
                ],
                "sourceId": "body-454/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Copy from old NDA/distribution agreement, manually modify clauses"
                  }
                ],
                "sourceId": "body-454/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Reformatting, version confusion"
                  }
                ],
                "sourceId": "body-454/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Track expiry"
                  }
                ],
                "sourceId": "body-454/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Expiry dates in Excel or email"
                  }
                ],
                "sourceId": "body-454/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Miss renewal windows, auto-renewal clauses get ignored"
                  }
                ],
                "sourceId": "body-454/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-454"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, all three steps happen in one platform: the Agent reads contract documents from Library, compares them, generates new contracts from templates, tracks expiry dates in the table, and sends scheduled reminders."
          }
        ],
        "sourceId": "body-455"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Legal Scenario Stack",
            "bold": true
          }
        ],
        "sourceId": "body-456",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Library",
            "Store company standard contract templates, supplier contract originals",
            "Throughout — all documents read from Library",
            "Control access for sensitive contracts"
          ],
          [
            "Base\n",
            "Contract info management, expiry tracking, review records",
            "Throughout — all structured data goes into tables",
            "Set up table structure first"
          ],
          [
            "Scheduled Task",
            "Auto-reminder for contract expiry",
            "Scenario C\n",
            "Set reminder cycle and notification method"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool / Skill"
                  }
                ],
                "sourceId": "body-457/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-457/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How we use it"
                  }
                ],
                "sourceId": "body-457/r0/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Note"
                  }
                ],
                "sourceId": "body-457/r0/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Library"
                  }
                ],
                "sourceId": "body-457/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Store company standard contract templates, supplier contract originals"
                  }
                ],
                "sourceId": "body-457/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Throughout — all documents read from Library"
                  }
                ],
                "sourceId": "body-457/r1/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Control access for sensitive contracts"
                  }
                ],
                "sourceId": "body-457/r1/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-457/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Contract info management, expiry tracking, review records"
                  }
                ],
                "sourceId": "body-457/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Throughout — all structured data goes into tables"
                  }
                ],
                "sourceId": "body-457/r2/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up table structure first"
                  }
                ],
                "sourceId": "body-457/r2/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scheduled Task"
                  }
                ],
                "sourceId": "body-457/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Auto-reminder for contract expiry"
                  }
                ],
                "sourceId": "body-457/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario C"
                  }
                ],
                "sourceId": "body-457/r3/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set reminder cycle and notification method"
                  }
                ],
                "sourceId": "body-457/r3/c3/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-457"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Supplier Contract Review — Compare Against Standards, Report in Minutes",
            "bold": true
          }
        ],
        "sourceId": "body-458",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-459",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Supplier sends a 25-page T&C. I need to compare it line by line against our company standard terms. One contract takes 2 hours. Three contracts, and the day is gone.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Supplier sends a 25-page T&C. I need to compare it line by line against our company standard terms. One contract takes 2 hours. Three contracts, and the day is gone.\""
                  }
                ],
                "sourceId": "body-460/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-460"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-461",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-066.png",
        "alt": "",
        "sourceId": "body-462",
        "width": 552,
        "height": 273
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prepare standard terms",
            "bold": true
          },
          {
            "text": ": Save your company's standard contract terms to Library (PDF or Word)"
          }
        ],
        "sourceId": "body-463",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upload supplier contract",
            "bold": true
          },
          {
            "text": ": Upload the supplier's T&C to the conversation or Library"
          }
        ],
        "sourceId": "body-464",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Instruct the Agent to compare",
            "bold": true
          },
          {
            "text": ": Tell the Agent which documents are which, ask for a line-by-line comparison"
          }
        ],
        "sourceId": "body-465",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Review the report",
            "bold": true
          },
          {
            "text": ": The Agent outputs a difference report. Legal reviews and confirms."
          }
        ],
        "sourceId": "body-466",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-467",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Compare the following two contracts and output a difference report:\nDocument 1 (Company Standard Terms): Library / Legal/Standard_Terms.pdf\nDocument 2 (Supplier T&C): Uploaded file Supplier_Terms.pdf\n\nComparison dimensions:\n1. Payment terms (terms, currency, penalties)\n2. IP ownership\n3. Confidentiality (scope, duration)\n4. Termination (conditions, notice period)\n5. Liability limitations\n6. Governing law and dispute resolution\n\nFor each dimension:\n- Mark differences (added / removed / modified)\n- Assign risk level (High / Medium / Low)\n- Provide 3 key negotiation suggestions\n\nOutput: Generate a Word difference report, clearly formatted and editable — legal team can annotate and modify directly. Also log this review in the \"Contract Review Records\" Base."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compare the following two contracts and output a difference report:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Document 1 (Company Standard Terms): Library / Legal/Standard_Terms.pdf"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Document 2 (Supplier T&C): Uploaded file Supplier_Terms.pdf"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Comparison dimensions:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Payment terms (terms, currency, penalties)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. IP ownership"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Confidentiality (scope, duration)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Termination (conditions, notice period)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "5. Liability limitations"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "6. Governing law and dispute resolution"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "For each dimension:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Mark differences (added / removed / modified)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Assign risk level (High / Medium / Low)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Provide 3 key negotiation suggestions"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output: Generate a Word difference report, clearly formatted and editable — legal team can annotate and modify directly. Also log this review in the \"Contract Review Records\" Base."
                  }
                ],
                "sourceId": "body-468/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-468"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-469",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-067.png",
        "alt": "",
        "sourceId": "body-470",
        "width": 552,
        "height": 273
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-068.png",
        "alt": "",
        "sourceId": "body-471",
        "width": 552,
        "height": 260
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Difference comparison table across 6 dimensions"
          }
        ],
        "sourceId": "body-472",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Risk level assigned to each difference"
          }
        ],
        "sourceId": "body-473",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "3 key negotiation suggestions"
          }
        ],
        "sourceId": "body-474",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Difference report as a Word document, editable by legal, plus logged in the contract review table"
          }
        ],
        "sourceId": "body-475",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 The Agent does document comparison, not legal advice. Risk levels are based on clause differences. Final acceptance is up to the legal team. The Agent saves the line-by-line comparison time — it doesn't replace legal judgment."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "💡 The Agent does document comparison, not legal advice. Risk levels are based on clause differences. Final acceptance is up to the legal team. The Agent saves the line-by-line comparison time — it doesn't replace legal judgment."
                  }
                ],
                "sourceId": "body-476/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-476"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Contract Template Generation — NDA & Distribution Agreements from One Brief",
            "bold": true
          }
        ],
        "sourceId": "body-477",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-478",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every time we sign an NDA, I copy from the last one, change the company name, date, and clauses, then check the formatting. Distribution agreements are more complex — different clause combinations. One document takes 40 minutes. I do dozens a month.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Every time we sign an NDA, I copy from the last one, change the company name, date, and clauses, then check the formatting. Distribution agreements are more complex — different clause combinations. One document takes 40 minutes. I do dozens a month.\""
                  }
                ],
                "sourceId": "body-479/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-479"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-480",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-069.png",
        "alt": "",
        "sourceId": "body-481",
        "width": 552,
        "height": 272
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prepare templates",
            "bold": true
          },
          {
            "text": ": Save company standard NDA and distribution agreement templates to Library"
          }
        ],
        "sourceId": "body-482",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Fill in parameters",
            "bold": true
          },
          {
            "text": ": Tell the Agent what type of agreement, counterparty info, and key terms"
          }
        ],
        "sourceId": "body-483",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generate document",
            "bold": true
          },
          {
            "text": ": The Agent fills the template and generates the complete document"
          }
        ],
        "sourceId": "body-484",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Review and archive",
            "bold": true
          },
          {
            "text": ": Legal reviews, saves to Library, and logs in the table"
          }
        ],
        "sourceId": "body-485",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-486",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Generate NDA from Library template:\n\nTemplate: Library / Legal/Templates/NDA_Template.docx\nAgreement type: Mutual NDA\nCounterparty info:\n- Company: [Counterparty Name]\n- Registered in: [City, Country]\n- Signatory: [Name, Title]\n\nKey terms:\n- Confidentiality period: 3 years\n- Governing law: Italian law\n- Dispute resolution: Milan arbitration\n- Confidential scope: Technical data, business plans, customer data\n- Exclusions: Already public information, lawfully obtained from third parties\n\nOutput: Word document, preserve template formatting, replace all placeholders.\nConstraint: Do not add clauses not in the template, do not modify standard clause wording."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Generate NDA from Library template:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Template: Library / Legal/Templates/NDA_Template.docx"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Agreement type: Mutual NDA"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Counterparty info:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Company: [Counterparty Name]"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Registered in: [City, Country]"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Signatory: [Name, Title]"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Key terms:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Confidentiality period: 3 years"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Governing law: Italian law"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Dispute resolution: Milan arbitration"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Confidential scope: Technical data, business plans, customer data"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Exclusions: Already public information, lawfully obtained from third parties"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output: Word document, preserve template formatting, replace all placeholders."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Constraint: Do not add clauses not in the template, do not modify standard clause wording."
                  }
                ],
                "sourceId": "body-487/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-487"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-488",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-070.png",
        "alt": "",
        "sourceId": "body-489",
        "width": 552,
        "height": 249
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A complete NDA Word document, ready to send to the counterparty"
          }
        ],
        "sourceId": "body-490",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All placeholders replaced, template formatting preserved"
          }
        ],
        "sourceId": "body-491",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A record created in the \"Contract Register\" Base (contract name, counterparty, type, signing date, expiry date)"
          }
        ],
        "sourceId": "body-492",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 The Agent only fills parameters from the template — it won't write its own clauses. If a clause isn't in the template, the Agent will say \"corresponding clause not found in template.\" Legal only needs to verify the parameters, not write from scratch."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "💡 The Agent only fills parameters from the template — it won't write its own clauses. If a clause isn't in the template, the Agent will say \"corresponding clause not found in template.\" Legal only needs to verify the parameters, not write from scratch."
                  }
                ],
                "sourceId": "body-493/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-493"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-071.png",
        "alt": "",
        "sourceId": "body-494",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-072.png",
        "alt": "",
        "sourceId": "body-495",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-073.png",
        "alt": "",
        "sourceId": "body-496",
        "width": 552,
        "height": 273
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario C: Contract Expiry & Renewal Tracking — Auto-Remind Before the Window Closes",
            "bold": true
          }
        ],
        "sourceId": "body-497",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-498",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Last year's supplier agreement auto-renewed because we forgot to send the termination notice 60 days before. This happens 2–3 times a year, and we have to renegotiate every time.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Last year's supplier agreement auto-renewed because we forgot to send the termination notice 60 days before. This happens 2–3 times a year, and we have to renegotiate every time.\""
                  }
                ],
                "sourceId": "body-499/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-499"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-500",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-074.png",
        "alt": "",
        "sourceId": "body-501",
        "width": 552,
        "height": 270
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-075.png",
        "alt": "",
        "sourceId": "body-502",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-076.png",
        "alt": "",
        "sourceId": "body-503",
        "width": 552,
        "height": 273
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Build the contract register",
            "bold": true
          },
          {
            "text": ": Create a Base recording each contract's key info"
          }
        ],
        "sourceId": "body-504",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set expiry reminders",
            "bold": true
          },
          {
            "text": ": Use a scheduled task to scan the register and auto-remind before expiry"
          }
        ],
        "sourceId": "body-505",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Track renewal status",
            "bold": true
          },
          {
            "text": ": Record renewal progress in the table (notified, negotiating, renewed, terminated)"
          }
        ],
        "sourceId": "body-506",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Field",
            "Type",
            "Description"
          ],
          [
            "Contract name",
            "Text",
            "Short name"
          ],
          [
            "Counterparty",
            "Text",
            "Signing party name"
          ],
          [
            "Contract type",
            "Single select",
            "NDA / Supplier agreement / Distribution / Lease / Other"
          ],
          [
            "Signing date",
            "Date",
            "Date signed"
          ],
          [
            "Expiry date",
            "Date",
            "Date expires"
          ],
          [
            "Notice period (days)",
            "Number",
            "Days before expiry to send termination notice"
          ],
          [
            "Auto-renewal",
            "Checkbox",
            "Whether it auto-renews"
          ],
          [
            "Contract file",
            "Attachment",
            "Library file link"
          ],
          [
            "Renewal status",
            "Single select",
            "Active / Pending renewal / Negotiating / Terminated"
          ],
          [
            "Notes",
            "Text",
            "Special clause notes"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Field"
                  }
                ],
                "sourceId": "body-507/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Type"
                  }
                ],
                "sourceId": "body-507/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-507/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Contract name"
                  }
                ],
                "sourceId": "body-507/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Text"
                  }
                ],
                "sourceId": "body-507/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Short name"
                  }
                ],
                "sourceId": "body-507/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Counterparty"
                  }
                ],
                "sourceId": "body-507/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Text"
                  }
                ],
                "sourceId": "body-507/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Signing party name"
                  }
                ],
                "sourceId": "body-507/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Contract type"
                  }
                ],
                "sourceId": "body-507/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Single select"
                  }
                ],
                "sourceId": "body-507/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "NDA / Supplier agreement / Distribution / Lease / Other"
                  }
                ],
                "sourceId": "body-507/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Signing date"
                  }
                ],
                "sourceId": "body-507/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Date"
                  }
                ],
                "sourceId": "body-507/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Date signed"
                  }
                ],
                "sourceId": "body-507/r4/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Expiry date"
                  }
                ],
                "sourceId": "body-507/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Date"
                  }
                ],
                "sourceId": "body-507/r5/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Date expires"
                  }
                ],
                "sourceId": "body-507/r5/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Notice period (days)"
                  }
                ],
                "sourceId": "body-507/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Number"
                  }
                ],
                "sourceId": "body-507/r6/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Days before expiry to send termination notice"
                  }
                ],
                "sourceId": "body-507/r6/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Auto-renewal"
                  }
                ],
                "sourceId": "body-507/r7/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Checkbox"
                  }
                ],
                "sourceId": "body-507/r7/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Whether it auto-renews"
                  }
                ],
                "sourceId": "body-507/r7/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Contract file"
                  }
                ],
                "sourceId": "body-507/r8/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Attachment"
                  }
                ],
                "sourceId": "body-507/r8/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Library file link"
                  }
                ],
                "sourceId": "body-507/r8/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Renewal status"
                  }
                ],
                "sourceId": "body-507/r9/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Single select"
                  }
                ],
                "sourceId": "body-507/r9/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Active / Pending renewal / Negotiating / Terminated"
                  }
                ],
                "sourceId": "body-507/r9/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Notes"
                  }
                ],
                "sourceId": "body-507/r10/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Text"
                  }
                ],
                "sourceId": "body-507/r10/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Special clause notes"
                  }
                ],
                "sourceId": "body-507/r10/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-507"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Scheduled Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-508",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Run on the 1st of each month at 9:00 AM:\n- Query the \"Contract Register\" Base\n- Filter: Expiry date within next 30 days AND renewal status = \"Active\"\n- Output: Contracts expiring soon - Contract name, Counterparty, Expiry date, Days remaining, Auto-renewal, Notice deadline\n- Write to \"Expiry Reminder\" view in the table\n- Also output summary in conversation"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Run on the 1st of each month at 9:00 AM:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Query the \"Contract Register\" Base"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Filter: Expiry date within next 30 days AND renewal status = \"Active\""
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Output: Contracts expiring soon - Contract name, Counterparty, Expiry date, Days remaining, Auto-renewal, Notice deadline"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Write to \"Expiry Reminder\" view in the table"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Also output summary in conversation"
                  }
                ],
                "sourceId": "body-509/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-509"
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 The scheduled task runs monthly. Legal opens AOS Work on the first working day and sees which contracts are expiring in the next 30 days. No longer hand-digging through Excel or emails."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "💡 The scheduled task runs monthly. Legal opens AOS Work on the first working day and sees which contracts are expiring in the next 30 days. No longer hand-digging through Excel or emails."
                  }
                ],
                "sourceId": "body-511/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-511"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-077.png",
        "alt": "",
        "sourceId": "body-512",
        "width": 552,
        "height": 273
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-513",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles contract review and expiry tracking; you focus on legal decisions."
          }
        ],
        "sourceId": "body-514"
      }
    ]
  },
  {
    "id": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
    "title": "3.3 Finance: Invoice Processing, Reconciliation & Reporting",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 18,
    "prev": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
    "next": "scenario-4-designers-ai-image-generation-fabric-recoloring",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Finance work revolves around \"numbers\" and \"vouchers\" — processing hundreds of invoices a month, reconciling with suppliers, tracking payment progress. Repetitive work with very little room for error. This chapter shows you how to automate the mechanical work: batch invoice recognition with auto-entry, reconciliation across systems in one task, and auto-reminders for overdue payments."
          }
        ],
        "sourceId": "body-516"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Finance Workflow",
            "bold": true
          }
        ],
        "sourceId": "body-517",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're in accounts payable or financial planning, the daily finance work follows similar logic:"
          }
        ],
        "sourceId": "body-518"
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Invoice processing",
            "Manually extract invoices from email/system, enter one by one",
            "Hundreds of invoices a month, time-consuming and error-prone"
          ],
          [
            "2. Reconciliation",
            "Compare supplier invoices against internal records in Excel",
            "Hours of work at high volume, hard to locate discrepancies"
          ],
          [
            "3. Payment tracking",
            "Manual check of due invoices, manual payment scheduling",
            "Easy to miss due invoices, affecting supplier relationships"
          ],
          [
            "4. Report generation",
            "Manual data aggregation, financial report creation",
            "Scattered data sources, slow aggregation"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-519/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-519/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-519/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Invoice processing"
                  }
                ],
                "sourceId": "body-519/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manually extract invoices from email/system, enter one by one"
                  }
                ],
                "sourceId": "body-519/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Hundreds of invoices a month, time-consuming and error-prone"
                  }
                ],
                "sourceId": "body-519/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Reconciliation"
                  }
                ],
                "sourceId": "body-519/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compare supplier invoices against internal records in Excel"
                  }
                ],
                "sourceId": "body-519/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Hours of work at high volume, hard to locate discrepancies"
                  }
                ],
                "sourceId": "body-519/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Payment tracking"
                  }
                ],
                "sourceId": "body-519/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manual check of due invoices, manual payment scheduling"
                  }
                ],
                "sourceId": "body-519/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Easy to miss due invoices, affecting supplier relationships"
                  }
                ],
                "sourceId": "body-519/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "4. Report generation"
                  }
                ],
                "sourceId": "body-519/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manual data aggregation, financial report creation"
                  }
                ],
                "sourceId": "body-519/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scattered data sources, slow aggregation"
                  }
                ],
                "sourceId": "body-519/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-519"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, these four steps happen in one platform: AI auto-recognizes invoices, batch-reconciles, monitors due dates, and generates reports. Finance only needs to review and confirm."
          }
        ],
        "sourceId": "body-520"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Finance Scenario Stack",
            "bold": true
          }
        ],
        "sourceId": "body-521",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Invoice register, reconciliation records, payment calendar",
            "Throughout — all structured data goes into tables",
            "Set up the invoice register structure first"
          ],
          [
            "Library",
            "Invoice file storage, reconciliation report archiving",
            "Invoice originals and reconciliation reports go into Library",
            "Watch access permissions for financial files"
          ],
          [
            "SAP/ERP Integration",
            "Internal accounts payable data",
            "Scenario B — compare supplier invoices against internal records",
            "Confirm system integration with IT"
          ],
          [
            "Scheduled Task",
            "Expiry reminders, auto-push",
            "Scenario C — auto-reminder for due invoices",
            "No manual intervention after setup"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool / Skill"
                  }
                ],
                "sourceId": "body-522/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-522/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How we use it"
                  }
                ],
                "sourceId": "body-522/r0/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Note"
                  }
                ],
                "sourceId": "body-522/r0/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-522/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Invoice register, reconciliation records, payment calendar"
                  }
                ],
                "sourceId": "body-522/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Throughout — all structured data goes into tables"
                  }
                ],
                "sourceId": "body-522/r1/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up the invoice register structure first"
                  }
                ],
                "sourceId": "body-522/r1/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Library"
                  }
                ],
                "sourceId": "body-522/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Invoice file storage, reconciliation report archiving"
                  }
                ],
                "sourceId": "body-522/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Invoice originals and reconciliation reports go into Library"
                  }
                ],
                "sourceId": "body-522/r2/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Watch access permissions for financial files"
                  }
                ],
                "sourceId": "body-522/r2/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "SAP/ERP Integration"
                  }
                ],
                "sourceId": "body-522/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Internal accounts payable data"
                  }
                ],
                "sourceId": "body-522/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario B — compare supplier invoices against internal records"
                  }
                ],
                "sourceId": "body-522/r3/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Confirm system integration with IT"
                  }
                ],
                "sourceId": "body-522/r3/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scheduled Task"
                  }
                ],
                "sourceId": "body-522/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Expiry reminders, auto-push"
                  }
                ],
                "sourceId": "body-522/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario C — auto-reminder for due invoices"
                  }
                ],
                "sourceId": "body-522/r4/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "No manual intervention after setup"
                  }
                ],
                "sourceId": "body-522/r4/c3/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-522"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Batch Invoice Processing — Hundreds of Invoices, Auto-Recognized & Auto-Entered",
            "bold": true
          }
        ],
        "sourceId": "body-523",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-524",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every month, 200–300 invoices come in from supplier emails. Each is a different PDF format. I have to manually extract supplier name, invoice number, amount, date, tax — and enter them into the system. This alone takes two days.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Every month, 200–300 invoices come in from supplier emails. Each is a different PDF format. I have to manually extract supplier name, invoice number, amount, date, tax — and enter them into the system. This alone takes two days.\""
                  }
                ],
                "sourceId": "body-525/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-525"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-526",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-078.png",
        "alt": "",
        "sourceId": "body-527",
        "width": 552,
        "height": 273
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upload the invoice files.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Upload a batch of invoices (PDF/scans) to the AOS Work conversation, or extract attachments directly from your email (if you've connected your email Connector). Different suppliers, different formats — all mixed together."
          }
        ],
        "sourceId": "body-528",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-recognizes and extracts.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI reads each invoice and extracts key fields:"
          }
        ],
        "sourceId": "body-529",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Field",
            "Description"
          ],
          [
            "Supplier name",
            "Billing company name"
          ],
          [
            "Invoice number",
            "Unique ID"
          ],
          [
            "Invoice date",
            "Date of issue"
          ],
          [
            "Due date",
            "Payment deadline"
          ],
          [
            "Net amount",
            "Amount before tax"
          ],
          [
            "Tax amount",
            "VAT / IVA amount"
          ],
          [
            "Gross amount",
            "Total amount"
          ],
          [
            "Currency",
            "EUR / USD / GBP etc."
          ],
          [
            "PO number",
            "Purchase order number (if available)"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Field"
                  }
                ],
                "sourceId": "body-530/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-530/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Supplier name"
                  }
                ],
                "sourceId": "body-530/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Billing company name"
                  }
                ],
                "sourceId": "body-530/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Invoice number"
                  }
                ],
                "sourceId": "body-530/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Unique ID"
                  }
                ],
                "sourceId": "body-530/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Invoice date"
                  }
                ],
                "sourceId": "body-530/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Date of issue"
                  }
                ],
                "sourceId": "body-530/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Due date"
                  }
                ],
                "sourceId": "body-530/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Payment deadline"
                  }
                ],
                "sourceId": "body-530/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Net amount"
                  }
                ],
                "sourceId": "body-530/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Amount before tax"
                  }
                ],
                "sourceId": "body-530/r5/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tax amount"
                  }
                ],
                "sourceId": "body-530/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "VAT / IVA amount"
                  }
                ],
                "sourceId": "body-530/r6/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Gross amount"
                  }
                ],
                "sourceId": "body-530/r7/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Total amount"
                  }
                ],
                "sourceId": "body-530/r7/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Currency"
                  }
                ],
                "sourceId": "body-530/r8/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "EUR / USD / GBP etc."
                  }
                ],
                "sourceId": "body-530/r8/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "PO number"
                  }
                ],
                "sourceId": "body-530/r9/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Purchase order number (if available)"
                  }
                ],
                "sourceId": "body-530/r9/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-530"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-validates.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI checks data consistency:"
          }
        ],
        "sourceId": "body-531",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Validation",
            "Description"
          ],
          [
            "Amount calculation",
            "Net + Tax = Gross"
          ],
          [
            "Tax rate check",
            "Does the tax rate match local VAT (e.g. Italy standard 22%)"
          ],
          [
            "Duplicate detection",
            "Same supplier, same amount, similar dates"
          ],
          [
            "PO matching",
            "Does the invoice amount match the PO"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Validation"
                  }
                ],
                "sourceId": "body-532/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-532/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Amount calculation"
                  }
                ],
                "sourceId": "body-532/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Net + Tax = Gross"
                  }
                ],
                "sourceId": "body-532/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tax rate check"
                  }
                ],
                "sourceId": "body-532/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Does the tax rate match local VAT (e.g. Italy standard 22%)"
                  }
                ],
                "sourceId": "body-532/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Duplicate detection"
                  }
                ],
                "sourceId": "body-532/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Same supplier, same amount, similar dates"
                  }
                ],
                "sourceId": "body-532/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "PO matching"
                  }
                ],
                "sourceId": "body-532/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Does the invoice amount match the PO"
                  }
                ],
                "sourceId": "body-532/r4/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-532"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Flag anomalies for human review.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Valid invoices are auto-entered; anomalies (calculation errors, suspected duplicates, PO mismatches) are flagged for you to confirm."
          }
        ],
        "sourceId": "body-533",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Write to the Base.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "All invoice data is written to the table, organized by supplier, date, and status. Invoice originals are stored in Library and linked to the records."
          }
        ],
        "sourceId": "body-534",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-535",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Batch process the following invoice files (PDF), extract key fields:\n- Supplier Name, Invoice Number, Invoice Date, Due Date, Net Amount, Tax Amount, Gross Amount, Currency, PO Number\n\nAutomated validation:\n1. Verify amount calculation (Net + Tax = Gross)\n2. Verify tax rate compliance with Italian VAT standard rate (22%) or reduced rates\n3. Detect duplicate invoices (same supplier, same amount, similar dates)\n4. PO number matching check\n\nOutput Requirements:\n1. Auto-write validated invoices to Base\n2. Flag anomalous invoices separately, list exception reasons\n3. Store invoice originals in Library and link to corresponding records\n4. Generate processing summary: total invoices, passed count, exception count"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Batch process the following invoice files (PDF), extract key fields:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Supplier Name, Invoice Number, Invoice Date, Due Date, Net Amount, Tax Amount, Gross Amount, Currency, PO Number"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Automated validation:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Verify amount calculation (Net + Tax = Gross)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Verify tax rate compliance with Italian VAT standard rate (22%) or reduced rates"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Detect duplicate invoices (same supplier, same amount, similar dates)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. PO number matching check"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output Requirements:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Auto-write validated invoices to Base"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Flag anomalous invoices separately, list exception reasons"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Store invoice originals in Library and link to corresponding records"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Generate processing summary: total invoices, passed count, exception count"
                  }
                ],
                "sourceId": "body-536/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-536"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-537",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-079.png",
        "alt": "",
        "sourceId": "body-538",
        "width": 552,
        "height": 271
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-080.png",
        "alt": "",
        "sourceId": "body-539",
        "width": 552,
        "height": 271
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All invoices auto-recognized, extracted, and validated in one pass"
          }
        ],
        "sourceId": "body-540",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Valid invoices auto-entered, anomalies flagged separately"
          }
        ],
        "sourceId": "body-541",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Processing summary: total, passed, exceptions"
          }
        ],
        "sourceId": "body-542",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Invoice originals auto-archived, traceable anytime"
          }
        ],
        "sourceId": "body-543",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Invoice Data Summary & Visualization",
            "bold": true
          }
        ],
        "sourceId": "body-544",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After entry, use natural language to analyze:"
          }
        ],
        "sourceId": "body-545"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-081.png",
        "alt": "",
        "sourceId": "body-546",
        "width": 552,
        "height": 273
      },
      {
        "type": "table",
        "rows": [
          [
            "Summarize this month's total invoice amount by supplier, sort descending, and create a Top 10 supplier pie chart."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Summarize this month's total invoice amount by supplier, sort descending, and create a Top 10 supplier pie chart."
                  }
                ],
                "sourceId": "body-547/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-547"
      },
      {
        "type": "table",
        "rows": [
          [
            "List all due-but-unpaid invoices, sort by due date ascending, flag overdue days."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "List all due-but-unpaid invoices, sort by due date ascending, flag overdue days."
                  }
                ],
                "sourceId": "body-549/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-549"
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Under EU e-Invoicing Directive (2014/55/EU) and Italy's SDI (Sistema di Interscambio), electronic invoices must meet specific format standards. AI-extracted data is for assisted entry. Final financial confirmation and payment approval must be done by the right people. "
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: Under EU e-Invoicing Directive (2014/55/EU) and Italy's SDI (Sistema di Interscambio), electronic invoices must meet specific format standards. AI-extracted data is for assisted entry. Final financial confirmation and payment approval must be done by the right people. "
                  }
                ],
                "sourceId": "body-551/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-551"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-082.png",
        "alt": "",
        "sourceId": "body-552",
        "width": 552,
        "height": 272
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-083.png",
        "alt": "",
        "sourceId": "body-553",
        "width": 552,
        "height": 272
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-554",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles invoice processing and reconciliation; you focus on financial decisions."
          }
        ],
        "sourceId": "body-555"
      }
    ]
  },
  {
    "id": "scenario-4-designers-ai-image-generation-fabric-recoloring",
    "title": "3.4 Designers: AI Image Generation for Fashion",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 19,
    "prev": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
    "next": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A designer's work combines creative vision with hands-on execution — finding inspiration, sketching, color-matching, building lookbooks. This chapter shows you how to hand the repetitive visual work to the Agent: preview sketches on different fabrics before sampling, recolor flat sketches, and let designers spend their time on creative decisions."
          }
        ],
        "sourceId": "body-557"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Designer Workflow",
            "bold": true
          }
        ],
        "sourceId": "body-558",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a fashion designer or a visual designer, the daily workflow is pretty much like this:"
          }
        ],
        "sourceId": "body-559"
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Moodboard collection",
            "Browse Pinterest, Instagram — manually screenshot",
            "Manual browsing is slow, and images are scattered around, not easy to find and compare"
          ],
          [
            "2. Sketching",
            "Hand-drawn or CAD software, one by one",
            "Every colorway needs a separate drawing"
          ],
          [
            "3. Color confirmation",
            "Sample → photo → compare → approve",
            "2–3 week cycle, back-and-forth communication"
          ],
          [
            "4. Flat lays / Lookbooks",
            "Studio shoot or 3D render",
            "Tight schedule, high cost, too many SKUs"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-560/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-560/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-560/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Moodboard collection"
                  }
                ],
                "sourceId": "body-560/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Browse Pinterest, Instagram — manually screenshot"
                  }
                ],
                "sourceId": "body-560/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manual browsing is slow, and images are scattered around, not easy to find and compare"
                  }
                ],
                "sourceId": "body-560/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Sketching"
                  }
                ],
                "sourceId": "body-560/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Hand-drawn or CAD software, one by one"
                  }
                ],
                "sourceId": "body-560/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Every colorway needs a separate drawing"
                  }
                ],
                "sourceId": "body-560/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Color confirmation"
                  }
                ],
                "sourceId": "body-560/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sample → photo → compare → approve"
                  }
                ],
                "sourceId": "body-560/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2–3 week cycle, back-and-forth communication"
                  }
                ],
                "sourceId": "body-560/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "4. Flat lays / Lookbooks"
                  }
                ],
                "sourceId": "body-560/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Studio shoot or 3D render"
                  }
                ],
                "sourceId": "body-560/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tight schedule, high cost, too many SKUs"
                  }
                ],
                "sourceId": "body-560/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-560"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, steps 1–4 can be handled by the OpenAI Image Generation Connector or Nano Banana Image Generator, depending on the model you want to use. Output goes directly to Library, linked to the Base."
          }
        ],
        "sourceId": "body-561"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Designer Scenario Stack",
            "bold": true
          }
        ],
        "sourceId": "body-562",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool",
            "Use",
            "Where to find"
          ],
          [
            "OpenAI Image Generation Connector \n",
            "8 generation/editing capabilities for fashion e-commerce design teams: upscale, model-to-lifestyle, garment-to-flat-sketch, flat-lay-to-3D-wear, fabric recolor, half-body completion, and reference-style generation",
            "Explore → Connectors → OpenAI Image Generation\n"
          ],
          [
            "Library",
            "Store and manage design assets, output",
            "Sidebar → Library"
          ],
          [
            "Base",
            "Manage designs, link to SKUs, track approvals",
            "Sidebar → Base"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool"
                  }
                ],
                "sourceId": "body-563/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Use"
                  }
                ],
                "sourceId": "body-563/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Where to find"
                  }
                ],
                "sourceId": "body-563/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "OpenAI Image Generation Connector "
                  }
                ],
                "sourceId": "body-563/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "8 generation/editing capabilities for fashion e-commerce design teams: upscale, model-to-lifestyle, garment-to-flat-sketch, flat-lay-to-3D-wear, fabric recolor, half-body completion, and reference-style generation"
                  }
                ],
                "sourceId": "body-563/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Explore → Connectors → OpenAI Image Generation"
                  }
                ],
                "sourceId": "body-563/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Library"
                  }
                ],
                "sourceId": "body-563/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Store and manage design assets, output"
                  }
                ],
                "sourceId": "body-563/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sidebar → Library"
                  }
                ],
                "sourceId": "body-563/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-563/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manage designs, link to SKUs, track approvals"
                  }
                ],
                "sourceId": "body-563/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sidebar → Base"
                  }
                ],
                "sourceId": "body-563/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-563"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sketch to Fabric Preview — See How It Looks Before Sampling",
            "bold": true
          }
        ],
        "sourceId": "body-564",
        "headingLevel": 2
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-084.png",
        "alt": "",
        "sourceId": "body-565",
        "width": 552,
        "height": 274
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-085.png",
        "alt": "",
        "sourceId": "body-566",
        "width": 552,
        "height": 273
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-567",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "After finishing a sketch, designers want to see how it looks in different fabrics. Traditionally, this means waiting for samples — a 2–3 week cycle. By the time the sample arrives, the design direction may have shifted, or the fabric is out of season. Being able to preview how a sketch looks on different fabrics — before committing to sampling — is critical for fast iteration."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "After finishing a sketch, designers want to see how it looks in different fabrics. Traditionally, this means waiting for samples — a 2–3 week cycle. By the time the sample arrives, the design direction may have shifted, or the fabric is out of season. Being able to preview how a sketch looks on different fabrics — before committing to sampling — is critical for fast iteration."
                  }
                ],
                "sourceId": "body-568/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-568"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-569",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upload the sketch: Upload the line art sketch to the conversation or Library"
          }
        ],
        "sourceId": "body-570",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Select fabric: Upload fabric photos to Library, or describe the fabric in natural language (e.g., \"heavyweight cotton twill, stone-washed finish\")"
          }
        ],
        "sourceId": "body-571",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generate preview: In the conversation, click the \"+\" menu, choose Connector, and select OpenAI Image Generation or Nano Banana depending on your preferred model. The Agent applies the fabric to the sketch, preserving all design details"
          }
        ],
        "sourceId": "body-572",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Try color variations: Using the same fabric, generate previews in different colors to compare (e.g., navy vs. olive vs. black)"
          }
        ],
        "sourceId": "body-573",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Save and tag: Output PNGs are saved to Library with tags (sketch ID, fabric type, color, season)"
          }
        ],
        "sourceId": "body-574",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-575",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Apply this sketch to the following fabrics and generate flat lay previews:\n\n1. Heavyweight cotton twill, stone-washed (upload fabric photo from Library)\n2. Lightweight linen, natural (describe: \"lightweight linen, natural beige tone\")\n\nFor each fabric, generate 3 color variations: navy, olive, black.\nSave all outputs to Library folder \"2026SS/Previews\", tag with: sketch=SK-2026-042, season=2026SS."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Apply this sketch to the following fabrics and generate flat lay previews:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Heavyweight cotton twill, stone-washed (upload fabric photo from Library)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Lightweight linen, natural (describe: \"lightweight linen, natural beige tone\")"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "For each fabric, generate 3 color variations: navy, olive, black."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Save all outputs to Library folder \"2026SS/Previews\", tag with: sketch=SK-2026-042, season=2026SS."
                  }
                ],
                "sourceId": "body-576/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-576"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-577",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-086.png",
        "alt": "",
        "sourceId": "body-578",
        "width": 552,
        "height": 273
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "2 fabrics × 3 colors = 6 preview images"
          }
        ],
        "sourceId": "body-579",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All saved to Library with consistent tags"
          }
        ],
        "sourceId": "body-580",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Design decisions made before sampling — no waiting for physical samples"
          }
        ],
        "sourceId": "body-581",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "💡 Tips",
            "bold": true
          }
        ],
        "sourceId": "body-582",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Brand assets in Library: Save your brand logo and design assets to Library in advance. When generating images, the AI can directly use your brand design library — no manual downloading or image editing."
          },
          {
            "text": "\n"
          },
          {
            "text": "\n"
          },
          {
            "text": "Output specifications: You can specify output requirements in your prompt — PNG or JPG format, resolution, dimensions, etc. The AI will generate images to your exact specifications."
          }
        ],
        "sourceId": "body-583"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Extra Tip",
            "bold": true
          }
        ],
        "sourceId": "body-584",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Want the team to review and approve final designs? Create a Base table to track design status:"
          }
        ],
        "sourceId": "body-585"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-087.png",
        "alt": "",
        "sourceId": "body-586",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Designing",
            "bold": true
          },
          {
            "text": " — sketch in progress"
          }
        ],
        "sourceId": "body-587",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Design Approved",
            "bold": true
          },
          {
            "text": " — team has reviewed and approved"
          }
        ],
        "sourceId": "body-588",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sampling",
            "bold": true
          },
          {
            "text": " — sent to factory for sample"
          }
        ],
        "sourceId": "body-589",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sample Received",
            "bold": true
          },
          {
            "text": " — physical sample arrived for final check"
          }
        ],
        "sourceId": "body-590",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Link each preview image to its corresponding record, so the team can see the full history from sketch to sample."
          }
        ],
        "sourceId": "body-591"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set permissions for collaboration",
            "bold": true
          },
          {
            "text": ": Share the Base with your team and assign roles:"
          }
        ],
        "sourceId": "body-592"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Admin",
            "bold": true
          },
          {
            "text": " — design leads can manage the table, update status, approve designs"
          }
        ],
        "sourceId": "body-593",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Reader",
            "bold": true
          },
          {
            "text": " — team members (merchandisers, product managers) can view progress and leave feedback, but can't modify records"
          }
        ],
        "sourceId": "body-594",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This way, everyone stays aligned on where each design stands — without endless email chains or status meetings."
          }
        ],
        "sourceId": "body-595"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What the Image Generation Connector Can Do",
            "bold": true
          }
        ],
        "sourceId": "body-596",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Image Generation Connector (OpenAI Image Generation or Nano Banana) supports the following capabilities:"
          }
        ],
        "sourceId": "body-597"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Text-to-image fashion concepts",
            "bold": true
          },
          {
            "text": " — Create original garments, outfits, models, poses, locations, lighting, and styling from a written description."
          }
        ],
        "sourceId": "body-598",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Product and e-commerce images",
            "bold": true
          },
          {
            "text": " — Studio shots, mannequin imagery, clean white-background product photos, editorial campaigns, and lookbook visuals."
          }
        ],
        "sourceId": "body-599",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Garment recoloring",
            "bold": true
          },
          {
            "text": " — Change colors while preserving the garment's shape, construction, and fabric texture."
          }
        ],
        "sourceId": "body-600",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Flat sketch to draped 3D rendering",
            "bold": true
          },
          {
            "text": " — Turn a technical flat or flat-lay garment reference into a realistic worn or draped version."
          }
        ],
        "sourceId": "body-601",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Garment to technical flat sketch",
            "bold": true
          },
          {
            "text": " — Convert a garment image into a clean front/back technical fashion drawing."
          }
        ],
        "sourceId": "body-602",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Studio model to lifestyle scene",
            "bold": true
          },
          {
            "text": " — Place a garment or model into settings such as a street, resort, office, studio, or editorial environment."
          }
        ],
        "sourceId": "body-603",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upscaling and enhancement",
            "bold": true
          },
          {
            "text": " — Improve image quality, sharpness, presentation, and visual polish."
          }
        ],
        "sourceId": "body-604",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Half-body to full-body completion",
            "bold": true
          },
          {
            "text": " — Extend a partial model image when you provide a suitable full-body pose reference."
          }
        ],
        "sourceId": "body-605",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Reference-style generation",
            "bold": true
          },
          {
            "text": " — Use supplied reference images to guide the visual direction, such as lighting, composition, mood, or styling."
          }
        ],
        "sourceId": "body-606",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Example Requests",
            "bold": true
          }
        ],
        "sourceId": "body-607",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Create a luxury campaign image of a black silk evening dress in a modern Parisian interior.\""
          }
        ],
        "sourceId": "body-608",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Recolor this jacket from beige to deep burgundy while preserving the fabric texture.\""
          }
        ],
        "sourceId": "body-609",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Turn this garment flat sketch into a realistic 3D fashion rendering on a model.\""
          }
        ],
        "sourceId": "body-610",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Create five editorial outfit concepts inspired by minimalist Scandinavian tailoring.\""
          }
        ],
        "sourceId": "body-611",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Convert this garment photo into a clean technical flat sketch.\""
          }
        ],
        "sourceId": "body-612",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Place this studio product image in a natural outdoor lifestyle setting.\""
          }
        ],
        "sourceId": "body-613",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles fabric previews and visual variations; you focus on creative direction."
          }
        ],
        "sourceId": "body-614"
      }
    ]
  },
  {
    "id": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
    "title": "3.5 E-commerce Operations: Multi-Channel Product Content Generation",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 20,
    "prev": "scenario-4-designers-ai-image-generation-fabric-recoloring",
    "next": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "E-commerce operations revolve around \"listing\" and \"numbers\" — each channel has different copy formats, each platform has different rules, and every week there's data to review and reports to produce. This chapter shows you how to upgrade copy adaptation and data analysis from \"manual mode\" to \"semi-auto mode.\""
          }
        ],
        "sourceId": "body-616"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The E-commerce Operations Workflow",
            "bold": true
          }
        ],
        "sourceId": "body-617",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Product copy",
            "Manual rewrite per channel, manual translation",
            "Format adaptation takes time, multilingual quality is inconsistent"
          ],
          [
            "2. Data analysis",
            "Export from each platform, pivot tables in Excel",
            "Data scattered across platforms, weekly repetitive work"
          ],
          [
            "3. Product listing",
            "Manual attribute entry, image upload, description editing",
            "Low efficiency at high SKU volume"
          ],
          [
            "4. Inventory & pricing monitoring",
            "Manual stock checks, competitor price tracking",
            "Out-of-stock losses, price gaps missed"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-618/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-618/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-618/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Product copy"
                  }
                ],
                "sourceId": "body-618/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manual rewrite per channel, manual translation"
                  }
                ],
                "sourceId": "body-618/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Format adaptation takes time, multilingual quality is inconsistent"
                  }
                ],
                "sourceId": "body-618/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Data analysis"
                  }
                ],
                "sourceId": "body-618/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Export from each platform, pivot tables in Excel"
                  }
                ],
                "sourceId": "body-618/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Data scattered across platforms, weekly repetitive work"
                  }
                ],
                "sourceId": "body-618/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Product listing"
                  }
                ],
                "sourceId": "body-618/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manual attribute entry, image upload, description editing"
                  }
                ],
                "sourceId": "body-618/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Low efficiency at high SKU volume"
                  }
                ],
                "sourceId": "body-618/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "4. Inventory & pricing monitoring"
                  }
                ],
                "sourceId": "body-618/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manual stock checks, competitor price tracking"
                  }
                ],
                "sourceId": "body-618/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Out-of-stock losses, price gaps missed"
                  }
                ],
                "sourceId": "body-618/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-618"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, steps 1–2 can be handled by the Agent — multi-channel, multi-language copy generated simultaneously, data analyzed directly from the table."
          }
        ],
        "sourceId": "body-619"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: E-commerce Operations Stack",
            "bold": true
          }
        ],
        "sourceId": "body-620",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool",
            "Use",
            "Where to find"
          ],
          [
            "Product Knowledge Base Skill (Coming Soon)",
            "Pull product info from Library/PLM",
            "Explore → search Product Knowledge Base (Note: Requires product data to be integrated first)"
          ],
          [
            "Base",
            "Store product data, copy management, data analysis",
            "Sidebar → Base\n"
          ],
          [
            "Library",
            "Manage product images, assets",
            "Sidebar → Library"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool"
                  }
                ],
                "sourceId": "body-621/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Use"
                  }
                ],
                "sourceId": "body-621/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Where to find"
                  }
                ],
                "sourceId": "body-621/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Product Knowledge Base Skill (Coming Soon)"
                  }
                ],
                "sourceId": "body-621/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pull product info from Library/PLM"
                  }
                ],
                "sourceId": "body-621/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Explore → search Product Knowledge Base (Note: Requires product data to be integrated first)"
                  }
                ],
                "sourceId": "body-621/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-621/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Store product data, copy management, data analysis"
                  }
                ],
                "sourceId": "body-621/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sidebar → Base"
                  }
                ],
                "sourceId": "body-621/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Library"
                  }
                ],
                "sourceId": "body-621/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manage product images, assets"
                  }
                ],
                "sourceId": "body-621/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sidebar → Library"
                  }
                ],
                "sourceId": "body-621/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-621"
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 Don't have a product knowledge base yet? Start by consolidating your existing product data into a Base. You can add product images (Base supports image attachments), along with key facts like fabric, fit, color, design features, and technical specs. Once each product has clear images and structured data in one place, your Agent can start content generating based on this."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "💡 "
                  },
                  {
                    "text": "Don't have a product knowledge base yet?",
                    "bold": true
                  },
                  {
                    "text": " Start by consolidating your existing product data into a Base. You can add product images (Base supports image attachments), along with key facts like fabric, fit, color, design features, and technical specs. Once each product has clear images and structured data in one place, your Agent can start content generating based on this."
                  }
                ],
                "sourceId": "body-623/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-623"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Multi-Channel Product Copy — One Product, Three Channels, Three Languages",
            "bold": true
          }
        ],
        "sourceId": "body-624",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-625",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Same product: the website needs brand tone, Amazon needs SEO keywords, Zalando needs concise specs. Each channel also needs Italian, English, and German versions. One SKU = 9 pieces of copy. 100 SKUs = 900 pieces. Writing by hand? Not practical."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Same product: the website needs brand tone, Amazon needs SEO keywords, Zalando needs concise specs. Each channel also needs Italian, English, and German versions. One SKU = 9 pieces of copy. 100 SKUs = 900 pieces. Writing by hand? Not practical."
                  }
                ],
                "sourceId": "body-626/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-626"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-627",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-088.png",
        "alt": "",
        "sourceId": "body-628",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-089.png",
        "alt": "",
        "sourceId": "body-629",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-090.png",
        "alt": "",
        "sourceId": "body-630",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-091.png",
        "alt": "",
        "sourceId": "body-631",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Pull product info from the product knowledge base / Library / Base (fabric, fit, color, design features) or consolidate your existing product data into Base "
          }
        ],
        "sourceId": "body-632",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In the conversation, specify channel rules and language requirements"
          }
        ],
        "sourceId": "body-633",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent generates copy per channel rules (website = brand tone, Amazon = SEO keywords, Zalando = concise specs)"
          }
        ],
        "sourceId": "body-634",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Three languages (Italian/English/German) generated simultaneously"
          }
        ],
        "sourceId": "body-635",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Output written to the table, organized by channel + language"
          }
        ],
        "sourceId": "body-636",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "💡 Prompt Approaches for Product Copy",
            "bold": true
          }
        ],
        "sourceId": "body-637",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Depending on your goal, you can use different prompt approaches to generate product copy:"
          }
        ],
        "sourceId": "body-638"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Feature-to-Benefit",
            "bold": true
          },
          {
            "text": " — Extract selling points based on target audience. Transform technical product descriptions into customer-facing benefits. Example: \"This jacket uses 3-layer Gore-Tex\" → \"Stay dry in any weather with professional-grade protection.\""
          }
        ],
        "sourceId": "body-639",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Visual-to-Copy",
            "bold": true
          },
          {
            "text": " — Let AI analyze product images to identify visual features (color, silhouette, texture, styling details), then generate copy based on what it sees."
          }
        ],
        "sourceId": "body-640",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Reference-Based",
            "bold": true
          },
          {
            "text": " — Use existing high-performing copy (yours or competitors') as reference. AI adapts the style, tone, and structure for each platform while maintaining the core message."
          }
        ],
        "sourceId": "body-641",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Hybrid",
            "bold": true
          },
          {
            "text": " — Combine product data from Base + visual analysis + reference copy for the most comprehensive output."
          }
        ],
        "sourceId": "body-642",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can mix and match these approaches. For example: \"Read the product images, extract visual features, combine with the technical specs from Base, and generate Amazon listing copy in the style of this reference listing.\""
          }
        ],
        "sourceId": "body-643"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-644",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Pull product info from the product knowledge base (fabric, fit, color, design features, care instructions). Generate copy for three channels:• Official Website: Brand tone + storytelling (product narrative, lifestyle context, craftsmanship details)• Amazon: SEO-optimized title + 5 bullet points highlighting key benefits + A+ content structure• Zalando: Concise specs (material composition, size chart, fit notes, care symbols)Apply Feature-to-Benefit approach: transform technical specs into customer-facing benefits.Example: \"3-layer Gore-Tex\" → \"Stay dry in any weather with professional-grade protection.\"Generate in Italian, English, and German simultaneously. Write results to the Base, organized by channel + language."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pull product info from the product knowledge base (fabric, fit, color, design features, care instructions). Generate copy for three channels:• Official Website: Brand tone + storytelling (product narrative, lifestyle context, craftsmanship details)• Amazon: SEO-optimized title + 5 bullet points highlighting key benefits + A+ content structure• Zalando: Concise specs (material composition, size chart, fit notes, care symbols)Apply Feature-to-Benefit approach: transform technical specs into customer-facing benefits.Example: \"3-layer Gore-Tex\" → \"Stay dry in any weather with professional-grade protection.\"Generate in Italian, English, and German simultaneously. Write results to the Base, organized by channel + language."
                  }
                ],
                "sourceId": "body-645/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-645"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-646",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-092.png",
        "alt": "",
        "sourceId": "body-647",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-091.png",
        "alt": "",
        "sourceId": "body-648",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Each product × 3 channels × 3 languages = 9 pieces of copy, generated in one pass"
          }
        ],
        "sourceId": "body-649",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Written to the table, organized by channel and language"
          }
        ],
        "sourceId": "body-650",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Copy based on real product knowledge base info — no fabrication"
          }
        ],
        "sourceId": "body-651",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Auto-Generate from PLM Metadata",
            "bold": true
          }
        ],
        "sourceId": "body-652",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If PLM data is connected to the table, the Agent can generate product descriptions directly from PLM metadata (including design element inputs) — no manual product info preparation needed."
          }
        ],
        "sourceId": "body-653"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-093.png",
        "alt": "",
        "sourceId": "body-654",
        "width": 552,
        "height": 345
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Data Analysis & Insights — Query the Table Directly",
            "bold": true
          }
        ],
        "sourceId": "body-655",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-656",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Every week, download data from each platform, merge, create pivot tables, draw charts, write analysis. Data lives in Amazon Seller Central, Zalando Partner Portal, the website backend, and more. Manual merging is time-consuming and error-prone."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Every week, download data from each platform, merge, create pivot tables, draw charts, write analysis. Data lives in Amazon Seller Central, Zalando Partner Portal, the website backend, and more. Manual merging is time-consuming and error-prone."
                  }
                ],
                "sourceId": "body-657/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-657"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-658",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-094.png",
        "alt": "",
        "sourceId": "body-659",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Extract data reports from email: Most e-commerce platforms (Amazon, Zalando, etc.) can send scheduled data reports to your email. The Agent can pull these reports directly from your inbox — no manual download needed"
          }
        ],
        "sourceId": "body-660",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Ask questions directly in the conversation — the Agent queries the table and analyzes"
          }
        ],
        "sourceId": "body-661",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-662",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "First, extract the latest platform reports from my email inbox (Amazon Seller Central, Zalando, and our official website backend). Consolidate the data into the Base.Then, analyze last week's sales performance:1. Summarize units sold and revenue by channel2. Calculate week-over-week growth/decline for each channel3. Identify top 3 SKUs by revenue across all channels4. Flag any channels with >10% week-over-week decline5. Compare this week's performance against the same week last monthOutput a structured analysis report with:- Channel performance summary table- Top performing products- Underperforming channels with possible reasons- Actionable recommendations for next week"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "First, extract the latest platform reports from my email inbox (Amazon Seller Central, Zalando, and our official website backend). Consolidate the data into the Base.Then, analyze last week's sales performance:1. Summarize units sold and revenue by channel2. Calculate week-over-week growth/decline for each channel3. Identify top 3 SKUs by revenue across all channels4. Flag any channels with >10% week-over-week decline5. Compare this week's performance against the same week last monthOutput a structured analysis report with:- Channel performance summary table- Top performing products- Underperforming channels with possible reasons- Actionable recommendations for next week"
                  }
                ],
                "sourceId": "body-663/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-663"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-664",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-095.png",
        "alt": "",
        "sourceId": "body-665",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-096.png",
        "alt": "",
        "sourceId": "body-666",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent queries the table directly and returns structured analysis"
          }
        ],
        "sourceId": "body-667",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Includes channel-wise sales and revenue summary"
          }
        ],
        "sourceId": "body-668",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Channels with >10% week-over-week decline flagged"
          }
        ],
        "sourceId": "body-669",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Ready to use as a weekly report data source"
          }
        ],
        "sourceId": "body-670",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "💡 Advanced: Automate Weekly Data Extraction",
            "bold": true
          }
        ],
        "sourceId": "body-671",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set up a scheduled trigger to automatically extract platform reports from email every Monday morning. The Agent can:"
          }
        ],
        "sourceId": "body-672"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Monitor your inbox for e-commerce platform report emails (Amazon Seller Central, Zalando, etc.)"
          }
        ],
        "sourceId": "body-673",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Extract Excel/CSV attachments from these emails"
          }
        ],
        "sourceId": "body-674",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Consolidate data from multiple platforms into your Base"
          }
        ],
        "sourceId": "body-675",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generate a weekly summary report automatically"
          }
        ],
        "sourceId": "body-676",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This way, your data is kept up-to-date in the Base — ready for analysis without any manual work."
          }
        ],
        "sourceId": "body-677"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-678",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles product content and data analysis; you focus on business growth."
          }
        ],
        "sourceId": "body-679"
      }
    ]
  },
  {
    "id": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
    "title": "3.6 Marketing: Competitor Social Media Monitoring, Content Planning & Campaign Execution",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 21,
    "prev": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
    "next": "scenario-7-sales-lead-automation-multi-source-prospecting",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Marketing revolves around \"content\" and \"monitoring\" — tracking competitors, creating campaign posters, producing social media videos. Much of the daily work is repetitive and time-consuming. This chapter shows you how to automate competitor social media monitoring, generate every size of a campaign poster from one brief, and create on-brand videos directly from your Library — no need to search for assets, AI pulls from your existing brand library and keeps everything on-brand."
          }
        ],
        "sourceId": "body-681"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Marketing Workflow",
            "bold": true
          }
        ],
        "sourceId": "body-682",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a brand manager, digital marketing specialist, or content creator, the daily flow is similar:"
          }
        ],
        "sourceId": "body-683"
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Competitor monitoring",
            "Manually browse Instagram, Facebook, screenshot data",
            "Half a day to produce one competitor report"
          ],
          [
            "2. Campaign posters",
            "Designer creates each size individually, multiple revisions",
            "Long turnaround, 5 sizes = 5 layout adjustments"
          ],
          [
            "3. Social media video",
            "Hire a supplier, shoot, edit, adapt for multiple platforms",
            "Long delivery time, high cost"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-684/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-684/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-684/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Competitor monitoring"
                  }
                ],
                "sourceId": "body-684/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manually browse Instagram, Facebook, screenshot data"
                  }
                ],
                "sourceId": "body-684/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Half a day to produce one competitor report"
                  }
                ],
                "sourceId": "body-684/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Campaign posters"
                  }
                ],
                "sourceId": "body-684/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Designer creates each size individually, multiple revisions"
                  }
                ],
                "sourceId": "body-684/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Long turnaround, 5 sizes = 5 layout adjustments"
                  }
                ],
                "sourceId": "body-684/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Social media video"
                  }
                ],
                "sourceId": "body-684/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Hire a supplier, shoot, edit, adapt for multiple platforms"
                  }
                ],
                "sourceId": "body-684/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Long delivery time, high cost"
                  }
                ],
                "sourceId": "body-684/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-684"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, these three steps happen in one platform: AI auto-monitors competitor social media, pulls assets from Library to generate multi-size posters and videos in one go. Marketing only reviews and makes the final call."
          }
        ],
        "sourceId": "body-685"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Marketing Scenario Stack",
            "bold": true
          }
        ],
        "sourceId": "body-686",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill / Connector",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Competitor data register, asset management\n",
            "Throughout — all structured data into tables",
            "Set up the competitor register structure "
          ],
          [
            "Library",
            "Brand assets, campaign assets, generated output storage",
            "All assets from Library, output saved to Library",
            "Support flexible metadata and tagging "
          ],
          [
            "Apify API",
            "Connect to external web data sources via Apify, provides generic scraper wrapper for Instagram, Pinterest, any website, Google Shopping, etc.",
            "Scenario A: competitor monitoring\n",
            "Public info only; Instagram/Facebook stability affected by anti-scraping measures"
          ],
          [
            "OpenAI Image Generation Connector ",
            "8 editing/generation capabilities for fashion e-commerce",
            "Scenario B",
            "Start from existing Library assets"
          ],
          [
            "HappyHorse Video Generator ",
            "Supports text-to-video, first-frame-to-video, multi-reference-to-video — produces 10-second marketing clips in minutes (720P/1080P, multiple aspect ratios)",
            "Scenario C\n",
            "Start from existing Library assets"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool / Skill / Connector"
                  }
                ],
                "sourceId": "body-687/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-687/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How we use it"
                  }
                ],
                "sourceId": "body-687/r0/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Note"
                  }
                ],
                "sourceId": "body-687/r0/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-687/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Competitor data register, asset management"
                  }
                ],
                "sourceId": "body-687/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Throughout — all structured data into tables"
                  }
                ],
                "sourceId": "body-687/r1/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up the competitor register structure "
                  }
                ],
                "sourceId": "body-687/r1/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Library"
                  }
                ],
                "sourceId": "body-687/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Brand assets, campaign assets, generated output storage"
                  }
                ],
                "sourceId": "body-687/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "All assets from Library, output saved to Library"
                  }
                ],
                "sourceId": "body-687/r2/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Support flexible metadata and tagging "
                  }
                ],
                "sourceId": "body-687/r2/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Apify API"
                  }
                ],
                "sourceId": "body-687/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Connect to external web data sources via Apify, provides generic scraper wrapper for Instagram, Pinterest, any website, Google Shopping, etc."
                  }
                ],
                "sourceId": "body-687/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario A: competitor monitoring"
                  }
                ],
                "sourceId": "body-687/r3/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Public info only; Instagram/Facebook stability affected by anti-scraping measures"
                  }
                ],
                "sourceId": "body-687/r3/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "OpenAI Image Generation Connector "
                  }
                ],
                "sourceId": "body-687/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "8 editing/generation capabilities for fashion e-commerce"
                  }
                ],
                "sourceId": "body-687/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario B"
                  }
                ],
                "sourceId": "body-687/r4/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Start from existing Library assets"
                  }
                ],
                "sourceId": "body-687/r4/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "HappyHorse Video Generator "
                  }
                ],
                "sourceId": "body-687/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Supports text-to-video, first-frame-to-video, multi-reference-to-video — produces 10-second marketing clips in minutes (720P/1080P, multiple aspect ratios)"
                  }
                ],
                "sourceId": "body-687/r5/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario C"
                  }
                ],
                "sourceId": "body-687/r5/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Start from existing Library assets"
                  }
                ],
                "sourceId": "body-687/r5/c3/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-687"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Competitor Social Media Monitoring — Your Always-On Competitor Monitor",
            "bold": true
          }
        ],
        "sourceId": "body-688",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-689",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every time I do competitor analysis, I manually browse Instagram and Facebook, screenshot data. Half a day for one report.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Every time I do competitor analysis, I manually browse Instagram and Facebook, screenshot data. Half a day for one report.\""
                  }
                ],
                "sourceId": "body-690/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-690"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-097.png",
        "alt": "",
        "sourceId": "body-691",
        "width": 552,
        "height": 345
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-692",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set monitoring targets.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Tell the AI which competitors and dimensions to monitor:"
          }
        ],
        "sourceId": "body-693",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "Competitor brands",
            "Brands to watch",
            "Brand Nordica "
          ],
          [
            "Channels",
            "Social platforms",
            "Instagram, Facebook"
          ],
          [
            "Frequency",
            "How often to run",
            "Every Monday 9:00 AM auto-execute"
          ],
          [
            "Focus dimensions",
            "What to look at",
            "Product launches, promotions, KOL collabs, UGC"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Element"
                  }
                ],
                "sourceId": "body-694/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-694/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Example"
                  }
                ],
                "sourceId": "body-694/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Competitor brands"
                  }
                ],
                "sourceId": "body-694/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Brands to watch"
                  }
                ],
                "sourceId": "body-694/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Brand Nordica "
                  }
                ],
                "sourceId": "body-694/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Channels"
                  }
                ],
                "sourceId": "body-694/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Social platforms"
                  }
                ],
                "sourceId": "body-694/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Instagram, Facebook"
                  }
                ],
                "sourceId": "body-694/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Frequency"
                  }
                ],
                "sourceId": "body-694/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How often to run"
                  }
                ],
                "sourceId": "body-694/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Every Monday 9:00 AM auto-execute"
                  }
                ],
                "sourceId": "body-694/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Focus dimensions"
                  }
                ],
                "sourceId": "body-694/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What to look at"
                  }
                ],
                "sourceId": "body-694/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Product launches, promotions, KOL collabs, UGC"
                  }
                ],
                "sourceId": "body-694/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-694"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-captures via Apify.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI calls the Apify API to extract competitor social media data: post content, engagement metrics (likes, comments, shares), and user comments."
          }
        ],
        "sourceId": "body-695",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-classifies and extracts data.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI categorizes the captured content:"
          }
        ],
        "sourceId": "body-696",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Category",
            "Description"
          ],
          [
            "Product showcase",
            "New launches, product close-ups"
          ],
          [
            "Promotions",
            "Discounts, limited-time offers"
          ],
          [
            "KOL collaboration",
            "Influencer posts, co-branded content"
          ],
          [
            "UGC",
            "User-generated content"
          ],
          [
            "Brand story",
            "Brand philosophy, behind-the-scenes"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Category"
                  }
                ],
                "sourceId": "body-697/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-697/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Product showcase"
                  }
                ],
                "sourceId": "body-697/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "New launches, product close-ups"
                  }
                ],
                "sourceId": "body-697/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Promotions"
                  }
                ],
                "sourceId": "body-697/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Discounts, limited-time offers"
                  }
                ],
                "sourceId": "body-697/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "KOL collaboration"
                  }
                ],
                "sourceId": "body-697/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Influencer posts, co-branded content"
                  }
                ],
                "sourceId": "body-697/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "UGC"
                  }
                ],
                "sourceId": "body-697/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "User-generated content"
                  }
                ],
                "sourceId": "body-697/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Brand story"
                  }
                ],
                "sourceId": "body-697/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Brand philosophy, behind-the-scenes"
                  }
                ],
                "sourceId": "body-697/r5/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-697"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generate competitor social media weekly report.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI aggregates each brand's weekly activity and produces a comparison report:"
          }
        ],
        "sourceId": "body-698",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Report content",
            "Description"
          ],
          [
            "Posting frequency comparison",
            "How many posts each brand put up this week"
          ],
          [
            "Engagement ranking",
            "Top 5 highest-engagement posts"
          ],
          [
            "Content strategy differences",
            "Which brand is product-focused, which is brand-story-focused"
          ],
          [
            "Weekly trends",
            "Notable industry movements"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Report content"
                  }
                ],
                "sourceId": "body-699/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-699/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Posting frequency comparison"
                  }
                ],
                "sourceId": "body-699/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How many posts each brand put up this week"
                  }
                ],
                "sourceId": "body-699/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Engagement ranking"
                  }
                ],
                "sourceId": "body-699/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Top 5 highest-engagement posts"
                  }
                ],
                "sourceId": "body-699/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Content strategy differences"
                  }
                ],
                "sourceId": "body-699/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Which brand is product-focused, which is brand-story-focused"
                  }
                ],
                "sourceId": "body-699/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Weekly trends"
                  }
                ],
                "sourceId": "body-699/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Notable industry movements"
                  }
                ],
                "sourceId": "body-699/r4/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-699"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Write to table + push to email.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "All data goes into the table. The report is pushed to your email."
          }
        ],
        "sourceId": "body-700",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-701",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Set up competitor social media monitoring:\n- Brands: Nordica, Delta, Gavi\n- Channels: Instagram, Facebook\n- Frequency: Every Monday 9:00 AM, auto-execute\n- Focus dimensions: New product launches, promotional activities, KOL collaborations, user-generated content (UGC)\n\nBased on this week's captured data, generate a competitor social media weekly report:\n1. Posting frequency comparison across brands\n2. Top 5 posts by engagement (likes + comments + shares)\n3. Content strategy differentiation analysis (which brand is product-focused vs. brand-story-focused)\n4. Notable trends this week\n\nWrite to Base and push to email."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up competitor social media monitoring:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Brands: Nordica, Delta, Gavi"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Channels: Instagram, Facebook"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Frequency: Every Monday 9:00 AM, auto-execute"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Focus dimensions: New product launches, promotional activities, KOL collaborations, user-generated content (UGC)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Based on this week's captured data, generate a competitor social media weekly report:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Posting frequency comparison across brands"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Top 5 posts by engagement (likes + comments + shares)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Content strategy differentiation analysis (which brand is product-focused vs. brand-story-focused)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Notable trends this week"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Write to Base and push to email."
                  }
                ],
                "sourceId": "body-702/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-702"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-703",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-098.png",
        "alt": "",
        "sourceId": "body-704",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-099.png",
        "alt": "",
        "sourceId": "body-705",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-100.png",
        "alt": "",
        "sourceId": "body-706",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-101.png",
        "alt": "",
        "sourceId": "body-707",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Competitor social media weekly report arrives every Monday morning — no manual browsing"
          }
        ],
        "sourceId": "body-708",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Competitor data accumulates in the table, supporting long-term trend comparison"
          }
        ],
        "sourceId": "body-709",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-classifies and extracts engagement data — no manual sorting"
          }
        ],
        "sourceId": "body-710",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Apify scrapes Instagram and Facebook public posts, but stability is affected by platform anti-scraping measures. Under EU Database Directive (96/9/EC), systematic scraping and reuse of public information should not infringe database rights. Under GDPR, social media posts and comments may contain personal data. Only analyze public business content; do not collect or process personal data from individual users (e.g., commenter profiles, private messages). Use competitor data internally for decision-making and marketing strategy; do not publish raw scraped content externally."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: Apify scrapes Instagram and Facebook public posts, but stability is affected by platform anti-scraping measures. Under EU Database Directive (96/9/EC), systematic scraping and reuse of public information should not infringe database rights. Under GDPR, social media posts and comments may contain personal data. Only analyze public business content; do not collect or process personal data from individual users (e.g., commenter profiles, private messages). Use competitor data internally for decision-making and marketing strategy; do not publish raw scraped content externally."
                  }
                ],
                "sourceId": "body-711/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-711"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Campaign Poster Generation — Pull Assets from Library, Generate 5 Sizes from One Brief",
            "bold": true
          }
        ],
        "sourceId": "body-712",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-713",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every campaign poster has to wait for the designer's schedule. One campaign needs Instagram, Facebook, email, and print — 5 different sizes. The designer manually adjusts the layout 5 times.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Every campaign poster has to wait for the designer's schedule. One campaign needs Instagram, Facebook, email, and print — 5 different sizes. The designer manually adjusts the layout 5 times.\""
                  }
                ],
                "sourceId": "body-714/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-714"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Makes This Different",
            "bold": true
          }
        ],
        "sourceId": "body-715",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This isn't generating a poster from scratch. It starts from existing brand assets in Library (product images, campaign assets, model photos). AI generates posters based on the brand template and outputs multiple sizes in one batch — no manual size-by-size layout adjustment."
          }
        ],
        "sourceId": "body-716"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-717",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Pull assets from Library.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "In the conversation, specify which assets in Library to use (product images, campaign assets, model photos)."
          }
        ],
        "sourceId": "body-718",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Input poster requirements.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Tell the AI the campaign theme, brand template, and key info:"
          }
        ],
        "sourceId": "body-719",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI generates poster versions.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI generates 3–4 poster versions for you to choose from."
          }
        ],
        "sourceId": "body-720",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Select version, output all sizes in one batch.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "After selection, the AI auto-adapts to all required sizes:"
          }
        ],
        "sourceId": "body-721",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Save to Library + write to table.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "All versions go to Library, organized by campaign/date/channel."
          }
        ],
        "sourceId": "body-722",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-723",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Pull this product image and this Campaign asset from Library to generate an event poster:\n- Event Theme: Summer Sale 2026\n- Brand Template: Minimalist white background + Logo top-left\n- Key Info: 8/15–8/31 Storewide 30% Off\n\nFirst generate 3–4 poster versions for selection.\n\nAfter selection, generate all the following size versions in one batch:\n1. Instagram 1:1 (1080×1080)\n2. Instagram Story 9:16 (1080×1920)\n3. Facebook 1.91:1 (1200×628)\n4. Email Banner 3:1 (1800×600)\n5. Print A4 (2480×3508)\n\nAuto-adapt layout for each size. Store all versions in Library and write to Base."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pull this product image and this Campaign asset from Library to generate an event poster:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Event Theme: Summer Sale 2026"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Brand Template: Minimalist white background + Logo top-left"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Key Info: 8/15–8/31 Storewide 30% Off"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "First generate 3–4 poster versions for selection."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "After selection, generate all the following size versions in one batch:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Instagram 1:1 (1080×1080)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Instagram Story 9:16 (1080×1920)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Facebook 1.91:1 (1200×628)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Email Banner 3:1 (1800×600)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "5. Print A4 (2480×3508)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Auto-adapt layout for each size. Store all versions in Library and write to Base."
                  }
                ],
                "sourceId": "body-724/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-724"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-725",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-102.png",
        "alt": "",
        "sourceId": "body-726",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-103.png",
        "alt": "",
        "sourceId": "body-727",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Uses existing Library assets — no design from scratch"
          }
        ],
        "sourceId": "body-728",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI generates 3–4 versions for selection, then outputs 5 sizes in one batch"
          }
        ],
        "sourceId": "body-729",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Designer only needs final fine-tuning — no manual size-by-size layout"
          }
        ],
        "sourceId": "body-730",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All versions auto-saved to Library for team collaboration"
          }
        ],
        "sourceId": "body-731",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: If AI-generated human imagery is used in posters, label it \"AI-generated imagery\" to comply with EU AI Act transparency requirements. Ensure brand asset copyrights are properly licensed."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: If AI-generated human imagery is used in posters, label it \"AI-generated imagery\" to comply with EU AI Act transparency requirements. Ensure brand asset copyrights are properly licensed."
                  }
                ],
                "sourceId": "body-732/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-732"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-104.png",
        "alt": "",
        "sourceId": "body-733",
        "width": 552,
        "height": 345
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario C: AI Video Generation — From Library Assets to Social Media Short Clips (Advanced)",
            "bold": true
          }
        ],
        "sourceId": "body-734",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-735",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Creating a social media product video means hiring a supplier, shooting, editing, and adapting for multiple platforms. Long delivery time, high cost.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Creating a social media product video means hiring a supplier, shooting, editing, and adapting for multiple platforms. Long delivery time, high cost.\""
                  }
                ],
                "sourceId": "body-736/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-736"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Makes This Different",
            "bold": true
          }
        ],
        "sourceId": "body-737",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This doesn't start from scratch finding assets. It uses existing model photos or campaign assets from Library. The AI designs prompts based on the social media context and generates platform-appropriate short videos."
          }
        ],
        "sourceId": "body-738"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-739",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Pull assets from Library.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Select existing assets: model try-on photos, campaign shots, product white-background images."
          }
        ],
        "sourceId": "body-740",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Choose the social media context and style.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Tell the AI the platform and style:"
          }
        ],
        "sourceId": "body-741",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "Platform",
            "Where it goes",
            "Instagram Reels / TikTok / YouTube Shorts"
          ],
          [
            "Duration",
            "How long",
            "10 seconds"
          ],
          [
            "Style keywords",
            "What vibe",
            "Dynamic / Minimal / Story-driven / Street style"
          ],
          [
            "Copy points",
            "Must-include message",
            "New Release "
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Element"
                  }
                ],
                "sourceId": "body-742/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-742/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Example"
                  }
                ],
                "sourceId": "body-742/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Platform"
                  }
                ],
                "sourceId": "body-742/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Where it goes"
                  }
                ],
                "sourceId": "body-742/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Instagram Reels / TikTok / YouTube Shorts"
                  }
                ],
                "sourceId": "body-742/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Duration"
                  }
                ],
                "sourceId": "body-742/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How long"
                  }
                ],
                "sourceId": "body-742/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "10 seconds"
                  }
                ],
                "sourceId": "body-742/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Style keywords"
                  }
                ],
                "sourceId": "body-742/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What vibe"
                  }
                ],
                "sourceId": "body-742/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Dynamic / Minimal / Story-driven / Street style"
                  }
                ],
                "sourceId": "body-742/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Copy points"
                  }
                ],
                "sourceId": "body-742/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Must-include message"
                  }
                ],
                "sourceId": "body-742/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "New Release "
                  }
                ],
                "sourceId": "body-742/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-742"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-designs prompts and generates video.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI designs prompts (rhythm, transitions, subtitles, music style) and generates a 10-second product video."
          }
        ],
        "sourceId": "body-743",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Select version, auto-adapt to multi-platform sizes.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI auto-adapts the video to each platform's size requirements."
          }
        ],
        "sourceId": "body-744",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Save to Library + write to Base.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "All videos go to Library, organized by campaign/date/channel/platform. Shareable with the sales team ready to distribute in one pass."
          }
        ],
        "sourceId": "body-745",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-746",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Pull this set of model try-on images and Campaign assets from Library to create a social media short video:\n- Platform: Instagram Reels\n- Duration: 10 seconds\n- Style: Dynamic street style, fast pace, with transition effects\n- Subtitle: Summer Sale 2026 Storewide 30% Off\n- Outro: Brand Logo\nStore all in Library and write to Base, categorized under Campaign 2026 Summer Sale."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pull this set of model try-on images and Campaign assets from Library to create a social media short video:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Platform: Instagram Reels"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Duration: 10 seconds"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Style: Dynamic street style, fast pace, with transition effects"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Subtitle: Summer Sale 2026 Storewide 30% Off"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Outro: Brand Logo"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Store all in Library and write to Base, categorized under Campaign 2026 Summer Sale."
                  }
                ],
                "sourceId": "body-747/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-747"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-748",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-105.png",
        "alt": "",
        "sourceId": "body-749",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Uses existing Library assets — no reshoot needed"
          }
        ],
        "sourceId": "body-750",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-designs prompts, generates video, adapts to multi-platform sizes"
          }
        ],
        "sourceId": "body-751",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What used to take 2 weeks for delivery now takes minutes for a first draft"
          }
        ],
        "sourceId": "body-752",
        "marker": "•",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Video generation quality depends on the quality and resolution of Library assets. Use high-resolution product images and campaign assets. Under EU AI Act, AI-generated image & video must be labeled as AI-generated content."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: Video generation quality depends on the quality and resolution of Library assets. Use high-resolution product images and campaign assets. Under EU AI Act, AI-generated image & video must be labeled as AI-generated content."
                  }
                ],
                "sourceId": "body-753/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-753"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-106.png",
        "alt": "",
        "sourceId": "body-754",
        "width": 552,
        "height": 345
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-755",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles competitor monitoring and content planning; you focus on campaign decisions."
          }
        ],
        "sourceId": "body-756"
      }
    ]
  },
  {
    "id": "scenario-7-sales-lead-automation-multi-source-prospecting",
    "title": "3.7 Sales: Lead Automation & Multi-Source Prospecting",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 22,
    "prev": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
    "next": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sales revolves around \"clients\" and \"leads\" — collecting business cards at trade shows, following up, developing new retail accounts. Much of the work requires quick response and data support. This chapter shows you how to turn business card photos into leads, auto-research customer backgrounds, intelligently score and rank, and proactively prospect from multiple data sources — so sales teams spend their time closing deals."
          }
        ],
        "sourceId": "body-758"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Sales Workflow",
            "bold": true
          }
        ],
        "sourceId": "body-759",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a sales manager, account manager, or business developer, the daily flow is similar:"
          }
        ],
        "sourceId": "body-760"
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Trade show lead capture",
            "Collect business cards, organize them at home",
            "Leads go cold by the time you get home, no context for follow-up"
          ],
          [
            "2. Customer research",
            "Manually check Google, LinkedIn, Instagram",
            "4–5 platforms per customer, time-consuming"
          ],
          [
            "3. Find new retail accounts",
            "Walk the streets, rely on network, guess",
            "No data on which neighborhoods have target stores"
          ],
          [
            "4. Follow-up management",
            "Excel tracking, easy to forget",
            "Leads go cold after a week without contact"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-761/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-761/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-761/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Trade show lead capture"
                  }
                ],
                "sourceId": "body-761/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Collect business cards, organize them at home"
                  }
                ],
                "sourceId": "body-761/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Leads go cold by the time you get home, no context for follow-up"
                  }
                ],
                "sourceId": "body-761/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Customer research"
                  }
                ],
                "sourceId": "body-761/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manually check Google, LinkedIn, Instagram"
                  }
                ],
                "sourceId": "body-761/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "4–5 platforms per customer, time-consuming"
                  }
                ],
                "sourceId": "body-761/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Find new retail accounts"
                  }
                ],
                "sourceId": "body-761/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Walk the streets, rely on network, guess"
                  }
                ],
                "sourceId": "body-761/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "No data on which neighborhoods have target stores"
                  }
                ],
                "sourceId": "body-761/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "4. Follow-up management"
                  }
                ],
                "sourceId": "body-761/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Excel tracking, easy to forget"
                  }
                ],
                "sourceId": "body-761/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Leads go cold after a week without contact"
                  }
                ],
                "sourceId": "body-761/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-761"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, these four steps happen in one platform: snap a business card photo → instant structured lead, AI auto-researches customer background from multiple sources, Apify proactively searches for target stores, follow-up status is auto-monitored."
          }
        ],
        "sourceId": "body-762"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Sales Scenario Stack",
            "bold": true
          }
        ],
        "sourceId": "body-763",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Customer lead register, store profiles, follow-up dashboard",
            "Throughout — all structured data into tables",
            "Set up the lead register structure first"
          ],
          [
            "Apify API",
            "Connect to external web data sources via Apify, provides generic scraper wrapper for Google Maps, LinkedIn, Instagram, any website, etc.",
            "Scenario A: customer research + Scenario B: store search\n",
            "Public info only\n"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool / Skill"
                  }
                ],
                "sourceId": "body-764/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-764/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How we use it"
                  }
                ],
                "sourceId": "body-764/r0/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Note"
                  }
                ],
                "sourceId": "body-764/r0/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-764/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Customer lead register, store profiles, follow-up dashboard"
                  }
                ],
                "sourceId": "body-764/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Throughout — all structured data into tables"
                  }
                ],
                "sourceId": "body-764/r1/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Set up the lead register structure first"
                  }
                ],
                "sourceId": "body-764/r1/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Apify API"
                  }
                ],
                "sourceId": "body-764/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Connect to external web data sources via Apify, provides generic scraper wrapper for Google Maps, LinkedIn, Instagram, any website, etc."
                  }
                ],
                "sourceId": "body-764/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario A: customer research + Scenario B: store search"
                  }
                ],
                "sourceId": "body-764/r2/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Public info only"
                  }
                ],
                "sourceId": "body-764/r2/c3/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-764"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Customer Profile & Lead Automation — From Business Card Photo to Follow-up Suggestions",
            "bold": true
          }
        ],
        "sourceId": "body-765",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-766",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Collect a stack of business cards at the trade show. By the time I organize them at home, leads are cold. Customer background research is manual. No context for follow-up.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Collect a stack of business cards at the trade show. By the time I organize them at home, leads are cold. Customer background research is manual. No context for follow-up.\""
                  }
                ],
                "sourceId": "body-767/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-767"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Makes This Valuable",
            "bold": true
          }
        ],
        "sourceId": "body-768",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Snap a business card photo at the trade show → upload → AI parses and writes to the table → auto-researches customer background (Google Maps / LinkedIn / Instagram / website) → AI gives partnership recommendations. From lead capture to follow-up, all in one step. Leads don't go cold."
          }
        ],
        "sourceId": "body-769"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-770",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Snap and upload the business card.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "At the trade show, snap a photo and upload it to the AOS Work conversation."
          }
        ],
        "sourceId": "body-771",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-OCR + write to Base",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI auto-recognizes the card information."
          }
        ],
        "sourceId": "body-772",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-researches customer background.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI automatically researches from multiple channels and creates a complete profile:"
          }
        ],
        "sourceId": "body-773",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Channel",
            "Research content"
          ],
          [
            "Google Maps",
            "Location, business status, rating, review count"
          ],
          [
            "LinkedIn",
            "Company size, industry, recent updates, key decision-makers"
          ],
          [
            "Instagram",
            "Follower count, partner brands, content style, recent activity"
          ],
          [
            "Website",
            "Main business, target customer segment, price range"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Channel"
                  }
                ],
                "sourceId": "body-774/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Research content"
                  }
                ],
                "sourceId": "body-774/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Google Maps"
                  }
                ],
                "sourceId": "body-774/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Location, business status, rating, review count"
                  }
                ],
                "sourceId": "body-774/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "LinkedIn"
                  }
                ],
                "sourceId": "body-774/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Company size, industry, recent updates, key decision-makers"
                  }
                ],
                "sourceId": "body-774/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Instagram"
                  }
                ],
                "sourceId": "body-774/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Follower count, partner brands, content style, recent activity"
                  }
                ],
                "sourceId": "body-774/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Website"
                  }
                ],
                "sourceId": "body-774/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Main business, target customer segment, price range"
                  }
                ],
                "sourceId": "body-774/r4/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-774"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI gives partnership recommendations.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "You input your follow-up rules. The AI gives recommendations based on the customer profile:"
          }
        ],
        "sourceId": "body-775",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Recommendation dimension",
            "Description"
          ],
          [
            "Match score",
            "High / Medium / Low"
          ],
          [
            "Partnership approach",
            "Wholesale / Retail / E-commerce"
          ],
          [
            "First-contact talking points",
            "Based on the customer's recent activity"
          ],
          [
            "Recommended products",
            "Based on the customer's segment and price range"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Recommendation dimension"
                  }
                ],
                "sourceId": "body-776/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-776/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Match score"
                  }
                ],
                "sourceId": "body-776/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "High / Medium / Low"
                  }
                ],
                "sourceId": "body-776/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Partnership approach"
                  }
                ],
                "sourceId": "body-776/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Wholesale / Retail / E-commerce"
                  }
                ],
                "sourceId": "body-776/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "First-contact talking points"
                  }
                ],
                "sourceId": "body-776/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Based on the customer's recent activity"
                  }
                ],
                "sourceId": "body-776/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Recommended products"
                  }
                ],
                "sourceId": "body-776/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Based on the customer's segment and price range"
                  }
                ],
                "sourceId": "body-776/r4/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-776"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set follow-up reminders.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Leads not followed up within 7 days are auto-flagged."
          }
        ],
        "sourceId": "body-777",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-778",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Recognize this business card's information (Company / Contact Person / Title / Phone / Email / Address), write to Base customer lead tracker, set next follow-up date to 3 days later.\n\nThen research this customer's background information:\n1. Google Maps: company location, business status, rating and reviews\n2. LinkedIn: company size, industry, recent updates\n3. Instagram: follower count, partner brands, content style\n4. Official website: main business, target customer segment, price range.\n\nSummarize and write to Base customer profile.\n\nBased on the customer profile and my follow-up rules (target customer = chain store + monthly sales 500+ + has Instagram operations), provide partnership advancement recommendations:\n1. Match score\n2. Recommended partnership approach (wholesale / retail / e-commerce)\n3. Suggested first-contact talking points (based on customer's recent activities)\n4. Recommended products (based on customer's segment and price range)\n\nSet reminder: leads not followed up within 7 days auto-flagged in red."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Recognize this business card's information (Company / Contact Person / Title / Phone / Email / Address), write to Base customer lead tracker, set next follow-up date to 3 days later."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Then research this customer's background information:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Google Maps: company location, business status, rating and reviews"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. LinkedIn: company size, industry, recent updates"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Instagram: follower count, partner brands, content style"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Official website: main business, target customer segment, price range."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Summarize and write to Base customer profile."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Based on the customer profile and my follow-up rules (target customer = chain store + monthly sales 500+ + has Instagram operations), provide partnership advancement recommendations:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Match score"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Recommended partnership approach (wholesale / retail / e-commerce)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Suggested first-contact talking points (based on customer's recent activities)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Recommended products (based on customer's segment and price range)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Set reminder: leads not followed up within 7 days auto-flagged in red."
                  }
                ],
                "sourceId": "body-779/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-779"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-780",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Business card photo → structured lead"
          }
        ],
        "sourceId": "body-781",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI auto-researches 4 channels, generates a complete customer profile"
          }
        ],
        "sourceId": "body-782",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI gives partnership recommendations based on your rules"
          }
        ],
        "sourceId": "body-783",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Follow-up status auto-monitored — leads don't go cold"
          }
        ],
        "sourceId": "body-784",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Batch Process All Trade Show Business Cards",
            "bold": true
          }
        ],
        "sourceId": "body-785",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Collected 50 business cards at the trade show? Snap all photos, upload in batch. The AI processes: recognize → research → score → rank by match. You start following up with high-match leads by the time you get to the hotel."
          }
        ],
        "sourceId": "body-786"
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Personal information on business cards is \"personal data\" under GDPR. Ensure: 1) You obtained consent when collecting the card for business contact purposes; 2) Card data is used only for B2B business follow-up; 3) Delete unconverted lead data after a reasonable retention period (recommend 12 months)."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: Personal information on business cards is \"personal data\" under GDPR. Ensure: 1) You obtained consent when collecting the card for business contact purposes; 2) Card data is used only for B2B business follow-up; 3) Delete unconverted lead data after a reasonable retention period (recommend 12 months)."
                  }
                ],
                "sourceId": "body-787/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-787"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-107.png",
        "alt": "",
        "sourceId": "body-788",
        "width": 552,
        "height": 345
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Sales Lead Prospecting — Multi-Source Data to Find Stores (Advanced)",
            "bold": true
          }
        ],
        "sourceId": "body-789",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-790",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Finding new retail accounts means walking the streets or relying on your network. No data on which neighborhoods have target stores. Customer screening lacks data support.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Finding new retail accounts means walking the streets or relying on your network. No data on which neighborhoods have target stores. Customer screening lacks data support.\""
                  }
                ],
                "sourceId": "body-791/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-791"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-792",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set the target store profile + search area.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Tell the AI what kind of store you're looking for and where."
          }
        ],
        "sourceId": "body-793",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "City/neighborhood",
            "Where to search",
            "London Shoreditch"
          ],
          [
            "Store type",
            "What kind",
            "Independent fashion boutique"
          ],
          [
            "Price range",
            "What tier",
            "Mid-to-high end"
          ],
          [
            "Target customer",
            "Who they serve",
            "25–35 age group"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Element"
                  }
                ],
                "sourceId": "body-794/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-794/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Example"
                  }
                ],
                "sourceId": "body-794/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "City/neighborhood"
                  }
                ],
                "sourceId": "body-794/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Where to search"
                  }
                ],
                "sourceId": "body-794/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "London Shoreditch"
                  }
                ],
                "sourceId": "body-794/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Store type"
                  }
                ],
                "sourceId": "body-794/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What kind"
                  }
                ],
                "sourceId": "body-794/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Independent fashion boutique"
                  }
                ],
                "sourceId": "body-794/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Price range"
                  }
                ],
                "sourceId": "body-794/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What tier"
                  }
                ],
                "sourceId": "body-794/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Mid-to-high end"
                  }
                ],
                "sourceId": "body-794/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Target customer"
                  }
                ],
                "sourceId": "body-794/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Who they serve"
                  }
                ],
                "sourceId": "body-794/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "25–35 age group"
                  }
                ],
                "sourceId": "body-794/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-794"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI searches Google Maps via Apify.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI searches by area + type, returns: store name, address, rating, review count, business status, category."
          }
        ],
        "sourceId": "body-795",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI multi-source deep research.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI conducts multi-dimensional research for each candidate store."
          }
        ],
        "sourceId": "body-796",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Channel",
            "Research content"
          ],
          [
            "Google Maps",
            "Location, street view, rating, review content (analyze customer profile)"
          ],
          [
            "Nearby demographic profile",
            "Population density, spending level, age distribution"
          ],
          [
            "LinkedIn",
            "Company size, founding year, operating history (chain vs. single store)"
          ],
          [
            "Instagram",
            "Follower count, partner brands, content style (brand alignment)"
          ],
          [
            "Online published content",
            "Multi-source search for the store's content (selection style, existing suppliers)"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Channel"
                  }
                ],
                "sourceId": "body-797/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Research content"
                  }
                ],
                "sourceId": "body-797/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Google Maps"
                  }
                ],
                "sourceId": "body-797/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Location, street view, rating, review content (analyze customer profile)"
                  }
                ],
                "sourceId": "body-797/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Nearby demographic profile"
                  }
                ],
                "sourceId": "body-797/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Population density, spending level, age distribution"
                  }
                ],
                "sourceId": "body-797/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "LinkedIn"
                  }
                ],
                "sourceId": "body-797/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Company size, founding year, operating history (chain vs. single store)"
                  }
                ],
                "sourceId": "body-797/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Instagram"
                  }
                ],
                "sourceId": "body-797/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Follower count, partner brands, content style (brand alignment)"
                  }
                ],
                "sourceId": "body-797/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Online published content"
                  }
                ],
                "sourceId": "body-797/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Multi-source search for the store's content (selection style, existing suppliers)"
                  }
                ],
                "sourceId": "body-797/r5/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-797"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI match score + partnership recommendations.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Based on your partnership rules, the AI evaluates each store."
          }
        ],
        "sourceId": "body-798",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Recommendation dimension",
            "Description"
          ],
          [
            "Match score",
            "0–100, weighted across dimensions"
          ],
          [
            "Partnership approach",
            "Wholesale / Consignment / Co-brand / Pop-up"
          ],
          [
            "Strengths",
            "Why this store is a good fit for us"
          ],
          [
            "Risk alerts",
            "Existing competitor partnership? Mismatched customer base? Unstable operations?"
          ],
          [
            "First-contact pitch",
            "Based on the store's recent activity and selection style"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Recommendation dimension"
                  }
                ],
                "sourceId": "body-799/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Description"
                  }
                ],
                "sourceId": "body-799/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Match score"
                  }
                ],
                "sourceId": "body-799/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "0–100, weighted across dimensions"
                  }
                ],
                "sourceId": "body-799/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Partnership approach"
                  }
                ],
                "sourceId": "body-799/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Wholesale / Consignment / Co-brand / Pop-up"
                  }
                ],
                "sourceId": "body-799/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Strengths"
                  }
                ],
                "sourceId": "body-799/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Why this store is a good fit for us"
                  }
                ],
                "sourceId": "body-799/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Risk alerts"
                  }
                ],
                "sourceId": "body-799/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Existing competitor partnership? Mismatched customer base? Unstable operations?"
                  }
                ],
                "sourceId": "body-799/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "First-contact pitch"
                  }
                ],
                "sourceId": "body-799/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Based on the store's recent activity and selection style"
                  }
                ],
                "sourceId": "body-799/r5/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-799"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sort by match score, write to Base.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The AI sorts by match score descending. You start with the Top 5."
          }
        ],
        "sourceId": "body-800",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-801",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Use Apify to call Google Maps API, search for independent fashion boutiques within 2km radius of London Shoreditch district. Return: store name, address, rating, review count, business status, category. Write to Base as candidate store list.\n\nConduct multi-source data research on each candidate store:\n1. Google Maps: location, street view, rating, review content, analyze in-store customer profile\n2. Nearby area demographic profile (population density, consumption level, age distribution)\n3. LinkedIn: company size, founding year, operating history (chain vs. single store)\n4. Instagram: follower count, partner brands, content style\n5. Multi-source search for store's online published content, understand selection style and existing suppliers\n\nSummarize and write to Base store profile.\n\nBased on the store profile and my partnership rules (target = independent boutique + mid-to-high end + Instagram followers 5000+ + no direct competitor partnership), provide for each candidate store:\n1. Match score (0–100 points)\n2. Partnership approach (wholesale / consignment / co-brand / pop-up)\n3. Strengths analysis\n4. Risk alerts\n5. Suggested first-contact pitch\n\nSort by match score from highest to lowest."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Use Apify to call Google Maps API, search for independent fashion boutiques within 2km radius of London Shoreditch district. Return: store name, address, rating, review count, business status, category. Write to Base as candidate store list."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Conduct multi-source data research on each candidate store:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Google Maps: location, street view, rating, review content, analyze in-store customer profile"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Nearby area demographic profile (population density, consumption level, age distribution)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. LinkedIn: company size, founding year, operating history (chain vs. single store)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Instagram: follower count, partner brands, content style"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "5. Multi-source search for store's online published content, understand selection style and existing suppliers"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Summarize and write to Base store profile."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Based on the store profile and my partnership rules (target = independent boutique + mid-to-high end + Instagram followers 5000+ + no direct competitor partnership), provide for each candidate store:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Match score (0–100 points)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Partnership approach (wholesale / consignment / co-brand / pop-up)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Strengths analysis"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Risk alerts"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "5. Suggested first-contact pitch"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Sort by match score from highest to lowest."
                  }
                ],
                "sourceId": "body-802/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-802"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-803",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Auto-search for target stores by area — significantly reduce manual street-level research"
          }
        ],
        "sourceId": "body-804",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Each store has a complete profile (4-channel data aggregated)"
          }
        ],
        "sourceId": "body-805",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AI scores and sorts by your rules — start with Top 5"
          }
        ],
        "sourceId": "body-806",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Includes risk alerts and partnership approach suggestions — first contact has context"
          }
        ],
        "sourceId": "body-807",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Batch Search Multiple Neighborhoods",
            "bold": true
          }
        ],
        "sourceId": "body-808",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Batch search for independent fashion boutiques in London neighborhoods: Shoreditch, Notting Hill, Covent Garden. Aggregate rankings, output a city-level partnership opportunity list."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Batch search for independent fashion boutiques in London neighborhoods: Shoreditch, Notting Hill, Covent Garden. Aggregate rankings, output a city-level partnership opportunity list."
                  }
                ],
                "sourceId": "body-809/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-809"
      },
      {
        "type": "table",
        "rows": [
          [
            "Compliance note: Under GDPR, collecting B2B contact information from public sources (Google Maps/Instagram) falls under \"Legitimate Interest\" processing. When first contacting a store, inform them of the data source and provide an opt-out option (Right to Object). Do not use the collected personal information for non-B2B purposes."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Compliance note: Under GDPR, collecting B2B contact information from public sources (Google Maps/Instagram) falls under \"Legitimate Interest\" processing. When first contacting a store, inform them of the data source and provide an opt-out option (Right to Object). Do not use the collected personal information for non-B2B purposes."
                  }
                ],
                "sourceId": "body-811/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-811"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-108.png",
        "alt": "",
        "sourceId": "body-812",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-109.png",
        "alt": "",
        "sourceId": "body-813",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-110.png",
        "alt": "",
        "sourceId": "body-814",
        "width": 552,
        "height": 345
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-111.png",
        "alt": "",
        "sourceId": "body-815",
        "width": 552,
        "height": 345
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-816",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles lead research and follow-up reminders; you focus on customer relationships."
          }
        ],
        "sourceId": "body-817"
      }
    ]
  },
  {
    "id": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
    "title": "3.8 Merchandise Planning: Product Operations Analysis & Inventory Risk Alerts",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 23,
    "prev": "scenario-7-sales-lead-automation-multi-source-prospecting",
    "next": "4-1-project-a-permanent-home-for-ongoing-work",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One of the core responsibilities for merchandise planning and operations teams is the weekly product analysis — what's selling, what's profitable, what's at risk, what to push and what to clear. The process itself isn't complicated, but it's the same routine every week: open the sales table, inventory table, match SKUs, calculate sell-through and margin, find best-sellers and slow-movers, compile a report. After hours of work, only a few questions really need your judgment."
          }
        ],
        "sourceId": "body-819"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, you can have the Agent run the entire analysis pipeline — from data checking, metric calculation, product stratification, anomaly detection, root cause analysis to action recommendations. You make the business decisions."
          }
        ],
        "sourceId": "body-820"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Merchandise Planning Workflow",
            "bold": true
          }
        ],
        "sourceId": "body-821",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a merchandise planning manager or an operations specialist, the product analysis chain looks similar:"
          }
        ],
        "sourceId": "body-822"
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Data preparation",
            "Export sales, inventory, and product master data from ERP — manually format",
            "SKU codes don't match across tables; data is missing, duplicated, or messy"
          ],
          [
            "2. Metric calculation",
            "Calculate sales, margin, sell-through, inventory turnover in Excel",
            "Same formulas and pivot tables every week — redo everything for new data"
          ],
          [
            "3. Product stratification",
            "Break down by category, price tier — find core and low-performing products",
            "Many dimensions, cross-analysis is time-consuming, easy to focus on sales while ignoring inventory"
          ],
          [
            "4. Anomaly detection",
            "Manually filter slow-movers, high-inventory, margin-anomaly SKUs",
            "Fixed threshold catches everything — different categories have different norms, lots of false positives"
          ],
          [
            "5. Root cause analysis",
            "Guess based on experience: \"demand dropped,\" \"seasonal factors\"",
            "No data evidence, conclusions not traceable"
          ],
          [
            "6. Action planning",
            "Write a report, list recommendations, review in meeting",
            "Report is outdated by the time the next week rolls around"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-823/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Traditional approach"
                  }
                ],
                "sourceId": "body-823/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-823/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1. Data preparation"
                  }
                ],
                "sourceId": "body-823/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Export sales, inventory, and product master data from ERP — manually format"
                  }
                ],
                "sourceId": "body-823/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "SKU codes don't match across tables; data is missing, duplicated, or messy"
                  }
                ],
                "sourceId": "body-823/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2. Metric calculation"
                  }
                ],
                "sourceId": "body-823/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Calculate sales, margin, sell-through, inventory turnover in Excel"
                  }
                ],
                "sourceId": "body-823/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Same formulas and pivot tables every week — redo everything for new data"
                  }
                ],
                "sourceId": "body-823/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3. Product stratification"
                  }
                ],
                "sourceId": "body-823/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Break down by category, price tier — find core and low-performing products"
                  }
                ],
                "sourceId": "body-823/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Many dimensions, cross-analysis is time-consuming, easy to focus on sales while ignoring inventory"
                  }
                ],
                "sourceId": "body-823/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "4. Anomaly detection"
                  }
                ],
                "sourceId": "body-823/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manually filter slow-movers, high-inventory, margin-anomaly SKUs"
                  }
                ],
                "sourceId": "body-823/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Fixed threshold catches everything — different categories have different norms, lots of false positives"
                  }
                ],
                "sourceId": "body-823/r4/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "5. Root cause analysis"
                  }
                ],
                "sourceId": "body-823/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Guess based on experience: \"demand dropped,\" \"seasonal factors\""
                  }
                ],
                "sourceId": "body-823/r5/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "No data evidence, conclusions not traceable"
                  }
                ],
                "sourceId": "body-823/r5/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "6. Action planning"
                  }
                ],
                "sourceId": "body-823/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Write a report, list recommendations, review in meeting"
                  }
                ],
                "sourceId": "body-823/r6/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Report is outdated by the time the next week rolls around"
                  }
                ],
                "sourceId": "body-823/r6/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-823"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With AOS Work, these six steps happen in one conversation: the Agent reads the table data, auto-calculates metrics, breaks down structure, identifies anomalies, analyzes causes, and outputs a report with data-backed evidence and action recommendations."
          }
        ],
        "sourceId": "body-824"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Merchandise Planning Stack",
            "bold": true
          }
        ],
        "sourceId": "body-825",
        "headingLevel": 2
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Sales detail, inventory detail, product master data, analysis results",
            "Throughout — all data reading and result writing in tables",
            "Make sure SKU codes are consistent across all three tables"
          ],
          [
            "Library",
            "Historical analysis reports, product image references",
            "Archive weekly reports for year-over-year comparison",
            "Name files \"Weekly_Report_YYYY-MM-DD\" for easy retrieval"
          ],
          [
            "Scheduled Task",
            "Daily anomaly monitoring, weekly auto-analysis",
            "Scenario B: automated alerts",
            "Run it manually once before setting up automation"
          ],
          [
            "Product Operations Analysis Skill",
            "SOP for fixed analysis flow",
            "After Scenario A, solidify this into a Skill",
            "Swap data each week — no need to rewrite the prompt"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tool / Skill"
                  }
                ],
                "sourceId": "body-826/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-826/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "How we use it"
                  }
                ],
                "sourceId": "body-826/r0/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Note"
                  }
                ],
                "sourceId": "body-826/r0/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Base"
                  }
                ],
                "sourceId": "body-826/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Sales detail, inventory detail, product master data, analysis results"
                  }
                ],
                "sourceId": "body-826/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Throughout — all data reading and result writing in tables"
                  }
                ],
                "sourceId": "body-826/r1/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Make sure SKU codes are consistent across all three tables"
                  }
                ],
                "sourceId": "body-826/r1/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Library"
                  }
                ],
                "sourceId": "body-826/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Historical analysis reports, product image references"
                  }
                ],
                "sourceId": "body-826/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Archive weekly reports for year-over-year comparison"
                  }
                ],
                "sourceId": "body-826/r2/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Name files \"Weekly_Report_YYYY-MM-DD\" for easy retrieval"
                  }
                ],
                "sourceId": "body-826/r2/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scheduled Task"
                  }
                ],
                "sourceId": "body-826/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Daily anomaly monitoring, weekly auto-analysis"
                  }
                ],
                "sourceId": "body-826/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario B: automated alerts"
                  }
                ],
                "sourceId": "body-826/r3/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Run it manually once before setting up automation"
                  }
                ],
                "sourceId": "body-826/r3/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Product Operations Analysis Skill"
                  }
                ],
                "sourceId": "body-826/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "SOP for fixed analysis flow"
                  }
                ],
                "sourceId": "body-826/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "After Scenario A, solidify this into a Skill"
                  }
                ],
                "sourceId": "body-826/r4/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Swap data each week — no need to rewrite the prompt"
                  }
                ],
                "sourceId": "body-826/r4/c3/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-826"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Weekly Product Operations Analysis — Six-Step Pipeline, From Data to Action",
            "bold": true
          }
        ],
        "sourceId": "body-827",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-828",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every week, I open three tables, match SKUs, calculate metrics, make pivot tables, find anomalies, write a report — half a day. Only a few SKUs really need my judgment, but 80% of the time is spent moving data and calculating metrics.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Every week, I open three tables, match SKUs, calculate metrics, make pivot tables, find anomalies, write a report — half a day. Only a few SKUs really need my judgment, but 80% of the time is spent moving data and calculating metrics.\""
                  }
                ],
                "sourceId": "body-829/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-829"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-830",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Step 1: Data check",
            "bold": true
          }
        ],
        "sourceId": "body-831"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Don't start by saying \"analyze the product sales.\" First check if the data is complete and SKUs can be linked."
          }
        ],
        "sourceId": "body-832"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Upload or reference three datasets: sales detail, inventory detail, product master data into Base"
          }
        ],
        "sourceId": "body-833",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Ask the Agent to check: field completeness, time range, data type, duplicate records, missing values"
          }
        ],
        "sourceId": "body-834",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Focus on whether SKU codes can be correctly linked across the three tables"
          }
        ],
        "sourceId": "body-835",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Confirm data is usable before moving to analysis"
          }
        ],
        "sourceId": "body-836",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Step 2: Six-step analysis pipeline",
            "bold": true
          }
        ],
        "sourceId": "body-837"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After data confirmation, proceed step by step — don't have the AI output everything at once:"
          }
        ],
        "sourceId": "body-838"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Step 3: Review and confirm",
            "bold": true
          }
        ],
        "sourceId": "body-839"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After the Agent outputs the analysis report, you: confirm whether anomaly judgments match business reality, confirm whether root cause analysis is reasonable, and make the final business decisions (replenish / clear / reprice / delist)."
          }
        ],
        "sourceId": "body-840"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-841",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Read the sales detail, inventory detail, and product master data from the Base. First check data quality: field completeness, time range, duplicate records, missing values, whether SKU codes can be correctly linked across the three tables. Output a data quality check report, listing issues to fix. After confirming data is usable, proceed with the six-step analysis:\n\n1. Results: Summarize total sales, units sold, gross profit, margin, sell-through rate, inventory value, turnover rate, turnover days. Compare with the previous period and identify metrics with significant changes. Describe results first — don't assign causes.\n\n2. Structure: Drill down by category → price tier → SKU. Analyze sales, margin, and inventory value share. Identify the categories with the highest sales contribution, highest margin contribution, and highest inventory share.\n\n3. Efficiency: Link sales performance with inventory performance. For each SKU, calculate sales, margin, and turnover days. Classify into four types: high-sales high-turnover (core) / high-sales low-turnover (cash pressure) / low-sales high-inventory (risk) / low-sales low-inventory (to be determined).\n\n4. Anomalies: Detect anomalies from four dimensions: sales, profit, inventory, sell-through. Don't use fixed thresholds — use year-over-year, week-over-week, and category averages. Cross-validate at least two indicators. Sort by impact amount.\n\n5. Root cause: For SKUs with sales decline >20%, break down by: units sold, price, channel, stockout, promotion. Every conclusion must cite data evidence.\n\n6. Actions: For high-inventory and low-sell-through SKUs, perform inventory aging analysis (0–30/31–60/61–90/91–180/180+ days). Combine with sales trend to assess risk. Output in \"Problem → Data evidence → Cause → Impact → Action\" format.\n\nWrite all results to the \"Product Analysis\" view in the Base. Also output a summary in the conversation."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Read the sales detail, inventory detail, and product master data from the Base. First check data quality: field completeness, time range, duplicate records, missing values, whether SKU codes can be correctly linked across the three tables. Output a data quality check report, listing issues to fix. After confirming data is usable, proceed with the six-step analysis:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Results: Summarize total sales, units sold, gross profit, margin, sell-through rate, inventory value, turnover rate, turnover days. Compare with the previous period and identify metrics with significant changes. Describe results first — don't assign causes."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Structure: Drill down by category → price tier → SKU. Analyze sales, margin, and inventory value share. Identify the categories with the highest sales contribution, highest margin contribution, and highest inventory share."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Efficiency: Link sales performance with inventory performance. For each SKU, calculate sales, margin, and turnover days. Classify into four types: high-sales high-turnover (core) / high-sales low-turnover (cash pressure) / low-sales high-inventory (risk) / low-sales low-inventory (to be determined)."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Anomalies: Detect anomalies from four dimensions: sales, profit, inventory, sell-through. Don't use fixed thresholds — use year-over-year, week-over-week, and category averages. Cross-validate at least two indicators. Sort by impact amount."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "5. Root cause: For SKUs with sales decline >20%, break down by: units sold, price, channel, stockout, promotion. Every conclusion must cite data evidence."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "6. Actions: For high-inventory and low-sell-through SKUs, perform inventory aging analysis (0–30/31–60/61–90/91–180/180+ days). Combine with sales trend to assess risk. Output in \"Problem → Data evidence → Cause → Impact → Action\" format."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Write all results to the \"Product Analysis\" view in the Base. Also output a summary in the conversation."
                  }
                ],
                "sourceId": "body-842/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-842"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-843",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Data quality check report: field issues, missing values, SKU linkage status"
          }
        ],
        "sourceId": "body-844",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Six-step analysis report: from overall results to SKU-level full pipeline"
          }
        ],
        "sourceId": "body-845",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Anomaly SKU list: sorted by impact amount, with cause analysis and data evidence"
          }
        ],
        "sourceId": "body-846",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Four-quadrant matrix: core / cash pressure / inventory risk / to be determined"
          }
        ],
        "sourceId": "body-847",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Action recommendation list: each problem with \"Problem → Evidence → Cause → Impact → Action\""
          }
        ],
        "sourceId": "body-848",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All written to the table, queryable and referable anytime"
          }
        ],
        "sourceId": "body-849",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: From One-Time Analysis to a Solidified Skill",
            "bold": true
          }
        ],
        "sourceId": "body-850",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you re-organize the data and rewrite the prompt every week, you've just hired a smarter analyst. What you should really do is solidify this six-step analysis flow."
          }
        ],
        "sourceId": "body-851"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Use WorkSkill Maker to create a \"Product Operations Analysis Skill,\" solidifying:"
          }
        ],
        "sourceId": "body-852"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Data checking rules (SKU code consistency, missing value handling, anomaly identification)"
          }
        ],
        "sourceId": "body-853",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Metric definitions and calculation formulas"
          }
        ],
        "sourceId": "body-854",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Six-step analysis standard procedure and output format"
          }
        ],
        "sourceId": "body-855",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Anomaly detection logic (cross-validation, category average comparison)"
          }
        ],
        "sourceId": "body-856",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Action output template (Problem → Evidence → Cause → Impact → Action)"
          }
        ],
        "sourceId": "body-857",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Once solidified, you just swap the data each week, and the Skill loads the analysis flow automatically. You go from \"re-doing the analysis every week\" to \"re-running the flow every week.\" See Chapter 4: \"Mastering Skills.\""
          }
        ],
        "sourceId": "body-858"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Inventory Risk Alerts — Daily Auto-Monitoring, From Detection to Action",
            "bold": true
          }
        ],
        "sourceId": "body-859",
        "headingLevel": 2
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ],
        "sourceId": "body-860",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Inventory risk doesn't happen once a week. SKUs turn into slow-movers, approach stockout, or exceed inventory age every single day. But I can't manually run the analysis every day. By the time the weekly report comes out, it's too late.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Inventory risk doesn't happen once a week. SKUs turn into slow-movers, approach stockout, or exceed inventory age every single day. But I can't manually run the analysis every day. By the time the weekly report comes out, it's too late.\""
                  }
                ],
                "sourceId": "body-861/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-861"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-112.png",
        "alt": "",
        "sourceId": "body-862",
        "width": 552,
        "height": 345
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ],
        "sourceId": "body-863",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set up an inventory monitoring view in the Base with: SKU, current inventory, last 7/14/30-day sales, inventory age, turnover days, safety stock level"
          }
        ],
        "sourceId": "body-864",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set alert rules: turnover days > 90 AND inventory age > 60 → alert; inventory < safety stock AND sales in last 7 days → stockout alert"
          }
        ],
        "sourceId": "body-865",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set up a scheduled task: every day at 9:00 AM, auto-scan the table, filter alert SKUs, generate a risk list"
          }
        ],
        "sourceId": "body-866",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent outputs: SKU list sorted by risk level, with initial cause assessment and suggested actions"
          }
        ],
        "sourceId": "body-867",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You open AOS Work every morning — today's risk list is ready. No data pulling needed."
          }
        ],
        "sourceId": "body-868",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ],
        "sourceId": "body-869",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Run daily at 9:00 AM:\nQuery the \"Inventory Monitoring\" view in the Base, scan all active SKUs, detect risks by the following rules:\n\n1. Slow-mover alert: Turnover days > 90 AND inventory age > 60 → flag \"slow-mover risk\"\n2. Stockout alert: Current inventory < safety stock AND sales recorded in last 7 days → flag \"stockout risk\"\n3. Excess aging: Inventory age > 180 days AND no sales in last 30 days → flag \"dead stock\"\n4. Abnormal fluctuation: Last 7-day sales week-over-week decline > 50% → flag \"demand drop\"\n\nOutput: SKU list sorted by risk level, including SKU, product name, risk type, risk level, current inventory, inventory age, last 7-day sales, suggested action.\nWrite to \"Daily Risk List\" view in the Base. Also output a summary in the conversation."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Run daily at 9:00 AM:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Query the \"Inventory Monitoring\" view in the Base, scan all active SKUs, detect risks by the following rules:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. Slow-mover alert: Turnover days > 90 AND inventory age > 60 → flag \"slow-mover risk\""
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Stockout alert: Current inventory < safety stock AND sales recorded in last 7 days → flag \"stockout risk\""
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Excess aging: Inventory age > 180 days AND no sales in last 30 days → flag \"dead stock\""
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Abnormal fluctuation: Last 7-day sales week-over-week decline > 50% → flag \"demand drop\""
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Output: SKU list sorted by risk level, including SKU, product name, risk type, risk level, current inventory, inventory age, last 7-day sales, suggested action."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "Write to \"Daily Risk List\" view in the Base. Also output a summary in the conversation."
                  }
                ],
                "sourceId": "body-870/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-870"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ],
        "sourceId": "body-871",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Daily risk list: sorted by level, with suggested actions (replenish / clear / reprice / monitor)"
          }
        ],
        "sourceId": "body-872",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Four alert types: slow-mover risk / stockout risk / dead stock / demand drop"
          }
        ],
        "sourceId": "body-873",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Auto-written to the table — team members can view directly"
          }
        ],
        "sourceId": "body-874",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Downstream: weekly report auto-pulls this week's daily risk lists to generate a weekly inventory risk report"
          }
        ],
        "sourceId": "body-875",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-876",
        "headingLevel": 2
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In short:",
            "bold": true
          },
          {
            "text": " Agent handles product analysis and risk alerts; you focus on business decisions."
          }
        ],
        "sourceId": "body-877"
      }
    ]
  },
  {
    "id": "4-1-project-a-permanent-home-for-ongoing-work",
    "title": "4.1 Workspace — A Permanent Home for Ongoing Work",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Workspace, Skill & Work — Turn One-Time Wins Into a System",
    "index": 24,
    "prev": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
    "next": "4-2-understanding-skill-what-it-is-and-why-it-matters",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "There are two kinds of work you can bring to AOS Work. One-off tasks — \"summarize this file for me\" — asked, done, and moved on. And ongoing work — \"I'm working on the Spring 2027 launch plan: selection this week, pricing next week, lookbook the week after.\""
          }
        ],
        "sourceId": "body-880"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Start a new conversation for each step, and you re-explain the context every time: which season, which competitors to reference, where the data lives, what format to output. By the third time, the friction is hard to miss."
          }
        ],
        "sourceId": "body-881"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workspace",
            "bold": true
          },
          {
            "text": " solves that."
          }
        ],
        "sourceId": "body-882"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Is a Workspace",
            "bold": true
          }
        ],
        "sourceId": "body-883",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Workspace is a persistent folder for one business topic — its conversations, files, and output stay together under one roof. Think of it as a \"work folder.\""
          }
        ],
        "sourceId": "body-884"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How it's different from a regular conversation:"
          }
        ],
        "sourceId": "body-885"
      },
      {
        "type": "table",
        "rows": [
          [
            "",
            "Regular conversation (session)",
            "Workspace"
          ],
          [
            "Context",
            "Each new conversation starts from scratch",
            "Conversations under the same Workspace share context"
          ],
          [
            "Files",
            "Re-upload every time",
            "Files in the Workspace directory remain available"
          ],
          [
            "Output",
            "Scattered across conversations",
            "Organized by Workspace, viewable in the sidebar"
          ],
          [
            "Best for",
            "One-off tasks: translation, summary, single analysis",
            "Ongoing work: planning, product development, report series"
          ]
        ],
        "cells": [
          [
            [],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Regular conversation (session)"
                  }
                ],
                "sourceId": "body-886/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Workspace"
                  }
                ],
                "sourceId": "body-886/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Context"
                  }
                ],
                "sourceId": "body-886/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Each new conversation starts from scratch"
                  }
                ],
                "sourceId": "body-886/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Conversations under the same Workspace share context"
                  }
                ],
                "sourceId": "body-886/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Files"
                  }
                ],
                "sourceId": "body-886/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Re-upload every time"
                  }
                ],
                "sourceId": "body-886/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Files in the Workspace directory remain available"
                  }
                ],
                "sourceId": "body-886/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Output"
                  }
                ],
                "sourceId": "body-886/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scattered across conversations"
                  }
                ],
                "sourceId": "body-886/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Organized by Workspace, viewable in the sidebar"
                  }
                ],
                "sourceId": "body-886/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-886/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "One-off tasks: translation, summary, single analysis"
                  }
                ],
                "sourceId": "body-886/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Ongoing work: planning, product development, report series"
                  }
                ],
                "sourceId": "body-886/r4/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-886"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "When to Use a Workspace",
            "bold": true
          }
        ],
        "sourceId": "body-887",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The rule is simple: if what you're doing "
          },
          {
            "text": "needs more than one conversation to complete",
            "bold": true
          },
          {
            "text": " — or if your "
          },
          {
            "text": "next conversation needs to reference the files and conclusions of an earlier one",
            "bold": true
          },
          {
            "text": " — use a Workspace."
          }
        ],
        "sourceId": "body-888"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Common scenarios: seasonal planning, client proposals, recurring reports, product development, knowledge base building."
          }
        ],
        "sourceId": "body-889"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How to Create and Use a Workspace",
            "bold": true
          }
        ],
        "sourceId": "body-890",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Click \"New Chat.\"",
            "bold": true
          },
          {
            "text": " Start a new conversation in AOS Work."
          }
        ],
        "sourceId": "body-891",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Select or create a Workspace.",
            "bold": true
          },
          {
            "text": " In the menu below the input box, click \"+ Select Workspace.\" Choose an existing Workspace, or click \"New Workspace\" to create one (e.g. \"2027SS Launch Plan\")."
          }
        ],
        "sourceId": "body-892",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Start working within the Workspace.",
            "bold": true
          },
          {
            "text": " Every message and every file output belongs to this Workspace. You can reference Library or Base files as project context."
          }
        ],
        "sourceId": "body-893",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Output organized by Workspace.",
            "bold": true
          },
          {
            "text": " In the left sidebar, \"Task Outputs\" groups everything by Workspace. No digging through chat history — files are where you expect them."
          }
        ],
        "sourceId": "body-894",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Context accumulates.",
            "bold": true
          },
          {
            "text": " Conversations under the same Workspace build on each other. You describe \"the 2027SS launch plan, referencing French market data\" once — not every time."
          }
        ],
        "sourceId": "body-895",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Workspace vs. Memory",
            "bold": true
          }
        ],
        "sourceId": "body-896",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You met Memory in Chapter 1. Workspace and Memory work at different levels:"
          }
        ],
        "sourceId": "body-897"
      },
      {
        "type": "table",
        "rows": [
          [
            "",
            "Memory",
            "Workspace"
          ],
          [
            "What it holds",
            "Your personal preferences, habits, role (across all conversations)",
            "Files, conversations, and output under one business topic"
          ],
          [
            "Scope",
            "Global — applies to all conversations",
            "Local — only applies to conversations within this Workspace"
          ],
          [
            "Analogy",
            "Your personal profile — what format you like, what you do",
            "A project folder — this Workspace's materials, progress, output"
          ]
        ],
        "cells": [
          [
            [],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Memory"
                  }
                ],
                "sourceId": "body-898/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Workspace"
                  }
                ],
                "sourceId": "body-898/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What it holds"
                  }
                ],
                "sourceId": "body-898/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Your personal preferences, habits, role (across all conversations)"
                  }
                ],
                "sourceId": "body-898/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Files, conversations, and output under one business topic"
                  }
                ],
                "sourceId": "body-898/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scope"
                  }
                ],
                "sourceId": "body-898/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Global — applies to all conversations"
                  }
                ],
                "sourceId": "body-898/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Local — only applies to conversations within this Workspace"
                  }
                ],
                "sourceId": "body-898/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Analogy"
                  }
                ],
                "sourceId": "body-898/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Your personal profile — what format you like, what you do"
                  }
                ],
                "sourceId": "body-898/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "A project folder — this Workspace's materials, progress, output"
                  }
                ],
                "sourceId": "body-898/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-898"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "They work together: Memory tells the Agent "
          },
          {
            "text": "who you are",
            "bold": true
          },
          {
            "text": ". Workspace tells the Agent "
          },
          {
            "text": "what you're working on",
            "bold": true
          },
          {
            "text": "."
          }
        ],
        "sourceId": "body-899"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Workspace vs. Skill",
            "bold": true
          }
        ],
        "sourceId": "body-900",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workspace provides "
          },
          {
            "text": "context",
            "bold": true
          },
          {
            "text": " (files, conversation history, output). Skill provides "
          },
          {
            "text": "methodology",
            "bold": true
          },
          {
            "text": " (how to do this type of task). You can call multiple Skills within one Workspace — for example, in the \"2027SS Launch Plan\" Workspace, call the \"Competitive Analysis\" Skill for research, the \"Pricing Calculator\" Skill for cost analysis, and the \"Lookbook Generator\" Skill for the presentation. Workspace provides the data and background. Skill provides the method. Together, they make workspace-based AI collaboration practical."
          }
        ],
        "sourceId": "body-901"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Workspace + Automation: Keep the Business Process Running",
            "bold": true
          }
        ],
        "sourceId": "body-902",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workspace solves \"context persistence\" — you don't re-explain the background every time. But if you still have to manually start every conversation, you've only removed the repeating, not the doing."
          }
        ],
        "sourceId": "body-903"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Combine Workspace with scheduled tasks, and you get a complete workflow loop: "
          },
          {
            "text": "set up a scheduled trigger within the Workspace. The AI runs on its own schedule. Results come back to the Workspace, waiting for you.",
            "bold": true
          },
          {
            "text": " You've already seen scheduled tasks at work in Chapter 3 (contract expiry tracking, daily inventory risk alerts). Here's what you can solve with automation:"
          }
        ],
        "sourceId": "body-904"
      },
      {
        "type": "table",
        "rows": [
          [
            "Scenario",
            "Pain point",
            "Trigger",
            "Automated flow"
          ],
          [
            "A. Daily fashion news push",
            "30 minutes browsing industry news — and the important stories still slip by",
            "Daily at 9:00",
            "AI searches fashion industry news (curated list from WWD / Vogue Business) → filters business-relevant content → generates a structured brief (3–5 core items + summary + source links) → emails it to you"
          ],
          [
            "B. Sales data monitoring",
            "2 hours every Monday on the weekly sales comparison",
            "Weekly on Monday at 9:00",
            "Pull table data → compare with last week → identify growth / decline / anomalies → generate an HTML report → push to management"
          ],
          [
            "C. Competitor social media monitoring",
            "Manual competitor analysis, scrolling social feeds by hand",
            "Daily at 8:00",
            "Capture competitor social media → classify and analyze → generate a weekly report → write to table + push"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Scenario"
                  }
                ],
                "sourceId": "body-905/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pain point"
                  }
                ],
                "sourceId": "body-905/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Trigger"
                  }
                ],
                "sourceId": "body-905/r0/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Automated flow"
                  }
                ],
                "sourceId": "body-905/r0/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "A. Daily fashion news push"
                  }
                ],
                "sourceId": "body-905/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "30 minutes browsing industry news — and the important stories still slip by"
                  }
                ],
                "sourceId": "body-905/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Daily at 9:00"
                  }
                ],
                "sourceId": "body-905/r1/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "AI searches fashion industry news (curated list from WWD / Vogue Business) → filters business-relevant content → generates a structured brief (3–5 core items + summary + source links) → emails it to you"
                  }
                ],
                "sourceId": "body-905/r1/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "B. Sales data monitoring"
                  }
                ],
                "sourceId": "body-905/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2 hours every Monday on the weekly sales comparison"
                  }
                ],
                "sourceId": "body-905/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Weekly on Monday at 9:00"
                  }
                ],
                "sourceId": "body-905/r2/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pull table data → compare with last week → identify growth / decline / anomalies → generate an HTML report → push to management"
                  }
                ],
                "sourceId": "body-905/r2/c3/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "C. Competitor social media monitoring"
                  }
                ],
                "sourceId": "body-905/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Manual competitor analysis, scrolling social feeds by hand"
                  }
                ],
                "sourceId": "body-905/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Daily at 8:00"
                  }
                ],
                "sourceId": "body-905/r3/c2/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Capture competitor social media → classify and analyze → generate a weekly report → write to table + push"
                  }
                ],
                "sourceId": "body-905/r3/c3/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-905"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You walk into the office and the report is already waiting for you. Files are auto-classified after uploading. That's what Workspace + automation delivers."
          }
        ],
        "sourceId": "body-906"
      }
    ]
  },
  {
    "id": "4-2-understanding-skill-what-it-is-and-why-it-matters",
    "title": "4.2 Understanding Skill: What It Is and Why It Matters",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Workspace, Skill & Work — Turn One-Time Wins Into a System",
    "index": 25,
    "prev": "4-1-project-a-permanent-home-for-ongoing-work",
    "next": "4-3-mastering-skills-from-installation-to-creation",
    "summary": "",
    "blocks": [
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Is a Skill",
            "bold": true
          }
        ],
        "sourceId": "body-908",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AOS Work's Agent handles understanding tasks and organizing execution. A Skill is a set of reusable instructions, scripts, reference materials, and resources that tell the Agent how to handle a specific type of task — which tools to call, what format to deliver."
          }
        ],
        "sourceId": "body-909"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A standard Skill looks like this:"
          }
        ],
        "sourceId": "body-910"
      },
      {
        "type": "table",
        "rows": [
          [
            "my-skill/\n├── SKILL.md          ← Required: the skill description\n├── scripts/          ← Optional: executable scripts\n│   └── check.py\n├── references/       ← Optional: reference materials\n│   └── guide.md\n└── templates/        ← Optional: output templates\n    └── template.pptx"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "my-skill/"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "├── SKILL.md          ← Required: the skill description"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "├── scripts/          ← Optional: executable scripts"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "│   └── check.py"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "├── references/       ← Optional: reference materials"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "│   └── guide.md"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "└── templates/        ← Optional: output templates"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "    └── template.pptx"
                  }
                ],
                "sourceId": "body-911/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-911",
        "diagram": "skill"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Only SKILL.md is required. The simplest Skill is one Markdown file:"
          }
        ],
        "sourceId": "body-912"
      },
      {
        "type": "table",
        "rows": [
          [
            "---\nname: tech-article-writing\ndescription: For writing articles about AI products, model reviews, and tech industry topics\n---\n\nWhen receiving a writing task:\n\n1. First confirm the article's core angle\n2. Find primary sources\n3. Cross-verify core facts\n4. Complete the first draft following the user's writing style\n5. Check for banned sentence patterns and AI-tainted expressions"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "---"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "name: tech-article-writing"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "description: For writing articles about AI products, model reviews, and tech industry topics"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "---"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "When receiving a writing task:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "1. First confirm the article's core angle"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "2. Find primary sources"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "3. Cross-verify core facts"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "4. Complete the first draft following the user's writing style"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "5. Check for banned sentence patterns and AI-tainted expressions"
                  }
                ],
                "sourceId": "body-913/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-913"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How to Look Inside a Skill",
            "bold": true
          }
        ],
        "sourceId": "body-914",
        "headingLevel": 3
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-113.png",
        "alt": "",
        "sourceId": "body-915",
        "width": 552,
        "height": 290
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Before you tune a Skill, it helps to see what's actually inside it — especially the SKILL.md that defines how it works. You don't need to find a file path; just ask the Agent directly in the conversation:"
          }
        ],
        "sourceId": "body-916"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Type "
          },
          {
            "text": "/",
            "bold": true
          },
          {
            "text": " in the conversation and select the Skill you want to inspect."
          }
        ],
        "sourceId": "body-917",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Ask, for example: "
          },
          {
            "text": "\"Show me this Skill's SKILL.md and its references.\"",
            "italic": true
          }
        ],
        "sourceId": "body-918",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent returns the actual file content: the instructions (SKILL.md), the description that controls when it activates, and any scripts or reference materials it uses."
          }
        ],
        "sourceId": "body-919",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Reading a Skill's files is read-only — nothing changes until you tell the Agent to update the Skill (more on that in 4.4)."
          }
        ],
        "sourceId": "body-920"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How Skill Works: Progressive Loading",
            "bold": true
          }
        ],
        "sourceId": "body-921",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The most important design of Skill isn't SKILL.md itself — it's "
          },
          {
            "text": "Progressive Loading",
            "bold": true
          },
          {
            "text": "."
          }
        ],
        "sourceId": "body-922"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Say your Agent has 20 Skills installed. It doesn't load all 20 Skills' full content into context at once. That would waste tokens (the basic unit of text processing, see Appendix) and drown the model in irrelevant instructions."
          }
        ],
        "sourceId": "body-923"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The standard approach has three layers:"
          }
        ],
        "sourceId": "body-924"
      },
      {
        "type": "table",
        "rows": [
          [
            "Layer",
            "What loads"
          ],
          [
            "Layer 1",
            "On startup, the Agent only sees each Skill's name and description. E.g.: \"pptx — handles PowerPoint creation, editing, reading tasks\" \"pdf — handles PDF extraction, merging, editing\" \"tech-article-writing — writes AI and tech industry articles\""
          ],
          [
            "Layer 2",
            "When you say \"write a product review article,\" the Agent matches the description to tech-article-writing and loads the full SKILL.md."
          ],
          [
            "Layer 3",
            "During execution, if it needs to mimic your writing style, it reads references/style.md. If it needs to check for AI-tainted phrases, it executes scripts/check-ai-phrases.py."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Layer"
                  }
                ],
                "sourceId": "body-925/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What loads"
                  }
                ],
                "sourceId": "body-925/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Layer 1",
                    "bold": true
                  }
                ],
                "sourceId": "body-925/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "On startup, the Agent only sees each Skill's name and description. E.g.: \"pptx — handles PowerPoint creation, editing, reading tasks\" \"pdf — handles PDF extraction, merging, editing\" \"tech-article-writing — writes AI and tech industry articles\""
                  }
                ],
                "sourceId": "body-925/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Layer 2",
                    "bold": true
                  }
                ],
                "sourceId": "body-925/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "When you say \"write a product review article,\" the Agent matches the description to tech-article-writing and loads the full SKILL.md."
                  }
                ],
                "sourceId": "body-925/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Layer 3",
                    "bold": true
                  }
                ],
                "sourceId": "body-925/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "During execution, if it needs to mimic your writing style, it reads references/style.md. If it needs to check for AI-tainted phrases, it executes scripts/check-ai-phrases.py."
                  }
                ],
                "sourceId": "body-925/r3/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-925"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All Skills load only tens to hundreds of tokens of metadata at startup. The full instructions load when the Skill is activated. Other materials and scripts load on demand as needed. The benefit: you can install dozens or hundreds of Skills with minimal impact on response time, without wasting tokens."
          }
        ],
        "sourceId": "body-926"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill solves a long-standing AI Agent problem: "
          },
          {
            "text": "how to give the Agent lots of knowledge and methods without cramming everything into the prompt forever.",
            "bold": true
          }
        ],
        "sourceId": "body-927"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "We covered the Skill vs. Prompt comparison in Chapter 1. In short: a Prompt describes a task; a Skill defines how to do a class of tasks. Skills can also bundle scripts and tools for execution. (See Chapter 1 for the full comparison table.)"
          }
        ],
        "sourceId": "body-928"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Four Core Values of Skill",
            "bold": true
          }
        ],
        "sourceId": "body-929",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills give the Agent four advantages: (1) procedural knowledge — how your company does things; (2) locked-down workflows — consistent execution every time; (3) reduced repetition — write once, use forever; (4) organizational assets — personal experience becomes team capability."
          }
        ],
        "sourceId": "body-930"
      }
    ]
  },
  {
    "id": "4-3-mastering-skills-from-installation-to-creation",
    "title": "4.3 Mastering Skills: From Installation to Creation",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Workspace, Skill & Work — Turn One-Time Wins Into a System",
    "index": 26,
    "prev": "4-2-understanding-skill-what-it-is-and-why-it-matters",
    "next": "4-4-tuning-skills-when-standard-isn-t-enough",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Installing and using Skills was covered in 1.6. This section focuses on creating your own.",
            "italic": true
          }
        ],
        "sourceId": "body-932"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Solving a Task with a Skill",
            "bold": true
          }
        ],
        "sourceId": "body-933",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Say you have a sales data table and want the Agent to analyze trends and anomalies. Find the \"Data Analysis\" Skill in Explore, install it, then say \"analyze this table and rank SKUs by sell-through rate, flagging the 10 slowest sellers.\""
          }
        ],
        "sourceId": "body-934"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "AOS Work loads the Data Analysis Skill's methodology — e.g. \"first do a data overview\" → \"calculate key metric distributions\" → \"flag anomalies with cause hypotheses\" → \"output a structured analysis report\" — then executes the analysis using that methodology."
          }
        ],
        "sourceId": "body-935"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You get a structured analysis report with a data overview, anomaly SKU list, trend charts, and action recommendations. You didn't write a single prompt describing the analysis steps. The Skill has built-in execution logic. You just provide the data input and review the output."
          }
        ],
        "sourceId": "body-936"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "From Using Skills to Writing Skills",
            "bold": true
          }
        ],
        "sourceId": "body-937",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Using other people's Skills is the starting point. The real value comes from "
          },
          {
            "text": "writing your own Skills.",
            "bold": true
          }
        ],
        "sourceId": "body-938"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You don't need to write Markdown from scratch. AOS Work's SkillHub (the Explore page where you discover and install Skills) has a built-in Skill called "
          },
          {
            "text": "WorkSkill Maker",
            "bold": true
          },
          {
            "text": " — it's a Skill that creates Skills. Tell it in natural language what you want to do, and it generates the SKILL.md."
          }
        ],
        "sourceId": "body-939"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Creating Your First Skill with WorkSkill Maker",
            "bold": true
          }
        ],
        "sourceId": "body-940",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The flow is simple:"
          }
        ],
        "sourceId": "body-941"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open the conversation, invoke WorkSkill Maker.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "In the AOS Work conversation, say: \"I want to create a Skill for batch-renaming product images.\" WorkSkill Maker guides you through clarifying the requirements."
          }
        ],
        "sourceId": "body-942",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Describe what you want in natural language.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "WorkSkill Maker asks a few questions: what problem does this Skill solve? What's the input? What's the output? What rules must be followed? You answer like you're talking to a coworker. It formats everything into a SKILL.md."
          }
        ],
        "sourceId": "body-943",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Review the generated SKILL.md.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "WorkSkill Maker generates a complete Skill file. Check these key parts:"
          }
        ],
        "sourceId": "body-944",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "table",
        "rows": [
          [
            "Check item",
            "What to look for"
          ],
          [
            "name",
            "Short and clear"
          ],
          [
            "description",
            "The most important field — this determines when the Skill auto-activates. Include keywords the user might say"
          ],
          [
            "Step instructions",
            "Is the execution flow complete? Did it miss any of your experience points?"
          ],
          [
            "Notes",
            "Did it include the \"gotchas\" you told the AI about?"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Check item"
                  }
                ],
                "sourceId": "body-945/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What to look for"
                  }
                ],
                "sourceId": "body-945/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "name"
                  }
                ],
                "sourceId": "body-945/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Short and clear"
                  }
                ],
                "sourceId": "body-945/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "description"
                  }
                ],
                "sourceId": "body-945/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "The most important field",
                    "bold": true
                  },
                  {
                    "text": " — this determines when the Skill auto-activates. Include keywords the user might say"
                  }
                ],
                "sourceId": "body-945/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step instructions"
                  }
                ],
                "sourceId": "body-945/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Is the execution flow complete? Did it miss any of your experience points?"
                  }
                ],
                "sourceId": "body-945/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Notes"
                  }
                ],
                "sourceId": "body-945/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Did it include the \"gotchas\" you told the AI about?"
                  }
                ],
                "sourceId": "body-945/r4/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-945"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Understand the activation mechanism.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "The description field determines when the Skill activates. Example: if you're creating a \"batch-rename product images\" Skill, the description should be something like: \"For batch-renaming product images in Library, following the category_SKU_color_date naming convention. Activates when the user mentions image renaming, file name normalization, or product image rename.\""
          },
          {
            "text": "\n"
          },
          {
            "text": "This way, when you say \"rename these product images,\" the Agent auto-loads this Skill."
          }
        ],
        "sourceId": "body-946",
        "marker": "4.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Test and iterate.",
            "bold": true
          },
          {
            "text": "\n"
          },
          {
            "text": "Run the Skill once and see if the result is correct. If not, modify the SKILL.md and run again."
          }
        ],
        "sourceId": "body-947",
        "marker": "5.",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Your First Skill Won't Be Perfect",
            "bold": true
          }
        ],
        "sourceId": "body-948",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is important: "
          },
          {
            "text": "your first version of a Skill will almost certainly be imperfect.",
            "bold": true
          },
          {
            "text": " In real use, you'll find:"
          }
        ],
        "sourceId": "body-949"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Some steps the Agent misunderstood — need to rephrase"
          }
        ],
        "sourceId": "body-950",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Some experience you forgot to write in — the Agent missed a step"
          }
        ],
        "sourceId": "body-951",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Some rules need constraints — \"don't modify original files\" or \"confirm with me before executing\""
          }
        ],
        "sourceId": "body-952",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The description is too narrow — certain scenarios don't activate it; or too broad — it activates when it shouldn't"
          }
        ],
        "sourceId": "body-953",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is normal. The value of a Skill is in "
          },
          {
            "text": "continuous improvement.",
            "bold": true
          },
          {
            "text": " In the conversation, you can tell the Agent:"
          }
        ],
        "sourceId": "body-954"
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Remember what we discussed today. This Skill's rules need updating: 1. Keep the original file name as a note when renaming; 2. Use the C prefix for color codes, not D.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"Remember what we discussed today. This Skill's rules need updating: 1. Keep the original file name as a note when renaming; 2. Use the C prefix for color codes, not D.\""
                  }
                ],
                "sourceId": "body-955/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-955"
      },
      {
        "type": "image",
        "src": "/playbook-images/release-image-114.png",
        "alt": "",
        "sourceId": "body-956",
        "width": 552,
        "height": 345
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Or even more directly:"
          }
        ],
        "sourceId": "body-957"
      },
      {
        "type": "table",
        "rows": [
          [
            "\"What can you learn from the conversation above? Remember and optimize this Skill.\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"What can you learn from the conversation above? Remember and optimize this Skill.\""
                  }
                ],
                "sourceId": "body-958/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-958"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent incorporates your feedback into the SKILL.md. Next time, it runs with the updated rules. The more you use it, the more accurate it gets."
          }
        ],
        "sourceId": "body-959"
      }
    ]
  },
  {
    "id": "4-4-tuning-skills-when-standard-isn-t-enough",
    "title": "4.4 Tuning Skills: When Standard Isn't Enough",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Workspace, Skill & Work — Turn One-Time Wins Into a System",
    "index": 27,
    "prev": "4-3-mastering-skills-from-installation-to-creation",
    "next": "4-5-work-package-skills-into-a-role",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Before you tune a Skill, look at its current files first — see \"How to Look Inside a Skill\" in 4.2."
          }
        ],
        "sourceId": "body-961"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "When to Optimize",
            "bold": true
          }
        ],
        "sourceId": "body-962",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "✅ Signals you need to optimize:\n  - You manually add the same info every time → the Skill should remember it\n  - You adjust the output format every time → the output template needs updating\n  - The Skill doesn't understand your industry terms → add terminology explanations\n\n❌ Don't optimize when:\n  - The Skill occasionally makes mistakes → might be input data issue\n  - You haven't used it 5+ times → use it more before deciding to change"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "✅ Signals you need to optimize:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  - You manually add the same info every time → the Skill should remember it"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  - You adjust the output format every time → the output template needs updating"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  - The Skill doesn't understand your industry terms → add terminology explanations"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "❌ Don't optimize when:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  - The Skill occasionally makes mistakes → might be input data issue"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  - You haven't used it 5+ times → use it more before deciding to change"
                  }
                ],
                "sourceId": "body-963/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-963"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How to Optimize",
            "bold": true
          }
        ],
        "sourceId": "body-964",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tell AOS Work what to adjust.",
            "bold": true
          },
          {
            "text": " Example:"
          }
        ],
        "sourceId": "body-965"
      },
      {
        "type": "table",
        "rows": [
          [
            "\"The product copy Skill needs footwear-specific adjustments — extra fields: size range, heel height, use case. Keep fashion industry terms in their original language (e.g. Stiletto, Derby, Loafer).\""
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "\"The product copy Skill needs footwear-specific adjustments — extra fields: size range, heel height, use case. Keep fashion industry terms in their original language (e.g. Stiletto, Derby, Loafer).\""
                  }
                ],
                "sourceId": "body-966/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-966"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent updates the Skill with new fields and terminology rules. After 1–2 days of use, you can also say \"summarize my preferences from today's conversations and update this Skill\" — AOS Work auto-summarizes conversation preferences and saves them as Skill preferences."
          }
        ],
        "sourceId": "body-967"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Optimization Flow",
            "bold": true
          }
        ],
        "sourceId": "body-968",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Content"
          ],
          [
            "1",
            "Identify the problem: which step needs manual adjustment every time?"
          ],
          [
            "2",
            "Tell AOS Work what to change"
          ],
          [
            "3",
            "Test → compare before and after"
          ],
          [
            "4",
            "Save when satisfied → publish new version"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Step"
                  }
                ],
                "sourceId": "body-969/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Content"
                  }
                ],
                "sourceId": "body-969/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "1"
                  }
                ],
                "sourceId": "body-969/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Identify the problem: which step needs manual adjustment every time?"
                  }
                ],
                "sourceId": "body-969/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "2"
                  }
                ],
                "sourceId": "body-969/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Tell AOS Work what to change"
                  }
                ],
                "sourceId": "body-969/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "3"
                  }
                ],
                "sourceId": "body-969/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Test → compare before and after"
                  }
                ],
                "sourceId": "body-969/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "4"
                  }
                ],
                "sourceId": "body-969/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Save when satisfied → publish new version"
                  }
                ],
                "sourceId": "body-969/r4/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-969"
      }
    ]
  },
  {
    "id": "4-5-work-package-skills-into-a-role",
    "title": "4.5 Work: Package Skills Into a Role",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Workspace, Skill & Work — Turn One-Time Wins Into a System",
    "index": 28,
    "prev": "4-4-tuning-skills-when-standard-isn-t-enough",
    "next": "appendix-the-ai-work-system-in-one-chapter",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You've installed Skills and they work well. But every time you start a task, you still have to think \"which Skills should I use this time?\""
          }
        ],
        "sourceId": "body-971"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Work",
            "bold": true
          },
          {
            "text": " solves that. "
          },
          {
            "text": "Work is a bundle of Skills, packaged for a specific role or a complete job.",
            "bold": true
          }
        ],
        "sourceId": "body-972"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Simply put: "
          },
          {
            "text": "Skill is an \"everyday tool.\" Work is a \"job tool kit.\"",
            "bold": true
          }
        ],
        "sourceId": "body-973"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "For everyday general tasks, Skills are enough. But when you need to complete a full job — like generating a weekly Amazon competitor report or launching a new listing in three languages — you need a coordinated set of capabilities. That's when Work is much more efficient than picking Skills one by one."
          }
        ],
        "sourceId": "body-974"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How to Use Work",
            "bold": true
          }
        ],
        "sourceId": "body-975",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Find and install:",
            "bold": true
          },
          {
            "text": " Open Explore → Work tab → click Add"
          }
        ],
        "sourceId": "body-976",
        "marker": "1.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Use in a task:",
            "bold": true
          },
          {
            "text": " Click "
          },
          {
            "text": "+ menu",
            "bold": true
          },
          {
            "text": " next to input box → select the Work → all Skills load together"
          }
        ],
        "sourceId": "body-977",
        "marker": "2.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Direct the Agent:",
            "bold": true
          },
          {
            "text": " Tell it what to do — the Agent won't auto-call Skills"
          }
        ],
        "sourceId": "body-978",
        "marker": "3.",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Recommended approach:",
            "bold": true
          },
          {
            "text": " Create different sessions within a Workspace for different tasks. Earlier sessions write data to the Base. Later sessions read from the Base to aggregate."
          }
        ],
        "sourceId": "body-979"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Real Example: Amazon Operations Work",
            "bold": true
          }
        ],
        "sourceId": "body-980",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Amazon operations is "
          },
          {
            "text": "fragmented but interconnected",
            "bold": true
          },
          {
            "text": ": monitoring competitors, reading reviews, optimizing listings, checking ads, writing reports. Each task needs a different capability, but they're one complete operational chain."
          }
        ],
        "sourceId": "body-981"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Packaged as "
          },
          {
            "text": "\"Amazon Operations Work\"",
            "bold": true
          },
          {
            "text": ", it includes 6 Skills: competitor monitoring, review analysis, listing optimization, keyword research, ad data analysis, and weekly report. Pick one Work, and all Skills load together."
          }
        ],
        "sourceId": "body-982"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Scenario Demo: A Complete Operations Chain",
            "bold": true
          }
        ],
        "sourceId": "body-983",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sub-scenario A: Daily competitor + review check",
            "bold": true
          }
        ],
        "sourceId": "body-984"
      },
      {
        "type": "table",
        "rows": [
          [
            "Today's Amazon operations check:\n- My listings: B0DXXXXXX (Women's knit cardigan), B0DYYYYYY (Men's jacket)\n- Competitors: 3 ASINs in the same category\n- Check:\n  1. Did any competitor change price overnight? What's the price gap with mine?\n  2. Did any competitor change their title/bullet points? List changes if any.\n  3. How many new reviews for me and competitors? Sentiment (positive/negative/neutral)?\n  4. What are the common issues in negative reviews? (size/fabric/logistics/other)\n- Output: Write to the \"Daily Check\" view in your Base, one row per ASIN"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Today's Amazon operations check:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- My listings: B0DXXXXXX (Women's knit cardigan), B0DYYYYYY (Men's jacket)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Competitors: 3 ASINs in the same category"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Check:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  1. Did any competitor change price overnight? What's the price gap with mine?"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  2. Did any competitor change their title/bullet points? List changes if any."
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  3. How many new reviews for me and competitors? Sentiment (positive/negative/neutral)?"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  4. What are the common issues in negative reviews? (size/fabric/logistics/other)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Output: Write to the \"Daily Check\" view in your Base, one row per ASIN"
                  }
                ],
                "sourceId": "body-985/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-985"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent calls Competitor Monitoring Skill → Review Analysis Skill → writes results to the table. A few minutes later, you have a check table in your Base, all clear at a glance."
          }
        ],
        "sourceId": "body-986"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sub-scenario B: New listing launch",
            "bold": true
          }
        ],
        "sourceId": "body-987"
      },
      {
        "type": "table",
        "rows": [
          [
            "New listing generation:\n- Product: Women's cashmere scarf, ASIN pending\n- Target markets: US + EU (English/German/Italian)\n- Output:\n  1. Title (≤200 characters, with core keywords)\n  2. Bullet points (5, ≤500 characters each, features + specs)\n  3. Product description (≤2000 characters)\n  4. Backend search terms (≤250 characters)\n  5. English → German → Italian versions\n- Constraint: Keywords from real Keyword Research Skill data"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "New listing generation:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Product: Women's cashmere scarf, ASIN pending"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Target markets: US + EU (English/German/Italian)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Output:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  1. Title (≤200 characters, with core keywords)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  2. Bullet points (5, ≤500 characters each, features + specs)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  3. Product description (≤2000 characters)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  4. Backend search terms (≤250 characters)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  5. English → German → Italian versions"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Constraint: Keywords from real Keyword Research Skill data"
                  }
                ],
                "sourceId": "body-988/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-988"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent calls Keyword Research Skill → Listing Optimization Skill → Multi-language copy generation Skill. You get a complete three-language listing set, ready to copy and paste into Amazon Seller Central."
          }
        ],
        "sourceId": "body-989"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sub-scenario C: Friday weekly report",
            "bold": true
          }
        ],
        "sourceId": "body-990"
      },
      {
        "type": "table",
        "rows": [
          [
            "Generate this week's Amazon operations weekly report:\n- Time range: Last Monday to this Sunday\n- Sections:\n  1. Sales overview: total revenue, units ordered, return rate (vs. last week)\n  2. Review dynamics: new review count, average star rating, Top 3 negative review reasons\n  3. Competitor changes: price adjustments, listing modifications, new launches\n  4. Ad performance: total spend, ACoS, conversion rate, Top 5 spend keywords\n  5. Next week focus: 3 action items based on the above data\n- Data sources: \"Daily Check\" view + ad reports + inventory table in your Base"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Generate this week's Amazon operations weekly report:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Time range: Last Monday to this Sunday"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Sections:"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  1. Sales overview: total revenue, units ordered, return rate (vs. last week)"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  2. Review dynamics: new review count, average star rating, Top 3 negative review reasons"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  3. Competitor changes: price adjustments, listing modifications, new launches"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  4. Ad performance: total spend, ACoS, conversion rate, Top 5 spend keywords"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "  5. Next week focus: 3 action items based on the above data"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "- Data sources: \"Daily Check\" view + ad reports + inventory table in your Base"
                  }
                ],
                "sourceId": "body-991/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-991"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent reads from your Base — the data written by the previous sessions — and assembles a standardized report using the Operations Weekly Report Skill. The prerequisite: each previous session wrote its data to the Base."
          }
        ],
        "sourceId": "body-992"
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 In short: The Amazon ops specialist's fragmented tasks — monitoring competitors, writing listings, producing weekly reports — no longer need five tools and five switches. Pick one Work, and all Skills load together."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "💡 "
                  },
                  {
                    "text": "In short:",
                    "bold": true
                  },
                  {
                    "text": " The Amazon ops specialist's fragmented tasks — monitoring competitors, writing listings, producing weekly reports — no longer need five tools and five switches. Pick one Work, and all Skills load together."
                  }
                ],
                "sourceId": "body-993/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-993"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ],
        "sourceId": "body-994",
        "headingLevel": 3
      },
      {
        "type": "table",
        "rows": [
          [
            "What's your role? What are the daily tasks that chain together? Package them into a Work, and you have a dedicated tool kit you can pick up and go. We're looking forward to your case — what does your Work look like, what Skills are in it, what problem does it solve? Share it with us, and help more people make their Agents feel more like real colleagues."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What's your role? What are the daily tasks that chain together? Package them into a Work, and you have a dedicated tool kit you can pick up and go. We're looking forward to your case — what does your Work look like, what Skills are in it, what problem does it solve? Share it with us, and help more people make their Agents feel more like real colleagues."
                  }
                ],
                "sourceId": "body-995/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-995"
      }
    ]
  },
  {
    "id": "appendix-the-ai-work-system-in-one-chapter",
    "title": "4.6 Appendix: The AI Work System in One Chapter",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Workspace, Skill & Work — Turn One-Time Wins Into a System",
    "index": 29,
    "prev": "4-5-work-package-skills-into-a-role",
    "next": null,
    "summary": "",
    "blocks": [
      {
        "type": "table",
        "rows": [
          [
            "Optional reading. If you're curious about how all this actually works under the hood, this chapter gives you the full picture. It won't affect your day-to-day use — but if you read it once, you'll debug faster, choose models more wisely, and design workflows with more confidence."
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Optional reading. If you're curious about how all this actually works under the hood, this chapter gives you the full picture. It won't affect your day-to-day use — but if you read it once, you'll debug faster, choose models more wisely, and design workflows with more confidence."
                  }
                ],
                "sourceId": "body-997/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-997"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Big Picture: How the Agent Works",
            "bold": true
          }
        ],
        "sourceId": "body-998",
        "headingLevel": 3
      },
      {
        "type": "diagram",
        "runs": [
          {
            "text": "The Agent loads Skills, calls tools, and sends results back to the checkpoint before final output."
          }
        ],
        "sourceId": "body-999",
        "diagram": "ai"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is a simplified view. Real workflows often loop back, skip steps, or branch in unexpected ways."
          }
        ],
        "sourceId": "body-1000"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Of the five roles, the model is the brain, the Agent is the dispatcher, Skill is the specialist's manual, tools and interfaces are the hands and feet, and you're the decision-maker. Each section below unpacks one building block — where it helps, and where its limits are."
          }
        ],
        "sourceId": "body-1001"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "LLM: The Foundation Model That Predicts What Comes Next",
            "bold": true
          }
        ],
        "sourceId": "body-1002",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "LLM stands for Large Language Model. It learns patterns of language and knowledge from massive datasets, then generates the most probable continuation of whatever you give it. It's essentially a \"predict the next thing\" engine — not a database, and not something that takes responsibility for what it produces."
          }
        ],
        "sourceId": "body-1003"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What it's good at:",
            "bold": true
          }
        ],
        "sourceId": "body-1004"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Understanding, summarizing, and rewriting text"
          }
        ],
        "sourceId": "body-1005",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Extracting structure from raw material"
          }
        ],
        "sourceId": "body-1006",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generating drafts, proposals, and code"
          }
        ],
        "sourceId": "body-1007",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Mimicking format and style from examples"
          }
        ],
        "sourceId": "body-1008",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Continuing analysis after tools return results"
          }
        ],
        "sourceId": "body-1009",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What it doesn't naturally guarantee:",
            "bold": true
          }
        ],
        "sourceId": "body-1010"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't guarantee every fact is correct"
          }
        ],
        "sourceId": "body-1011",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't know your company's latest internal state unless you give it materials or connect it to systems"
          }
        ],
        "sourceId": "body-1012",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't magically have real evidence just because it sounds confident"
          }
        ],
        "sourceId": "body-1013",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't automatically have access to your files, accounts, databases, or network"
          }
        ],
        "sourceId": "body-1014",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't take business or legal responsibility"
          }
        ],
        "sourceId": "body-1015",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Why does it \"hallucinate\"?",
            "bold": true
          }
        ],
        "sourceId": "body-1016"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The model's job is to generate coherent content, not to be a built-in fact database. When data is missing, the question is vague, or it's asked to give a definite answer, it may fill the gap with something plausible but untrue. This isn't a bug — it's a side effect of \"probabilistic completion.\" Once you understand that, you stop asking \"why did it say that so confidently if it's wrong?\" — confidence and correctness are two different things."
          }
        ],
        "sourceId": "body-1017"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How to reduce hallucinations:",
            "bold": true
          }
        ],
        "sourceId": "body-1018"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Provide reliable source material"
          }
        ],
        "sourceId": "body-1019",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Ask for citations (make it say where each conclusion comes from)"
          }
        ],
        "sourceId": "body-1020",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Allow it to answer \"I can't confirm that\""
          }
        ],
        "sourceId": "body-1021",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Separate fact extraction from suggestion generation"
          }
        ],
        "sourceId": "body-1022",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Review high-impact conclusions manually"
          }
        ],
        "sourceId": "body-1023",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Tokens and Context Windows: How Much Can the Model See at Once",
            "bold": true
          }
        ],
        "sourceId": "body-1024",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A token is the basic unit a model processes — it's not exactly a word. A single character might be one token or several. Code and punctuation are counted separately. The context window is the total amount of input, conversation history, and output a model can handle in a single inference."
          }
        ],
        "sourceId": "body-1025"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Think of the context window as the model's short-term memory capacity: if information fits inside it, the model can see it. If it doesn't fit, something gets dropped or compressed."
          }
        ],
        "sourceId": "body-1026"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A longer context isn't always better",
            "bold": true
          }
        ],
        "sourceId": "body-1027"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Cramming every file and months of conversation into one task can cause:"
          }
        ],
        "sourceId": "body-1028"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "New instructions conflicting with old ones"
          }
        ],
        "sourceId": "body-1029",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Critical data getting buried under irrelevant content"
          }
        ],
        "sourceId": "body-1030",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Higher costs and longer wait times"
          }
        ],
        "sourceId": "body-1031",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The model referencing an outdated version"
          }
        ],
        "sourceId": "body-1032",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Bigger windows don't mean clearer vision. They can mean more noise."
          }
        ],
        "sourceId": "body-1033"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A safer approach:",
            "bold": true
          }
        ],
        "sourceId": "body-1034"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Put stable reference material into your Library, structured data into Base, and long-running decisions into Memory — instead of letting your conversation carry all of it. The system retrieves what's relevant when needed, so the context window doesn't have to hold everything at once. In short: don't treat your chat history as a database. Put things where they belong."
          }
        ],
        "sourceId": "body-1035"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Prompt: A Task Brief, Not a Magic Spell",
            "bold": true
          }
        ],
        "sourceId": "body-1036",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A prompt is what you give the model or Agent — your goal, background, materials, constraints, examples, and output expectations. A good prompt isn't measured by length, but by whether it gives enough information to execute and validate. Writing a prompt isn't \"casting a spell\" — it's writing a task brief you'd hand to a colleague."
          }
        ],
        "sourceId": "body-1037"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The six elements:",
            "bold": true
          }
        ],
        "sourceId": "body-1038"
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "What it answers"
          ],
          [
            "Goal",
            "What problem are we solving"
          ],
          [
            "Input",
            "What materials or systems are involved"
          ],
          [
            "Action",
            "Analyze, organize, generate, or write"
          ],
          [
            "Constraints",
            "What not to do, what rules to follow"
          ],
          [
            "Output",
            "What file or structure to deliver"
          ],
          [
            "Validation",
            "What counts as correct and usable"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Element"
                  }
                ],
                "sourceId": "body-1039/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What it answers"
                  }
                ],
                "sourceId": "body-1039/r0/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Goal"
                  }
                ],
                "sourceId": "body-1039/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What problem are we solving"
                  }
                ],
                "sourceId": "body-1039/r1/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Input"
                  }
                ],
                "sourceId": "body-1039/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What materials or systems are involved"
                  }
                ],
                "sourceId": "body-1039/r2/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Action"
                  }
                ],
                "sourceId": "body-1039/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Analyze, organize, generate, or write"
                  }
                ],
                "sourceId": "body-1039/r3/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Constraints"
                  }
                ],
                "sourceId": "body-1039/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What not to do, what rules to follow"
                  }
                ],
                "sourceId": "body-1039/r4/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Output"
                  }
                ],
                "sourceId": "body-1039/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What file or structure to deliver"
                  }
                ],
                "sourceId": "body-1039/r5/c1/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Validation"
                  }
                ],
                "sourceId": "body-1039/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What counts as correct and usable"
                  }
                ],
                "sourceId": "body-1039/r6/c1/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-1039"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Validation is easy to overlook. Without a validation standard, the model delivers whatever it thinks is right — and you have no way to say where it went wrong."
          }
        ],
        "sourceId": "body-1040"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prompt, Task Card, and SOP:",
            "bold": true
          }
        ],
        "sourceId": "body-1041"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prompt: how to say it this time"
          }
        ],
        "sourceId": "body-1042",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Task Card: a fillable structure for recurring tasks"
          }
        ],
        "sourceId": "body-1043",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "SOP: fixed steps, roles, checkpoints, and exception handling"
          }
        ],
        "sourceId": "body-1044",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill: a packaged SOP with scripts and resources, ready to execute"
          }
        ],
        "sourceId": "body-1045",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "These four form a progression from \"one-time instruction\" to \"reusable capability.\" Not every prompt deserves to become a Skill. Let it succeed first, then solidify. Run a task three to five times and confirm the pattern is stable before you invest in packaging it."
          }
        ],
        "sourceId": "body-1046"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Agent: An Executor That Cycles Around a Goal",
            "bold": true
          }
        ],
        "sourceId": "body-1047",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "An Agent doesn't just \"answer once.\" It runs a continuous loop: understand the goal, observe the environment, decide what to do next, call a tool, read the result, revise the plan — until it delivers or hits a stop condition. (In practice, this loop may branch, retry, or pause — it's not always a clean circle.)"
          }
        ],
        "sourceId": "body-1048"
      },
      {
        "type": "table",
        "rows": [
          [
            "Receive goal → Observe materials & state → Plan next step → Call tool → Read result & errors → Check: done? Pause? Continue?"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Receive goal → Observe materials & state → Plan next step → Call tool → Read result & errors → Check: done? Pause? Continue?"
                  }
                ],
                "sourceId": "body-1049/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-1049",
        "diagram": "process",
        "stages": [
          "Receive goal",
          "Observe materials & state",
          "Plan next step",
          "Call tool",
          "Read result & errors",
          "Check: done? Pause? Continue?"
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A chat model is \"you ask, it answers.\" An Agent is \"you set a goal, it drives itself forward, checking results and adjusting course along the way.\""
          }
        ],
        "sourceId": "body-1050"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Agent vs. Chat Model:",
            "bold": true
          }
        ],
        "sourceId": "body-1051"
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Chat Model",
            "Agent"
          ],
          [
            "Core action",
            "Generate a response",
            "Plan, call tools, execute, deliver"
          ],
          [
            "What it works with",
            "The current conversation",
            "Files, tools, systems, task state"
          ],
          [
            "Process",
            "Usually one-shot",
            "Multiple rounds of observation and action"
          ],
          [
            "Risk",
            "Content errors",
            "Content errors + real-world impact"
          ],
          [
            "Control",
            "Prompt and review",
            "Permissions, checkpoints, logs, rollback"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Dimension"
                  }
                ],
                "sourceId": "body-1052/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Chat Model"
                  }
                ],
                "sourceId": "body-1052/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Agent"
                  }
                ],
                "sourceId": "body-1052/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Core action"
                  }
                ],
                "sourceId": "body-1052/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Generate a response"
                  }
                ],
                "sourceId": "body-1052/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Plan, call tools, execute, deliver"
                  }
                ],
                "sourceId": "body-1052/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What it works with"
                  }
                ],
                "sourceId": "body-1052/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "The current conversation"
                  }
                ],
                "sourceId": "body-1052/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Files, tools, systems, task state"
                  }
                ],
                "sourceId": "body-1052/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Process"
                  }
                ],
                "sourceId": "body-1052/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Usually one-shot"
                  }
                ],
                "sourceId": "body-1052/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Multiple rounds of observation and action"
                  }
                ],
                "sourceId": "body-1052/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Risk"
                  }
                ],
                "sourceId": "body-1052/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Content errors"
                  }
                ],
                "sourceId": "body-1052/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Content errors + real-world impact"
                  }
                ],
                "sourceId": "body-1052/r4/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Control"
                  }
                ],
                "sourceId": "body-1052/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Prompt and review"
                  }
                ],
                "sourceId": "body-1052/r5/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Permissions, checkpoints, logs, rollback"
                  }
                ],
                "sourceId": "body-1052/r5/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-1052"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "When an Agent should stop:",
            "bold": true
          }
        ],
        "sourceId": "body-1053"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A good Agent doesn't \"always find a way to continue.\" It should pause and ask for human help when:"
          }
        ],
        "sourceId": "body-1054"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A key input is missing"
          }
        ],
        "sourceId": "body-1055",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Goals conflict"
          }
        ],
        "sourceId": "body-1056",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Permissions are insufficient"
          }
        ],
        "sourceId": "body-1057",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Cost is over budget"
          }
        ],
        "sourceId": "body-1058",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The action is irreversible"
          }
        ],
        "sourceId": "body-1059",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The result can't be validated"
          }
        ],
        "sourceId": "body-1060",
        "marker": "•",
        "level": 0
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Tool: Making the Agent Actually Do Things",
            "bold": true
          }
        ],
        "sourceId": "body-1061",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Tool is a concrete capability an Agent can call — read a file, run a search, generate a spreadsheet, send a message. A Connector is one kind of Tool: a pre-packaged third-party service connection, designed for authorized use."
          }
        ],
        "sourceId": "body-1062"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Knowing isn't the same as doing:",
            "bold": true
          }
        ],
        "sourceId": "body-1063"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent can explain \"how to send an email,\" but it can only create a draft or send it once the Email Connector is installed and authorized. The Agent can write SQL, but it can only query a database if the Database Connector is installed and authorized."
          }
        ],
        "sourceId": "body-1064"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is a common misunderstanding new users have: just because the Agent "
          },
          {
            "text": "knows",
            "italic": true
          },
          {
            "text": " something doesn't mean it "
          },
          {
            "text": "can do",
            "italic": true
          },
          {
            "text": " it. Whether it can depends on whether the right tools, permissions, and connections are in place. When a task fails, start with \"are the tools connected and authorized?\" — not \"is the Agent smart enough?\""
          }
        ],
        "sourceId": "body-1065"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Before using any tool, ask yourself: who's it acting as, what can it read and change, where does the data go, and how does it stop or roll back if something fails?"
          }
        ],
        "sourceId": "body-1066"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Skill: Reusable Expertise for Specialized Work",
            "bold": true
          }
        ],
        "sourceId": "body-1067",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Skill isn't a smarter model. It's a package of instructions, scripts, knowledge, and templates organized around a specific type of task, so the Agent executes it more consistently."
          }
        ],
        "sourceId": "body-1068"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The value of a Skill isn't \"make the model better\" — it's \"lock down the steps that are easy to get wrong or skip.\" If you ask a model to process an invoice from scratch ten times, you might get three different approaches. With a Skill, all ten runs follow the same proven path."
          }
        ],
        "sourceId": "body-1069"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What a Skill can contain:",
            "bold": true
          }
        ],
        "sourceId": "body-1070"
      },
      {
        "type": "table",
        "rows": [
          [
            "invoice-skill/\n├── SKILL.md          # Triggers, steps, boundaries, output\n├── references/       # Fields, categories, business rules\n├── scripts/          # OCR, validation, table processing\n├── templates/        # Excel and report templates\n└── tests/            # Normal and edge-case samples"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "invoice-skill/"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "├── SKILL.md          # Triggers, steps, boundaries, output"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "├── references/       # Fields, categories, business rules"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "├── scripts/          # OCR, validation, table processing"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "├── templates/        # Excel and report templates"
                  },
                  {
                    "text": "\n"
                  },
                  {
                    "text": "└── tests/            # Normal and edge-case samples"
                  }
                ],
                "sourceId": "body-1071/r0/c0/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-1071",
        "diagram": "invoice"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "SKILL.md is the entry point — it tells the Agent \"when to use me, how, and where my boundaries are.\" References hold the business knowledge. Scripts hold the code that actually runs. Templates keep output format consistent. Tests make sure edge cases are covered."
          }
        ],
        "sourceId": "body-1072"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill vs. Prompt:",
            "bold": true
          }
        ],
        "sourceId": "body-1073"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Prompt usually affects only the current conversation. A Skill can be called across different tasks and carries scripts, resources, and a stable process. But a Skill can still fail, and it may still request local, network, or third-party permissions."
          }
        ],
        "sourceId": "body-1074"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Remember: Skill is a \"method package,\" not a \"capability guarantee.\" Install a Skill and the Agent is more likely to follow the right path. But it doesn't mean it will never make mistakes."
          }
        ],
        "sourceId": "body-1075"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Risks of third-party Skills:",
            "bold": true
          },
          {
            "text": " Third-party Skills can access your local files, send data externally, use your credentials, or run system commands — and some may contain malicious code or rely on unmaintained dependencies."
          }
        ],
        "sourceId": "body-1076"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Check the source, code, permissions, network access, credentials, cost, and deactivation method. Test in an isolated directory first. Third-party Skills are like browser extensions — convenient, but check what permissions they're asking for."
          }
        ],
        "sourceId": "body-1077"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "MCP: The Standard Interface for AI Tools and Data",
            "bold": true
          }
        ],
        "sourceId": "body-1078",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "MCP stands for Model Context Protocol. It defines how an AI client discovers and calls external tools, reads resources, or fetches prompt templates. Think of it as a standard interface for the AI tool ecosystem."
          }
        ],
        "sourceId": "body-1079"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Think of MCP as the \"USB-C port for AI\": tool providers expose their capabilities through one standard, and AI clients consume them through the same standard."
          }
        ],
        "sourceId": "body-1080"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What MCP solves:",
            "bold": true
          }
        ],
        "sourceId": "body-1081"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Without MCP, every AI product builds a custom integration for every system — high integration cost. No MCP? Connecting a CRM means writing one adapter, connecting a database means writing another. With MCP, the provider exposes once, and every MCP-enabled client can use it directly — far fewer one-off custom adapters per integration."
          }
        ],
        "sourceId": "body-1082"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What MCP doesn't solve:",
            "bold": true
          }
        ],
        "sourceId": "body-1083"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't automatically check whether data is compliant"
          }
        ],
        "sourceId": "body-1084",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't guard your API keys for you"
          }
        ],
        "sourceId": "body-1085",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't guarantee the tool's result is correct"
          }
        ],
        "sourceId": "body-1086",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't enforce identity or minimum permissions"
          }
        ],
        "sourceId": "body-1087",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It doesn't mean you can open production writes just because the connection is there"
          }
        ],
        "sourceId": "body-1088",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "MCP solves \"how to connect.\" It doesn't solve \"is it safe and correct after connecting.\" That part is still your responsibility."
          }
        ],
        "sourceId": "body-1089"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "API and MCP: How They Relate",
            "bold": true
          }
        ],
        "sourceId": "body-1090",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "An API is an interface between pieces of software — for example, querying data or creating a record over HTTP. An MCP Server can call one or more APIs internally, then expose them as tools in a way that's easier for an Agent to use."
          }
        ],
        "sourceId": "body-1091"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence: API is the foundation, MCP is the door built on top of it that the Agent can walk through directly. An Agent usually doesn't talk to a pile of raw APIs — it goes through an MCP Server that calls them."
          }
        ],
        "sourceId": "body-1092"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "API directly or MCP?",
            "bold": true
          }
        ],
        "sourceId": "body-1093"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Direct API gives you more flexibility, but you need to understand authentication, parameters, errors, and rate limits"
          }
        ],
        "sourceId": "body-1094",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A mature MCP wrapper is more convenient, but you still need to audit what requests and permissions it encapsulates"
          }
        ],
        "sourceId": "body-1095",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Convenience doesn't mean skip the audit. MCP saves you the adapter work, but you still need to know \"what API is it calling underneath, and what permissions is it using?\""
          }
        ],
        "sourceId": "body-1096"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Knowledge Base, RAG, and Memory",
            "bold": true
          }
        ],
        "sourceId": "body-1097",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All three are about \"what does the AI base its answers on\" — but they store different things and fail in different ways."
          }
        ],
        "sourceId": "body-1098"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Knowledge Base:",
            "bold": true
          }
        ],
        "sourceId": "body-1099"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Stores searchable policies, products, cases, SOPs, and other reference materials. It answers \"what does the AI rely on\" — but that doesn't mean the AI permanently remembers everything. A knowledge base is an external reference room. The model checks it when needed, but doesn't guarantee it'll remember next time."
          }
        ],
        "sourceId": "body-1100"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "RAG:",
            "bold": true
          }
        ],
        "sourceId": "body-1101"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "RAG stands for Retrieval-Augmented Generation. The system first finds relevant fragments from the knowledge base, then provides them to the model for answering. Quality depends on the source material quality, chunking strategy, metadata, retrieval accuracy, and citation mechanism."
          }
        ],
        "sourceId": "body-1102"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "RAG isn't \"connect a knowledge base and get smart.\" It's a chain: bad source material, poor chunking, or biased retrieval, and the answer will be off. The citation mechanism matters — being able to see which source a conclusion came from is how you decide whether to trust it."
          }
        ],
        "sourceId": "body-1103"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Memory:",
            "bold": true
          }
        ],
        "sourceId": "body-1104"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Memory stores preferences, long-term rules, project decisions, or historical state. Bad memory gets amplified over time, so important information should have a source, date, owner, and update mechanism."
          }
        ],
        "sourceId": "body-1105"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The tricky part about memory is that \"it doesn't know it's expired.\" A wrong rule from six months ago gets treated as truth by the Agent, over and over."
          }
        ],
        "sourceId": "body-1106"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Context, knowledge base, and memory at a glance:",
            "bold": true
          }
        ],
        "sourceId": "body-1107"
      },
      {
        "type": "table",
        "rows": [
          [
            "Concept",
            "What it stores",
            "Main risk"
          ],
          [
            "Conversation context",
            "Current task discussion",
            "Too long, conflicting, outdated"
          ],
          [
            "Knowledge Base / RAG",
            "Searchable facts and reference materials",
            "Poor source quality, outdated version, not found"
          ],
          [
            "Memory",
            "Preferences, long-term rules, project state",
            "Errors get reinforced over time"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Concept"
                  }
                ],
                "sourceId": "body-1108/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "What it stores"
                  }
                ],
                "sourceId": "body-1108/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Main risk"
                  }
                ],
                "sourceId": "body-1108/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Conversation context"
                  }
                ],
                "sourceId": "body-1108/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Current task discussion"
                  }
                ],
                "sourceId": "body-1108/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Too long, conflicting, outdated"
                  }
                ],
                "sourceId": "body-1108/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Knowledge Base / RAG"
                  }
                ],
                "sourceId": "body-1108/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Searchable facts and reference materials"
                  }
                ],
                "sourceId": "body-1108/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Poor source quality, outdated version, not found"
                  }
                ],
                "sourceId": "body-1108/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Memory"
                  }
                ],
                "sourceId": "body-1108/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Preferences, long-term rules, project state"
                  }
                ],
                "sourceId": "body-1108/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Errors get reinforced over time"
                  }
                ],
                "sourceId": "body-1108/r3/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-1108"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence: context is this conversation's short-term memory, a knowledge base is a reference library you can check anytime, and memory is the long-term settings that persist across tasks."
          }
        ],
        "sourceId": "body-1109"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Workflow vs. Agent: What's the Difference",
            "bold": true
          }
        ],
        "sourceId": "body-1110",
        "headingLevel": 3
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "We've covered Agent, but there's another term that often gets mixed up: Workflow. They're not alternatives — they're two different approaches to organizing action."
          }
        ],
        "sourceId": "body-1111"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence each:",
            "bold": true
          }
        ],
        "sourceId": "body-1112"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workflow is a standardized production line: the steps are designed upfront and execute in order or by branch."
          }
        ],
        "sourceId": "body-1113",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Agent is a thinking executor that makes its own decisions: you give it a goal, and it figures out the path at runtime."
          }
        ],
        "sourceId": "body-1114",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Think of a Workflow as a written SOP that says \"Step 1: do A. Step 2: do B. If B passes, do C. Otherwise, do D.\" An Agent is like hiring someone and saying \"process these invoices\" — they figure out which one to check first and ask you when they're stuck."
          }
        ],
        "sourceId": "body-1115"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The core difference: who decides",
            "bold": true
          }
        ],
        "sourceId": "body-1116"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In a Workflow, every \"which path to take\" is decided at design time. In an Agent, the next step is decided by the model at runtime based on the current environment. Everything else flows from this difference."
          }
        ],
        "sourceId": "body-1117"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Comparison table:",
            "bold": true
          }
        ],
        "sourceId": "body-1118"
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Workflow",
            "Agent"
          ],
          [
            "One sentence",
            "Standardized production line",
            "Thinking executor that makes its own calls"
          ],
          [
            "Path preset?",
            "Yes, steps defined at design time",
            "No, determined at runtime by context"
          ],
          [
            "When decisions are made",
            "Design time",
            "Execution time"
          ],
          [
            "Who chooses next step",
            "Process definition",
            "The model itself"
          ],
          [
            "Controllability",
            "High, easy to predict and roll back",
            "Lower, paths may vary"
          ],
          [
            "Debug difficulty",
            "Low, clear step-by-step trace",
            "High, needs logs and intermediate state"
          ],
          [
            "Best for",
            "Clear steps, repeatable, compliance-heavy",
            "Uncertain paths, needs environment feedback, open-ended goals"
          ],
          [
            "Relationship with LLM",
            "Pipeline can embed models, but control flow is human-defined",
            "Model drives the control flow"
          ]
        ],
        "cells": [
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Dimension"
                  }
                ],
                "sourceId": "body-1119/r0/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Workflow"
                  }
                ],
                "sourceId": "body-1119/r0/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Agent"
                  }
                ],
                "sourceId": "body-1119/r0/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "One sentence"
                  }
                ],
                "sourceId": "body-1119/r1/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Standardized production line"
                  }
                ],
                "sourceId": "body-1119/r1/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Thinking executor that makes its own calls"
                  }
                ],
                "sourceId": "body-1119/r1/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Path preset?"
                  }
                ],
                "sourceId": "body-1119/r2/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Yes, steps defined at design time"
                  }
                ],
                "sourceId": "body-1119/r2/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "No, determined at runtime by context"
                  }
                ],
                "sourceId": "body-1119/r2/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "When decisions are made"
                  }
                ],
                "sourceId": "body-1119/r3/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Design time"
                  }
                ],
                "sourceId": "body-1119/r3/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Execution time"
                  }
                ],
                "sourceId": "body-1119/r3/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Who chooses next step"
                  }
                ],
                "sourceId": "body-1119/r4/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Process definition"
                  }
                ],
                "sourceId": "body-1119/r4/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "The model itself"
                  }
                ],
                "sourceId": "body-1119/r4/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Controllability"
                  }
                ],
                "sourceId": "body-1119/r5/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "High, easy to predict and roll back"
                  }
                ],
                "sourceId": "body-1119/r5/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Lower, paths may vary"
                  }
                ],
                "sourceId": "body-1119/r5/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Debug difficulty"
                  }
                ],
                "sourceId": "body-1119/r6/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Low, clear step-by-step trace"
                  }
                ],
                "sourceId": "body-1119/r6/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "High, needs logs and intermediate state"
                  }
                ],
                "sourceId": "body-1119/r6/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Best for"
                  }
                ],
                "sourceId": "body-1119/r7/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Clear steps, repeatable, compliance-heavy"
                  }
                ],
                "sourceId": "body-1119/r7/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Uncertain paths, needs environment feedback, open-ended goals"
                  }
                ],
                "sourceId": "body-1119/r7/c2/p0"
              }
            ]
          ],
          [
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Relationship with LLM"
                  }
                ],
                "sourceId": "body-1119/r8/c0/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Pipeline can embed models, but control flow is human-defined"
                  }
                ],
                "sourceId": "body-1119/r8/c1/p0"
              }
            ],
            [
              {
                "type": "paragraph",
                "runs": [
                  {
                    "text": "Model drives the control flow"
                  }
                ],
                "sourceId": "body-1119/r8/c2/p0"
              }
            ]
          ]
        ],
        "sourceId": "body-1119"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "When to use Workflow:",
            "bold": true
          }
        ],
        "sourceId": "body-1120"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Fixed SOPs, like \"receive ticket → classify → assign to the right person\""
          }
        ],
        "sourceId": "body-1121",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Batch processing, like \"compress and watermark 100 images\""
          }
        ],
        "sourceId": "body-1122",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Compliance approval, where every step needs an audit trail"
          }
        ],
        "sourceId": "body-1123",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Repeatable report generation"
          }
        ],
        "sourceId": "body-1124",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "These tasks have clear paths. Workflow is more stable, cheaper, and easier to audit."
          }
        ],
        "sourceId": "body-1125"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "When to use Agent:",
            "bold": true
          }
        ],
        "sourceId": "body-1126"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Goal is clear but the path isn't, like \"research competitors and produce a comparison report\""
          }
        ],
        "sourceId": "body-1127",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Multiple tools need exploration, with decisions made mid-way"
          }
        ],
        "sourceId": "body-1128",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The environment changes and needs real-time adjustment"
          }
        ],
        "sourceId": "body-1129",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open-ended tasks that are hard to write as fixed steps"
          }
        ],
        "sourceId": "body-1130",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Common misconceptions:",
            "bold": true
          }
        ],
        "sourceId": "body-1131"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Agent is always better than Workflow\" — No. For deterministic tasks, Workflow is more stable and cheaper. Forcing an Agent onto a clear path just makes it harder to audit and more expensive."
          }
        ],
        "sourceId": "body-1132",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Workflow can't be intelligent\" — No. A Workflow node can absolutely call a model for summarization, classification, or extraction. The model handles the smarts; the Workflow decides which path to take."
          }
        ],
        "sourceId": "body-1133",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "\"Full autonomy is best\" — No. Too much freedom makes failures harder to diagnose. In truly complex systems, it's often an Agent at the high level making decisions, with stable sub-tasks handed off to Workflows."
          }
        ],
        "sourceId": "body-1134",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How they work together:",
            "bold": true
          }
        ],
        "sourceId": "body-1135"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It's not an either-or. They nest:"
          }
        ],
        "sourceId": "body-1136"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Agent containing Workflow: the Agent writes stable sub-tasks as fixed processes (a Skill backed by a Workflow), only making its own decisions where uncertainty remains"
          }
        ],
        "sourceId": "body-1137",
        "marker": "•",
        "level": 0
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workflow node calling an Agent: a production line's judgment node hands off unstructured input to an Agent for processing"
          }
        ],
        "sourceId": "body-1138",
        "marker": "•",
        "level": 0
      }
    ]
  }
];

export function getSectionById(id: string) {
  return playbookSections.find((section) => section.id === id);
}
