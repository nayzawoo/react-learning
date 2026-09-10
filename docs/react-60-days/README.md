# React + TypeScript 60-Day Learning System

ဒီ directory က React + TypeScript ကို ရက် ၆၀ အတွင်း အဆင့်လိုက်လေ့လာဖို့ အသုံးပြုတဲ့ version-controlled knowledge base ဖြစ်တယ်။ ရည်ရွယ်ချက်က ဘာတွေသင်ပြီးပြီ၊ လက်ရှိဘယ်နေ့မှာရှိတယ်၊ နောက်တစ်ဆင့်ဘာသင်မယ်၊ ဘယ် concepts တွေကို ဘယ်နေ့မှာမိတ်ဆက်ခဲ့တယ်၊ ဘယ် exercises တွေပြီးပြီ၊ ဘယ်အမှားတွေကနေ ဘာသင်ယူခဲ့တယ်ဆိုတာ လူနဲ့ AI agent နှစ်ဖက်လုံး မြန်မြန်နားလည်နိုင်စေဖို့ဖြစ်တယ်။

## ဖတ်ရှုရမည့်အစဉ်

ပုံမှန် lesson task တစ်ခုမှာ context ကို အောက်ပါအစဉ်အတိုင်းသာ တင်သင့်တယ်။

```text
AGENTS.md
    ↓
docs/react-60-days/PROGRESS.md
    ↓
docs/react-60-days/day-XX/lesson.md
    ↓
relevant source files in src/
```

`ROADMAP.md` ကို curriculum တစ်ခုလုံး သို့မဟုတ် future-learning context လိုမှသာဖတ်ရမယ်။ Daily lesson ၆၀ လုံးကို အလိုအလျောက်ဖတ်ဖို့မလိုဘူး။ အရင်နေ့ lesson ကိုလည်း review သို့မဟုတ် dependency တကယ်လိုမှသာဖတ်ရမယ်။ ဒီနည်းက ChatGPT/Codex context ကို သက်သာစေပြီး လက်ရှိ learning goal ပေါ်မှာ အာရုံစိုက်နိုင်စေတယ်။

## ဖိုင်များ၏တာဝန်

| Location | တာဝန် |
| --- | --- |
| `ROADMAP.md` | Phase ၆ ခုနဲ့ Day 1–60 အတွက် canonical master curriculum |
| `PROGRESS.md` | Current Day, completed days, current focus, exercises, mistakes နဲ့ repository notes |
| `day-XX/lesson.md` | တစ်နေ့ချင်း objectives, mental model, exercises, quiz, completion criteria နဲ့ learning record |
| `src/` | Expense Manager မှစပြီး project များ တဖြည်းဖြည်းတိုးတက်သွားမည့် single source code |
| Git history | နေ့အလိုက် implementation state နဲ့ checkpoint များ၏ သမိုင်း |

## 60-Day Curriculum အလုပ်လုပ်ပုံ

သင်ခန်းစာတွေကို React mental model ကနေ real application foundations, server state, authentication, state management, testing, production React, Next.js နဲ့ portfolio release အထိ အဆင့်လိုက်စီထားတယ်။ လက်ရှိနေ့မရောက်သေးတဲ့ lesson များမှာ concise skeleton ပဲထားပြီး အဲဒီနေ့ရောက်မှ repository state နဲ့ student understanding အပေါ်မူတည်ကာ အသေးစိတ်ချဲ့မယ်။

Lesson ပြီးမြောက်မှုဟာ code compile ဖြစ်တာတစ်ခုတည်းနဲ့ မဆုံးဖြတ်ဘူး။ Concept ကို ရှင်းပြနိုင်ခြင်း၊ guided exercise နဲ့ mini challenge ပြီးခြင်း၊ quiz/review, required functionality နဲ့ build/lint result တွေကိုပါ စစ်ရမယ်။

## ChatGPT နှင့် Codex အသုံးပြုပုံ

- `PROGRESS.md` ကနေ Current Day ကိုအရင်သတ်မှတ်ပါ။
- လက်ရှိ `lesson.md` နဲ့ relevant `src/` files ကိုဖတ်ပြီးမှ guidance ပေးပါ။
- Student က အရေးကြီးတဲ့ learning code ကို ကိုယ်တိုင်ရေးနိုင်အောင် concept, hint နဲ့ debugging ကိုဦးစားပေးပါ။
- မသတ်မှတ်ရသေးတဲ့ weakness, exercise result သို့မဟုတ် mistake ကို မဖန်တီးပါနဲ့။
- နေ့ပြီးတိုင်း lesson record နဲ့ `PROGRESS.md` ကို evidence အပေါ်မူတည်ပြီး update လုပ်ပါ။
- Future lesson implementation ကို scheduled day မရောက်မီ မလုပ်ပါနဲ့။

## Source Code နှင့် Git History

`src/` ကို နေ့တိုင်း folder ထဲကူးထည့်ခြင်းမပြုဘဲ application ရဲ့ single evolving source အဖြစ်ထားမယ်။ အရင် implementation ကိုပြန်ကြည့်ချင်ရင် Git commit/history ကိုအသုံးပြုမယ်။ Lesson ပြီးချိန်မှာ commit တစ်ခုဖန်တီးပြီး လိုအပ်ပါက အောက်ပါ tag convention ကိုသုံးနိုင်တယ်။

```text
day-01-complete
day-02-complete
day-03-complete
...
```

Tags ၆၀ လုံးကို ကြိုဖန်တီးမထားဘဲ တစ်နေ့ချင်း completion criteria ပြည့်မှသာ checkpoint လုပ်သင့်တယ်။

လက်ရှိ Day 1–4 အတွက် `day-01-complete` မှ `day-04-complete` အထိ annotated tags များကို verified final lesson commits တွင်ဖန်တီးပြီး `origin` သို့ push ထားသည်။ Day 5 နှင့် နောက်ပိုင်း tags များကို သက်ဆိုင်ရာနေ့တကယ်ပြီးမှသာဖန်တီးမည်။

## Standard Daily Workflow

```text
1. Review current repository
2. Review previous day's concepts
3. Explain today's concept
4. Small guided implementation
5. Student writes important code
6. Debug errors together
7. Explain the mental model / why
8. Mini exercise
9. Quiz
10. Refactor if appropriate
11. Run build/lint
12. Git checkpoint
13. Update lesson notes and progress
```

ဒီ curriculum ကို copy/paste tutorial အဖြစ်မသုံးဘဲ နားလည်မှု၊ debugging skill နဲ့ production-level decision making တိုးလာစေဖို့ အသုံးပြုရမယ်။
