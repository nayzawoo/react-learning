# Day 32 — Redux Mental Model

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Redux ရဲ့ predictable State container model ကို library syntax မတိုင်မီ events, reducers နဲ့ one-way data flow အဖြစ်နားလည်ရန်။

## Previous Day Review

Day 31 — State Architecture မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- `useReducer`, immutable updates နဲ့ State Architecture
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Store
- Actions
- Reducers
- Dispatch
- Selectors
- One-way data flow
- Redux use-case boundaries

## Mental Model

Redux မှာ Components က action dispatch လုပ်တယ်၊ reducer က next store State ထုတ်တယ်၊ UI က selectors ဖြင့်လိုသော data ဖတ်တယ်။ Redux သုံးခြင်းဟာ server cache သို့ local State အားလုံးအတွက် default မဟုတ်ဘူး။

## Implementation Tasks

1. Redux data flow ကို framework-independent diagram ရေးရန်
2. Task Manager ရှိ Redux candidate နဲ့ non-candidate State ခွဲရန်
3. Action naming ကို event language ဖြင့် design လုပ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- State transition တစ်ခုကို action/reducer/selector သုံးပိုင်းခွဲရေးရန်
- `useReducer` နဲ့ Redux scope/lifecycle ကွာခြားချက်နှိုင်းရန်

## Mini Challenges

Redux မလိုသော scenario တစ်ခုကို proof ဖြင့်ရှင်းပြရန်။

## Quiz / Review Questions

1. Action က command လား event လား၊ naming က design ကိုဘယ်လိုသက်ရောက်သလဲ။
2. Selector က State ကိုပြောင်းသလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 32 review._

## Common Mistakes

- Redux ကို API cache အတွက်အလိုအလျောက်ရွေးခြင်း
- Actions ကို setters အမည်ပဲပေးခြင်း
- Store shape ကို UI tree အတိုင်းတည်ဆောက်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 32._

## Problems / Mistakes I Made

_To be completed after attempting Day 32; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 32 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 33 မှာ Redux Toolkit ဖြင့် store နဲ့ slice ကို modern pattern အတိုင်းတည်ဆောက်မည်။
