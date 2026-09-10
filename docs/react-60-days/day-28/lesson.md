# Day 28 — Error Boundaries + Failure UX

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Unexpected render errors ကို Error Boundary ဖြင့်ကန့်သတ်ပြီး expected async/form failures နဲ့ခွဲခြားကာ recovery-focused UX တည်ဆောက်ရန်။

## Previous Day Review

Day 27 — Laravel API Integration Pattern မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Async error states, routing, API errors နဲ့ Component boundaries
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Error Boundaries
- Render errors vs event/async errors
- Fallback UI
- Reset/retry strategy
- Failure isolation boundaries
- Logging without leaking sensitive data

## Mental Model

Error Boundary က tree အပိုင်းတစ်ခု render ပျက်ခြင်းကို isolate လုပ်တယ်။ API rejection, event handler error နဲ့ validation error တို့ကို တခြားနည်းလမ်းဖြင့်ကိုင်တွယ်ရတယ်။

## Implementation Tasks

1. Installed React version နဲ့ compatible boundary pattern ကိုစစ်ရန်
2. Route/feature-level boundary တစ်ခုစီ၏ blast radius design လုပ်ရန်
3. Useful fallback နဲ့ recovery action ထည့်ရန်
4. Async error UI ကို boundary fallback နဲ့မရောအောင်စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Intentional render error ဖြင့် boundary coverage စမ်းရန်
- Render/API/validation errors ကို handler နည်းလမ်းအလိုက်ခွဲရန်

## Mini Challenges

App shell မပျက်ဘဲ feature တစ်ခုသာ recover လုပ်နိုင်သော boundary placement ရွေးရန်။

## Quiz / Review Questions

1. Error Boundary က event handler error ကိုအလိုအလျောက်ဖမ်းသလား။
2. Boundary ကို root တစ်ခုတည်းထားခြင်းရဲ့ UX downside ကဘာလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 28 review._

## Common Mistakes

- Errors အားလုံးကို Error Boundary ကဖမ်းမယ်လို့ယူဆခြင်း
- Fallback မှာ recovery path မပေးခြင်း
- Sensitive request/user data ကို logging ထဲထည့်ခြင်း

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

_To be completed after finishing Day 28._

## Problems / Mistakes I Made

_To be completed after attempting Day 28; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 28 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 28: Complete Error Boundaries + Failure UX"
```

Optional tag: `day-28-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 29 မှာ route/Component code ကို Lazy Loading + Suspense ဖြင့်လိုအပ်ချိန်မှ load လုပ်မည်။
