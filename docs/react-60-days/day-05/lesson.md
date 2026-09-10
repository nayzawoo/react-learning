# Day 05 — Search + Combined Filtering + Derived State Design

## Status

Status: Completed

Student က search implementation, exercises, manual tests နဲ့ quiz/review ကိုပြီးစီးခဲ့ပြီး source verification, build နဲ့ lint အောင်မြင်ပြီးနောက် Day 5 ကို completed အဖြစ်မှတ်တမ်းတင်ထားသည်။

## Purpose

Expense Manager ထဲမှာ text search ထည့်ရာမှ controlled input, State ownership, Derived Value design နဲ့ multiple conditions ပေါင်းထားသော readable filtering logic ကိုနားလည်ရန်။ Search result ကို sync လုပ်ရမည့် State အသစ်အဖြစ်မထားဘဲ ရှိပြီးသား inputs များမှတိုက်ရိုက်တွက်တတ်ရန်က အဓိကရည်ရွယ်ချက်ဖြစ်တယ်။

## Previous Day Review

Day 4 မှ အောက်ပါတို့ကို ပြန်ရှင်းပြနိုင်ရမည်။

- `EXPENSE_CATEGORIES` က runtime options နဲ့ `ExpenseCategory` type အတွက် Single Source of Truth ဖြစ်ပုံ
- `as const` နဲ့ `typeof EXPENSE_CATEGORIES[number]` အလုပ်လုပ်ပုံ
- `CategorySelect` ၏ optional/discriminated union Props
- `props.includeAll` check နောက် Type Narrowing ဖြစ်ပုံ
- `filteredCategory` က State ဖြစ်ပြီး `filteredExpenses` နဲ့ `total` က Derived Values ဖြစ်ပုံ
- Shared State ကို common parent ဆီ Lifting State Up လုပ်ရသည့်အကြောင်း

## Prerequisites

- Controlled inputs နဲ့ `useState`
- JavaScript `.filter()` နဲ့ predicate functions
- String methods: `.includes()`, `.toLowerCase()`, `.trim()`
- Boolean expressions: `&&`, `||`, `===`
- State, Props, Derived Value ကွာခြားချက်
- Current `App` → `ExpenseList` data flow

## Learning Objectives

Day 5 ပြီးလျှင် student သည်—

- Search input ကို controlled input အဖြစ်တည်ဆောက်နိုင်ရမည်။
- `searchText` ကို ဘာကြောင့် State အဖြစ်ထားရသလဲရှင်းပြနိုင်ရမည်။
- `filteredExpenses` ကို ဘာကြောင့် Derived Value အဖြစ်ထားရသလဲရှင်းပြနိုင်ရမည်။
- Case-insensitive search အတွက် query နဲ့ searchable text ကို normalize လုပ်နိုင်ရမည်။
- Category condition နဲ့ text search condition ကို Boolean logic ဖြင့်ပေါင်းနိုင်ရမည်။
- Empty/whitespace query, uppercase/lowercase query နဲ့ combined filters ကိုစမ်းသပ်နိုင်ရမည်။
- Filter predicate ရှုပ်လာလျှင် named Boolean variables ဖြင့် readable ဖြစ်အောင် refactor လုပ်နိုင်ရမည်။
- Search UI နဲ့ filtering policy အတွက် သင့်လျော်သော Component Responsibility သတ်မှတ်နိုင်ရမည်။
- Unnecessary State နဲ့ synchronization Effect ကိုရှောင်နိုင်ရမည်။

## Core Concepts

### Search Input

Search input က user ရိုက်ထည့်သည့် query ကိုလက်ခံပြီး displayed expenses ကိုကန့်သတ်ပေးမည့် UI control ဖြစ်တယ်။ ဒီ lesson ရဲ့ default search target က expense `title` ဖြစ်သည်။ Category ကို သီးခြား `CategorySelect` ကတာဝန်ယူနေသောကြောင့် search scope ကိုမရှုပ်စေဘဲ title search ဖြင့်စတင်မည်။

### Controlled Input

