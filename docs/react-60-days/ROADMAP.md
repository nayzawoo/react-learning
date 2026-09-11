# React + TypeScript 60-Day Roadmap

ဒီဖိုင်က 60-day curriculum အတွက် canonical master roadmap ဖြစ်တယ်။ Daily detail နဲ့ student-specific records ကို သက်ဆိုင်ရာ `day-XX/lesson.md` နဲ့ `PROGRESS.md` မှာပဲထားမယ်။

Day 7 မှစ၍ lesson အားလုံးသည် `PRODUCTION-FIRST.md` ကိုလိုက်နာရမည်။ Topic တစ်ခုမှာ library ပါလာလျှင် fundamentals → native/minimal solution → limitations → justified library → integration/tradeoffs/alternatives/maintenance အစဉ်ဖြင့်သင်မည်။ Package အမည်များသည် lesson-day official docs, maintenance, compatibility, security, accessibility, bundle/runtime cost, and project need ကိုစစ်ပြီးမှရွေးရမည့် candidates ဖြစ်ပြီး permanent dogma မဟုတ်ပါ။

## Phase 1 — React Core & Mental Model

### Day 1 — JSX, Components, Props, Events, useState

Project: Expense Manager begins.

### Day 2 — Lists, `.map()`, `key`, TypeScript Props, Component Splitting

Component concepts: `ExpenseList`, `ExpenseItem`, `ExpenseForm`.

### Day 3 — useEffect, localStorage, CRUD, Edit/Cancel, Filtering, Total, Derived Values

### Day 4 — Single Source of Truth, Reusable Components, TypeScript Literal Unions, Type Narrowing, Component Responsibility

Concepts:

- `EXPENSE_CATEGORIES`
- `as const`
- `typeof ARRAY[number]`
- reusable `CategorySelect`
- optional props
- discriminated union props
- Type Narrowing
- State vs Props vs Derived Value
- Component Responsibility
- Lifting State Up

### Day 5 — Search + Combined Filtering + Derived State Design

### Day 6 — useRef, DOM refs, State vs Ref

### Day 7 — useReducer + Typed State Transitions

Topics: reducer purity, State snapshots, batching, lazy initialization, TypeScript discriminated actions, exhaustive checking, immutable transitions, and `useState` decision boundary.

### Day 8 — Context API + useContext

Topics: dependency injection boundary, Provider placement, typed guard Hooks, consumer re-renders, Context vs props/composition, and why Context is not automatically a global State manager.

### Day 9 — Custom Hooks

Topics: cohesive stateful logic, Hook API design, Rules of Hooks, reactive/non-reactive inputs, cleanup responsibility, and extraction tradeoffs.

### Day 10 — Checkpoint #1 + Expense App Refactor

Add a first dependency/tooling audit: understand the repository's `package.json`, scripts, `dependencies` vs `devDependencies`, `package-lock.json`, direct/transitive packages, and why no new library is needed for Phase 1.

## Phase 2 — Real Application Foundations

### Day 11 — Async JavaScript for React

Topics: `Promise`, `async/await`, loading/error/success mental model.

### Day 12 — Native Fetch API + React

Teach `fetch`, `Request`/`Response`, HTTP status handling, JSON/runtime validation boundary, timeouts/cancellation ownership, and why `fetch` does not provide caching or automatic error semantics.

### Day 13 — Effects and Network Correctness

Topics: cleanup, `AbortController`, stale requests, race conditions.

### Day 14 — React Router Fundamentals + First Production Dependency Evaluation

Before installation, evaluate the current React Router modes/APIs, React compatibility, peer dependencies, TypeScript support, package/lockfile changes, and migration notes. Teach `npm install`, semver ranges (`^`, `~`, exact), direct vs transitive dependencies, and rollback/removal alongside real routing integration.

### Day 15 — Advanced Routing

Topics: nested routes, route params, search params, 404 routes, navigation pending/error behavior where supported, and URL State ownership for shareable search/filter/pagination.

### Day 16 — Forms Deep Dive

