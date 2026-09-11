# Day 40 — Integration Testing + MSW

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Components, routing, forms နဲ့ data layer တို့ပေါင်းအလုပ်လုပ်သော critical user journeys ကို realistic HTTP boundary နှင့် current MSW APIs ဖြင့်စမ်းရန်။

## Previous Day Review

Day 39 — Forms & Interaction Testing မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Vitest, React Testing Library, user-event, routing နဲ့ API/query architecture
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Integration test scope
- Test providers/router setup
- Network boundary mocking
- Native stubs vs MSW decision boundary
- MSW `http` handlers and `HttpResponse`
- Node test server vs browser Service Worker
- Handler reuse, overrides, reset, and contract drift
- Critical user journeys
- Success/failure paths
- Deterministic test data

## Mental Model

Integration test က units အားလုံးကို real production systems နဲ့ချိတ်တာမဟုတ်ဘဲ meaningful internal parts များကိုပေါင်းစမ်းပြီး network လို external boundary ကိုcontrolled substitute ဖြင့်ထားတယ်။

## Implementation Tasks

1. Lesson-day MSW stable API, Vitest/TypeScript compatibility, maintenance, dependency cost, and v1→v2 migration notes ကိုစစ်ရန်
2. Hand-written fetch mock limitation နှင့် MSW network interception tradeoff ကိုနှိုင်းရန်
3. Reusable test render/providers and MSW Node server setup တည်ဆောက်ရန်
4. Task create သို့ edit critical flow တစ်ခုကို router/query/form/HTTP handler ဖြင့်စမ်းရန်
5. Network success, validation, delay, and server failure scenarios စမ်းရန်
6. Handler/cache reset, unhandled requests, and test isolation စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Unit vs Component vs integration test boundaries ခွဲရန်
- Mock implementation မဟုတ်ဘဲ HTTP contract နီးစပ်သော responses သုံးရန်

## Mini Challenges

Auth → protected route → data load → mutation flow တစ်ခုကို focused test အဖြစ်ရေးရန်။

## Quiz / Review Questions

1. MSW က `fetch` implementation ကိုmock လုပ်ခြင်းထက် production request path နဲ့ဘယ်လိုပိုနီးသလဲ၊ ဘာကိုတော့မစမ်းနိုင်သေးသလဲ။
2. Query cache, handlers, and generated data ကို tests ကြားမရှင်းလျှင် ဘာ flakiness ဖြစ်နိုင်သလဲ။
3. One-off pure function test အတွက် MSW မသုံးသင့်သည့်အကြောင်းကဘာလဲ။
4. Mock handlers နဲ့ real backend contract drift ကိုဘယ်လိုလျှော့မလဲ။

**Student answers:** _To be completed during Day 40 review._

## Common Mistakes

- App အားလုံးကို test တစ်ခုထဲစမ်းခြင်း
- Provider setup production နဲ့မကိုက်ခြင်း
- Shared cache/server handlers ကြောင့် test order dependency ဖြစ်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 40._

## Problems / Mistakes I Made

_To be completed after attempting Day 40; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 40 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 41 မှာ semantic HTML, keyboard, focus နဲ့ ARIA basics ဖြင့် Accessibility ကိုစနစ်တကျစစ်မည်။
