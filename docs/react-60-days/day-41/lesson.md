# Day 41 — Accessibility

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Semantic HTML, accessible names, keyboard interaction နဲ့ focus behavior ကို UI design ၏ default quality အဖြစ်ထည့်သွင်းရန်။

## Previous Day Review

Day 40 — Integration Testing + MSW မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Forms, routing, interaction tests နဲ့ DOM semantics
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Semantic HTML
- Labels နဲ့ accessible names
- Keyboard interaction
- Focus order နဲ့ focus management
- ARIA basics
- Automated checks vs manual testing

## Mental Model

Accessibility က နောက်ဆုံး decoration မဟုတ်ဘဲ Component API, markup နဲ့ interaction design ရဲ့ requirement ဖြစ်တယ်။ Native semantic elements ကိုအရင်သုံးပြီး ARIA ကိုလိုမှထည့်မယ်။

## Implementation Tasks

1. Task Manager critical screens ကို keyboard-only နဲ့ audit လုပ်ရန်
2. Inputs, buttons, headings နဲ့ landmarks semantics စစ်ရန်
3. Modal/navigation focus behavior ရှိလျှင်ပြင်ရန်
4. Accessible queries/tests နဲ့ key flows အတည်ပြုရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Unlabeled input နဲ့ div-button ကို semantic equivalent ပြောင်းရန်
- Tab order နဲ့ visible focus ကိုစမ်းရန်

## Mini Challenges

Dynamic validation/error message တစ်ခုကို screen reader သုံးသူနားလည်နိုင်အောင် design လုပ်ရန်။

## Quiz / Review Questions

1. Native `button` က clickable `div` ထက်ဘာတွေကိုအလိုအလျောက်ပေးသလဲ။
2. ARIA ထည့်ခြင်းက invalid semantic HTML ကိုအမြဲပြင်ပေးနိုင်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 41 review._

## Common Mistakes

- Mouse-only interaction စမ်းခြင်း
- Placeholder ကို label အစားသုံးခြင်း
- ARIA ကို native semantics မစဉ်းစားဘဲအလွန်အကျွံသုံးခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 41._

## Problems / Mistakes I Made

_To be completed after attempting Day 41; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 41 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 42 မှာ screen sizes နဲ့ content constraints အပေါ်ခံနိုင်သော Responsive UI Architecture ကိုတည်ဆောက်မည်။
