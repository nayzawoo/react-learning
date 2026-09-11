# Day 37 — Testing Fundamentals + Vitest

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Behavior-focused automated tests ရဲ့ purpose, structure နဲ့ isolation ကိုနားလည်ပြီး Vitest setup ဖြင့် fast unit tests စတင်ရန်။

## Previous Day Review

Day 36 — State Management Decision Patterns မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Pure functions, TypeScript modules, package scripts နဲ့ expected behavior definition
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Testing pyramid အခြေခံ
- Unit test
- Arrange–Act–Assert
- Vitest setup
- Assertions
- Test isolation
- Mocks/stubs ကိုအနည်းဆုံးသုံးခြင်း

## Mental Model

Test က implementation ကိုအတည်ပြုတာမဟုတ်ဘဲ observable behavior/contract ကိုကာကွယ်တယ်။ Fast, deterministic နဲ့ failure reason ရှင်းရမယ်။

## Implementation Tasks

1. Lesson-day Vitest stable API, Vite/Node/TypeScript compatibility, maintenance, dependency cost, environment choices, and migration notes ကိုစစ်ရန်
2. Vitest ကို `devDependency` အဖြစ်ထည့်ပြီး manifest/lockfile/scripts diff ကိုနားလည်ရန်
3. Pure domain/reducer function တစ်ခုအတွက် tests ရေးရန်
4. Success, edge နဲ့ failure cases ခွဲရန်
5. Watch vs CI run, isolation, and repeatable test script အတည်ပြုရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Arrange–Act–Assert ဖြင့် test cases သုံးခုရေးရန်
- Implementation detail test တစ်ခုကို behavior test အဖြစ်ပြန်ရေးရန်

## Mini Challenges

Mock မသုံးဘဲ pure boundary တစ်ခုကိုပိုကောင်းအောင် design လုပ်ပြီး test ရေးရန်။

## Quiz / Review Questions

1. Unit test တစ်ခုက ဘယ် boundary ကိုစမ်းသင့်သလဲ။
2. Test implementation detail ပေါ်မူတည်လွန်းရင် refactor မှာဘာဖြစ်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 37 review._

## Common Mistakes

- Multiple behaviors ကို test တစ်ခုထဲစုခြင်း
- Assertions မရှင်းခြင်း
- Mock အများကြီးသုံးပြီး real logic မစမ်းခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 37._

## Problems / Mistakes I Made

_To be completed after attempting Day 37; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 37 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 38 မှာ React Testing Library ဖြင့် UI ကို user ရဲ့မြင်ကွင်းမှစမ်းမည်။
