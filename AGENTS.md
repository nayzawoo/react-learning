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
- After a meaningful learning checkpoint, preserve the student's actual work and understanding in the active lesson's `Session Evidence` according to the Learning Session Evidence Protocol. Do not reconstruct or invent evidence later.

## Validation and completion

- After meaningful code changes, run `npm run build` and `npm run lint`.
- Never mark a lesson complete merely because code compiles. Confirm understanding, exercises, quiz/review, required functionality, and build/lint status.

## Learning Session Evidence Protocol

Use this protocol during every active learning day so the Day Completion Protocol can rely on evidence recorded while the session is happening.

### Evidence recording rule

After each meaningful learning checkpoint, record only actual session evidence in `docs/react-60-days/day-XX/lesson.md`. Do not wait until day completion to reconstruct evidence from memory.

Meaningful checkpoints include:

- completed guided exercises
- student explanations of concepts
- quiz/review answers
- manual test results
- mini challenges
- implementation decisions
- actual mistakes and corrections
- important refactors
- behavior verification

These are working-document updates only. Routine evidence recording must not mark the lesson complete, update `PROGRESS.md` to completed, create a commit or tag, or push anything.

### Session Evidence section

Every active lesson must contain a `## Session Evidence` section. Preserve previous evidence and append or merge new evidence under the relevant subsections:

- `### Exercises Completed`
- `### Concept Explanations`
- `### Quiz / Review Evidence`
- `### Manual Tests`
- `### Mistakes / Corrections`
- `### Implementation Evidence`
- `### Mini Challenges`

Record only exercises and challenges actually attempted or completed. Summarize concepts and answers faithfully in the student's own meaning. For a mistake, record what the student originally thought or implemented, what was corrected, and the lesson learned. If no mistake occurred, do not invent one. For implementation evidence, name relevant source files or patterns.

### Evidence update behavior

When repository editing is available:

1. After a meaningful checkpoint, update the current lesson's `Session Evidence`.
2. Preserve all previous evidence and append or merge only the new evidence.
3. Keep the lesson status `Current / Not completed` until an explicit completion command.
4. Do not mark the day completed in `PROGRESS.md` during normal evidence updates.
5. Do not commit, tag, or push during routine evidence recording.

When repository editing is unavailable, provide a concise `Session Evidence` handoff block that can be pasted into the lesson later.

This protocol is dynamic and must never hard-code a specific learning day.

## Prepare Next Lesson Protocol

Run this protocol only when the student explicitly says one of the following. Do not require the student to specify a day number.

- `prepare for next lesson`
- `prepare next lesson`
- `generate next lesson`
- `update next lesson`

1. Read `docs/react-60-days/PROGRESS.md` first.
2. Determine the current learning day from `Current Day`; let it be Day X.
3. Read only the necessary context:
   - `docs/react-60-days/ROADMAP.md`
   - `docs/react-60-days/day-XX/lesson.md` if it already exists
   - the previous completed day's lesson only when needed
   - relevant current files under `src/`
4. Use `ROADMAP.md` as the canonical source for Day X's topic.
5. Create or update `docs/react-60-days/day-XX/lesson.md` as a complete teaching plan tailored to the current repository and actual student progress.
6. Preserve and improve useful existing lesson content instead of blindly replacing it.
7. Keep the lesson status `Planned — Not started`.
8. Include an empty `Session Evidence` structure:

```markdown
## Session Evidence

### Exercises Completed

### Concept Explanations

### Quiz / Review Evidence

### Manual Tests

### Mistakes / Corrections

### Implementation Evidence

### Mini Challenges
```

9. Do not implement Day X functionality in `src/`.
10. Do not mark Day X completed.
11. Do not mark exercises, quiz questions, challenges, build/lint, or student understanding as completed before the student performs them.
12. Do not invent student mistakes, answers, achievements, tests, or other learning evidence.
13. Do not modify `ROADMAP.md` unless the student explicitly requests a curriculum change.
14. Write primarily in Burmese while retaining standard React and TypeScript terminology in English.
15. Follow the repository's hint-first teaching approach. Leave important implementation exercises for the student to write.

