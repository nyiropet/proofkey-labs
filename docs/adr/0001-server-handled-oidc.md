# ADR 0001: Server-handled OIDC with Auth0

Status: Accepted
Recorded: 2026-09-15 (documents the prior conversation decision)

## Context

The portal needs verified user identities without handling IdP passwords.
The learning goal is to implement Authorization Code Flow with PKCE manually.

## Decision

Use Auth0 and handle the flow in the Next.js server. The server generates login
transaction data, receives the callback, exchanges the code, verifies the ID token,
and establishes the portal session. Browser application JavaScript does not
receive the tokens. Follow the native-crypto and no-auth-wrapper constraints in AGENTS.md.

## Consequences

The browser participates in redirects and IdP authentication. The portal needs
server-side transaction storage and browser binding between separate requests.
PKCE does not replace state handling, token verification, or tenant authorization.

## Remaining work

Design client authentication at the token endpoint, nonce handling, callback
validation, JWKS verification, session storage, and failure handling before completing login.
The user reported configuring the local callback URL in Auth0; end-to-end connectivity
has not been verified.
