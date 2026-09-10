# Day 07 — useReducer

## Status

**Planned — Not started**

This is a lightweight future-lesson outline. Refine it from the current repository only when Day 7 becomes active.

## Purpose

Complex or related State transitions ကို reducer, action, and dispatch mental model ဖြင့်ရှင်းလင်းစွာစီမံတတ်ရန်။

## Prerequisites

- Immutable State updates and functional updaters
- TypeScript discriminated unions
- Actual Day 6 evidence, once completed

## Learning Objectives

- Reducer purity and current State → action → next State flow ကိုရှင်းပြနိုင်ရန်
- `dispatch` and action objects ကို event language အဖြစ်သုံးနိုင်ရန်
- TypeScript action union ကို narrow လုပ်နိုင်ရန်
- `useState` and `useReducer` ကို complexity/responsibility အရရွေးနိုင်ရန်

## Core Preview

```text
UI event → dispatch(action) → reducer(currentState, action) → nextState → render
```

Reducer က side effects မလုပ်ဘဲ inputs နှစ်ခုမှ next State ကိုပြန်ပေးရမည်။ Unrelated State အားလုံးကို reducer တစ်ခုထဲအတင်းစုရန်မဟုတ်ပါ။

## Candidate Exercises

- Current Expense Manager ရှိ related transitions ကို audit လုပ်ရန်
- State and action types ကို code မရေးမီ design လုပ်ရန်
- Small bounded State group တစ်ခုကို hint-first reducer refactor လုပ်ရန်
- Reducer ကို pure function အဖြစ် input/output examples ဖြင့်စစ်ရန်
- Existing behavior မပြောင်းကြောင်း verify လုပ်ရန်

Exact implementation scope and manual tests must be refined when Day 7 is current. Do not implement this lesson early.

## Review Questions

1. Reducer purity က predictable State transitions ကိုဘယ်လိုကူညီသလဲ။
2. ဘယ်အခြေအနေမှာ `useState` က `useReducer` ထက်ပိုရိုးရှင်းသလဲ။
3. TypeScript action union က invalid transitions/actions ကိုဘယ်လိုကာကွယ်နိုင်သလဲ။

## Common Mistakes

- Mutating State inside the reducer
- Using a broad `string` action type
- Performing side effects inside the reducer
- Combining unrelated State without a clear benefit

## Session Evidence

### Exercises Completed

### Concept Explanations

### Quiz / Review Evidence

### Manual Tests

### Mistakes / Corrections

### Implementation Evidence

### Mini Challenges

## Completion Criteria

_Define precise criteria when Day 7 becomes current. Validation and Git behavior come from `../PROTOCOLS.md`._

## What I Actually Learned

_Complete from actual evidence only._

## Problems / Mistakes I Made

_Record only mistakes that actually occur._

## Important Code Patterns

_Record only patterns from the student's actual implementation._

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 8 introduces Context API and `useContext` for shared values across distant components.
