// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function FeatureMapping({
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
      pageTitle="Feature Mapping"
      pageIntro="Build a feature map that organises capabilities around user goals and delivery phases."
      initialInput={`Help me create a feature map for the following product area.

Product / feature area: [describe]
User goals: [list the primary goals users are trying to achieve]
Known features or capabilities: [list what you already have or are planning]

Please organise the features as a story map:
- Rows: user activities across the journey (backbone)
- Columns: specific tasks under each activity
- Slices: group into delivery phases (MVP, Phase 2, Phase 3)
- Highlight any gaps or missing capabilities`}
    />
  );
}
