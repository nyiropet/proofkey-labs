# ProofKey Labs: Shared terminology

This describes the agreed design, not a claim that authentication is complete.
Learning progress and verification evidence belong in the current [.scratch task](.scratch/README.md).

## Actors and access

| Term | Meaning in this project |
| --- | --- |
| Browser | Follows redirects, shows the IdP login page, and sends portal cookies. |
| Portal server | The Next.js server: handles login and callbacks, verifies identity, and enforces access. |
| Identity provider (IdP) | Auth0, the external service that authenticates users and issues tokens. |
| User | A portal account associated with a verified external identity. The issuer (`iss`) and subject (`sub`) identify that external identity; they are distinct from our internal user ID. |
| Organization / tenant | A customer workspace whose data must be isolated from other organizations. |
| Membership | A portal-managed link between a user and an organization. Users may have multiple memberships. |
| Authentication | Establishing who the user is. |
| Authorization | Deciding whether that user may access the requested organization or resource. Login alone grants no membership. |

## Login vocabulary

| Term | Meaning in this project |
| --- | --- |
| Login attempt | A temporary, browser-bound transaction started before the user authenticates. It holds the data needed to validate the callback and exchange the code. It expires and can be consumed only once. |
| Authorization code | A short-lived, single-use value issued by the IdP and delivered through the browser. The portal exchanges it for tokens; it is not itself an ID token. |
| Code verifier | A fresh random secret for each login attempt. Retained server-side and later sent to the IdP in the HTTPS token exchange. Never included in the browser redirect. |
| Code challenge | The unpadded base64url representation of the SHA-256 hash of the verifier text. Sent in the authorization request with method S256. It is distinct from the authorization code. |
| State | A random login-attempt identifier sent to the IdP and returned in the callback. The portal checks it against a valid attempt bound to the initiating browser; merely finding a matching database row is insufficient. |
| Callback | The portal endpoint receiving the IdP's redirect response, planned at `/auth/callback`. |
| Token exchange | A direct server-to-IdP HTTP request that submits the code, verifier, and other required parameters and receives tokens. The portal does not transform the code into tokens itself. |
| ID token | An OIDC token containing identity/authentication claims. Trust requires signature and relevant claim verification; decoding alone is not verification. |
| Access token | A credential for access to an API. It is not interchangeable with an ID token and need not be a JWT. |
| Portal session | The authenticated session established after successful login verification, recognized through the portal's cookie on later requests. Distinct from the temporary login attempt and the IdP's own session. |

Browser binding, nonce handling, session storage, token verification details, roles,
and invitations require further lessons/design. Do not infer a complete protocol
from this glossary.

## Engineering vocabulary

- **Ticket:** one locally tracked task with a learning objective and observable acceptance criteria.
- **ADR:** a brief record of a significant decision, its rationale, and consequences.
- **CI:** automated checks of proposed changes.
- **Deployment:** publishing an application version; Vercel is the selected learning target.
- **Skill:** a reusable agent workflow. Our mentoring rules still govern it; the learner writes code, tests, and configuration.

Decision rationale lives in [docs/adr/](docs/adr/). Collaboration rules live in [AGENTS.md](AGENTS.md).
