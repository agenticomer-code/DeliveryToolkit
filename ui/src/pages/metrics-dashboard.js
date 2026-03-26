// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import PromptChat from "../app/_prompt_chat";

export default function MetricsDashboard({
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
      pageTitle="Metrics and Dashboard"
      pageIntro="Define meaningful metrics and dashboard designs to track product and delivery health."
      initialInput={`Help me define metrics and a dashboard for the following product or service.

Product / service: [describe what you are measuring]
Key goals: [what outcomes matter — e.g., reliability, growth, performance, delivery speed]
Target audience for the dashboard: [e.g., engineering team, product managers, executives]
Current data sources: [list any monitoring tools, databases, or analytics platforms]

Please provide:
- Recommended metrics grouped by goal (e.g., DORA metrics for delivery, HEART for product)
- For each metric: definition, data source, target/threshold, and why it matters
- Dashboard layout suggestion with visualisation types (charts, counters, sparklines)
- Alerting thresholds for critical metrics
- Metrics to avoid or treat with caution`}
    />
  );
}
