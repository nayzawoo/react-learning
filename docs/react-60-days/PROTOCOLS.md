# React 60-Day Learning Protocols

These protocols are the canonical workflow rules. `PROGRESS.md` supplies the current state, `ROADMAP.md` supplies curriculum topics, active lessons hold teaching material plus concise progress checklists, and Git supplies commit/tag/push state.

For Day 7 and later, `PRODUCTION-FIRST.md` is the canonical lesson-quality and teaching-depth protocol. It supplements these workflow rules; when preparing, teaching, validating, or completing those lessons, both documents apply.

## Shared rules

- Detect the active day from `PROGRESS.md`; never hard-code it.
- For Day 7 and later lesson work, read and follow `PRODUCTION-FIRST.md` before preparing or teaching.
- Load only the files required by the selected protocol. Never load all lessons automatically.
- Teach primarily in Burmese with standard English technical terms and use hints before solutions.
- Do not implement future lessons or invent test results, achievements, or implementation claims.
- Keep repository learning records concise and checklist-based. Preserve completion checklists, implementation checkpoints, and test pass/fail status.
- Distinguish topic coverage, review completion, and any independently demonstrated result.
- A completed review with explanations and clarification as needed is sufficient unless another substantive lesson requirement remains. Do not require repeated independent restatement solely to satisfy a recordkeeping checklist.
- Label manual results as student-reported and list automated checks separately.
- Do not store student quotations, message transcripts, verbatim answers, or narratives about individual mistakes and corrections.
- Preserve lesson explanations, examples, and exercises when updating records.
- Keep `src/` as the single evolving application.
- Use `npm run verify` for the repository validation suite.
- When the current day, status, completed-day count, project, or implemented-feature summary changes materially, synchronize the short status in root `README.md`. Update this docs README only if its own status-bearing content changes.
- Git commands are allowed only where a protocol below explicitly permits them. Git itself is the source of truth for commit, tag, and push state; do not copy volatile push state into learning docs.

## Validation and Manual Results

- Do not automatically start dev or preview servers, open browsers, or run browser automation, screenshots, or end-to-end tests.
- Run server/browser/visual/E2E validation only when the student explicitly requests browser testing or visual verification.
- Accept the student's explicit manual-test results and record only concise, student-reported pass/fail checklist status. Do not repeat those tests or ask for the same confirmation while the results remain available in the conversation.
- For lesson completion, run `npm run verify` and `git diff --check` once.
- Reuse successful validation results when relevant source and configuration have not changed. Documentation-only edits do not require another build/lint run.
- Repeat a failed check only after a relevant fix.
- These rules do not waive genuinely failed checks and never permit invented results.

## Start Current Lesson

Trigger: `start current lesson`

1. Read `PROGRESS.md` and detect Current Day.
2. Read the active `day-XX/lesson.md`.
3. Inspect only relevant source files and current Git status/diff.
4. Determine the first unfinished meaningful task.
5. When starting work, change the lesson status to `In Progress`; keep the matching status in `PROGRESS.md` and root `README.md` synchronized.
6. Begin teaching with explanation and hints. Do not automatically write the important learning code.
7. Do not commit, tag, or push.

## Continue Current Lesson

Trigger: `continue current lesson`

1. Read `PROGRESS.md`, then the active lesson's status, progress checklists, and teaching material.
2. Inspect the relevant source and Git diff.
3. Determine completed work from the current source, concise checklists, and relevant information still available in the active conversation.
4. Continue from the next unfinished meaningful task without restarting the lesson.
5. Do not ask the student to repeat results already available in the active conversation.
6. Do not commit, tag, or push.

## Concise Lesson Records

Keep applicable concise checklists for:

- teaching coverage;
- review completed, with clarification as needed;
- independently demonstrated understanding only when it was actually assessed;
- implementation checkpoints verified against the current source;
- manual tests, explicitly labeled student-reported; and
- automated checks, recorded separately with pass/fail or no-result status.

Keep lesson status and completion checklists current. Do not claim independent understanding was demonstrated when only coverage or review is known. A completed review may satisfy the review checkpoint without storing or repeating the student's answers.

Do not persist student quotations, message transcripts, verbatim answers, or narratives about individual mistakes and corrections. Preserve lesson explanations, examples, exercises, production guidance, completion criteria, and sources. Never reconstruct or invent results.

Preserve historical records in earlier lessons unless the user explicitly asks to remove them. Missing detailed narratives must never be the sole reason to block lesson completion.

## Validate Current Work

Trigger: `validate current work`

1. Read the active lesson requirements and inspect the relevant Git diff/source.
2. Run `npm run verify` once, or reuse its successful result when relevant source/configuration has not changed. Documentation-only edits do not require another build/lint run.
3. Compare the implementation, concise checklists, and available current-session information with lesson requirements.
4. Report results and genuinely missing items.
5. Do not mark the day complete, commit, tag, or push.

## Prepare Next Lesson

Triggers: `prepare next lesson`, `prepare for next lesson`

1. Read `PROGRESS.md` and detect Current Day.
2. Read `ROADMAP.md` for that day's canonical topic.
3. Read the active lesson if it exists, relevant source, and the previous lesson only when needed.
4. Create or refine a concise, practical lesson based on the actual repository. Preserve useful content.
5. Keep status `Planned — Not started` and include empty, applicable concise checklist sections.
6. Leave important implementation exercises for the student.
7. Do not implement source functionality, mark work complete, or invent implementation/results.
8. Review the lesson diff and confirm no future functionality was added.
9. Do not commit, tag, or push unless the student explicitly requests that separate Git action.

## Complete Current Day

Triggers: `Day X complete`, `complete Day X`, `finish Day X`

1. Confirm Day X is the current active day in `PROGRESS.md`.
2. Read the lesson's status and concise checklists, then inspect only relevant completion criteria, source, and Git diff.
3. Use verifiable source plus relevant information available in the active conversation. Accept a completed review with explanations and clarification as sufficient for its review checkpoint; do not require a repeated independent restatement solely for repository evidence. Do not require or recreate detailed narratives.
4. Run `npm run verify` and `git diff --check` once, or reuse successful results when relevant source/configuration has not changed. Repeat a failed check only after a relevant fix. Do not complete the day if required checks fail or the implementation does not meet the lesson's technical completion bar.
5. Update the active lesson's status and concise checklists without adding quotations, transcripts, verbatim answers, or mistake/correction narratives.
6. Update `PROGRESS.md`: completed checklist, next Current Day, focus, and supported learning notes.
7. Synchronize root `README.md` with the new current status. Update `docs/react-60-days/README.md` only if its status information changed.
8. Review `git status` and the relevant diff; exclude secrets, generated noise, and unrelated changes.
9. Commit the day's work as `learn: complete React Day XX` without amending an earlier commit.
10. Verify `day-XX-complete` does not exist, then create the annotated tag with message `React Day XX complete`. Never overwrite or force-update a completion tag.
11. Report validation, documentation updates, commit hash, tag, next day, and remaining changes.
12. Do not push unless explicitly requested.

## Complete and Push

Trigger: `finish Day X and push`

Run **Complete Current Day** first. Only after successful completion:

- If the current branch is `main`, push `main`, then push the newly created `day-XX-complete` tag.
- Otherwise report the branch and do not guess a push target.

## Push Completed Day

Trigger: `push completed day`

1. Confirm the day is already completed in `PROGRESS.md` and has an existing completion commit and annotated tag.
2. Verify the current branch and remote state.
3. Push only the existing completed work and its tag; do not recreate or overwrite the tag.
4. Do not modify source or learning docs unless correcting an obvious stale status caused by the push itself.
