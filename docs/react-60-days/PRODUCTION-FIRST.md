# Production-First React Teaching Protocol

Use this protocol for Day 7 and all future React lessons. The goal is production-capable React + TypeScript understanding—not merely completing a 60-day checklist.

## 1. Teach First, Quiz Later

Use approximately 70–80% of a lesson for explanation, demonstrations, examples, production knowledge, caveats, and implementation practice; use 20–30% for exercises and review. Do not turn lessons into long chains of basic questions or repeatedly quiz concepts already demonstrated.

For basic concepts: explain clearly, show an example, connect it to the current project, ask at most one short verification question when useful, and move forward. Emphasize why an API exists, its mental model, when to use or avoid it, production tradeoffs, real-world patterns, caveats, modern alternatives, debugging, and architecture. Questions validate understanding; they are not the lesson itself.

## 2. Use Current Sources

Before preparing or teaching a lesson involving React, TypeScript, Vite, browser APIs, testing/build tools, or related libraries:

1. Inspect the versions used by the repository.
2. When web access is available, check current official documentation and stable release information.
3. Prefer React (`react.dev`), TypeScript (`typescriptlang.org`), Vite (`vite.dev`), MDN, and each library or framework's official documentation.
4. Use recent high-quality tutorials or articles only as secondary material.
5. Never recommend an old tutorial pattern without checking whether the ecosystem has changed.

Always distinguish current stable, older/legacy, deprecated, experimental, framework-specific, and browser/platform APIs. Do not recommend experimental features as default production solutions unless clearly labeled. Do not upgrade dependencies merely because a newer version exists. Teach syntax compatible with the repository and explain important newer APIs when relevant.

## 3. Version-Aware Teaching

At lesson start, silently determine relevant versions such as React, React DOM, TypeScript, Vite, linting/testing tools, and topic-specific libraries. When current behavior differs materially from older tutorials, explain:

```text
Older/common tutorial pattern → why it existed
Current recommended pattern → why it is preferred now
Migration/compatibility note → where the old pattern remains
```

Do not assume React 18-era tutorials, older TypeScript behavior, Create React App, webpack conventions, or older Vite internals are current.

## 4. Required Lesson Structure

Teach each important topic in approximately this order.

### A. Why This Exists

Start from the real problem, why ordinary variables or State are insufficient, and which React API solves it. Do not begin with syntax alone.

### B. Mental Model

Explain lifecycle, render, and data flow when relevant. Use a compact diagram when it clarifies sequence, for example:

```text
event → state update → render → commit → effect
```

### C. Current API and TypeScript Syntax

Teach the current API with TypeScript. Explain important inference, explicit annotations, generics, nullable values, return types, overloads, and compiler behavior instead of hiding them for brevity.

### D. Progressive Examples

When an API has multiple important uses, include approximately:

1. A minimal example.
2. A current Expense Manager example.
3. A real-world production example.

Do not teach an API through only one narrow example.

### E. Production / Real-World Use Cases

Explain relevant uses in forms, dashboards, authentication, search, API calls, WebSockets, timers, debouncing, autosave, modals, focus management, data grids, pagination, optimistic UI, synchronization, analytics, subscriptions, media/browser APIs, caching, or complex transitions. Include only cases naturally relevant to the topic.

### F. Do / Don't

Every substantial lesson must contain practical `DO` and `DON'T` guidance and explain why each rule exists.

### G. Caveats and Edge Cases

Cover relevant issues such as render purity, stale closures, race conditions, cleanup, dependency problems, unnecessary Effects, object identity, mutation, Strict Mode, remounting, async behavior, nullable DOM refs, controlled versus uncontrolled State, derived State duplication, and performance costs.

### H. Pros / Cons / Tradeoffs

Compare viable approaches such as `useState` versus `useReducer`, Context versus props, controlled versus uncontrolled, Ref versus State, or client fetching versus framework data APIs. Do not present tradeoffs as universal rules.

### I. Common Mistakes

Show realistic problematic and preferred code where useful and explain why the problematic version fails:

```tsx
// ❌ problematic

// ✅ preferred
```

### J. Production Considerations