Controlled input ဆိုတာ input ရဲ့ displayed `value` ကို React State ကထိန်းပြီး `onChange` Event က State ကို update လုပ်တဲ့ input ဖြစ်တယ်။

```text
User types
    ↓
onChange receives the latest value
    ↓
searchText State updates
    ↓
React renders again
    ↓
input value and filtered result reflect searchText
```

DOM input ထဲရှိ value နဲ့ React State နှစ်နေရာကွဲမနေဘဲ React State က source of truth ဖြစ်တယ်။

### Why searchText Is State

`searchText` ကို State အဖြစ်ထားရသည့်အကြောင်းများက—

- User action ကြောင့် အချိန်ကြာလာတာနဲ့အမျှ ပြောင်းလဲတယ်။
- Render တစ်ကြိမ်မှနောက် render တစ်ကြိမ်ထိ မှတ်ထားရတယ်။
- Input `value` နဲ့ filtered UI နှစ်ခုလုံးကို သက်ရောက်စေတယ်။
- တခြားရှိပြီးသား State/Props ကနေပြန်တွက်မရဘူး။

Local variable တစ်ခုသာထားလျှင် render များကြား value မမှတ်နိုင်သလို update ဖြစ်ကြောင်း React မသိနိုင်ဘူး။

### Why filteredExpenses Is a Derived Value

`filteredExpenses` က—

- source collection `expenses`
- selected category `filteredCategory`
- query `searchText`

တို့ရှိလျှင် အချိန်တိုင်းပြန်တွက်နိုင်တယ်။ ဒါကြောင့် `useState` နဲ့ duplicate copy သိမ်းဖို့မလိုဘူး။

```text
expenses ────────────┐
filteredCategory ────┼──> filtering calculation ──> filteredExpenses
searchText ──────────┘
```

`filteredExpenses` ကို State ထပ်ထားလျှင် source သုံးခုအနက် တစ်ခုခုပြောင်းတိုင်း sync လုပ်ရပြီး stale data bug ဖြစ်နိုင်တယ်။ Render အတွင်း calculate လုပ်တာက Single Source of Truth ကိုထိန်းပေးတယ်။

### State / Derived Value Classification

| Value | Classification | Reason |
| --- | --- | --- |
| `expenses` | State | Add/Edit/Delete နဲ့ပြောင်းပြီး render များကြားမှတ်ရသည် |
| `filteredCategory` | State | User ရွေးချယ်မှုဖြစ်ပြီး တခြား value မှ derive မရ |
| `searchText` | State | User ရိုက်ထည့်မှုကိုမှတ်ထားရပြီး UI ကိုသက်ရောက်သည် |
| `editingExpense` | State | Current edit mode/target ကိုမှတ်ထားရသည် |
| `filteredExpenses` | Derived Value | State သုံးခုမှပြန်တွက်နိုင်သည် |
| `total` | Derived Value | Display လုပ်နေသော filtered expenses မှ `reduce` ဖြင့်တွက်နိုင်သည် |
| normalized query | Derived Value | `searchText` မှပြန်တွက်နိုင်သည် |

### .filter()

`.filter()` က array item တစ်ခုချင်းစီအတွက် predicate ကိုစစ်ပြီး `true` ပြန်ပေးသော items များသာပါဝင်သည့် array အသစ်ကိုပြန်ပေးတယ်။ မူလ `expenses` array ကိုမပြောင်းဘူး။

```ts
const visibleItems = items.filter((item) => {
  return conditionForThisItem;
});
```

Predicate ရဲ့မေးခွန်းက “ဒီ expense ကိုပြသင့်သလား” ဖြစ်တယ်။

### .includes()

`string.includes(query)` က query substring ပါလျှင် `true` ပြန်ပေးတယ်။ Exact equality မလိုတာကြောင့် partial text search အတွက်သင့်တော်တယ်။

ဥပမာ `"Monthly Rent"` ထဲမှာ `"rent"` ပါသလားစစ်ချင်ရင် casing တူအောင် normalize အရင်လုပ်ရမယ်။

### Case-Insensitive Searching

