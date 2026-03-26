// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function Personas({
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
      pageTitle="Personas"
      pageIntro="Generate detailed user personas to guide product decisions and design."
      initialInput={`Help me create user personas for our product.

Product description: [describe what your product does]
Target audience: [describe who uses it]
Available research or data: [any interviews, analytics, surveys you have]

Generate 3 distinct personas. For each persona include:
- Name and demographic summary
- Goals and motivations
- Pain points and frustrations
- Behaviours and habits
- Key quote that captures their mindset
- How they interact with our product`}
    />
  );
}
