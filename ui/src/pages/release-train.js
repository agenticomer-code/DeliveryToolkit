// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function ReleaseTrain({
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
      pageTitle="Release Train"
      pageIntro="Plan and coordinate releases across teams with checklists, risks, and rollback strategies."
      initialInput={`Help me plan a release for the following scope.

Release name / version: [e.g., v2.4.0 or Q2 release]
What is being released: [describe features, fixes, or changes]
Target release date: [date or sprint]
Teams / services involved: [list teams or microservices]
Key dependencies or integrations: [external systems, APIs, data migrations]
Known risks: [anything that could go wrong]

Please provide:
- A release readiness checklist (code, testing, documentation, sign-offs)
- Risk assessment and mitigation plan
- Release day runbook with sequenced steps
- Communication plan (stakeholders to notify, timing)
- Rollback plan and success criteria`}
    />
  );
}
