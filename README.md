# React Learning — 60 Days of React + TypeScript

This repository documents a structured, hands-on 60-day journey through modern React and TypeScript. It is both a learning workspace and a public record of how one application codebase evolves as new concepts are introduced, practiced, reviewed, and verified.

## Current project and status

The active project is **Expense Manager**, the first project in the curriculum.

- **Current learning day:** Day 5 of 60 — Search + Combined Filtering + Derived State Design
- **Completed days:** Days 1–4
- **Day 5 status:** Current / Not completed
- **Implemented so far:** add, edit, update, delete, cancel edit, category filtering, filtered totals, and `localStorage` persistence

Progress information comes from [PROGRESS.md](docs/react-60-days/PROGRESS.md), which is the source of truth for the current day and completed work. Features planned for later lessons are not represented as complete here.

## Learning approach

The goal is not to race through a copy/paste tutorial. Important learning code is written manually so that each React mental model, TypeScript decision, bug, and tradeoff can be understood and explained. Exercises, review, and validation matter alongside working code.

The application in `src/` is one continuously evolving codebase. Earlier implementation states are preserved through Git history and daily completion tags instead of duplicated lesson-project folders.

Detailed lesson explanations are written primarily in Burmese, while standard technical terminology remains in English.

## Curriculum overview

The 60 days are organized into six phases:

1. **React Core & Mental Model** — components, state, effects, reusable components, reducers, context, and custom hooks
2. **Real Application Foundations** — asynchronous work, APIs, routing, forms, validation, and application structure
3. **Production Data & Application Architecture** — server state, authentication, API integration, failure UX, and code splitting
4. **State Management, Testing & Quality** — state architecture, Redux Toolkit, and application testing
5. **Advanced / Production React** — accessibility, responsive UI, design systems, advanced TypeScript, performance, and modern React patterns
6. **Next.js + Production + Career** — App Router, Server Components, production hardening, assessment, and portfolio release

See the complete [60-day roadmap](docs/react-60-days/ROADMAP.md), the live [progress tracker](docs/react-60-days/PROGRESS.md), and the [daily lesson folders](docs/react-60-days/). The active lesson is [Day 5](docs/react-60-days/day-05/lesson.md).

## Project progression

| Stage | Project | Curriculum window | Status |
| --- | --- | --- | --- |
| Project 1 | Expense Manager | Days 1–10 | In progress |
| Project 2 | Task Manager / Productivity App | Days 20–40 | Planned |
| Project 3 | Production Capstone | Days 50–60 | Planned |

## Current technologies

- React 19
- TypeScript 6
- Vite 8
- Modern CSS
- Oxlint
- Browser `localStorage`

No UI framework is used in the current Expense Manager implementation.

## Getting started

Requirements: a current Node.js installation and npm.

```bash
git clone <repository-url>
cd react-learning
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement |
| `npm run build` | Type-check the project and create a production build |
| `npm run lint` | Check the source with Oxlint |
| `npm run preview` | Preview the production build locally |

## Repository structure

```text
.
├── src/
│   ├── components/          # React components for the evolving application
│   ├── types/               # Shared TypeScript domain types
│   ├── App.tsx              # Current application composition and state owner
│   ├── App.css              # Application-specific presentation
│   └── index.css            # Global styles and shared visual variables
├── docs/react-60-days/
│   ├── ROADMAP.md           # Canonical 60-day curriculum
│   ├── PROGRESS.md          # Current day, completed work, and learning notes
│   └── day-XX/lesson.md     # Objectives, exercises, review, and daily records
├── AGENTS.md                # Repository workflow and teaching guidance
└── package.json             # Project scripts and dependencies
```

## Git learning checkpoints

A completed learning day is recorded with an annotated tag in this format:

```text
day-04-complete
```

Tags are created only after that day's documented learning criteria, exercises, review, required functionality, build, and lint checks have been completed. The current Day 5 work has not been marked complete.

## Continuous evolution

This repository changes continuously throughout the course. The root application always represents the latest learning state; use the roadmap and progress tracker for curriculum context, and Git history or the daily tags to inspect earlier milestones.
