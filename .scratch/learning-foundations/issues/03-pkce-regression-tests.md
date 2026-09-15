# Turn the PKCE reference example into an automated regression test

Status: Backlog
Imported from: https://github.com/nyiropet/proofkey-labs/issues/3
Imported on: 2026-09-15

## Learning objective
Understand behavior-based tests, independent expected values, and the difference between regression testing and test-first development.

## Expected behavior
The existing verifier/challenge logic is checked by a repeatable test command rather than a console-only helper in the login endpoint.

## Acceptance criteria
- [ ] Agree a minimal test runner and observable PKCE interface before restructuring code.
- [ ] Author an automated test using the verifier and expected S256 challenge from RFC 7636 Appendix B.
- [ ] Verify generated verifiers have the intended length and permitted characters; do not rely only on two values being different.
- [ ] Observe the test fail under a deliberate, temporary challenge-calculation mistake, then restore the implementation and observe it pass.
- [ ] Remove the temporary testingPKCE helper and request-time test/debug logging once covered.
- [ ] Document how to run the tests from the workspace.

## Reference
https://www.rfc-editor.org/rfc/rfc7636.txt (Appendix B)

## Non-goals
Claiming the existing code was developed with TDD, IdP integration, or writing the entire auth test suite.

## Ownership and completion
The learner writes code, tests, and configuration. The agent mentors and reviews. Close after appropriate checks pass, review is resolved, changes are merged, and the learner can explain the mechanism and a failure case.

## Comments

- Migrated to local tracking. The GitHub issue is a historical reference; this file is authoritative.

