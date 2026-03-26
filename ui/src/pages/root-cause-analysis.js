// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function RootCauseAnalysis({
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
      pageTitle="Root Cause Analysis"
      pageIntro="Identify the underlying causes of a problem using structured analysis techniques."
      initialInput={`Help me perform a root cause analysis for the following issue.

Problem statement: [describe the problem clearly]

Observed symptoms: [list what you are seeing]

Context: [describe when it started, affected systems, impacted users]

Please apply the 5 Whys technique and summarise findings in a fishbone (Ishikawa) diagram format, then suggest corrective actions.`}
    />
  );
}
