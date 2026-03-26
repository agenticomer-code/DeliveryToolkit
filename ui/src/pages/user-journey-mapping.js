// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function UserJourneyMapping({
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
      pageTitle="User Journey Mapping"
      pageIntro="Map out end-to-end user journeys including touchpoints, emotions, and opportunities."
      initialInput={`Create a user journey map for the following scenario.

User persona: [describe the user]
Goal: [what the user is trying to achieve]
Channel / product: [web app, mobile, in-store, etc.]

For each stage of the journey, provide:
- Steps the user takes
- Touchpoints with the product or service
- User emotions and pain points
- Opportunities for improvement`}
    />
  );
}
