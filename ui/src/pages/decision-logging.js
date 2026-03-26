// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function DecisionLogging({
  prompts,
  contexts,
  documents,
  models,
  featureToggleConfig,
}) {
  return (
    <PromptChat
      prompts={prompts}
      contexts={contexts}
      documents={documents}
      models={models}
      featureToggleConfig={featureToggleConfig}
      pageTitle="Decision Logging"
      pageIntro="Create Architecture Decision Records (ADRs) to document and communicate key decisions."
      initialInput={`Help me write an Architecture Decision Record (ADR) for the following decision.

Decision title: [short title, e.g. "Use PostgreSQL as the primary database"]
Context: [why this decision is needed — the problem or situation you are facing]
Options considered: [list the alternatives you evaluated]
Decision made: [what was decided, or leave blank if still deciding]
Constraints: [technical, team, cost, or time constraints that influenced this]

Please produce a well-structured ADR with:
- Status (Proposed / Accepted / Deprecated / Superseded)
- Context and problem statement
- Decision drivers
- Options considered with pros and cons
- Decision outcome and rationale
- Consequences (positive, negative, risks)`}
    />
  );
}
