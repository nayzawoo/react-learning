# Day 39 — Forms & Interaction Testing

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

User Event sequence အတိုင်း forms, validation နဲ့ CRUD interactions ကိုစမ်းပြီး meaningful behavior regressions ကိုကာကွယ်ရန်။

## Previous Day Review

Day 38 — React Testing Library မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- React Testing Library, form semantics, validation နဲ့ Task Manager CRUD
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `user-event`
- Typing, clicking နဲ့ submitting
- Validation tests
- Add/Edit/Delete flows
- Disabled/pending states
- Async interaction assertions

## Mental Model

Interaction test က handler ကိုခေါ်မခေါ်သာမစမ်းဘဲ user action အပြီး UI/side effect မှာမြင်ရသော outcome ကိုစမ်းတယ်။

## Implementation Tasks

1. Lesson-day `user-event` API ကိုစစ်ရန်
2. Valid နဲ့ invalid form submissions စမ်းရန်
3. Add/Edit/Delete user flows တစ်ခုချင်းရေးရန်
4. Pending state နဲ့ duplicate submission protection စမ်းရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Required/invalid field errors ကို accessible queries ဖြင့်assert လုပ်ရန်
- Edit → change → save နဲ့ edit → cancel flows နှိုင်းရန်

## Mini Challenges

Confirm/delete သို့ server error တစ်ခုပါသည့် multi-step flow ကိုbrittle မဖြစ်အောင်စမ်းရန်။

## Quiz / Review Questions

1. `fireEvent` ထက် `user-event` က ဘာကြောင့် realistic ဖြစ်သလဲ။
2. Form test မှာ internal handler call တစ်ခုသာassert လုပ်ခြင်းရဲ့အားနည်းချက်ကဘာလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 39 review._

## Common Mistakes

- User Event promises ကို await မလုပ်ခြင်း
- Tests အချင်းချင်း shared State/data သုံးခြင်း
- Validation message text အတိအကျပေါ်လွန်စွာချိတ်ခြင်း

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

_To be completed after finishing Day 39._

## Problems / Mistakes I Made

_To be completed after attempting Day 39; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 39 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 39: Complete Forms & Interaction Testing"
```

Optional tag: `day-39-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 40 မှာ routing, API/cache နဲ့ UI boundaries ကိုပေါင်းထားသော Integration Testing လုပ်မည်။
