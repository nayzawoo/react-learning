# Day 08 — Context API + useContext

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Prop drilling ဖြစ်လာသည့် shared data ကို Context boundary မှတစ်ဆင့်ပေးတတ်ပြီး local Props ကို ဆက်သုံးသင့်သည့်အချိန်ကိုခွဲခြားရန်။

## Previous Day Review

Day 07 — useReducer မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Props, Lifting State Up, Component tree နဲ့ `useReducer`
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Context creation နဲ့ Provider
- `useContext` ဖြင့် nearest Provider value ဖတ်ခြင်း
- Provider boundary နဲ့ default/error handling
- Context vs Props
- Context value changes နဲ့ consumer renders

## Mental Model

Context က global variable မဟုတ်ဘဲ Component tree အပိုင်းတစ်ခုအတွက် dependency injection channel ဖြစ်တယ်။ Shared ဖြစ်တာတိုင်း Context ထဲမထည့်ဘဲ data အသုံးပြုသည့် distance နဲ့ ownership ကိုစဉ်းစားမယ်။

## Implementation Tasks

1. Current tree မှာ တကယ် prop drilling ရှိ/မရှိ analysis လုပ်ရန်
2. သင့်လျော်သော shared concern တစ်ခုအတွက် typed Context contract ရေးရန်
3. Provider boundary နဲ့ custom guard အသုံးပြုသည့် consumer ကိုစမ်းရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Props ဖြင့်ပေးခြင်းနဲ့ Context ဖြင့်ပေးခြင်း tree diagram နှစ်ခုနှိုင်းရန်
- Provider မရှိသော consumer အတွက် clear failure behavior တည်ဆောက်ရန်

## Mini Challenges

Context ထဲထည့်မသင့်သော rapidly changing သို့မဟုတ် local-only State တစ်ခုကိုရွေးပြီးအကြောင်းပြရန်။

## Quiz / Review Questions

1. Context က prop drilling ကိုဘယ်လိုလျှော့ပေးသလဲ။
2. Context value ပြောင်းသည့်အခါ consumers အပေါ်ဘာသက်ရောက်နိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 8 review._

## Common Mistakes

- Local State အားလုံးကို Context ထဲထည့်ခြင်း
- Provider value/type boundary မရှင်းခြင်း
- Provider မရှိသည့်အခြေအနေကို silent default ဖြင့်ဖုံးကွယ်ခြင်း

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

_To be completed after finishing Day 8._

## Problems / Mistakes I Made

_To be completed after attempting Day 8; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 8 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 08: Complete Context API + useContext"
```

Optional tag: `day-08-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 9 မှာ reusable stateful behavior ကို Custom Hooks ဖြင့်ထုတ်ယူမည်။
