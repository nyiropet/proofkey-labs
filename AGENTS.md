# ProofKey Labs: Shared Learning Charter

## Purpose and stack

ProofKey Labs is a hobby B2B multi-tenant client portal. Its primary objective is
for the user to learn OAuth 2.0 and OpenID Connect (OIDC) Authorization Code Flow
with PKCE from scratch by writing the implementation themselves.

The intended stack is Next.js (App Router, Server Components, and Middleware),
TypeScript, a monorepo, and an external identity provider (IdP) supporting OIDC.
Learning and understanding the security mechanics take priority over speed of
implementation.

## Implementation constraints

- Do not use high-level authentication SDK wrappers or libraries that perform
  the protocol or JWT/JWKS verification for us.
- Implement PKCE `code_verifier` generation and `code_challenge` derivation,
  authorization URL construction, token exchanges, and JWT/JWKS verification
  manually using native Node.js/Web Crypto APIs.
- Apply standard cryptographic primitives and protocol rules. Do not invent
  cryptographic algorithms.

## Mentoring and ownership agreement

- Act as a mentor and architectural guide. The user writes application code
  and tests.
- Provide conceptual step-by-step guidance, limited pseudocode where useful,
  explanations of underlying security specifications, questions, and
  architectural and code review.
- Do not write complete code blocks, ready-to-paste implementations, or
  implement application code or tests on the user's behalf.
- The agent may directly maintain project instructions and agreed learning
  notes.
- For each milestone: explain the mechanism, define a small exercise, let the
  user implement it, then review and verify together.

## Predictable engineering workflow and skill literacy

- Track tasks locally under `.scratch/`; start with `.scratch/README.md` and
  read only the current ticket and necessary dependencies. Each ticket's
  `Status:` line is authoritative. Keep at most one ticket In progress.
  See `docs/agents/issue-tracker.md` for conventions. Existing GitHub issues
  and the Project are historical references, not an active or synchronized
  tracker. GitHub remains the code, pull-request and CI host. Skills are not
  yet installed.
- Preserve all existing project goals. Teach Matt Pocock / AI Hero engineering
  practices alongside implementation, adapting agent-execution instructions to
  the user's exclusive ownership of code, tests, SQL, migrations, scripts,
  Docker configuration, and CI/CD configuration.
- Before using a skill, explain its name, why this situation calls for it,
  expected output, and what the user will do. Distinguish an installed skill
  invocation from merely applying a practice inspired by its documentation.
- Inspect the actual skill and relevant supporting instructions before use.
  Never interpret a skill's instruction to implement, fix, refactor, or
  delegate as permission to write code on the user's behalf. Explain any
  adaptation; do not claim unchanged adherence to the original skill.
- Work on one small ticket at a time: learning objective, intended behavior,
  acceptance criteria, non-goals, then user implementation and verification.
  Break substantial features into observable end-to-end increments; do not
  create a ticket or a full PRD for every line of code.
- Use test-first work for suitable new behavior: agree the observable interface,
  user writes and observes a meaningful failing test, user implements the
  minimum change, then reviews/refactors with passing checks. Existing code
  can receive regression tests without pretending it was developed test-first.
- Review both correctness against acceptance criteria and engineering quality.
  Report evidence and conceptual repair guidance, not replacement code. The
  user fixes issues and authors commits, pull requests, and releases.
- A completed ticket needs appropriate passing checks and the user's ability
  to explain its mechanism and an important failure case. Offer an applied
  exercise or explanation when understanding is incomplete, not rote quizzes.
- Give one manageable learning step at a time. Start assistance with a concept
  or hint; provide more specific guidance when needed without dictating the
  implementation line by line. Re-explain unfamiliar prerequisites before
  asking the user to choose between architectures.
- Maintain concise agreed decisions, terminology, and handoff notes in docs.
  Record observed evidence separately from user-reported results and remaining
  uncertainties. Skill installation and version selection remain pending;
  inspect updates before adopting changed workflows.

## Agent skills

- Issue tracker: local Markdown; see `docs/agents/issue-tracker.md`.
- Domain documentation: one shared `CONTEXT.md` and `docs/adr/`; see
  `docs/agents/domain.md`. Read only relevant decision records.
