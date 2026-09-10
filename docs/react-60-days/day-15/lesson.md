# Day 15 — Advanced Routing

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

URL structure ကို nested layouts, resource identity, UI filters နဲ့ not-found behavior များအတွက်စနစ်တကျအသုံးပြုရန်။

## Previous Day Review

Day 14 — React Router Fundamentals မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Day 14 route setup, links နဲ့ browser history
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Nested routes နဲ့ shared layout
- Route params
- Search params
- 404 / not-found routes
- URL-driven UI State

## Mental Model

Path params က resource identity ကိုဖော်ပြပြီး search params က optional view state—filter, page, query—ကိုဖော်ပြတတ်တယ်။ Nested routes က URL hierarchy နဲ့ UI layout hierarchy ကိုချိတ်တယ်။

## Implementation Tasks

1. Parent/child route hierarchy design လုပ်ရန်
2. ID route param ဖြင့် detail view တည်ဆောက်ရန်
3. Search/filter value တစ်ခုကို search params နဲ့ sync လုပ်ရန်
4. Explicit not-found route နဲ့ invalid ID behavior စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Route param နဲ့ search param သင့်လျော်သော use cases ခွဲရန်
- Deep link ကိုတိုက်ရိုက်ဖွင့်ပြီး refresh behavior စမ်းရန်

## Mini Challenges

Shareable filtered URL တစ်ခု design လုပ်ပြီး default values ကိုရှင်းပြရန်။

## Quiz / Review Questions

1. Route params နဲ့ search params ရဲ့ semantic difference ကဘာလဲ။
2. Nested route ထဲက child content ဘယ်နေရာမှာ render သင့်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 15 review._

## Common Mistakes

- Optional UI filter ကို path segment အဖြစ်အတင်းသုံးခြင်း
- Invalid/missing param ကိုမကိုင်တွယ်ခြင်း
- 404 route ကို server error နဲ့ရောထွေးခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run build` အောင်မြင်သည်။
- [ ] `npm run lint` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 15._

## Problems / Mistakes I Made

_To be completed after attempting Day 15; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 15 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 15: Complete Advanced Routing"
```

Optional tag: `day-15-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 16 မှာ controlled/uncontrolled inputs နဲ့ reusable form Components ကိုနက်ရှိုင်းစွာလေ့လာမည်။
