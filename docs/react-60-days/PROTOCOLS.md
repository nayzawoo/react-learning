# React 60-Day Learning Protocols

These protocols are the canonical workflow rules. `PROGRESS.md` supplies the current state, `ROADMAP.md` supplies curriculum topics, active lessons hold teaching material and real evidence, and Git supplies commit/tag/push state.

For Day 7 and later, `PRODUCTION-FIRST.md` is the canonical lesson-quality and teaching-depth protocol. It supplements these workflow rules; when preparing, teaching, validating, or completing those lessons, both documents apply.

## Shared rules

- Detect the active day from `PROGRESS.md`; never hard-code it.
- For Day 7 and later lesson work, read and follow `PRODUCTION-FIRST.md` before preparing or teaching.
- Load only the files required by the selected protocol. Never load all lessons automatically.
- Teach primarily in Burmese with standard English technical terms and use hints before solutions.
- Do not implement future lessons or invent evidence.
- Keep `src/` as the single evolving application.
- Use `npm run verify` for the repository validation suite.
- When the current day, status, completed-day count, project, or implemented-feature summary changes materially, synchronize the short status in root `README.md`. Update this docs README only if its own status-bearing content changes.
- Git commands are allowed only where a protocol below explicitly permits them. Git itself is the source of truth for commit, tag, and push state; do not copy volatile push state into learning docs.

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

1. Read `PROGRESS.md`, then the active lesson including `Session Evidence`.
2. Inspect the relevant source and Git diff.
3. Determine completed work from recorded evidence and verifiable code.
4. Continue from the next unfinished meaningful task without restarting the lesson.
5. Never ask the student to repeat evidence already recorded.
6. Do not commit, tag, or push.

## Session Evidence

No explicit command is required. After a meaningful checkpoint, append or merge only actual evidence into the active lesson's `Session Evidence`:

- exercises completed
- concept explanations
- implementation evidence
- meaningful mistakes and corrections
- manual test results
- mini challenges

Do not record trivial conversation or reconstruct missing evidence later. Preserve prior evidence. An evidence update alone does not complete the day, update the completed-day checklist, or permit a commit, tag, or push.

## Validate Current Work

Trigger: `validate current work`

1. Read the active lesson requirements and inspect the relevant Git diff/source.
2. Run `npm run verify`.
3. Compare the implementation and recorded evidence with current lesson requirements.
4. Report results and genuinely missing items.
5. Do not mark the day complete, commit, tag, or push.

## Prepare Next Lesson

Triggers: `prepare next lesson`, `prepare for next lesson`

1. Read `PROGRESS.md` and detect Current Day.
2. Read `ROADMAP.md` for that day's canonical topic.
3. Read the active lesson if it exists, relevant source, and the previous lesson only when needed.
4. Create or refine a concise, practical lesson based on the actual repository. Preserve useful content.
5. Keep status `Planned — Not started` and include an empty `Session Evidence` structure.
6. Leave important implementation exercises for the student.
7. Do not implement source functionality, mark work complete, or invent evidence.
8. Review the lesson diff and confirm no future functionality was added.
9. Do not commit, tag, or push unless the student explicitly requests that separate Git action.

## Complete Current Day

Triggers: `Day X complete`, `complete Day X`, `finish Day X`

1. Confirm Day X is the current active day in `PROGRESS.md`.
2. Read the lesson's `Session Evidence` first, then inspect only relevant completion criteria, source, and Git diff.
3. Reuse recorded evidence; ask only for genuinely missing evidence that cannot be verified.
4. Run `npm run verify` and `git diff --check`. Do not complete the day if required checks or evidence fail.
5. Update the active lesson's status, learning summary, mistakes, and patterns from actual evidence.
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
