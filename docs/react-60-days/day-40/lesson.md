# Day 40 — Integration Testing

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Components, routing, forms နဲ့ data layer တို့ပေါင်းအလုပ်လုပ်သော critical user journeys ကို realistic boundaries ဖြင့်စမ်းရန်။

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
- Critical user journeys
- Success/failure paths
- Deterministic test data

## Mental Model

Integration test က units အားလုံးကို real production systems နဲ့ချိတ်တာမဟုတ်ဘဲ meaningful internal parts များကိုပေါင်းစမ်းပြီး network လို external boundary ကိုcontrolled substitute ဖြင့်ထားတယ်။

## Implementation Tasks

1. Reusable test render/providers setup တည်ဆောက်ရန်
2. Task create သို့ edit critical flow တစ်ခုကို router/query/form ဖြင့်စမ်းရန်
3. Network success နဲ့ server failure response နှစ်မျိုးစမ်းရန်
4. Test isolation နဲ့ cache reset စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Unit vs Component vs integration test boundaries ခွဲရန်
- Mock implementation မဟုတ်ဘဲ HTTP contract နီးစပ်သော responses သုံးရန်

## Mini Challenges

Auth → protected route → data load → mutation flow တစ်ခုကို focused test အဖြစ်ရေးရန်။

## Quiz / Review Questions

1. Integration test မှာ ဘာကို real ထားပြီး ဘာကိုmock လုပ်သင့်သလဲ။
2. Query cache ကို tests ကြားမရှင်းလျှင် ဘာ flakiness ဖြစ်နိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

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
