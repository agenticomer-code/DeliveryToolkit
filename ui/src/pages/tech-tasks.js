// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function TechTasks({
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
      pageTitle="Tech Tasks"
      pageIntro="Break down user stories into concrete, actionable technical tasks."
      initialInput={`Break down the following user story into technical tasks.

User story: [paste the user story here]

Tech stack / context: [describe languages, frameworks, services involved]

Please provide:
- A list of specific, actionable technical tasks
- Logical sequencing and dependencies between tasks
- Estimated complexity for each task (S / M / L)
- Any technical risks or unknowns to investigate first`}
    />
  );
}
