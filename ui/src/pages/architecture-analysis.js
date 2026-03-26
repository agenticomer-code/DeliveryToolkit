// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function ArchitectureAnalysis({
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
      pageTitle="Architecture Analysis (C4)"
      pageIntro="Analyse and document system architecture using the C4 model hierarchy."
      initialInput={`Help me create a C4 architecture analysis for the following system.

System name: [name of the system]
Purpose: [what the system does]
Key components or services: [list what you know]
External systems / integrations: [list external dependencies]
Target users: [who uses this system]

Please provide:
- C1 Context diagram: system in its environment, key users and external systems
- C2 Container diagram: major deployable units (apps, services, databases)
- C3 Component diagram: key components within the most important container
- Identified quality attributes (scalability, security, reliability concerns)
- Architectural risks or areas to improve`}
    />
  );
}