Topics: controlled inputs, uncontrolled inputs, reusable form components.

### Day 17 — React Hook Form

Start from controlled/uncontrolled form fundamentals, then evaluate React Hook Form's current API, TypeScript model, render/subscription behavior, accessibility responsibilities, peer compatibility, bundle impact, testing approach, alternatives, and removal cost before adoption.

### Day 18 — Zod + TypeScript Validation

Teach runtime vs compile-time validation, input/output types, parsing vs safe parsing, transformations, React Hook Form resolver integration where justified, bundle boundaries, alternatives, and schema reuse across client/server without assuming client validation is security.

### Day 19 — API Architecture

Topics: services, environment variables, DTO/domain/runtime-validation boundaries, normalized errors, and native `fetch` vs Axios/current alternatives. Add a client only when interceptors, adapter behavior, compatibility, or team constraints justify its dependency and migration cost.

### Day 20 — Mini Project #2 Start — Task Manager

## Phase 3 — Production Data & Application Architecture

### Day 21 — State Categories + Client State vs Server State

Explicitly classify Local UI, Shared Client, Server, URL, Form, Persisted, and Derived State. Use ownership, lifetime, freshness, shareability, and source-of-truth questions before choosing a tool.

### Day 22 — TanStack Query — useQuery

Evaluate the lesson-day stable TanStack Query API and dependency first. Teach query ownership, keys, cache freshness, retries, cancellation signals, Devtools when useful, TypeScript inference, SSR/framework implications, and what a server-State library does not replace.

### Day 23 — TanStack Query Mutations

Topics: `useMutation`, invalidation, create/update/delete.

### Day 24 — Query UX

Topics: pagination, searching, filtering, URL State coordination, stale/fresh data, background refetch, placeholder data, request waterfalls, and cache/perceived-performance tradeoffs.

### Day 25 — Authentication Fundamentals

Topics: sessions, cookies, tokens, JWT concepts, frontend responsibility.

### Day 26 — Protected Routes

### Day 27 — Laravel API Integration Pattern

Topics: React + Laravel API, 401, 403, 422, validation errors, API conventions.

### Day 28 — Error Boundaries + Failure UX

Clarify render errors vs event/network errors, recovery/reset strategies, framework route boundaries, error reporting/observability boundaries, and why Error Boundaries do not catch every failure.

### Day 29 — Lazy Loading + Suspense + Vite Build Output

Topics: dynamic imports, route/component splitting, Suspense boundaries, chunk loading failures, tree shaking, source maps, bundle inspection, preload tradeoffs, and measured—not decorative—lazy loading.

### Day 30 — Checkpoint #2 — Task Manager v1

Include a dependency-health checkpoint: manifest/lockfile review, `npm ci`, `npm outdated`, security audit triage, transitive dependencies, release/migration notes, and targeted upgrades with rollback—not blind bulk updates.

## Phase 4 — State Management, Testing & Quality

### Day 31 — State Architecture

Topics: Local UI, Shared Client, Server, URL, Form, Persisted, and Derived State; colocation, lifting, Context, `useReducer`, ownership/lifetime, server-State recap, and decision boundaries.

### Day 32 — Zustand

Topics: why Zustand exists, `create()`, State + actions, selectors/subscriptions, TypeScript, `persist`, devtools, `useShallow`/selector equality where relevant, store organization, slices tradeoffs, global vs scoped stores, vanilla stores, testing, hydration, SSR/Next.js caveats, migrations, and when not to use Zustand.

### Day 33 — Redux Mental Model + Redux Toolkit

Topics: why Redux still exists, one-way data flow, modern Redux Toolkit as the recommended Redux approach, `configureStore`, `createSlice`, Immer semantics, React Redux typed hooks, selectors, DevTools, dependency footprint, and Redux Toolkit vs Zustand.

### Day 34 — Advanced Redux Toolkit

Topics: selectors, normalized State/entity adapters when justified, middleware concepts, serializability, listener/thunk boundaries, larger-team architecture, async conventions, and maintainable slice organization.

