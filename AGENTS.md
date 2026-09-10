# Repository Guidance

This is a structured React + TypeScript learning repository. The application in `src/` is the single evolving codebase; use Git history for earlier implementation states instead of copying source into lesson folders.

## Required context order

1. Read `docs/react-60-days/PROGRESS.md` first and determine the current learning day.
2. Before lesson-related work, read `docs/react-60-days/day-XX/lesson.md` for that day.
3. Inspect all relevant source files before suggesting or making changes.
4. Read `docs/react-60-days/ROADMAP.md` only when curriculum or future-learning context is needed.
5. Do not automatically read all 60 lessons; read earlier lessons only when needed.
6. Do not implement future lessons before their scheduled day unless explicitly requested.

## Teaching and implementation

- Prioritize teaching over automatically completing exercises. The student should write important learning code.
- For exercises: explain the concept, give hints, let the student attempt it, then help debug or correct errors. Do not immediately replace everything with a finished solution.
- Preserve working functionality unless the current lesson requires a change.
- Prefer modern React + TypeScript practices and avoid unnecessary dependencies.
- Explain lessons primarily in Burmese while retaining standard English technical terminology.

## Validation and completion

- After meaningful code changes, run `npm run build` and `npm run lint`.
- Never mark a lesson complete merely because code compiles. Confirm understanding, exercises, quiz/review, required functionality, and build/lint status.

## Day Completion Protocol

Run this protocol only when the student explicitly says `Day X complete`, `finish day X`, or `complete day X`. The explicit command is the trigger; compiling successfully alone never completes a day.

1. Read only the necessary context: `PROGRESS.md`, Day X's `day-XX/lesson.md`, relevant source files, and current Git status/diff. Confirm Day X is the active day; do not load all lessons.
2. Review the lesson's documented completion criteria, including required functionality, attempted/completed exercises, covered concepts, recorded quiz/review work, and repository state. Never invent results, answers, mistakes, or achievements.
3. Run `npm run build` and `npm run lint`. If either fails, identify whether today's work or a pre-existing issue caused it, report it, and do not complete the day until the relevant issue is resolved. Avoid unrelated fixes without justification.
4. In `docs/react-60-days/day-XX/lesson.md`, set `Status: Completed` and update `What I Actually Learned`, `Problems / Mistakes I Made`, `Important Code Patterns`, and `Git Checkpoint` from actual evidence. Write primarily in Burmese while retaining English technical terms.
5. In `docs/react-60-days/PROGRESS.md`, check `[x] Day X`, set `Current Day: X + 1`, and update `Completed Concepts`, `Current Learning Focus`, `Important Mistakes / Lessons`, `Last Completed Exercise`, `Next Lesson`, and `Repository State Notes` when supported. Leave the next day `Not Started` unless its work has begun.
6. Treat `ROADMAP.md` as the canonical curriculum. Do not modify it during routine completion unless the curriculum was intentionally changed or the student explicitly requests it.
7. Run and review `git status` and `git diff` before committing. Exclude `.env`, credentials, tokens, secrets, unrelated generated files, temporary files, and other unrelated changes.
8. Commit the source and learning documentation associated with the day using `learn: complete React Day XX`. Do not amend previous commits.
9. After the commit succeeds, verify `day-XX-complete` does not already exist, then create the annotated tag with `git tag -a day-XX-complete -m "React Day XX complete"`. Never overwrite or force-update a daily tag.
10. Run `git status` and report the completed day, build and lint results, lesson and progress updates, commit hash, created tag, next learning day, and any remaining uncommitted files.

Do not push commits or tags unless explicitly requested. For `finish day X and push`, complete validation, commit, and tagging first; if the current branch is `main`, run `git push origin main` and `git push origin day-XX-complete`. If it is not `main`, report the branch and do not assume a push target.
