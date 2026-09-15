# Add pull-request CI for lint, types, tests, and build

Status: Backlog
Imported from: https://github.com/nyiropet/proofkey-labs/issues/4
Imported on: 2026-09-15

## Learning objective
Understand workflow triggers, jobs, reproducible installs, and how failed checks inform a pull request.

## Expected behavior
A learner-written GitHub Actions workflow checks proposed portal changes.

## Acceptance criteria
- [ ] Agree the commands locally, then author the workflow with matching Node and pnpm versions.
- [ ] Install dependencies from the committed lockfile and run lint, type checks, automated tests, and the production build.
- [ ] Observe a check fail on a deliberate temporary mistake and pass after correcting it.
- [ ] Review available branch/ruleset protections and configure appropriate required checks before relying on CI as a merge gate.
- [ ] Document which checks are required and avoid giving CI production credentials.

## Dependencies
[03 — PKCE regression tests](03-pkce-regression-tests.md) provides the first meaningful test command.

## Non-goals
Automatic production deployment, production migrations, or live Auth0 security experiments in CI.

## Ownership and completion
The learner writes code, tests, and configuration. The agent mentors and reviews. Close after appropriate checks pass, review is resolved, changes are merged, and the learner can explain the mechanism and a failure case.

## Comments

- Migrated to local tracking. The GitHub issue is a historical reference; this file is authoritative.

