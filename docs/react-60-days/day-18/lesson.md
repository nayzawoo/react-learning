# Day 18 — Zod + TypeScript Validation

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Runtime data ကို Zod schema ဖြင့် validate လုပ်ပြီး inferred TypeScript types နဲ့ form/domain boundaries ကိုတစ်ညီတစ်ညွတ်တည်းထားရန်။

## Previous Day Review

Day 17 — React Hook Form မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- React Hook Form, TypeScript object types, unions နဲ့ runtime validation need
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Zod schemas
- Runtime validation vs static TypeScript
- `z.infer`
- Parsing, safe parsing နဲ့ validation errors
- Form schema integration
- Input/output transformation

## Mental Model

TypeScript types က compile ပြီးနောက် runtime မှာမရှိတော့ဘူး။ User/API input က runtime data ဖြစ်တဲ့အတွက် schema က boundary မှာတကယ်စစ်ပြီးမှ trusted domain data အဖြစ်ဝင်ခွင့်ပေးရမယ်။

## Implementation Tasks

1. Lesson-day stable Zod/integration APIs, maintenance, TypeScript compatibility, bundle cost, alternatives, and migration notes ကိုစစ်ရန်
2. Runtime validation လိုအပ်ချက်က handwritten guard/native validation ထက် package ကို justify လုပ်သလားဆုံးဖြတ်ရန်
3. Form input schema တစ်ခုရေးပြီး input/output types derive လုပ်ရန်
4. Validation issues ကို accessible field errors အဖြစ်ပြရန်
5. String input မှ domain values သို့ transform boundary စမ်းရန်
6. Client validation က server authorization/security ကိုမအစားထိုးကြောင်းအတည်ပြုရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- `parse` နဲ့ `safeParse` behavior နှိုင်းရန်
- Invalid API/form payload examples ကို schema ဖြင့်စစ်ရန်

## Mini Challenges

Form input type နဲ့ validated domain output type ကွဲသော schema တစ်ခု design လုပ်ရန်။

## Quiz / Review Questions

1. TypeScript type တစ်ခုတည်းက runtime data ကိုဘာကြောင့်မကာကွယ်နိုင်သလဲ။
2. Schema မှ type derive လုပ်ခြင်းက duplication ကိုဘယ်လိုလျှော့သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 18 review._

## Common Mistakes

- Type assertion ကို validation လို့ယူဆခြင်း
- Schema နဲ့ handwritten type နှစ်ခုကို sync လုပ်ရအောင်ထားခြင်း
- Validation error details ကို user-facing message အဖြစ်မပြောင်းခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 18._

## Problems / Mistakes I Made

_To be completed after attempting Day 18; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 18 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 19 မှာ services, API client, environment variables နဲ့ DTO boundaries ဖြင့် API architecture ခွဲမည်။