String comparisons က case-sensitive ဖြစ်သောကြောင့် query နဲ့ expense title နှစ်ခုလုံးကို same casing ပြောင်းပြီးမှ `.includes()` သုံးမယ်။

```ts
const normalizedSearchText = searchText.trim().toLowerCase();
const normalizedTitle = expense.title.toLowerCase();
```

`toLowerCase()` ကို State ထဲသိမ်းမည့် original user input ပေါ်တိုက်ရိုက်မသုံးဘဲ comparison အတွက် Derived Value အဖြစ်သုံးတာက input မှာ user ရိုက်ထားတဲ့ casing ကိုမပျောက်စေဘူး။

### .trim() and Empty Search

`.trim()` က query ရဲ့အစနဲ့အဆုံး whitespace ကိုဖယ်ပေးတယ်။ Whitespace-only query ကို empty search လို့သဘောထားနိုင်စေတယ်။

JavaScript မှာ string တိုင်းက empty string ကို include လုပ်သောကြောင့် `normalizedTitle.includes("")` က `true` ဖြစ်တယ်။ ဒါကြောင့် empty search ကို သီးခြား special-case မလုပ်ဘဲ items အားလုံး match စေနိုင်တယ်။ သို့သော် ဒီ behavior ကိုနားလည်ပြီး ရည်ရွယ်ချက်ရှိရှိအသုံးပြုရမယ်။

### Combining Category and Search Conditions

Expense တစ်ခုကိုပြဖို့ category နဲ့ search နှစ်ခုစလုံးကိုက်ရမယ်။

```text
matchesCategory AND matchesSearch
              ↓
       show the expense
```

Category condition မှာ `"All"` ကို universal match အဖြစ်ယူမယ်။ Search condition မှာ normalized title က normalized query ကို include လုပ်မလုပ်စစ်မယ်။

Named Booleans သုံးသော structure:

```ts
const matchesCategory = /* category condition */;
const matchesSearch = /* normalized title/query condition */;

return matchesCategory && matchesSearch;
```

ဒီ lesson မှာ predicate ကို student က current types နဲ့ variable names အပေါ်မူတည်ပြီး ဖြည့်ရေးရမယ်။ Finished implementation ကို documentation က ကြိုထည့်မပေးထားဘူး။

### Readable Filtering Logic

Compact expression တစ်ကြောင်းက မှန်နိုင်ပေမယ့် logic တိုးလာချိန်မှာဖတ်ခက်တတ်တယ်။ အောက်ပါအဆင့်ခွဲနည်းကိုသုံးမယ်။

1. Query ကို filter အပြင်မှာတစ်ကြိမ် normalize လုပ်ရန်
2. Expense တစ်ခုစီအတွက် `matchesCategory` သတ်မှတ်ရန်
3. Expense တစ်ခုစီအတွက် `matchesSearch` သတ်မှတ်ရန်
4. Final inclusion rule ကို `&&` ဖြင့်ဖော်ပြရန်
5. Result တစ်ခုတည်းကို count, list နဲ့ total အတွက်ပြန်သုံးရန်

Performance optimization အတွက် `useMemo` ကို Day 5 မှာမထည့်ရသေးဘူး။ ပထမဆုံး correctness နဲ့ readable derivation ကိုဦးစားပေးမယ်။

### Component Responsibility and Search Component Design

Recommended ownership:

- `App`: `expenses`, `filteredCategory`, `searchText` ကိုသိပြီး combined `filteredExpenses` ကိုတွက်ရန်
- Search Component: input label/markup ကိုပြပြီး `value` နဲ့ `onChange` Props ကိုအသုံးပြုရန်
- `ExpenseList`: ပေးထားသော visible expenses ကိုပဲ render လုပ်ရန်
- `ExpenseItem`: expense တစ်ခုကိုပြပြီး Edit/Delete Events ပို့ရန်

Possible controlled Component contract:

```ts
type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};
```

