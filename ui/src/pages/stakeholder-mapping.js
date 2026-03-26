// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function StakeholderMapping({
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
      pageTitle="Stakeholder Mapping"
      pageIntro="Identify and analyse stakeholders to plan effective engagement strategies."
      initialInput={`Help me map stakeholders for the following project.

Project: [describe the project or initiative]
Organisation context: [describe team, department, or company]
Known stakeholders: [list any you already know about]

For each stakeholder or stakeholder group, identify:
- Role and relationship to the project
- Level of interest and influence (use a 2x2 power/interest grid)
- Key concerns or expectations
- Recommended engagement approach and communication frequency`}
    />
  );
}
