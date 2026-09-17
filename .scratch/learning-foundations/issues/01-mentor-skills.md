# Set up a small AI Hero skill set for mentor-only development

Status: In progress
Imported from: https://github.com/nyiropet/proofkey-labs/issues/1
Imported on: 2026-09-15

## Learning objective
Understand when to use a skill, what inputs and outputs it expects, and how to retain ownership of implementation.

## Expected behavior
A reviewed, project-scoped skill selection supports our existing AGENTS.md learning agreement.

## Acceptance criteria
- [ ] Review setup-matt-pocock-skills, grill-with-docs, tdd, and handoff, including their referenced dependencies.
- [ ] Record the selected upstream revision and review any instructions that write code, run autonomous implementation, or delegate work.
- [ ] Install only the agreed skills and required dependencies; document mentor-only adaptations explicitly.
- [x] Configure local .scratch/ Markdown as the task source and choose locations for terminology and decision notes.
- [ ] Demonstrate choosing a skill for one real project task, explaining why it fits and what the learner will do.

## Non-goals
Installing the entire catalog, autonomous implementation, or application changes.

## Ownership and completion
The learner writes code, tests, and configuration. The agent mentors and reviews. Close after appropriate checks pass, review is resolved, changes are merged, and the learner can explain the mechanism and a failure case.

## Comments

- 2026-09-17: Reviewed and installed handoff from skills/productivity/handoff at the pinned commit. Both bundled files reviewed; no additional dependencies. Installed directory comparison and git diff --check passed. All four selected skills are installed; conditional TDD references remain deferred, and a live project demonstration and learner review remain outstanding. tdd is now visible in the available-skills catalog.

- 2026-09-17: Reviewed and installed tdd unchanged at the pinned commit, including its testing/mocking references and metadata. Directory comparison passed. Recorded learner-owned red-green work and conditional codebase-design/code-review references; those skills remain unreviewed and uninstalled. handoff and the live project demonstration remain pending. Catalog discovery is now observed for grilling and domain-modeling.

- 2026-09-17: Reviewed and installed grill-with-docs, grilling, and domain-modeling at the pinned commit. Reviewed all bundled Markdown and invocation metadata; documented one-question pacing, no automatic delegation, and glossary-format adaptations in docs/agents/skills.md. Setup files exist but catalog discovery is not verified. tdd, handoff, and the live demonstration remain pending.
- Migrated to local tracking. The GitHub issue is a historical reference; this file is authoritative.
- 2026-09-15: User approved one root CONTEXT.md and docs/adr/. Added the agreed glossary, three prior decision records, and docs/agents/domain.md. Only the documentation-layout criterion is complete; skill installation and dependency review are still pending.
- 2026-09-16: Reviewed and installed setup-matt-pocock-skills from commit 959a8e9f1edc3adbe2f7e3054bb6fbefa6696260 into .agents/skills. Reviewed all bundled reference files and invocation metadata. Recorded usage adaptations in docs/agents/skills.md. Remaining skills and live invocation demonstration are pending; this ticket stays In progress.