Search Component ထဲမှာ duplicate local `searchText` State မထားရ။ Combined filtering ကိုသိရန်လိုသော common parent က State ကိုပိုင်ရမယ်။ Component အသစ်ခွဲမခွဲကို complexity နဲ့ reuse အပေါ်ဆုံးဖြတ်နိုင်ပေမယ့် State ownership rule ကမပြောင်းဘူး။

### Avoiding Unnecessary State and Effects

အောက်ပါတို့ကို မလုပ်ရ—

- `filteredExpenses` ကို `useState` ထဲသိမ်းခြင်း
- `total` ကို `useState` ထဲသိမ်းခြင်း
- Search/category ပြောင်းတိုင်း Effect နဲ့ filtered State sync လုပ်ခြင်း
- Parent နဲ့ Search Component နှစ်နေရာစလုံးမှာ query State ထပ်ထားခြင်း

Derived calculation အတွက် `useEffect` မလိုဘူး။ Render အတွင်း pure calculation လုပ်ရမယ်။

## Mental Model

Day 5 ရဲ့အဓိကမေးခွန်းနှစ်ခုက—

1. **ဘာကိုမှတ်ထားရမလဲ?** User ရိုက်ထားသော `searchText` ကို State အဖြစ်မှတ်ထားရမယ်။
2. **ဘာကိုပြန်တွက်လို့ရလဲ?** Visible list နဲ့ total ကို current State မှ Derived Values အဖြစ်တွက်လို့ရတယ်။

Data flow:

```text
SearchInput Event ──> searchText State
CategorySelect Event ──> filteredCategory State

expenses + searchText + filteredCategory
                  ↓
      combined filter predicate
                  ↓
          filteredExpenses
            ↓           ↓
      ExpenseList      total
```

Source inputs အနည်းဆုံးထားပြီး output တွေကို derive လုပ်တာက synchronization burden ကိုလျှော့တယ်။

## Implementation Tasks

Application code ကို student က lesson session အတွင်းရေးရန် အောက်ပါအစဉ်ကိုသုံးမည်။ ဒီ documentation task မှာ မည်သည့် step ကိုမျှ `src/` ထဲမထည့်ထားသေးပါ။

1. Current `App.tsx` ထဲက `expenses`, `filteredCategory`, `filteredExpenses` နဲ့ `total` flow ကိုရှင်းပြရန်။
2. Values များကို State သို့မဟုတ် Derived Value အဖြစ်ခွဲခြားရေးရန်။
3. Search query owner ကိုရွေးပြီး `searchText` State ကို student ကိုယ်တိုင်ထည့်ရန်။
4. Accessible label ပါသည့် controlled search input တည်ဆောက်ရန်။
5. Query ကို `trim().toLowerCase()` ဖြင့် comparison အတွက် normalize လုပ်ရန်။
6. Current category predicate ကို “All or exact category match” Boolean အဖြစ်ပြောင်းရန်။
7. Expense title search predicate ကို `includes` ဖြင့်ရေးရန်။
8. Conditions နှစ်ခုကို `&&` ဖြင့်ပေါင်း၍ combined filtered result ထုတ်ရန်။
9. Count, `ExpenseList` နဲ့ total တို့က result တစ်ခုတည်းကိုသုံးကြောင်းစစ်ရန်။
10. Logic ရှုပ်ပါက named Booleans/clear formatting ဖြင့် refactor လုပ်ရန်။
11. Manual test matrix ဖြင့် behavior စစ်ရန်။
12. Student က mental model ကိုကိုယ်ပိုင်စကားဖြင့်ရှင်းပြပြီး quiz ဖြေရန်။
13. `npm run build` နဲ့ `npm run lint` run ရန်။
14. Lesson notes နဲ့ `PROGRESS.md` ကို evidence အတိုင်း update လုပ်ရန်။
15. Completion criteria ပြည့်မှ Git checkpoint လုပ်ရန်။

## Guided Exercises

### Exercise 1 — Classify the Values

အောက်ပါ values တစ်ခုချင်းကို State, Props, Derived Value သို့မဟုတ် constant/type source အဖြစ်ခွဲပြီး “ဘာကြောင့်” ကိုတစ်ကြောင်းစီရေးရန်။

