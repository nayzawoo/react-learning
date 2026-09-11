# React Learning — 60 Days of React + TypeScript

A hands-on React + TypeScript learning repository built around one evolving application. Important code is written by the student, while lessons emphasize mental models, practical exercises, review, and verified checkpoints.

## Current status

- **Project:** Expense Manager — Project 1, Days 1–10
- **Current day:** Day 7 of 60 — `useReducer`
- **Status:** Planned — Not started
- **Completed:** Days 1–6
- **Implemented:** Add/Edit/Update/Delete, Cancel Edit, category filtering, case-insensitive title search, filtered count/total, `localStorage` persistence, typed DOM refs, validation focus, and successful-Add focus

[PROGRESS.md](docs/react-60-days/PROGRESS.md) is the source of truth for this summary and is synchronized by the learning protocols whenever the learning state changes materially.

## Learning approach

`src/` is one continuously evolving application. Git history preserves earlier implementation states instead of duplicated lesson-project folders. Lessons are primarily in Burmese while standard technical terms remain in English.

- [Progress tracker](docs/react-60-days/PROGRESS.md)
- [Curriculum roadmap](docs/react-60-days/ROADMAP.md)
- [Current Day 7 lesson](docs/react-60-days/day-07/lesson.md)
- [Agent learning protocols](docs/react-60-days/PROTOCOLS.md)

## Codex learning commands

These are natural-language Agent protocol triggers, not shell commands.

| Command                   | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| `start current lesson`    | Start the current day detected from `PROGRESS.md`                       |
| `continue current lesson` | Resume from recorded evidence and unfinished work                       |
| `validate current work`   | Check implementation and validation without completing the day         |
| `prepare next lesson`     | Prepare the current upcoming lesson from roadmap + repository state     |
| `Day X complete`          | Validate, update docs/progress/README, commit and create completion tag |
| `finish Day X and push`   | Complete the day, then push main and its completion tag                 |
| `push completed day`      | Push an already completed/tagged day                                    |

Detailed behavior and Git permissions live only in [PROTOCOLS.md](docs/react-60-days/PROTOCOLS.md).

## Curriculum overview

1. React Core & Mental Model
2. Real Application Foundations
3. Production Data & Application Architecture
4. State Management, Testing & Quality
5. Advanced / Production React
6. Next.js + Production + Career

See [ROADMAP.md](docs/react-60-days/ROADMAP.md) for canonical daily topics.

## Project progression

| Stage | Project | Curriculum window | Status |
| --- | --- | --- |
| Project 1 | Expense Manager | Days 1–10 | In progress |
| Project 2 | Task Manager / Productivity App | Days 20–40 | Planned |
| Project 3 | Production Capstone | Days 50–60 | Planned |

## Getting started

Requires a current Node.js installation and npm.

```bash
git clone <repository-url>
cd react-learning
npm install
npm run dev
```

## npm scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Check source with Oxlint |
| `npm run verify` | Run the complete current validation suite |
| `npm run preview` | Preview the production build locally |

## Repository structure

```text
.
├── src/                              # Single evolving React application
├── docs/react-60-days/
│   ├── PROGRESS.md                   # Current learning state
│   ├── ROADMAP.md                    # Canonical curriculum
│   ├── PROTOCOLS.md                  # Agent workflow behavior
│   └── day-XX/lesson.md              # Lesson content and real evidence
├── AGENTS.md                         # Concise context router and essential rules
└── package.json                      # Scripts and dependencies
```
