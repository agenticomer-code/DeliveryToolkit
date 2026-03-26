// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function UserTesting({
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
      pageTitle="User Testing (Guerrilla)"
      pageIntro="Design lightweight guerrilla user testing plans to get fast, real-world feedback."
      initialInput={`Help me design a guerrilla user testing plan.

Feature or product being tested: [describe what you want to test]
Key hypotheses or questions: [what you want to learn]
Target users: [who you want feedback from]
Constraints: [time, budget, access to users]

Please provide:
- A test script with 5–8 tasks or scenarios
- Key questions to ask before and after each task
- Observation guidelines (what to watch for)
- How to capture and synthesise findings quickly`}
    />
  );
}
