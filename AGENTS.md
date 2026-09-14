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

## Deferred decisions and charter acceptance

The package layout, remaining tenancy details, session storage,
deployment, and product features remain undecided. Resolve them together
through later architecture lessons rather than silently choosing defaults.

This initial step adds documentation only. The charter is complete when it
captures the learning objective, ownership boundaries, manual implementation
constraint, learning milestones, and all three verification exercises.
