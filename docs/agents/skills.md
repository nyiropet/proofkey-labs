# Skill inventory and mentoring adaptations

## Installed: setup-matt-pocock-skills

- Source: https://github.com/mattpocock/skills
- Pinned commit: `959a8e9f1edc3adbe2f7e3054bb6fbefa6696260`
- Upstream path: `skills/engineering/setup-matt-pocock-skills`
- Local path: `.agents/skills/setup-matt-pocock-skills`
- Installed: 2026-09-16, using the built-in skill-installer helper.
- Upstream files are unchanged. The complete skill directory, including all five
  Markdown reference files and `agents/openai.yaml`, was reviewed before installation.
- No bundled executable scripts or mandatory calls to another skill. `triage`
  is checked conditionally; other skills are mentioned as consumers of setup.
- Explicit invocation only: upstream metadata disables implicit invocation.

## When to use it

Use once to establish repository conventions, or when those conventions change.
It discovers the issue tracker and domain-document layout and maintains their
documentation. It is not a feature implementation skill.

## Project-specific usage

These are usage adaptations under AGENTS.md, not edits to the upstream skill:

- Keep the already-approved local tracker from `issue-tracker.md`, even though
  the Git remote points to GitHub. Do not switch trackers or synchronize remotely.
- Keep the agreed single-context layout in `domain.md`, despite the monorepo.
- Preserve existing project docs; templates are reference material, not replacements.
- `triage` is not installed, so skip its label setup. Our Status vocabulary is
  the local mentoring workflow, not upstream triage or wayfinding states.
- Code, tests, SQL, scripts, Docker and CI configuration remain learner-owned.
  This skill may update agreed project documentation only.
- Prior user decisions remain valid; ask about new material decisions rather
  than repeating already-settled questions.

## Verification and remaining work

The installed directory is checked against the previously reviewed copy.
Installation does not mean the skill was invoked or discovered in the current turn.
Confirm discovery on the next turn before claiming a live skill demonstration.

As of 2026-09-17, setup exists on disk with explicit-only invocation metadata,
but is not listed in this session's available-skills catalog. Automatic discovery
and live invocation have not been verified; do not claim otherwise.

All four selected skills and the wrapper's required dependencies are installed.
Conditional TDD references remain deferred as described below. Use the pinned
commit above as the review baseline, and review any version change explicitly.

## Installed: grill-with-docs and its dependencies

Installed on 2026-09-17 from the same pinned commit, without upstream edits:

| Skill | Upstream path | Purpose |
| --- | --- | --- |
| grill-with-docs | skills/engineering/grill-with-docs | Coordinates grilling and domain-modeling |
| grilling | skills/productivity/grilling | Clarifies decisions and their prerequisites |
| domain-modeling | skills/engineering/domain-modeling | Sharpens terminology and records agreed decisions |

Each is installed in `.agents/skills/<name>`. Reviewed all three SKILL.md files,
their invocation metadata, and domain-modeling's ADR-FORMAT.md and CONTEXT-FORMAT.md.
No executable scripts are bundled. The wrapper explicitly requires the other
two skills; those dependencies require no further skill installations.

### Mentoring adaptations

- Use for a concrete unresolved design question, not every minor edit.
- Upstream grilling asks a full round of questions; here ask one manageable
  question at a time, explain missing concepts first, and wait for the learner.
- Upstream grilling delegates factual exploration; here inspect locally without
  automatic sub-agent spawning, to keep the workflow and token use controlled.
- Retain prior agreed decisions and seek shared understanding of new decisions
  before implementing them. Skill instructions never authorize learner-owned code.
- Update agreed terminology and decision notes only. Existing glossary tables
  and learning definitions may remain: our CONTEXT.md deliberately includes
  OAuth learning vocabulary beyond a strict domain-only glossary. Do not rewrite
  it merely to match the upstream formatting template.
- Record significant trade-offs, not an ADR for every question. Distinguish
  intended design from behavior verified in code.
- The upstream wrapper names a Skill tool. If that dispatch tool or catalog
  entry is unavailable, explicitly describe reading/applying the installed
  instructions manually; never pretend a native skill dispatch occurred.

Installation is verified on disk. On 2026-09-17, grilling and domain-modeling
were present in the available-skills catalog; the explicit-only wrapper was not.
A live teaching demonstration remains pending.

## Installed: tdd

- Installed on 2026-09-17 from the same pinned commit, without upstream edits.
- Upstream path: `skills/engineering/tdd`; local path: `.agents/skills/tdd`.
- Reviewed SKILL.md, tests.md, mocking.md, and agents/openai.yaml. No bundled scripts.
- Verified the installed directory against the reviewed temporary copy.
- Installation and catalog discovery are verified; live use remains unverified.

### When and how we use it

Use for suitable new observable behavior or a bug fix. First agree the public
interface and expected outcome. The learner writes and observes one meaningful
failing test, then writes only enough implementation to pass it. Review follows.
The agent explains and reviews; it never writes either implementation or tests.

Expected results should come from an independent example or specification,
not a duplicate of the implementation. Existing PKCE code will receive regression
tests; that does not retroactively make its development test-first.

The pinned skill places refactoring in the review stage, outside its red-green
loop, despite the metadata's red-green-refactor description. We retain our
learner-owned review/refactoring agreement with passing checks.

`codebase-design` is a conditional reference when interface design is unresolved;
`code-review` is a reference for the later review stage. Neither is installed or
invoked here. Inspect their instructions before future adoption; this installation
does not claim those dependency reviews are complete. The mocking guide's
SDK-style interfaces mean operation-specific boundaries, not permission to adopt
an authentication SDK forbidden by the charter.

## Installed: handoff

- Installed on 2026-09-17 from the same pinned commit, without upstream edits.
- Upstream path: `skills/productivity/handoff`; local path: `.agents/skills/handoff`.
- Reviewed SKILL.md and agents/openai.yaml. No scripts or additional skill dependencies.
- Installed files match the reviewed temporary copy. Explicit invocation only;
  catalog discovery and live use remain unverified.

Use when pausing work or moving to a new conversation. Save the handoff in the
OS temporary directory, as upstream requires; it is not a replacement for the
tracked local ticket. Reference existing tickets, decisions and diffs instead
of duplicating them. Exclude secrets and personal information.

Under our mentoring agreement, include the learner's next small exercise,
observed evidence versus reported results, and unresolved questions. Suggested
skills must explain their purpose and retain learner ownership of implementation.
Creating this documentation never authorizes another agent to write code.