### Day 35 — RTK Query vs TanStack Query

Topics: server State, cache ownership, queries/mutations, invalidation, loading/error/refetch, generated hooks, Redux coupling, SSR/testing implications, migration cost, and evidence-based tradeoffs.

### Day 36 — State Management Decision Patterns

Compare: `useState`, lifted State, `useReducer`, Context, Zustand, Redux Toolkit, TanStack Query, RTK Query, router search params, form tools, and persistence boundaries. Choose by State category and constraints rather than declaring one winner.

### Day 37 — Testing Fundamentals + Vitest

Evaluate Vitest/Vite compatibility and install it as a `devDependency`. Teach test scripts, environment choices, deterministic unit tests, coverage limitations, watch vs CI runs, and lockfile impact.

### Day 38 — React Testing Library

Topics: user-centered queries, accessible DOM, async rendering, test isolation, current React compatibility, and why implementation-detail tests are brittle.

### Day 39 — Forms & Interaction Testing

Topics: `user-event`, validation tests, Add/Edit/Delete flows.

### Day 40 — Integration Testing + MSW

Start from the network boundary and hand-written mocks, then evaluate current MSW APIs. Teach reusable HTTP handlers across tests/development, success/error/delay cases, Node vs Service Worker setup, handler isolation/reset, contract drift limitations, TypeScript, and when a simpler stub is enough.

## Phase 5 — Advanced / Production React

### Day 41 — Accessibility

Topics: semantic HTML, labels, keyboard interaction, focus, ARIA basics, automated/manual checks, and native elements before ARIA or component libraries.

### Day 42 — Responsive UI Architecture + CSS Strategy

Teach mobile-first layout, container/content constraints, responsive verification, and CSS architecture. Evaluate existing CSS vs CSS Modules vs Tailwind CSS only if utility styling solves a real project/team problem; include build, class readability, design-token, migration, and removal tradeoffs.

### Day 43 — Reusable UI, Headless Components & Data-Heavy UI

Topics: `Button`, `Input`, `Modal`, `Card`, `Table`, component APIs, composition, tokens, and accessibility. Compare native implementation with current headless/accessibility ecosystems such as shadcn/ui, Base UI, Radix, or React Aria; choose one only when complexity justifies it. Evaluate Lucide for icons and TanStack Table only for a realistic sorting/filtering/pagination/data-grid use case; preserve semantic table and keyboard behavior.

### Day 44 — Production UX States

Topics: loading, skeleton, empty states, errors, retry, disabled states, optimistic/pending feedback, toast/notification strategy, live-region accessibility, and error persistence. Evaluate a toast library only when a local accessible pattern is insufficient. Introduce date/time libraries only when parsing, time zones, localization, or arithmetic exceeds platform capabilities.

### Day 45 — Advanced TypeScript for React

Topics: generics, utility types, unions, narrowing, reusable generic components.

### Day 46 — React Performance Mental Model

Topics: rendering, re-render causes, React DevTools Profiler, browser Performance tools, bundle/network evidence, selector subscriptions, and measure-before-optimization discipline.

### Day 47 — memo, useMemo, useCallback

Focus especially on when not to use them. At lesson time, check current React Compiler adoption/support before presenting manual memoization as a default; distinguish compiler capabilities from runtime React APIs and repository configuration.

### Day 48 — Concurrent UX

Topics: `useTransition`, `useDeferredValue`.

### Day 49 — Modern React Patterns

လက်ရှိ install လုပ်ထားသော React/TypeScript/Vite versions နဲ့သက်ဆိုင်သည့် stable APIs/patterns ကိုသာဦးစားပေးမယ်။ Outdated tutorial patterns, deprecated APIs, Effect misuse, build assumptions, and migration paths ကို official guidance ဖြင့်စစ်မယ်။ Dependency inventory, bundle impact, unused packages, upgrade candidates, and maintenance risk ကိုပြန် audit လုပ်မယ်။

### Day 50 — Architecture Review + Capstone Design

