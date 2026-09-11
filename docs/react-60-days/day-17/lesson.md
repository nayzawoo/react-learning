# Day 17 — React Hook Form

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

React Hook Form ရဲ့ registration နဲ့ form state model ကိုသုံးပြီး scalable form တည်ဆောက်ကာ manual State approach နဲ့ tradeoff နှိုင်းရန်။

## Previous Day Review

Day 16 — Forms Deep Dive မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Day 16 forms, refs, validation နဲ့ TypeScript generics အခြေခံ
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- React Hook Form setup
- `useForm`
- `register`
- Form state နဲ့ field errors
- `handleSubmit`
- Typed form values

## Mental Model

Library က form boilerplate ကိုလျှော့ပေးပေမယ့် domain validation, accessible errors နဲ့ data transformation responsibility ကိုမဖျောက်ပေးဘူး။

## Implementation Tasks

1. Lesson-day stable API, maintenance, React/TypeScript compatibility, peer dependencies, bundle/runtime behavior, accessibility/testing implications, alternatives, and migration notes ကိုစစ်ရန်
2. Controlled/uncontrolled native solution limitation က dependency ကိုတကယ် justify လုပ်သလားဆုံးဖြတ်ရန်
3. Correct manifest category/lockfile diff ဖြင့်လိုအပ်မှ dependency ထည့်ရန်
4. Small form ကို typed `useForm` model ဖြင့်တည်ဆောက်ရန်
5. Validation errors နဲ့ submit result ကို accessible ဖြစ်အောင်ပြရန်
6. Manual form approach နဲ့ render/complexity/removal-cost tradeoff နှိုင်းရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Required နဲ့ numeric constraints နှစ်မျိုး register လုပ်ရန်
- Form values ကို domain command အဖြစ်ပြောင်းရန်

## Mini Challenges

Edit defaults နဲ့ reset behavior ကို predictable ဖြစ်အောင်တည်ဆောက်ရန်။

## Quiz / Review Questions

1. `register` က field နဲ့ form controller ကိုဘယ်လိုချိတ်သလဲ။
2. React Hook Form သုံးခြင်းက validation library မလိုတော့ဘူးလို့ဆိုနိုင်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 17 review._

## Common Mistakes

- Installed version မစစ်ဘဲ docs/API ကူးသုံးခြင်း
- Error message ကို input နဲ့ accessible ချိတ်ဆက်မထားခြင်း
- Form data နဲ့ domain model boundary မထားခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 17._

## Problems / Mistakes I Made

_To be completed after attempting Day 17; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 17 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 18 မှာ Zod schema နဲ့ TypeScript validation boundary ကိုထည့်မည်။
