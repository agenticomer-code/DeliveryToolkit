// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function PrdAnalysis({
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
      pageTitle="PRD Analysis"
      pageIntro="Analyze a product requirements document to surface gaps, risks, and acceptance criteria."
      initialInput={`Analyze the following PRD and provide:
1. Key functional and non-functional requirements
2. Missing or ambiguous requirements
3. Potential risks and edge cases
4. Suggested acceptance criteria per requirement

PRD:
[paste your PRD here]`}
    />
  );
}
