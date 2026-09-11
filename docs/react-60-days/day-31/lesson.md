# Day 31 — State Architecture

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Local UI, Shared Client, Server, URL, Form, Persisted, and Derived State တစ်ခုချင်း၏ owner, lifetime, scope နဲ့ update mechanism ကိုစနစ်တကျသတ်မှတ်ပြီး duplication နဲ့ accidental coupling လျှော့ရန်။

## Previous Day Review

Day 30 — Checkpoint #2 — Task Manager v1 မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Local/lifted State, Context, reducer, URL State နဲ့ server State tools
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- State ownership နဲ့ colocation
- Local UI State and Shared Client State
- Server State and cache ownership
- URL State and Form State
- Persisted State and hydration/migration boundary
- Derived State
- State lifetime/scope, boundaries နဲ့ data flow

## Mental Model

State ကို “ဘယ် tool ထဲထားမလဲ” မေးခွန်းမတိုင်မီ “ဘယ်သူပိုင်သလဲ၊ ဘယ်လောက်ကြာအသက်ရှင်သလဲ၊ ဘယ် Components သုံးသလဲ၊ derive လုပ်လို့ရလား” ကိုမေးမယ်။

## Implementation Tasks

1. Task Manager State inventory ကို category ခုနစ်မျိုးဖြင့်ရေးရန်
2. Owner/scope/lifetime/source of truth/freshness columns ဖြင့် audit လုပ်ရန်
3. Duplicate/over-global State နဲ့ server/URL/form State ကိုမှားယွင်းကူးထားခြင်းများရှာရန်
4. Available mechanisms ထဲမှ smallest correct owner ကိုရွေးရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Form draft, modal, filters, current user, task list တို့ကိုသင့်လျော်သော home ရွေးရန်
- Feature flow တစ်ခု၏ State transition diagram ဆွဲရန်

## Mini Challenges

Global store မသုံးဘဲရနိုင်သော State တစ်ခုနဲ့ တကယ် cross-cutting ဖြစ်သော State တစ်ခုကိုကာကွယ်ပြောဆိုရန်။

## Quiz / Review Questions

1. Search filter ကို URL State အဖြစ်ထားခြင်းနှင့် global store ထဲထားခြင်း၏ sharing/back-button tradeoff ကဘာလဲ။
2. API task list ကို Shared Client State အဖြစ်ထပ်သိမ်းလျှင် source-of-truth နဲ့ freshness bugs ဘာတွေဖြစ်နိုင်သလဲ။
3. Persisted State က runtime validation, versioning, and hydration strategy ဘာကြောင့်လိုသလဲ။

**Student answers:** _To be completed during Day 31 review._

## Common Mistakes

- Tool ကိုအရင်ရွေးပြီး State problem ကိုနောက်မှဖော်ပြခြင်း
- Derived/URL/server State ကို global Client State ထပ်ကူးခြင်း
- State lifetime နဲ့ Component lifetime မကိုက်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 31._

## Problems / Mistakes I Made

_To be completed after attempting Day 31; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 31 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 32 မှာ Zustand ကို small external Client State store အဖြစ်လေ့လာပြီး native React boundaries နဲ့နှိုင်းမည်။
