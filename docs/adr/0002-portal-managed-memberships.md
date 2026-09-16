# ADR 0002: Portal-managed organization memberships

Status: Accepted
Recorded: 2026-09-15 (documents the prior conversation decision)

## Context

A verified identity alone does not establish which customer data a user may access.
We want direct practice modeling and enforcing tenant isolation.

## Decision

Our database is authoritative for memberships rather than Auth0-managed organizations.
Represent users and organizations through memberships: one user can belong to several
organizations, and each organization can have several users.

## Consequences

The portal server must check access to the organization owning the requested resource.
Changing an organization or resource identifier in a URL cannot grant access.
Successful authentication without membership is insufficient.

## Remaining work

Define the schema, membership lifecycle, roles, invitations, and tenant-scoped queries.
