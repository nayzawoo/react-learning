# Day 16 — Forms Deep Dive

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Form State, validation timing နဲ့ reusable field boundaries ကို controlled/uncontrolled strategies နှစ်မျိုးဖြင့်နှိုင်းယှဉ်ရန်။

## Previous Day Review

Day 15 — Advanced Routing မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Events, controlled inputs, Props, refs နဲ့ TypeScript form types
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Controlled inputs
- Uncontrolled inputs နဲ့ DOM/FormData
- Form submit lifecycle
- Reusable form Components
- Validation timing နဲ့ error display
- Accessible labels and messages

## Mental Model

Controlled/uncontrolled က “ကောင်း/မကောင်း” မဟုတ်ဘဲ value owner ဘယ်သူလဲဆိုသည့်ရွေးချယ်မှုဖြစ်တယ်။ Validation နဲ့ reset/edit requirements အပေါ်မူတည်ပြီး strategy ရွေးမယ်။

## Implementation Tasks

1. Existing Expense form State flow audit လုပ်ရန်
2. Controlled နဲ့ uncontrolled example အသေးစားနှစ်မျိုးနှိုင်းရန်
3. Reusable field Component API ကို accessibility မပျက်အောင် design လုပ်ရန်
4. Submit/reset/edit behaviors စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Field value owner နဲ့ validation owner ကို diagram ဆွဲရန်
- FormData မှ typed domain input ပြောင်းသည့် boundary ရေးရန်

## Mini Challenges

Reusable Input API က label, error နဲ့ ID relationship ကိုဘယ်လိုထိန်းမလဲ design လုပ်ရန်။

## Quiz / Review Questions

1. Controlled input နဲ့ uncontrolled input ရဲ့ source of truth ဘယ်မှာရှိသလဲ။
2. Reusable form Component က business validation ကိုအမြဲပိုင်သင့်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 16 review._

## Common Mistakes

- Controlled/uncontrolled mode ကို render များကြားပြောင်းခြင်း
- Label နဲ့ input association မရှိခြင်း
- Raw string input ကို domain type လို့တိုက်ရိုက်ယူခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 16._

## Problems / Mistakes I Made

_To be completed after attempting Day 16; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 16 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 17 မှာ React Hook Form ဖြင့် form registration, errors နဲ့ submission ကိုစီမံမည်။
