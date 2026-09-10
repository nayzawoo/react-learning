# Day 45 — Advanced TypeScript for React

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Generics, utility types နဲ့ precise unions ကိုအသုံးပြုပြီး reusable Component/Hook APIs ကို flexible သော်လည်း type-safe ဖြစ်အောင် design လုပ်ရန်။

## Previous Day Review

Day 44 — Production UX States မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Literal/discriminated unions, Type Narrowing, Props types နဲ့ domain models
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Generics
- Utility types
- Unions
- Type Narrowing
- Generic constraints
- Reusable generic Components
- Inference vs explicit annotations

## Mental Model

Advanced typing ရဲ့ရည်ရွယ်ချက်က clever type puzzle မဟုတ်ဘဲ invalid usage ကိုပိတ်ပြီး valid usage မှာ inference ကောင်းစေရန်ဖြစ်တယ်။ Runtime boundary validation ကို TypeScript မစားထိုးနိုင်ဘူး။

## Implementation Tasks

1. Current reusable API တစ်ခု၏ duplication/unsafe casts audit လုပ်ရန်
2. Generic list/select/table candidate တစ်ခုကို bounded constraint ဖြင့်design လုပ်ရန်
3. Utility type တစ်ခုကို domain intent မပျောက်အောင်သုံးရန်
4. Discriminated union narrowing နဲ့ impossible states လျှော့ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Generic Component Props မှ item type inference စမ်းရန်
- `Partial`/`Pick`/`Omit` အသုံးပြုခြင်းနဲ့ explicit domain type နှိုင်းရန်

## Mini Challenges

Call site မှ type argument မရေးဘဲ safe inference ရသော reusable API တစ်ခုဖန်တီးရန်။

## Quiz / Review Questions

1. Generic constraint မရှိလျှင် implementation ဘာကြောင့်အသုံးပြုနိုင်သည့် properties နည်းသလဲ။
2. Utility type ကိုအလွန်အကျွံသုံးခြင်းက domain meaning ကိုဘယ်လိုဖုံးကွယ်နိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 45 review._

## Common Mistakes

- `any` ဖြင့် generic problem ဖုံးခြင်း
- Unsafe casts အများကြီးလိုသော API ဖန်တီးခြင်း
- Runtime validation လိုသည့်နေရာကို static type နဲ့လုံလောက်ပြီလို့ယူခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 45._

## Problems / Mistakes I Made

_To be completed after attempting Day 45; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 45 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 46 မှာ React rendering နဲ့ re-render causes ကို Profiler ဖြင့်တိုင်းတာမည်။