- `expenses`
- `editingExpense`
- `filteredCategory`
- `searchText`
- `normalizedSearchText`
- `filteredExpenses`
- `total`
- `EXPENSE_CATEGORIES`

### Exercise 2 — Add Search State

Hint သာသုံးပြီး `searchText` State ကို သင့်လျော်သော owner ထဲထည့်ရန်။

စစ်ဆေးရန်—

- Initial value က ဘာဖြစ်သင့်သလဲ။
- TypeScript က type ကို infer လုပ်နိုင်သလား။
- Search input နဲ့ filtering calculation နှစ်ခုလုံးက State ကိုလိုသလား။

### Exercise 3 — Controlled Search Input

`value` နဲ့ `onChange` ကိုချိတ်ပြီး controlled input တည်ဆောက်ရန်။

စစ်ဆေးရန်—

- Input မှာရိုက်ထားတာနဲ့ `searchText` အမြဲတူသလား။
- Search Component ခွဲထားလျှင် Props contract ကဘာလဲ။
- Input အတွက် visible label ရှိသလား။

### Exercise 4 — Combine Conditions

Expense တစ်ခုချင်းအတွက်—

1. `matchesCategory`
2. `matchesSearch`
3. final `matchesCategory && matchesSearch`

ကို student ကိုယ်တိုင်ရေးရန်။ One-line expression နဲ့မစတင်ဘဲ named Booleans ဖြင့်ရေးရန်။

### Exercise 5 — Test the Search Matrix

အနည်းဆုံး category နှစ်မျိုးနဲ့ casing မတူသော titles အများအပြားထည့်ပြီး အောက်ပါတို့စစ်ရန်။

| Category | Search | Expected behavior |
| --- | --- | --- |
| All | empty | Expenses အားလုံး |
| Specific | empty | အဲဒီ category ထဲက expenses သာ |
| All | matching text | Category မရွေးဘဲ title match များ |
| Specific | matching text | Category နှင့် title နှစ်ခုစလုံး match များ |
| Specific | text only in another category | Empty result |
| All | uppercase/lowercase variation | Case မကြည့်ဘဲတူညီသော result |
| All | spaces around query | Trim policy အတိုင်း match |
| All | no match | Empty state နဲ့ total zero |

### Exercise 6 — Explain Derived State

`filteredExpenses` ကို `useState` ထဲသိမ်းပြီး Effect နဲ့ update လုပ်မည့် alternative ကိုရေးဆွဲပြီး ဘယ် dependencies တွေ sync လုပ်ရမလဲ၊ ဘယ် stale states ဖြစ်နိုင်သလဲရှင်းပြရန်။ အဲဒီ alternative ကို production code ထဲမထည့်ရန်။

### Exercise 7 — Refactor for Readability

Working filter ရပြီးနောက်—

- repeated normalization ရှိမရှိ
- nested ternary ရှိမရှိ
- unclear variable names ရှိမရှိ
- list/count/total calculations မတူသော sources သုံးထားမထား

ကိုစစ်ပြီး behavior မပြောင်းဘဲ refactor လုပ်ရန်။

## Mini Challenges

1. **Whitespace challenge:** `"   "` query က empty search ကဲ့သို့အလုပ်လုပ်ကြောင်းရှင်းပြပြီးစမ်းရန်။
2. **Casing challenge:** Title `"Lunch With Team"` ကို `"lunch"`, `"LUNCH"`, `"LuNcH"` သုံးမျိုးဖြင့်စမ်းရန်။
3. **Combined challenge:** Same title တူသော်လည်း categories မတူသော expenses နှစ်ခုကို category + search ဖြင့်မှန်ကန်စွာခွဲနိုင်ရန်။
4. **Responsibility challenge:** Filtering logic ကို `ExpenseList` ထဲရွှေ့လျှင် ဘယ် Props ပိုလိုလာပြီး total နဲ့ logic duplicate ဖြစ်နိုင်သလဲရှင်းပြရန်။
5. **No extra State challenge:** `searchText` ထည့်ပြီးနောက် `filteredExpenses` သို့မဟုတ် normalized query အတွက် `useState` အသစ်မသုံးဘဲပြီးအောင်လုပ်ရန်။

