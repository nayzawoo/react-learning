# Day 27 — Laravel API Integration Pattern

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

React frontend နဲ့ Laravel API ကြား status codes, validation errors နဲ့ request conventions ကိုတစ်သမတ်တည်းကိုင်တွယ်ရန်။

## Previous Day Review

Day 26 — Protected Routes မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- API client, Authentication, Protected Routes နဲ့ form validation
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- React + Laravel API contract
- 401 Unauthenticated
- 403 Forbidden
- 422 Validation errors
- Laravel error payload conventions
- Credentials/CSRF or token strategy
- API response normalization

## Mental Model

Status code တစ်ခုချင်းက UI action မတူစေတယ်—401 က identity မရှိ/သက်တမ်းကုန်ခြင်း၊ 403 က identity ရှိပေမယ့်ခွင့်မရှိခြင်း၊ 422 က request data ပြင်ရန်လိုခြင်းဖြစ်တယ်။

## Implementation Tasks

1. Actual Laravel endpoint/auth convention ကို lesson day မှာအတည်ပြုရန်
2. API client မှ status-specific normalized errors ထုတ်ရန်
3. 422 field errors ကို form fields နဲ့ချိတ်ရန်
4. 401 session recovery နဲ့ 403 permission UI ကိုသီးခြားစမ်းရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- 401/403/422 တစ်ခုချင်းအတွက် frontend response decision ရေးရန်
- Laravel validation payload ကို typed form error map သို့ပြောင်းရန်

## Mini Challenges

Unknown server error shape ကို safe fallback လုပ်ပြီး useful user message ပေးရန်။

## Quiz / Review Questions

1. 401 နဲ့ 403 UI behavior ဘာကြောင့်မတူသင့်သလဲ။
2. 422 error ကို toast တစ်ခုတည်းပြခြင်းထက် field mapping ကဘာကြောင့်ပိုကောင်းနိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 27 review._

## Common Mistakes

- Status codes အားလုံးကို generic error တစ်မျိုးအဖြစ်ဖော်ပြခြင်း
- Laravel payload shape ကို unchecked cast လုပ်ခြင်း
- Auth strategy မတူဘဲ CSRF/cookie/token advice များရောသုံးခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 27._

## Problems / Mistakes I Made

_To be completed after attempting Day 27; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 27 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 28 မှာ render failures နဲ့ recoverable operation failures အတွက် Error Boundaries + Failure UX ကိုလုပ်မည်။
