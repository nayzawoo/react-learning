# Day 20 — Mini Project #2 Start — Task Manager

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Phase 2 concepts ကို production-oriented Task Manager foundation အဖြစ်ပေါင်းစည်းပြီး scope, domain model နဲ့ architecture ကို feature မရေးမီသတ်မှတ်ရန်။

## Previous Day Review

Day 19 — API Architecture မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Days 11–19 async, Fetch, routing, forms, validation နဲ့ API architecture
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Project scope နဲ့ acceptance criteria
- Task domain model
- Feature-based responsibility
- Routes, forms နဲ့ API boundary planning
- Incremental vertical slice
- Git checkpoint discipline

## Mental Model

Project အသစ်ကို files အရင်ဖန်တီးခြင်းနဲ့မစဘဲ user flow, data model, API contract နဲ့ smallest end-to-end slice ကိုအရင်သတ်မှတ်မယ်။

## Implementation Tasks

1. Task Manager problem statement နဲ့ non-goals ရေးရန်
2. Core Task type/status နဲ့ API DTO boundary design လုပ်ရန်
3. Routes နဲ့ Component responsibility map ဆွဲရန်
4. List/create flow အတွက် smallest vertical slice စီစဉ်ရန်
5. Expense Manager behavior ကိုမလိုအပ်ဘဲမဖျက်မပြောင်းရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- User stories များကို acceptance criteria အဖြစ်ပြောင်းရန်
- Task create/list flow ကို UI → service → API → response အဖြစ် trace လုပ်ရန်

## Mini Challenges

Future authentication, pagination နဲ့ testing ထည့်နိုင်ပေမယ့် အခုမလိုသော abstraction မထည့်သည့် architecture ရွေးရန်။

## Quiz / Review Questions

1. Vertical slice ဆိုတာဘာလဲ၊ layer အားလုံးကြိုဆောက်ခြင်းနဲ့ဘာကွာသလဲ။
2. Task Manager v1 scope ထဲမှာ ဘာတွေမပါသင့်သေးသလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 20 review._

## Common Mistakes

- Requirements မရှင်းမီ architecture အကြီးကြီးတည်ဆောက်ခြင်း
- Tutorial-only data model ကို production need လို့ယူခြင်း
- Future lessons features အားလုံးကို Day 20 မှာကြိုလုပ်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 20._

## Problems / Mistakes I Made

_To be completed after attempting Day 20; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 20 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 21 မှာ Task Manager data ကို Client State နဲ့ Server State အဖြစ်မှန်ကန်စွာခွဲမည်။