## Quiz / Review Questions

Student answers ကို Day 5 review တွင်ဆွေးနွေးပြီး concept understanding ကိုအတည်ပြုခဲ့သည်။

1. `searchText` က ဘာကြောင့် State ဖြစ်သလဲ။
2. `filteredExpenses` က ဘာကြောင့် Derived Value ဖြစ်သလဲ။
3. Controlled input တစ်ခုမှာ `value` နဲ့ `onChange` တာဝန်ဘာလဲ။
4. `.filter()` callback က `true` ပြန်ပေးရင်ဘာဖြစ်သလဲ။
5. `.includes()` က exact match လား substring match လား။
6. Case-insensitive search အတွက် strings နှစ်ဘက်လုံးကို ဘာကြောင့် normalize လုပ်ရသလဲ။
7. Query ကို `.trim()` လုပ်ခြင်းက ဘယ် edge case ကိုကူညီသလဲ။
8. Empty string ကို `includes` နဲ့စစ်လျှင် ဘာဖြစ်သလဲ။
9. Category condition နဲ့ search condition ကို `&&` သုံးရသည့်အကြောင်းကဘာလဲ။
10. `"All"` category က predicate ထဲမှာ ဘယ်လိုအဓိပ္ပာယ်ရှိသလဲ။
11. Filter result ကို State ထဲသိမ်းထားလျှင် ဘယ်လို sync bugs ဖြစ်နိုင်သလဲ။
12. Search Component က local State ပိုင်သင့်သလား၊ parent State ကို Props နဲ့ control သင့်သလား။ ဒီ app context နဲ့ရှင်းပြပါ။
13. Count, list နဲ့ total သုံးခုဟာ ဘာကြောင့် filtered result တစ်ခုတည်းကိုသုံးသင့်သလဲ။
14. Combined predicate ကို readable ဖြစ်အောင် ဘယ်လိုခွဲရေးမလဲ။

**Student answers:**

- `searchText` သည် user input ကို render များကြားမှတ်ထားပြီး rendered UI ကိုသက်ရောက်စေသောကြောင့် State ဖြစ်သည်။ `filteredExpenses` သည် `expenses`, `filteredCategory`, `searchText` တို့မှအမြဲပြန်တွက်နိုင်သောကြောင့် Derived Value ဖြစ်သည်။
- Controlled input flow သည် user input → `onChange` → `e.target.value` → `setSearchText(...)` → re-render → updated `value` Props → filtering recalculation ဖြစ်သည်။
- `trim()` က query အစ/အဆုံး whitespace ဖယ်သည်၊ `toLowerCase()` က case-insensitive comparison အတွက် normalize လုပ်သည်၊ `includes()` က normalized title ထဲမှာ normalized query ပါမပါစစ်သည်။
- `matchesCategory` က `"All"` သို့ exact category match ကိုစစ်ပြီး `matchesSearch` က title search ကိုစစ်သည်။ `matchesCategory && matchesSearch` ကြောင့် active conditions နှစ်ခုစလုံးကိုက်မှ expense ကိုပြသည်။
- `filteredExpenses` ကို State + `useEffect` ဖြင့် sync လုပ်လျှင် duplicate State ဖြစ်ပြီး dependency တစ်ခုကျန်ခဲ့ပါက stale/wrong result ဖြစ်နိုင်သည်။
- `App` က query နဲ့ category နှစ်ခုစလုံးကိုသိရန်လိုသောကြောင့် `searchText` ကိုပိုင်သည်။ `SearchInput` က `value` နဲ့ `onChange` လက်ခံသော controlled UI Component ဖြစ်ပြီး `ExpenseList` က already-filtered expenses ကို render လုပ်ရန်သာတာဝန်ယူသည်။
- Count, list နဲ့ total တို့သည် current visible result တစ်ခုတည်းကိုသုံးသဖြင့် UI အစိတ်အပိုင်းများအကြား result မကွဲနိုင်ပါ။

