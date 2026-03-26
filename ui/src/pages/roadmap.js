// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function Roadmap({
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
      pageTitle="Roadmap / Jira Integration"
      pageIntro="Plan and structure a product roadmap aligned to goals, themes, and delivery capacity."
      initialInput={`Help me create a product roadmap.

Product goals: [describe what you want to achieve]
Time horizon: [e.g., 6 months, Q1–Q4 2025]
Key initiatives or epics: [list what you know is in scope]
Constraints: [team size, dependencies, fixed dates]

Please provide:
- A roadmap organised by themes and time periods
- A phased delivery plan (Now / Next / Later or quarterly)
- Dependencies and sequencing rationale
- Suggested Jira epic structure to mirror the roadmap
- Risks that could affect the plan`}
    />
  );
}
