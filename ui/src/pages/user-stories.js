// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function UserStories({
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
      pageTitle="User Stories"
      pageIntro="Write well-formed user stories with clear acceptance criteria."
      initialInput={`Help me write user stories for the following feature.

Feature: [describe the feature]
User type(s): [describe who will use it]
Business goal: [what outcome this feature supports]

For each story:
- Format: As a [user], I want [goal], so that [benefit]
- Include 3–5 acceptance criteria in Given/When/Then format
- Note any assumptions or open questions
- Flag any edge cases or error scenarios to handle`}
    />
  );
}
