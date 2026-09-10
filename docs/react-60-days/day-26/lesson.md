# Day 26 — Protected Routes

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Authentication status အပေါ်မူတည်၍ route access UX ကိုထိန်းပြီး redirect, loading နဲ့ return-to behavior များကိုမှန်ကန်စေရန်။

## Previous Day Review

Day 25 — Authentication Fundamentals မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Authentication fundamentals, React Router နဲ့ current-user query
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Protected route boundary
- Auth loading vs unauthenticated states
- Redirects
- Return-to/original destination
- Role-aware UI
- Server authorization remains required

## Mental Model

Protected Route က user navigation UX ကိုညှိပေးတာဖြစ်ပြီး server security အစားမထိုးနိုင်ဘူး။ Auth status မသိသေးချိန်နဲ့ definitely unauthenticated ဖြစ်ချိန်ကိုခွဲရတယ်။

## Implementation Tasks

1. Auth status State machine သတ်မှတ်ရန်
2. Protected layout/route wrapper design လုပ်ရန်
3. Unauthenticated redirect နဲ့ original destination preserve လုပ်ရန်
4. Refresh, logout နဲ့ expired-session flows စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Unknown/loading/authenticated/unauthenticated UI များခွဲရန်
- Protected URL ကိုတိုက်ရိုက်ဖွင့်ပြီး login နောက်ပြန်သွားပုံစမ်းရန်

## Mini Challenges

Role-based menu visibility နဲ့ server-side permission failure တို့ကိုတစ်ခုပဲမယူဆဘဲ design လုပ်ရန်။

## Quiz / Review Questions

1. Auth loading ကို unauthenticated လို့ချက်ချင်းယူလျှင် ဘာ UX bug ဖြစ်နိုင်သလဲ။
2. Protected Route ရှိလျှင် API authorization မလိုတော့ဘူးလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 26 review._

## Common Mistakes

- Initial auth check မပြီးမီ login သို့ redirect လုပ်ခြင်း
- Original destination ပျောက်ခြင်း
- Client role check ကို final authorization လို့ယူခြင်း

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

_To be completed after finishing Day 26._

## Problems / Mistakes I Made

_To be completed after attempting Day 26; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 26 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 26: Complete Protected Routes"
```

Optional tag: `day-26-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 27 မှာ React + Laravel API အတွက် 401, 403, 422 နဲ့ validation conventions ကိုချိတ်မည်။
