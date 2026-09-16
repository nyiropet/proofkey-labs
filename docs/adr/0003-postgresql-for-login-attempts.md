# ADR 0003: PostgreSQL for portal data and login attempts

Status: Accepted
Recorded: 2026-09-15 (documents the prior conversation decision)

## Context

The verifier and associated transaction data must survive between login and callback
requests. The portal also needs persistent users, organizations, and memberships.
Redis expiration is convenient but does not justify another datastore for this project.

## Decision

Use PostgreSQL for both portal data and temporary login attempts. Use Docker Compose
for local PostgreSQL development while Next.js runs directly on the developer's machine.
Do not add Redis without a concrete requirement.

## Consequences

The callback must reject expired attempts even before old rows are physically deleted.
Consume attempts atomically, with browser binding enforced, so concurrent callbacks
cannot both use an attempt. Database unavailability must not bypass authentication checks.
Local Docker storage is separate from the hosted PostgreSQL needed for Vercel.

## Remaining work

Choose database tooling, schema, expiration/cleanup strategy, connection management,
and hosted provider. Authenticated portal session storage is a separate pending decision.