Cover relevant maintainability, scalability, testability, performance, accessibility, security, error handling, loading states, developer experience, and build implications. Not every topic needs every category.

### K. Short Exercise

After teaching, give the student a meaningful task in the current application. The student normally writes important learning code. Use hints first and provide the full solution only when requested, when the student remains stuck after hints, or when the code is incidental.

### L. Short Review

Only after teaching and implementation, ask two to five meaningful reasoning questions. Avoid repetitive or obvious binary questions unless diagnosing a misunderstanding.

## 5. React-Specific Requirements

When relevant, explain render phase, commit phase, event handlers, Effects, cleanup, State snapshots, batching, component identity, keys, reconciliation, controlled data flow, refs as escape hatches, render purity, and reactive versus non-reactive values. Explain when React should manage behavior declaratively and when imperative code is justified.

For every Hook, address:

```text
What causes it to run?
What persists between renders?
What causes a re-render?
What does not cause a re-render?
What can become stale?
When is cleanup required?
What are common misuse patterns?
```

Do not teach a Hook only through syntax.

## 6. TypeScript-Specific Requirements

Teach modern TypeScript as part of React. When relevant, include inference versus explicit annotation, generics, unions, discriminated unions, literal types, `as const`, `satisfies`, narrowing, utility types, indexed access types, `keyof`, nullable types, strictness, module behavior, modern compiler changes, and deprecated compiler options.

Use the repository's TypeScript version as the compatibility baseline. Explain differences from older tutorials. Avoid unnecessary assertions and prefer letting TypeScript prove correctness.

## 7. Tooling and Build Knowledge

When relevant, teach the repository's Vite dev server behavior, production builds, HMR, bundling, code splitting, tree shaking, environment variables, source maps, lazy loading, dynamic imports, asset handling, linting, type checking, test tooling, dependency management, and browser compatibility. React should not be taught as isolated component syntax.

## 8. Third-Party Packages & Library Strategy

Teach a significant library through this progression:

```text
Underlying React / JavaScript / browser concept
→ real production problem
→ minimal native solution where educationally useful
→ limitations of the simple solution
→ appropriate production library
→ integration
→ tradeoffs
→ alternatives
→ maintenance/upgrades
```

Do not teach packages as magic abstractions or permanent default choices. The student must first understand the fundamental problem that the abstraction addresses. Prefer native React, JavaScript, CSS, HTML, and browser/platform APIs when they are simpler and sufficient.

For every major dependency, explain:

- Why it exists and which concrete problem it solves.
- What it does not solve, when to use it, and when not to use it.
- Its current stable API and TypeScript integration.
- Common production patterns, mistakes, caveats, pros, cons, and alternatives.
- Bundle/runtime and tree-shaking implications where relevant.
- Accessibility implications where relevant.
- SSR, hydration, React Server Component, and Next.js implications where relevant.
- Testing implications and practical debugging workflow.
- Legacy/deprecated APIs and migration considerations.
- How difficult replacement or removal would be, including how much application code depends on its API.

Before recommending or installing a significant package, verify:

- Current official documentation and stable release/API.
- Compatibility with the repository's React, TypeScript, Node, Vite, or framework versions.
- Active maintenance, release history, and ecosystem maturity.
- Required and optional peer dependencies.
- Built-in TypeScript types or the quality/maintenance of external typings.
- Bundle/runtime cost, import granularity, and tree shaking.
- Security history, install scripts, transitive dependency surface, provenance, and supply-chain risk.
- License compatibility when relevant.
- Migration guides, breaking changes, and realistic alternatives.

Popularity alone is not justification. Record the decision and rejected simpler alternatives when a dependency materially shapes architecture.

## 9. Practical Dependency Management

Teach npm and package management progressively when libraries enter the project rather than isolating it as detached theory. The curriculum must cover:

- `package.json` as the declared dependency and script contract.
- `package-lock.json` as the exact resolved tree for reproducible installs; review and commit its intentional changes with the manifest.
- `dependencies`, `devDependencies`, and `peerDependencies`, including why runtime packages and build/test tools belong in different sections.
- Direct versus transitive dependencies and how to inspect why a package is installed.
- Semantic versioning and the practical meaning of `^`, `~`, and exact versions, including pre-1.0 caution.
- `npm install`, `npm uninstall`, `npm ci`, `npm outdated`, and deliberate upgrade workflows.
- Breaking changes, release notes, migration guides, compatibility checks, and rollback plans.
- Dependency auditing and security triage without blindly applying forced upgrades.
- Lockfile reproducibility across local development, CI, and deployment.

