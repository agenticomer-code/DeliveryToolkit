// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function UserSystemFlows({
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
      pageTitle="User / System Flows"
      pageIntro="Document user and system flows with decision points, error paths, and happy paths."
      initialInput={`Help me document the following flow.

Flow type: [User Flow / System Flow / Both]
Scenario: [describe the scenario or process to map]
Starting point: [where the flow begins]
End state(s): [what success and failure look like]
Known decision points: [any branching conditions you are aware of]

Please provide:
- A step-by-step flow covering the happy path
- Decision branches and alternate paths
- Error and edge case handling
- The flow in Mermaid flowchart format (flowchart TD syntax)
- Any open questions or assumptions made`}
    />
  );
}
