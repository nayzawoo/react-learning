# Day 38 — React Testing Library

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

React Components ကို implementation details မဟုတ်ဘဲ user မြင်/လုပ်နိုင်သော behavior အပေါ်မူတည်၍စမ်းရန်။

## Previous Day Review

Day 37 — Testing Fundamentals + Vitest မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Vitest, DOM semantics, React Components နဲ့ accessibility queries
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- React Testing Library setup
- `render`
- Queries by role/label/text
- Accessible DOM as test surface
- Async find/wait patterns
- Avoiding implementation-detail tests

## Mental Model

Test က user လုပ်သလို element ကိုရှာပြီး user မြင်ရသော result ကိုassert လုပ်သင့်တယ်။ Good accessibility က tests ကိုလည်းပိုယုံကြည်ရစေတယ်။

## Implementation Tasks

1. Lesson-day library versions/setup ကိုစစ်ရန်
2. Simple Component rendering behavior စမ်းရန်
3. Role/label-based queries ဖြင့် interaction target ရှာရန်
4. Conditional/async UI result ကိုမှန်ကန်စွာ await လုပ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Brittle selector query ကို role/label query အဖြစ်ပြောင်းရန်
- Empty/loading/success render cases ခွဲစမ်းရန်

## Mini Challenges

Markup refactor ပြီးသော်လည်း behavior မပြောင်းလျှင် test ဆက် pass မည့် test ရေးရန်။

## Quiz / Review Questions

1. `getByRole` ကို test ID ထက်ဘာကြောင့်ဦးစားပေးသင့်သလဲ။
2. `getBy...` နဲ့ `findBy...` ကိုဘယ်အချိန်ခွဲသုံးမလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 38 review._

## Common Mistakes

- CSS class/Component State ကိုတိုက်ရိုက်assert လုပ်ခြင်း
- Async UI ကို await မလုပ်ခြင်း
- Accessible name မရှိသည့် element ကို test ID ဖြင့်ဖုံးကွယ်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 38._

## Problems / Mistakes I Made

_To be completed after attempting Day 38; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 38 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 39 မှာ user-event ဖြင့် form validation နဲ့ Add/Edit/Delete flows ကိုစမ်းမည်။