Use Architecture Decision Records for framework, State, data, form, validation, UI, testing, and observability choices. Each significant dependency needs justification, alternatives, ownership, migration/removal cost, security/license check where relevant, and an upgrade plan.

## Phase 6 — Next.js + Production + Career

### Day 51 — Next.js App Router Introduction

Evaluate the current stable Next.js release, React compatibility, Node/runtime requirements, official migration guidance, package/build changes, and App Router conventions before setup. Do not transplant Pages Router tutorials as current defaults.

### Day 52 — Pages, Layouts & Navigation

### Day 53 — Server Components vs Client Components

Include serialization, module graph/bundle boundaries, server-only secrets, hydration, third-party Client Component constraints, and how provider/store libraries must be scoped in server-rendered apps.

### Day 54 — Next.js Data Fetching

Verify current framework caching/revalidation semantics at lesson time; distinguish server data access, browser fetch, TanStack Query/RTK Query hydration, and request memoization without assuming older Next.js defaults.

### Day 55 — Dynamic Routes + Search Params

### Day 56 — Forms, Mutations & Route Handlers

Compare current framework-native form/Server Action/Route Handler patterns with client form/query libraries. Cover progressive enhancement, authorization, runtime validation, CSRF/session implications, pending/error UX, revalidation, and when an API route is actually necessary.

### Day 57 — Production Next.js

Topics: metadata, SEO basics, performance, runtime selection, environment/secrets, observability, dependency/build output, deployment, and production verification.

### Day 58 — Capstone Hardening

Topics: testing, accessibility, responsive UI, performance, failure handling, production build.

### Day 59 — Professional Code Review + Interview Preparation

Topics: React/TypeScript questions, architecture/code review, refactoring challenge, unfamiliar-repository dependency inspection, State-category mapping, migration-risk analysis, and evidence-based library decisions.

### Day 60 — Final Assessment + Portfolio Release

Topics: final assessment, GitHub README, deployment, portfolio presentation, next 90-day plan.

## Project Progression

```text
Project 1
Expense Manager
Days 1–10

↓

Project 2
Task Manager / Productivity App
Days 20–40

↓

Project 3
Production Capstone
Days 50–60
```

ရည်ရွယ်ချက်က tutorial-only toy applications တည်ဆောက်ဖို့မဟုတ်ဘူး။ နောက်ပိုင်း projects တွေမှာ အောက်ပါ production-facing skills တွေကို ပေါင်းစည်းပြသနိုင်ရမယ်။

- CRUD နဲ့ TypeScript
- routing နဲ့ API integration
- Authentication နဲ့ forms
- server state, loading states နဲ့ error handling
- filtering နဲ့ pagination
- tests, responsive design နဲ့ accessibility
- performance, production architecture နဲ့ deployment
- dependency evaluation, lockfile/reproducible installs, upgrades, security, and migration reasoning
- native React/platform solutions vs justified libraries
- Zustand, Redux Toolkit, TanStack Query/RTK Query, and URL/form/persisted State decision boundaries
- accessible/headless UI and network-mocking strategies when project needs justify them

## Daily Teaching Workflow

```text
1. Review current repository, versions, State categories, and actual problem
2. Verify current official docs and stable APIs
3. Explain why the concept/tool exists and its mental model
4. Demonstrate minimal, current-project, and production examples
5. Cover caveats, do/don't, tradeoffs, legacy/migration notes, and dependency implications
6. Student writes the important guided implementation
7. Debug and verify observable behavior together
8. Ask only 2–5 meaningful reasoning questions
9. Refactor only when evidence justifies it
10. Run required validation and review manifest/lockfile changes
11. Record actual evidence and follow the Git checkpoint protocol
```

Target balance: 70–80% teaching, demonstrations, implementation, and production reasoning; 20–30% exercises and review. Course ကို copy/paste/package tutorial မဖြစ်စေဘဲ fundamentals, debugging, tradeoff reasoning, dependency literacy နဲ့ production-level thinking ကိုဦးစားပေးရမယ်။
