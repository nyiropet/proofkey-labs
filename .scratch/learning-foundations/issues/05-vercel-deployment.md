# Deploy the portal shell to Vercel and verify a preview-to-production workflow

Status: Backlog
Imported from: https://github.com/nyiropet/proofkey-labs/issues/5
Imported on: 2026-09-15

## Learning objective
Understand monorepo deployment settings, build logs, preview versus production, and environment-specific configuration.

## Expected behavior
The current portal shell has a Vercel deployment, and a small learner-authored change can be reviewed in preview before reaching production.

## Acceptance criteria
- [ ] Configure the Vercel project for apps/portal and the workspace dependency setup.
- [ ] Deploy the shell and verify the home page; clearly record that authentication is not complete.
- [ ] Create a small change on a branch and inspect its preview deployment.
- [ ] Ensure the agreed CI checks pass before merging; verify the production deployment follows the selected production branch.
- [ ] Identify build/runtime logs and explain how to restore a previous application deployment.
- [ ] Record that deployed authentication will require hosted PostgreSQL, separate environment configuration, and explicitly allowed Auth0 callback URLs.

## Dependencies
The initial shell deployment can be explored independently. The completed merge-to-production workflow depends on [04 — pull-request CI](04-pull-request-ci.md).

## Non-goals
Claiming production-ready authentication, connecting Vercel to the laptop database, or deploying database migrations.

## Ownership and completion
The learner writes code, tests, and configuration. The agent mentors and reviews. Close after appropriate checks pass, review is resolved, changes are merged, and the learner can explain the mechanism and a failure case.

## Comments

- Migrated to local tracking. The GitHub issue is a historical reference; this file is authoritative.

