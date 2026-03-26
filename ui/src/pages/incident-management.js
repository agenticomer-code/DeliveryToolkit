// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function IncidentManagement({
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
      pageTitle="Incident Management / Post-Mortems"
      pageIntro="Conduct structured post-mortems to learn from incidents and prevent recurrence."
      initialInput={`Help me conduct a post-mortem for the following incident.

Incident title: [short descriptive title]
Severity: [P1 / P2 / P3 or Critical / High / Medium]
Summary: [what happened in 2–3 sentences]
Impact: [affected users, systems, duration, business impact]
Timeline:
  - [HH:MM] [event]
  - [HH:MM] [event]
  - [continue as needed]

Please produce a blameless post-mortem with:
- Incident summary and impact assessment
- Root cause analysis (immediate and contributing causes)
- What went well during the response
- What could be improved
- Action items with owners and due dates
- Preventive measures to reduce recurrence`}
    />
  );
}
