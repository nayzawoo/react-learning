# Day 11 — Async JavaScript for React

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Network ကဲ့သို့ အချိန်ယူသော operations ကို `Promise` နဲ့ `async/await` ဖြင့်စဉ်းစားပြီး loading/error/success UI states နဲ့ချိတ်ဆက်ရန်။

## Previous Day Review

Day 10 — Checkpoint #1 + Expense App Refactor မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- JavaScript functions, error handling, React State နဲ့ conditional rendering
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `Promise` states — pending, fulfilled, rejected
- `async/await` control flow
- `try/catch/finally`
- Loading, error နဲ့ success state model
- Async result timing နဲ့ React renders

## Mental Model

Async operation တစ်ခုမှာ result တစ်ခုတည်းမရှိဘဲ “စောင့်နေ”, “အောင်မြင်”, “မအောင်မြင်” states ပါရှိတယ်။ UI က အဲဒီ lifecycle တစ်ခုလုံးကိုဖော်ပြရမယ်။

## Implementation Tasks

1. Promise lifecycle ကို timeline အဖြစ်ရေးရန်
2. Async function တစ်ခုကို `try/catch/finally` ဖြင့်အဆင့်ခွဲရန်
3. Loading/error/success values ကို UI State model အဖြစ် design လုပ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Resolved နဲ့ rejected Promise နှစ်မျိုးကို handle လုပ်ရန်
- Loading flag ဘယ်အချိန် true/false ဖြစ်ရမလဲ trace လုပ်ရန်

## Mini Challenges

Impossible UI combinations မဖြစ်စေမည့် async status union တစ်ခု design လုပ်ရန်။

## Quiz / Review Questions

1. `await` က UI thread တစ်ခုလုံးကို block လုပ်သလား။
2. Loading, error နဲ့ data ကို update လုပ်သည့်အစဉ်ကဘာကြောင့်အရေးကြီးသလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 11 review._

## Common Mistakes

- Promise ကို await/return မလုပ်ဘဲ result လို့ယူဆခြင်း
- Rejected Promise ကိုမကိုင်တွယ်ခြင်း
- Error ဖြစ်ပြီးနောက် loading State မရှင်းခြင်း

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

_To be completed after finishing Day 11._

## Problems / Mistakes I Made

_To be completed after attempting Day 11; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 11 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 11: Complete Async JavaScript for React"
```

Optional tag: `day-11-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 12 မှာ Fetch API ကို React data flow နှင့်ချိတ်မည်။
