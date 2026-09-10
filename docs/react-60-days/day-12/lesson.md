# Day 12 — Fetch API + React

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

REST API မှ data ယူရန် Fetch API ကိုအသုံးပြုပြီး request lifecycle ကို React UI states နဲ့မှန်ကန်စွာချိတ်ရန်။

## Previous Day Review

Day 11 — Async JavaScript for React မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Day 11 Promise, `async/await` နဲ့ loading/error/success mental model
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `fetch` request နဲ့ `Response` object
- HTTP status နဲ့ `response.ok`
- JSON parsing
- Typed response data
- Initial fetch နဲ့ UI states

## Mental Model

Network success ဆိုတာ Promise resolved ဖြစ်ရုံမဟုတ်ဘူး။ HTTP response status, parsing နဲ့ expected data shape ကိုအဆင့်လိုက်စစ်ပြီးမှ usable data ဖြစ်တယ်။

## Implementation Tasks

1. Lesson-day API contract ကိုအတည်ပြုပြီး typed fetch function ရေးရန်
2. Loading, error နဲ့ data rendering ကိုချိတ်ရန်
3. Non-2xx response ကို explicit error အဖြစ်ပြောင်းရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Success response နဲ့ error response နှစ်မျိုးကို UI ဖြင့်ပြရန်
- Network payload type နဲ့ internal model ကိုနှိုင်းရန်

## Mini Challenges

Malformed/empty payload ဖြစ်လျှင် app ကဘယ်လို fail သင့်သလဲ design လုပ်ရန်။

## Quiz / Review Questions

1. `fetch` က 404/500 မှာအမြဲ reject လုပ်သလား။
2. Type assertion တစ်ခုက runtime payload ကို validate လုပ်ပေးသလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 12 review._

## Common Mistakes

- `response.ok` မစစ်ခြင်း
- JSON parsing ကို await မလုပ်ခြင်း
- Remote data ကို unchecked internal type အဖြစ်ယူခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 12._

## Problems / Mistakes I Made

_To be completed after attempting Day 12; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 12 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 13 မှာ cleanup, AbortController, stale requests နဲ့ race conditions ကိုဖြေရှင်းမည်။
