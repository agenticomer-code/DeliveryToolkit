// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function StorySlicing({
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
      pageTitle="Story Slicing"
      pageIntro="Slice large epics and features into small, independently deliverable user stories."
      initialInput={`Help me slice the following epic or feature into smaller user stories.

Epic / feature: [describe the epic or large feature]
Context: [describe the product, users, and any technical constraints]

Please:
- Create vertical slices that each deliver independent user value
- Apply the INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable)
- Suggest a delivery sequence from simplest to most complex
- Flag any stories that may need further splitting`}
    />
  );
}
