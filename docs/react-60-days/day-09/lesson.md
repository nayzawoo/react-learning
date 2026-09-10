# Day 09 — Custom Hooks

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Component များကြား reuse လုပ်ရမည့် stateful logic ကို ရှင်းလင်းသော input/output API ပါသည့် Custom Hook အဖြစ်ထုတ်ယူရန်။

## Previous Day Review

Day 08 — Context API + useContext မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Hooks rules, `useState`, `useEffect`, `useRef`, Context
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Custom Hook naming — `use...` convention
- Stateful logic reuse vs UI reuse
- Hook inputs, returned API နဲ့ encapsulation
- Rules of Hooks
- Effect responsibility နဲ့ dependency design

## Mental Model

Custom Hook က UI မပြန်ဘဲ React behavior ကိုပေးတယ်။ Extraction က line count လျှော့ဖို့မဟုတ်ဘဲ cohesive logic ကို reusable/testable boundary တစ်ခုအဖြစ်ဖန်တီးဖို့ဖြစ်တယ်။

## Implementation Tasks

1. Expense Manager ထဲက cohesive repeated/stateful logic candidate ရွေးရန်
2. Hook API ကို implementation မတိုင်မီရေးရန်
3. ဥပမာ persisted State logic ကို bounded Hook အဖြစ် guided extraction လုပ်ရန်
4. Component responsibility ပိုရှင်းလာကြောင်းစစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- UI markup နဲ့ stateful behavior ကိုခွဲရေးရန်
- Hook return object/tuple tradeoff ကိုနှိုင်းရန်

## Mini Challenges

Hook name နဲ့ returned API ကိုကြည့်ရုံဖြင့် responsibility သိနိုင်အောင် redesign လုပ်ရန်။

## Quiz / Review Questions

1. Custom Hook နဲ့ Component အဓိကကွာခြားချက်ကဘာလဲ။
2. Logic ရှိတိုင်း Hook သီးခြားခွဲရန်မလိုသည့်အကြောင်းကဘာလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 9 review._

## Common Mistakes

- `use` မစသော Hook name သုံးခြင်း
- Hooks ကို condition/loop ထဲခေါ်ခြင်း
- Unrelated behavior များကို “utility Hook” တစ်ခုထဲစုခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 9._

## Problems / Mistakes I Made

_To be completed after attempting Day 9; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 9 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 10 မှာ Expense Manager ကို Checkpoint #1 အဖြစ် review, refactor နဲ့ validation လုပ်မည်။
