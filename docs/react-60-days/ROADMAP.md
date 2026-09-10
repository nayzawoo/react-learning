# React + TypeScript 60-Day Roadmap

ဒီဖိုင်က 60-day curriculum အတွက် canonical master roadmap ဖြစ်တယ်။ Daily detail နဲ့ student-specific records ကို သက်ဆိုင်ရာ `day-XX/lesson.md` နဲ့ `PROGRESS.md` မှာပဲထားမယ်။

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

### Day 7 — useReducer

### Day 8 — Context API + useContext

### Day 9 — Custom Hooks

### Day 10 — Checkpoint #1 + Expense App Refactor

## Phase 2 — Real Application Foundations

### Day 11 — Async JavaScript for React

Topics: `Promise`, `async/await`, loading/error/success mental model.

### Day 12 — Fetch API + React

### Day 13 — Effects and Network Correctness

Topics: cleanup, `AbortController`, stale requests, race conditions.

### Day 14 — React Router Fundamentals

### Day 15 — Advanced Routing

Topics: nested routes, route params, search params, 404 routes.

### Day 16 — Forms Deep Dive

Topics: controlled inputs, uncontrolled inputs, reusable form components.

### Day 17 — React Hook Form

### Day 18 — Zod + TypeScript Validation

### Day 19 — API Architecture

Topics: services, API client, environment variables, DTO/type boundaries.

### Day 20 — Mini Project #2 Start — Task Manager

## Phase 3 — Production Data & Application Architecture

### Day 21 — Client State vs Server State

### Day 22 — TanStack Query — useQuery

### Day 23 — TanStack Query Mutations

Topics: `useMutation`, invalidation, create/update/delete.

### Day 24 — Query UX

Topics: pagination, searching, filtering, stale/fresh data.

### Day 25 — Authentication Fundamentals

Topics: sessions, cookies, tokens, JWT concepts, frontend responsibility.

### Day 26 — Protected Routes

### Day 27 — Laravel API Integration Pattern

Topics: React + Laravel API, 401, 403, 422, validation errors, API conventions.

### Day 28 — Error Boundaries + Failure UX

### Day 29 — Lazy Loading + Suspense

### Day 30 — Checkpoint #2 — Task Manager v1

## Phase 4 — State Management, Testing & Quality

### Day 31 — State Architecture

### Day 32 — Redux Mental Model

### Day 33 — Redux Toolkit

Topics: `configureStore`, `createSlice`, React Redux hooks.

### Day 34 — Advanced Redux Toolkit

### Day 35 — RTK Query vs TanStack Query

### Day 36 — State Management Decision Patterns

Compare: local state, lifted state, Context, `useReducer`, Redux Toolkit, server state tools.

### Day 37 — Testing Fundamentals + Vitest

### Day 38 — React Testing Library

### Day 39 — Forms & Interaction Testing

Topics: `user-event`, validation tests, Add/Edit/Delete flows.

### Day 40 — Integration Testing

## Phase 5 — Advanced / Production React

### Day 41 — Accessibility

Topics: semantic HTML, labels, keyboard interaction, focus, ARIA basics.

### Day 42 — Responsive UI Architecture

### Day 43 — Reusable UI / Design System Architecture

Topics: `Button`, `Input`, `Modal`, `Card`, `Table`, component APIs.

### Day 44 — Production UX States

Topics: loading, skeleton, empty states, errors, retry, disabled states.

### Day 45 — Advanced TypeScript for React

Topics: generics, utility types, unions, narrowing, reusable generic components.

### Day 46 — React Performance Mental Model

Topics: rendering, re-render causes, profiling.

### Day 47 — memo, useMemo, useCallback

Focus especially on when NOT to use them.

### Day 48 — Concurrent UX

Topics: `useTransition`, `useDeferredValue`.

### Day 49 — Modern React Patterns

လက်ရှိ install လုပ်ထားသော React version နဲ့သက်ဆိုင်တဲ့ APIs နဲ့ patterns ကိုသာ ဦးစားပေးမယ်။ Outdated React APIs ကို မယူဆဘဲ package version နဲ့ current official guidance ကို အဲဒီနေ့မှာစစ်ဆေးမယ်။

### Day 50 — Architecture Review + Capstone Design

## Phase 6 — Next.js + Production + Career

### Day 51 — Next.js App Router Introduction

### Day 52 — Pages, Layouts & Navigation

### Day 53 — Server Components vs Client Components

### Day 54 — Next.js Data Fetching

### Day 55 — Dynamic Routes + Search Params

### Day 56 — Forms, Mutations & Route Handlers

### Day 57 — Production Next.js

Topics: metadata, SEO basics, performance, deployment.

### Day 58 — Capstone Hardening

Topics: testing, accessibility, responsive UI, performance, failure handling, production build.

### Day 59 — Professional Code Review + Interview Preparation

Topics: React interview questions, TypeScript questions, architecture discussion, code review, refactoring challenge.

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

## Daily Teaching Workflow

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

Course ကို copy/paste coding tutorial မဖြစ်စေဘဲ concept understanding, debugging, tradeoff reasoning နဲ့ production-level thinking ကိုဦးစားပေးရမယ်။
