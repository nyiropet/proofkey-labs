# Issue tracker: Local Markdown

Local Markdown under `.scratch/` is the authoritative tracker. GitHub remains the code, pull-request and CI host; its existing issues and Project are historical, unchanged snapshots and are not synchronized.

## Conventions

- One feature or cohesive effort per `.scratch/<feature-slug>/` directory.
- One ticket per `issues/<NN>-<slug>.md` within that directory; start numbering at 01. Reference the full path when numbers could be ambiguous.
- A feature spec, when needed, is `spec.md` in that feature directory. Do not create a full spec for every small task.
- `Status:` near the top of each ticket is authoritative: Backlog, Ready, In progress, In review, Done. These are our mentoring workflow statuses, not the upstream triage role labels.
- Keep at most one ticket In progress. `.scratch/README.md` points to the current ticket and indexes paths without copying statuses or task bodies.
- Tickets contain learning objective, expected behavior, acceptance criteria, non-goals, dependencies when relevant, and concise comments/evidence.
- Ready means scope and acceptance criteria are understood. Done requires appropriate passing checks, resolved review findings, merged changes, and learner understanding of the mechanism and a failure case.
- Append relevant notes under `## Comments`; do not copy full conversations or tool output.
- Publishing means creating/updating local Markdown. Fetching means reading the referenced file. Do not call GitHub Issues/Projects APIs for routine task tracking.
- Read the index, current ticket and necessary dependencies selectively, not the entire backlog.
- Keep `.scratch/` tracked in Git so tasks travel with the project. Never store secrets or live tokens there. The name does not imply disposable or ignored content in this repository.
- Skills must respect the learner's exclusive ownership of code, tests, scripts, SQL and configuration. Planning/documentation edits by the agent remain allowed.

## Migration

On 2026-09-15, imported GitHub issues #1–#5 with their contents and board statuses. Issue #1's tracking criterion was adapted to the user's new local-tracking decision. No remote issues were closed and no remote project was deleted; a historical issue URL in a ticket does not make GitHub authoritative.

Based on Matt Pocock's local tracker convention:
https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md

Tracker and domain-document locations are configured; see [domain.md](domain.md).
For installed skills and pending reviews, see [skills.md](skills.md).
