// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function Ceremonies({
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
      pageTitle="Ceremonies"
      pageIntro="Plan and facilitate effective agile ceremonies with clear agendas and outcomes."
      initialInput={`Help me plan the following agile ceremony.

Ceremony type: [Sprint Planning / Sprint Review / Retrospective / Backlog Refinement / Daily Stand-up / other]
Team size: [number of people]
Sprint length: [e.g., 2 weeks]
Current context: [describe any challenges, team dynamics, or focus areas]
Duration available: [how long the ceremony should run]

Please provide:
- A structured agenda with time-boxing for each segment
- Facilitation tips and techniques
- Questions or prompts to drive engagement
- Expected outputs and how to capture them
- Common pitfalls to avoid for this ceremony type`}
    />
  );
}