## Common Mistakes

- `filteredExpenses` ကို separate State အဖြစ်သိမ်းခြင်း
- Search/category ပြောင်းတိုင်း `useEffect` နဲ့ filtered State sync လုပ်ခြင်း
- Input ကို `value` သာပေးပြီး `onChange` မချိတ်ခြင်း
- `onChange` က Event object ကို State ထဲမှားသိမ်းခြင်း
- Query ကို lowercase လုပ်ပြီး title ကိုမလုပ်ခြင်း သို့မဟုတ် ပြောင်းပြန်
- User ရိုက်ထားသော original query State ကို normalize လုပ်ထားသော value ဖြင့်အစားထိုး၍ UX ကိုမလိုအပ်ဘဲပြောင်းခြင်း
- Whitespace-only query policy ကိုမစဉ်းစားခြင်း
- `==` သုံးပြီး strict comparison မလုပ်ခြင်း
- Category/search conditions ကို `||` ဖြင့်ပေါင်း၍ condition တစ်ခုသာကိုက်လျှင်ပြသခြင်း
- `"All"` case ကိုမထည့်သဖြင့် expenses အားလုံးဖျောက်မိခြင်း
- Filter logic ကို list, count နဲ့ total အတွက်သုံးနေရာခွဲရေးခြင်း
- Render အတွင်း original `expenses` array ကို mutate လုပ်ခြင်း
- Correctness ပြည့်မီမီ `useMemo` သို့ premature optimization ထည့်ခြင်း
- Search UI နဲ့ filtering policy နှစ်ခုလုံးကို leaf Component ထဲထည့်ပြီး responsibility ရောခြင်း

## Completion Criteria

Day 5 ကို Completed လို့ update မလုပ်မီ အားလုံးစစ်ရန်။

### Understanding

- [x] `searchText` State နဲ့ `filteredExpenses` Derived Value ဖြစ်ရသည့်အကြောင်းကို ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [x] Controlled input data flow ကိုရှင်းပြနိုင်သည်။
- [x] `filter`, `includes`, `toLowerCase`, `trim` နဲ့ combined Boolean logic တို့၏တာဝန်ကိုရှင်းပြနိုင်သည်။
- [x] Unnecessary State/Effect design ရဲ့ sync risk ကိုရှင်းပြနိုင်သည်။
- [x] Component Responsibility နဲ့ State owner ကိုကာကွယ်ပြောဆိုနိုင်သည်။

### Functionality

- [x] Search input က controlled ဖြစ်သည်။
- [x] Empty search မှာ category filter အတိုင်း results ပြသည်။
- [x] Search က case-insensitive ဖြစ်သည်။
- [x] Leading/trailing whitespace policy မှန်ကန်သည်။
- [x] Category + search conditions နှစ်ခုစလုံးပေါင်းအလုပ်လုပ်သည်။
- [x] No-match case မှာ existing empty UI နဲ့ total အဓိပ္ပာယ်မှန်သည်။
- [x] Add/Edit/Delete နဲ့ `localStorage` behavior မပျက်ပါ။
- [x] Count, list နဲ့ total က same filtered result ကိုသုံးသည်။

### Practice and Quality

- [x] Guided exercises နဲ့ အနည်းဆုံး mini challenge တစ်ခုပြီးသည်။
- [x] Quiz/review answers ကိုဆွေးနွေးပြီးဖြစ်သည်။
- [x] Filter predicate ကို named Boolean conditions ဖြင့်ဖတ်လွယ်အောင်ထားသည်။
- [x] Unnecessary dependency မထည့်ထားပါ။
- [x] `npm run build` အောင်မြင်သည်။
- [x] `npm run lint` အောင်မြင်သည်။
- [x] `What I Actually Learned` နဲ့ `Problems / Mistakes I Made` ကို evidence အတိုင်းဖြည့်သည်။
- [x] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

