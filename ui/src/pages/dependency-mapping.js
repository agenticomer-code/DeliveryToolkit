// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function DependencyMapping({
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
      pageTitle="Dependency Mapping"
      pageIntro="Map technical and organisational dependencies to identify risks and sequencing constraints."
      initialInput={`Help me map dependencies for the following system or initiative.

System / initiative: [describe what you are mapping]
Known upstream dependencies: [systems or teams that yours depends on]
Known downstream dependencies: [systems or teams that depend on yours]
Delivery context: [describe your team, release timeline, or project]

Please provide:
- A dependency map grouped by type (technical, team, infrastructure, external)
- Risk assessment for each dependency (likelihood of blocking, impact)
- Mitigation strategies for high-risk dependencies
- Suggested sequencing to reduce dependency risk
- Open questions to resolve with dependent teams`}
    />
  );
}