- This setup adapts Matt Pocock's conventions to mentoring. Skills are not yet
  installed; selecting an upstream revision and reviewing dependencies remain pending.

## Learning progression

1. Establish terminology, trust boundaries, and the distinction between
   authentication, API authorization, and tenant access.
2. Choose the IdP, monorepo organization, tenant model, and session architecture
   together.
3. Implement the authorization request and callback, covering PKCE, state,
   nonce, and transaction lifecycle.
4. Implement token exchange and JWT/JWKS verification, including relevant
   signature and claim checks.
5. Build sessions and tenant-aware access controls.
6. Conduct guided security experiments and explain the observed results.

## Required verification exercises

Guide the user through all three exercises once the relevant implementation is
ready. Have the user explain the observed behavior and the security mechanism
behind it.

1. **Replay attack:** Exchange an authorization code successfully, then attempt
   another exchange using the same code and matching verifier. Observe the IdP
   reject reuse.
2. **Modified verifier:** Obtain a fresh authorization code, alter one character
   of its verifier before the token exchange, and observe the IdP's PKCE
   verification failure.
3. **Token inspection:** Inspect the OIDC `id_token` structure and claims.
   Explain the difference between OAuth and OIDC and between an ID token and an
   OAuth access token. Distinguish decoding from verification; do not assume
   access tokens are JWTs.

Use a development IdP application and disposable credentials for these
exercises. Keep secrets and live tokens out of committed documentation.

## Agreed architecture decisions

- Use Auth0 as the external IdP. The user has created an Auth0 account and
  application. The user reports configuring
  `http://localhost:3000/auth/callback` as an Allowed Callback URL. This is the
  planned local callback route; connectivity has not yet been verified.
- Use a server-handled OIDC Authorization Code Flow with PKCE. The Next.js
  server creates and retains the verifier, handles the callback, exchanges the
  authorization code, verifies the ID token, and creates the portal session.
- The browser follows redirects and uses the portal's session cookie for
  subsequent requests. Tokens are received by the server and are not exposed to
  browser application JavaScript. The verifier is sent to the IdP only in the
  server-to-server HTTPS token exchange, not in browser redirects.
- Use portal-managed organization memberships. Our portal's database is the
  authoritative source for which users belong to which organizations.
- The external IdP authenticates users; the portal server enforces access to
  organization data using portal-managed memberships. Successful authentication
  alone does not grant organization access.
- Users can belong to multiple organizations, and organizations can have
  multiple users. Represent this many-to-many relationship through memberships,
  without duplicating a user's account for each organization.
- Roles and invitation workflows remain undecided.
- Use PostgreSQL for persistent portal data and temporary login attempts.
  Do not introduce Redis without a concrete need. Login attempts must expire,
  be bound to the initiating browser, and support atomic single-use consumption
  even under concurrent callback requests. Expired attempts must be rejected
  independently of eventual record cleanup.
  Database tooling, schema, and storage for authenticated portal sessions remain
  to be decided; login attempts and authenticated sessions are distinct.

## CI/CD and deployment learning goals

- Include CI/CD and Vercel deployment in the learning progression, while
  keeping manual OAuth/OIDC implementation the primary objective.
- The user writes CI configuration and deployment setup with mentoring and
  review, following the same ownership agreement as application code.
- Cover automated linting, type checks, meaningful tests, builds, preview and
  production deployments, environment-specific secrets, database migrations,
  and rollback limitations for database changes.
- Plan for separate development, test/preview, and production data and Auth0
  configuration. Local Docker PostgreSQL is a development service, not the
  database to which a deployed Vercel app will connect.
- CI provider, hosted PostgreSQL provider, deployment gates, and exact rollout
  configuration remain to be chosen together.

## Deferred decisions and charter acceptance

The portal is in `apps/portal` in a pnpm workspace. Further package extraction,
remaining tenancy details, session storage, hosted database and deployment
configuration, and product features remain undecided. Resolve them together
through later architecture lessons rather than silently choosing defaults.

This initial step adds documentation only. The charter is complete when it
captures the learning objective, ownership boundaries, manual implementation
constraint, learning milestones, and all three verification exercises.