- User input ဖြစ်သော `searchText` ကို State အဖြစ်ထားပြီး ပြန်တွက်နိုင်သော `filteredExpenses` ကို Derived Value အဖြစ်ထားရသည်။
- Controlled input မှာ `value` ကို State မှပေးပြီး `onChange` မှတစ်ဆင့် State ကို update လုပ်သော data flow ကိုနားလည်ခဲ့သည်။
- `trim()` နဲ့ `toLowerCase()` ဖြင့် query normalize လုပ်ပြီး `includes()` ဖြင့် case-insensitive substring search တည်ဆောက်ခဲ့သည်။
- Category နဲ့ search ကို `matchesCategory`, `matchesSearch` named Booleans နှစ်ခုခွဲပြီး `&&` ဖြင့် readable combined predicate တည်ဆောက်ခဲ့သည်။
- Filtering policy ကို common parent ဖြစ်သော `App` မှာထားပြီး `SearchInput` ကို controlled UI Component၊ `ExpenseList` ကို rendering Component အဖြစ် responsibility ခွဲခဲ့သည်။
- Derived result ကို duplicate State/Effect မထားဘဲ count, list နဲ့ total အတွက်တစ်နေရာတည်းမှအသုံးပြုခြင်းက stale result risk ကိုရှောင်ပေးသည်။
- State/Derived Value classification, search State, controlled input, combined filtering, manual test matrix နဲ့ readability refactor exercises ပြီးစီးခဲ့သည်။ Whitespace နှင့် combined filtering mini challenges ကိုလည်းစမ်းသပ်ခဲ့သည်။

## Problems / Mistakes I Made

Problem: Manual test review တွင် `Category = Shopping`, `Search = "office"` အတွက် result ကို အစမှာ `[]` ဟုမှားဖြေခဲ့သည်။

Why it happened: Category condition နဲ့ search condition နှစ်ခုစလုံးကို actual expense data ပေါ်မှာအတူမစစ်မိခဲ့သည်။

How I fixed it: `Office Chair` သည် Shopping category ဖြစ်ပြီး title တွင် `office` ပါသဖြင့် conditions နှစ်ခုစလုံး match ဖြစ်ကြောင်းပြန်စစ်ကာ correct result သည် `Office Chair` ဖြစ်ကြောင်းပြင်ခဲ့သည်။

Rule I want to remember: Combined filter result ခန့်မှန်းရာတွင် item တစ်ခုစီအတွက် `matchesCategory && matchesSearch` ကိုအတိအကျစစ်ရန်။

## Important Code Patterns

Day 5 final implementation တွင်အသုံးပြုထားသော pattern:

```tsx
const [searchText, setSearchText] = useState("");

const normalizedSearchText = searchText.trim().toLowerCase();

const filteredExpenses = expenses.filter((expense) => {
  const matchesCategory =
    filteredCategory === "All" || expense.category === filteredCategory;
  const matchesSearch = expense.title
    .toLowerCase()
    .includes(normalizedSearchText);

  return matchesCategory && matchesSearch;
});
```

Controlled Component contract pattern:

```ts
type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};
```

မှတ်ထားရမည့် rule:

```text
Store the minimum source State.
Derive everything that can be calculated.
```

## Git Checkpoint

Day 5 source နဲ့ learning documentation ကို အောက်ပါ completion checkpoint ဖြင့်မှတ်တမ်းတင်သည်။

```bash
npm run build
npm run lint
git add src docs/react-60-days
git commit -m "learn: complete React Day 05"
git tag -a day-05-complete -m "React Day 05 complete"
```

Annotated tag: `day-05-complete`. Remote သို့ push မလုပ်ရသေးပါ။

## Next Day Context

Day 6 မှာ `useRef`, DOM refs နဲ့ State vs Ref ကိုလေ့လာမယ်။ Day 5 မှာ State လိုအပ်ရခြင်းကိုခိုင်မာစွာနားလည်ထားမှ “ပြောင်းလဲပေမယ့် render မလိုသော value” ကို Ref ထဲထားသင့်သည့်အခြေအနေကိုမှန်ကန်စွာခွဲနိုင်မယ်။
