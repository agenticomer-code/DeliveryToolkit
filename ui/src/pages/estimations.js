// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function Estimations({
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
      pageTitle="Estimations"
      pageIntro="Estimate work items using story points or T-shirt sizing with clear reasoning."
      initialInput={`Help me estimate the following work items.

Items to estimate:
[list each item, one per line]

Team context:
- Team size: [number of developers]
- Sprint length: [e.g., 2 weeks]
- Average velocity: [story points per sprint, if known]
- Tech stack: [relevant technologies]

Please:
- Suggest story point estimates (Fibonacci: 1, 2, 3, 5, 8, 13) or T-shirt sizes (XS, S, M, L, XL)
- Explain the key factors driving each estimate
- Flag items that need clarification before estimating
- Identify dependencies that could affect delivery`}
    />
  );
}
