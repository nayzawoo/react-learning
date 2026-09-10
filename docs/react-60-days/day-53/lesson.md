# Day 53 — Server Components vs Client Components

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Server Component နဲ့ Client Component boundaries, capabilities နဲ့ bundle implications ကိုနားလည်ပြီး `"use client"` ကိုအနည်းဆုံးလိုအပ်သလောက်သာထားရန်။

## Previous Day Review

Day 52 — Pages, Layouts & Navigation မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Next.js layouts/pages, React State/Effects/Events နဲ့ server data concepts
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Server Component
- Client Component
- `"use client"` boundary
- Serializable Props
- Browser APIs and Hooks
- Bundle boundary
- Server/client composition

## Mental Model

Server Component က default ဖြစ်ပြီး server မှာ data/markup ပြင်ဆင်နိုင်တယ်။ Interactivity, browser APIs သို့ client Hooks လိုသော subtree ကိုသာ Client Component boundary ချမယ်။

## Implementation Tasks

1. Capstone Components ကို server-capable vs client-required အဖြစ်audit လုပ်ရန်
2. Interactive leaf တစ်ခုကို Client Component ထားရန်
3. Server parent မှ serializable Props ဖြင့်data ပို့ရန်
4. Unnecessary client boundaries ကိုလျှော့ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Component capabilities matrix ရေးရန်
- Large client page ကို server shell + client interactive leaf အဖြစ်ခွဲရန်

## Mini Challenges

Context/provider လိုသော client concern ကို entire app client မဖြစ်စေဘဲနေရာချရန်။

## Quiz / Review Questions

1. `"use client"` က file တစ်ခုတည်းသို့ subtree boundary ကိုသက်ရောက်သလား။
2. Server Component မှာ `useState` ဘာကြောင့်မသုံးနိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 53 review._

## Common Mistakes

- Page/layout အားလုံးမှာ `"use client"` ထည့်ခြင်း
- Function/complex non-serializable values ကို server → client Props ပို့ခြင်း
- Server/client execution location ကိုမသိဘဲ browser API သုံးခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 53._

## Problems / Mistakes I Made

_To be completed after attempting Day 53; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 53 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 54 မှာ Next.js Data Fetching, caching နဲ့ revalidation behavior ကိုလေ့လာမည်။
