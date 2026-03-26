// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function SequenceDiagramming({
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
      pageTitle="Sequence Diagramming"
      pageIntro="Generate sequence diagrams to illustrate interactions between systems and actors."
      initialInput={`Generate a sequence diagram for the following interaction.

Flow name: [name of the flow, e.g. "User Login", "Order Checkout"]
Participants: [list systems, services, or actors involved]
Description of the flow: [describe what happens step by step]
Include error scenarios: [yes / no — and describe them if yes]

Please provide:
- The sequence diagram in Mermaid format (sequenceDiagram syntax)
- A plain-language walkthrough of each step
- Notes on any async calls, retries, or critical failure points`}
    />
  );
}
