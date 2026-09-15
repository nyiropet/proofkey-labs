# Run local PostgreSQL with Docker Compose and persistent storage

Status: Backlog
Imported from: https://github.com/nyiropet/proofkey-labs/issues/2
Imported on: 2026-09-15

## Learning objective
Understand containers, port mapping, database connections, and persistent volumes.

## Expected behavior
The locally running Next.js app can reach a development PostgreSQL instance managed through a learner-written Compose configuration.

## Acceptance criteria
- [ ] Agree and record a PostgreSQL version, local connection settings, and volume layout before implementation.
- [ ] Author the Compose configuration; publish the database port only to the local machine.
- [ ] Keep private local credentials out of Git and document required settings with placeholders.
- [ ] Connect and execute a simple query.
- [ ] Create disposable sample data and confirm it survives container recreation with the volume preserved.
- [ ] Document startup, shutdown, and the distinction between removing a container and deleting its data.

## Non-goals
Production hosting, auth tables, Redis, or containerizing Next.js.

## Ownership and completion
The learner writes code, tests, and configuration. The agent mentors and reviews. Close after appropriate checks pass, review is resolved, changes are merged, and the learner can explain the mechanism and a failure case.

## Comments

- Migrated to local tracking. The GitHub issue is a historical reference; this file is authoritative.

