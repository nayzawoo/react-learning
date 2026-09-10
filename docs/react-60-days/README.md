# React + TypeScript 60-Day Learning System

ဒီ directory က single evolving React application ကိုအသုံးပြုပြီး 60-day curriculum, current progress, daily teaching material နဲ့ actual learning evidence ကိုစနစ်တကျထားသည့် knowledge base ဖြစ်သည်။

## Minimal context flow

ပုံမှန် lesson task တစ်ခုအတွက်—

```text
AGENTS.md
  → PROGRESS.md
  → current day-XX/lesson.md
  → relevant src/ files
```

`ROADMAP.md` ကို curriculum context လိုမှသာဖတ်ရန်။ Previous lesson ကို dependency/evidence လိုမှသာဖတ်ရန်။ Future lessons သို့ lesson 60 လုံးကိုအလိုအလျောက်မတင်ရန်။

## Canonical responsibilities

| Location | Single responsibility |
| --- | --- |
| `AGENTS.md` | Essential rules and context routing |
| `PROGRESS.md` | Current Day and current learning state |
| `ROADMAP.md` | Day 1–60 curriculum topics |
| `PROTOCOLS.md` | Start, continue, evidence, validation, completion, and Git workflows |
| `day-XX/lesson.md` | Useful lesson material and actual learning evidence |
| `src/` | Single evolving application |
| Git | Commit, tag, and push state |

Current status ကို [PROGRESS.md](PROGRESS.md) မှဖတ်ရန်။ Public short summary နဲ့ natural-language command table ကို repository [README](../../README.md) မှာကြည့်နိုင်ပြီး detailed workflow ကို [PROTOCOLS.md](PROTOCOLS.md) တစ်နေရာတည်းမှာထားသည်။

## Lesson design

- Current lesson ကို actual repository နဲ့ student progress အပေါ်မူတည်ပြီးမှအသေးစိတ်ပြင်ဆင်ရန်
- Future lesson files ကို concise skeleton အဖြစ်ထားရန်
- Important learning code ကို student က hint-first workflow နဲ့ရေးရန်
- Meaningful checkpoints ပြီးတိုင်း active lesson ၏ `Session Evidence` ထဲ actual evidence သာမှတ်ရန်
- Code compile ဖြစ်ခြင်းတစ်ခုတည်းဖြင့် day complete မသတ်မှတ်ရန်
- Earlier application states ကို lesson folders ထဲမကူးဘဲ Git history မှကြည့်ရန်

Workflow triggers, validation, completion commit/tag နဲ့ push permissions အားလုံးအတွက် [PROTOCOLS.md](PROTOCOLS.md) ကိုလိုက်နာရန်။