The generated lesson should normally include:

- Status
- Purpose
- Previous Day Review
- Prerequisites
- Learning Objectives
- Core Concepts
- Mental Model
- State / Props / Ref / Derived Value distinctions when relevant
- Component Responsibility when relevant
- TypeScript considerations
- Implementation Tasks
- Guided Exercises
- Mini Challenges
- Manual Test Matrix
- Quiz / Review Questions
- Common Mistakes
- Session Evidence with empty subsections
- Completion Criteria
- `What I Actually Learned` placeholder
- `Problems / Mistakes I Made` placeholder
- `Important Code Patterns` placeholder
- `Git Checkpoint`
- Next Day Context

Design practical exercises around the current evolving application in `src/`. Do not create historical copies of application source code inside lesson folders.

After preparing the lesson:

1. Review it for consistency with `ROADMAP.md`, `PROGRESS.md`, and current source code.
2. Confirm that no future lesson implementation was added to `src/`.
3. Show the lesson file diff.
4. Report the detected Day X, lesson topic, file created or updated, main concepts prepared, and whether source code changed.
5. Do not commit, tag, or push unless explicitly requested.

## Day Completion Protocol

Run this protocol only when the student explicitly says `Day X complete`, `finish day X`, or `complete day X`. The explicit command is the trigger; compiling successfully alone never completes a day.

1. Read only the necessary context: `PROGRESS.md`, Day X's `day-XX/lesson.md`, relevant source files, and current Git status/diff. Confirm Day X is the active day; do not load all lessons.
2. First inspect the lesson's existing `Session Evidence`, then review the documented completion criteria, required functionality, current source code, repository history/diff, and build/lint results. Use `Session Evidence` as the primary record for exercises, explanations, quiz/review understanding, manual testing, mistakes, code patterns, and implementation achievements. Never invent results, answers, mistakes, or achievements, and do not ask the student to repeat evidence that is already recorded. Ask only for completion evidence that is genuinely missing and cannot be verified from these sources.
3. Run `npm run build` and `npm run lint`. If either fails, identify whether today's work or a pre-existing issue caused it, report it, and do not complete the day until the relevant issue is resolved. Avoid unrelated fixes without justification.
4. In `docs/react-60-days/day-XX/lesson.md`, set `Status: Completed` and update `What I Actually Learned`, `Problems / Mistakes I Made`, `Important Code Patterns`, and `Git Checkpoint` from actual evidence. Write primarily in Burmese while retaining English technical terms.
5. In `docs/react-60-days/PROGRESS.md`, check `[x] Day X`, set `Current Day: X + 1`, and update `Completed Concepts`, `Current Learning Focus`, `Important Mistakes / Lessons`, `Last Completed Exercise`, `Next Lesson`, and `Repository State Notes` when supported. Leave the next day `Not Started` unless its work has begun.
6. Treat `ROADMAP.md` as the canonical curriculum. Do not modify it during routine completion unless the curriculum was intentionally changed or the student explicitly requests it.
7. Run and review `git status` and `git diff` before committing. Exclude `.env`, credentials, tokens, secrets, unrelated generated files, temporary files, and other unrelated changes.
8. Commit the source and learning documentation associated with the day using `learn: complete React Day XX`. Do not amend previous commits.
9. After the commit succeeds, verify `day-XX-complete` does not already exist, then create the annotated tag with `git tag -a day-XX-complete -m "React Day XX complete"`. Never overwrite or force-update a daily tag.
10. Run `git status` and report the completed day, build and lint results, lesson and progress updates, commit hash, created tag, next learning day, and any remaining uncommitted files.

Do not push commits or tags unless explicitly requested. For `finish day X and push`, complete validation, commit, and tagging first; if the current branch is `main`, run `git push origin main` and `git push origin day-XX-complete`. If it is not `main`, report the branch and do not assume a push target.
