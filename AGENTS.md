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
- Active `lesson.md`: useful teaching material and actual session evidence
- `docs/react-60-days/PROTOCOLS.md`: command triggers, evidence, validation, completion, and Git workflows
- `docs/react-60-days/PRODUCTION-FIRST.md`: mandatory Day 7+ current-source, version-aware, production teaching rules
- Git: commit, tag, and push state

## Teaching rules

- Teach primarily in Burmese while retaining standard English technical terms.
- From Day 7 onward, teach first and quiz later; follow the production-first lesson structure and completion bar in `PRODUCTION-FIRST.md`.
- Use a hint-first approach; the student should normally write important learning code.
- Preserve working behavior unless the active lesson requires a change.
- Never invent student answers, tests, mistakes, achievements, or learning evidence.
- Follow the matching workflow in `PROTOCOLS.md`; Git operations occur only when that protocol explicitly allows them.

## Validation rules

- Do not automatically start dev/preview servers, open browsers, or run browser automation, screenshots, or E2E tests. Run them only when the student explicitly requests browser testing or visual verification.
- Accept explicit manual-test results from the student as student-reported evidence, record them in the active lesson's `Session Evidence`, and do not repeat the tests or ask for the same evidence again.
- For lesson completion, run `npm run verify` and `git diff --check` once. Reuse successful results while relevant source/configuration is unchanged; documentation-only edits do not require another build/lint run.
- Repeat a failed check only after a relevant fix. These rules never waive a genuine failure or permit invented evidence.