Every significant install should have an explicit reason, correct dependency category, inspected manifest/lockfile diff, and validation proportional to risk. Never edit only `package.json` while ignoring a required lockfile update. Never run a broad upgrade simply to make `npm outdated` empty.

## 10. State Categories and Decision Boundaries

Future lessons must distinguish these categories before selecting a tool:

| Category | Typical example | Likely owner/tool |
| --- | --- | --- |
| Local UI State | Modal open, selected tab | Colocated `useState` or `useReducer` |
| Shared Client State | Workflow draft, preferences | Lifted State, Context, Zustand, or Redux Toolkit according to scope/complexity |
| Server State | API tasks, cache, freshness | TanStack Query or RTK Query when justified |
| URL State | Search, filters, pagination, selected resource | Router params/search params |
| Form State | Values, touched/dirty/errors | Controlled/uncontrolled React first; React Hook Form for justified complexity |
| Persisted State | Durable preferences or drafts | Storage/database boundary plus validation, migration, and hydration strategy |
| Derived State | Filtered list, totals, permissions computed from sources | Calculate from existing sources; do not duplicate |

Decision order:

```text
Can it be derived?
→ Who owns the source of truth?
→ What lifetime and sharing scope does it need?
→ Is it local, URL-owned, form-owned, persisted, or server-owned?
→ What is the smallest tool that preserves correctness?
```

Do not place server caches, URL parameters, form internals, and all shared values into a generic global store. Choosing the correct State category matters more than memorizing a library API.

## 11. Professional Tips

Include relevant techniques such as React DevTools, browser DevTools, TypeScript editor inspection, effective naming, extracting predicates, component responsibility, avoiding premature abstraction and unnecessary Effects, simplifying State, reading compiler/linter errors, useful editor workflows, and reducing unnecessary renders. Tips must improve production work or understanding rather than add trivia.

## 12. Current Project First

Use the Expense Manager as the primary learning laboratory. Before creating an isolated demo, ask whether the concept fits naturally in the project. Use additional examples where the project cannot naturally teach an important use case, but do not distort the application to force every API into it.

## 13. Production Context Beyond the Project

For each major topic, briefly show how the knowledge transfers to larger systems. For example:

```text
Expense Manager: useReducer → related form/application transitions
Admin dashboard: useReducer → complex filter or workflow State
Checkout flow: useReducer → multi-step transactional State
```

## 14. Avoid Premature Completion

Do not complete a lesson merely because a few quizzes were answered, one simple example works, or syntax was copied. Before completion, confirm that:

- The API's main purpose and mental model were taught.
- Important production use cases and caveats were covered.
- The student knows when not to use it.
- The student implemented at least one meaningful example.
- Existing behavior remains preserved.

If an important surface area is missing, teach it before completion.

## 15. Quiz Policy

Basic quizzes are secondary. Prefer two to five reasoning questions after teaching and implementation, such as:

- Why would this cause stale data?
- What production bug could this Effect cause?
- Which approach would you choose here and why?
- What happens during render versus commit?
- How would this behave with rapid input?
- What changes if the component remounts?

## 16. Sources / Modern Notes

For substantial lessons, maintain a concise `Sources / Modern Notes` section in `lesson.md` when useful. Record official documentation, version-dependent notes, and deprecated or newer APIs discussed. Summarize and link to canonical sources; do not copy large documentation sections.

## 17. Teaching Language

Teach primarily in Burmese and retain standard English terminology such as State, Ref, render, commit, Effect, reducer, dispatch, mutation, controlled component, reconciliation, and batching. Explain difficult English terms in Burmese rather than translating technical vocabulary inconsistently.

## 18. Lesson Quality Rule

Depth is more important than racing through the schedule. A day may take longer when the topic requires it. Do not skip production knowledge to keep a daily cadence.
