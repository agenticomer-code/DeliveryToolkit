// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function RisksAssumptions({
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
      pageTitle="Risks / Assumptions"
      pageIntro="Build a RAID log to track risks, assumptions, issues, and dependencies."
      initialInput={`Help me identify and analyse risks and assumptions for the following project.

Project / feature: [describe what you are working on]
Current stage: [discovery / delivery / release / post-launch]
Known risks: [list any you have already identified]
Key assumptions: [what are you assuming to be true?]
Known issues: [current blockers or problems]
Dependencies: [what your delivery depends on]

Please produce a RAID log with:
- Risks: description, likelihood (H/M/L), impact (H/M/L), overall score, mitigation strategy, owner
- Assumptions: description, validation approach, what happens if wrong
- Issues: description, current status, resolution actions
- Dependencies: description, owner, due date, risk if not met

Also suggest which items to address first based on overall risk score.`}
    />
  );
}
