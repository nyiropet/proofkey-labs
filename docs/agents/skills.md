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

`grill-with-docs`, `tdd`, and `handoff` are not installed. Review each skill's
dependencies and mentoring conflicts before installing it. Use this pinned
commit as the initial review baseline, and review any version change explicitly.
