# Repository Guidance

This is a React + TypeScript learning repository. `src/` is the single evolving application; use Git history for earlier states instead of copying source into lesson folders.

## Context routing

1. Read `docs/react-60-days/PROGRESS.md` first and detect `Current Day` dynamically.
2. For lesson work, read only the active `day-XX/lesson.md` and relevant `src/` files.
3. For Day 7 and later lesson preparation or teaching, also read `docs/react-60-days/PRODUCTION-FIRST.md`.
4. Read `docs/react-60-days/ROADMAP.md` only when curriculum or future-learning context is needed.
5. Never load all lessons automatically. Read previous lessons only when the current task genuinely needs them.
6. Do not implement future lessons before their scheduled day unless explicitly requested.

## Sources of truth

- `PROGRESS.md`: current day and learning state
- `ROADMAP.md`: curriculum topics
- Active `lesson.md`: useful teaching material plus concise learning-progress checklists
- `docs/react-60-days/PROTOCOLS.md`: command triggers, minimal recordkeeping, validation, completion, and Git workflows
- `docs/react-60-days/PRODUCTION-FIRST.md`: mandatory Day 7+ current-source, version-aware, production teaching rules
- Git: commit, tag, and push state

## Teaching rules

- Teach primarily in Burmese while retaining standard English technical terms.
- From Day 7 onward, follow the production-first lesson structure in `PRODUCTION-FIRST.md`.
- Use a hint-first approach; the student should normally write important learning code.
- Preserve working behavior unless the active lesson requires a change.
- Record learning progress as concise checklists: completion items, implementation checkpoints, and test pass/fail status.
- Keep “topic covered,” “review completed,” and any independently demonstrated result distinct.
- A completion trigger is the user's final confirmation that the lesson is complete. Record completion as `User-confirmed`; do not require quizzes, repeated explanations, manual tests, source review, or validation first.
- Label manual results as student-reported and keep automated checks in a separate checklist.
- Do not store student answers, quotations, conversation transcripts, verbatim answers, or narratives about individual mistakes and corrections.
- Preserve lesson explanations, examples, and exercises when updating progress records.
- Never invent test results, achievements, or implementation claims.
- Follow the matching workflow in `PROTOCOLS.md`; Git operations occur only when that protocol explicitly allows them.

## Validation rules

- Do not automatically start dev/preview servers, open browsers, or run browser automation, screenshots, or E2E tests. Run them only when the student explicitly requests browser testing or visual verification.
- Run build, lint, typecheck, tests, `git diff --check`, source audits, or manual-test requests only through an explicit validation request, never as a lesson-completion prerequisite.
- Keep completion and validation distinct. Never mark an unrun check as passed; record it as `Not run — user preference` when useful.
- A completion trigger authorizes the required status edits, staging, commit, annotated tag, and push without an additional confirmation.
