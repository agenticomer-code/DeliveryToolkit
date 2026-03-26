// © 2024 Thoughtworks, Inc. | Licensed under the Apache License, Version 2.0  | See LICENSE.md file for permissions.
import Link from "next/link";
import {
  RiCompassDiscoverLine,
  RiFileList3Line,
  RiRocket2Line,
  RiBarChartBoxLine,
  RiChat2Line,
  RiChatQuoteLine,
  RiCompasses2Line,
  RiDashboardHorizontalLine,
  RiGlobalLine,
  RiBriefcase2Line,
} from "react-icons/ri";

// Keeping the implementation of menu items for the "static" features in one place
// Will usually be enhanced by the dynamically loaded prompts afterwards

export const THOUGHTWORKS_ONLY_CATEGORIES = [
  "client-research",
  "deliveryManagement",
];

const CATEGORY_TO_SECTION_MAP = {
  ideate: "discovery",
  research: "discovery",
  "client-research": "discovery",
  analysis: "requirements",
  analyse: "requirements",
  requirements: "requirements",
  architecture: "architecture",
  coding: "delivery",
  testing: "delivery",
  deliveryManagement: "delivery",
  delivery: "delivery",
  discovery: "discovery",
  reporting: "reporting",
  other: "reporting",
};

export const normalizeCategoryForSection = (category) => {
  const normalizedCategory = String(category || "")
    .trim()
    .toLowerCase();
  return CATEGORY_TO_SECTION_MAP[normalizedCategory] || "reporting";
};

export const normalizePromptCategories = (categories = []) => {
  if (!categories.length) {
    return ["reporting"];
  }

  return [...new Set(categories.map(normalizeCategoryForSection))];
};

export const initialiseMenuCategoriesForSidebar = (isThoughtworksInstance) => {
  const addThoughtworksMenuItems = (categories) => {
    categories.thoughtworksLabel = {
      key: "thoughtworksLabel",
      label: "Thoughtworks",
      className: "menu-divider",
      type: "group",
    };
    categories["client-research"] = {
      key: "client-research",
      label: "Client research",
      icon: <RiGlobalLine style={{ fontSize: "large" }} />,
      children: [
        {
          key: "company-research",
          label: <Link href="/company-research">Company overview</Link>,
          icon: (
            <RiGlobalLine
              style={{
                marginTop: "-2px",
                fontSize: "0.8rem",
                verticalAlign: "middle",
              }}
            />
          ),
        },
        {
          key: "company-research-ai-tool",
          label: (
            <Link href="/company-research?config=ai-tool">
              Company overview: AI tools
            </Link>
          ),
          icon: (
            <RiGlobalLine
              style={{
                marginTop: "-2px",
                fontSize: "0.8rem",
                verticalAlign: "middle",
              }}
            />
          ),
        },
      ],
    };
    categories.deliveryManagement = {
      key: "deliveryManagement",
      label: "Delivery",
      icon: <RiDashboardHorizontalLine style={{ fontSize: "large" }} />,
      children: [],
    };
  };

  const addSoftwareDeliveryMenuItems = (categories) => {
    categories.softwareDeliveryLabel = {
      key: "softwareDeliveryLabel",
      label: "Software Delivery",
      className: "menu-divider",
      type: "group",
    };
    categories.discovery = {
      key: "discovery",
      label: "Discovery",
      icon: <RiCompassDiscoverLine style={{ fontSize: "large" }} />,
      children: [
        {
          key: "creative-matrix",
          label: <Link href="/creative-matrix">Creative Matrix</Link>,
        },
        {
          key: "scenarios",
          label: <Link href="/scenarios">Scenario Design</Link>,
        },
        {
          key: "prd-analysis",
          label: <Link href="/prd-analysis">PRD Analysis</Link>,
        },
        {
          key: "root-cause-analysis",
          label: <Link href="/root-cause-analysis">Root Cause Analysis</Link>,
        },
        {
          key: "user-journey-mapping",
          label: <Link href="/user-journey-mapping">User Journey Mapping</Link>,
        },
        {
          key: "personas",
          label: <Link href="/personas">Personas</Link>,
        },
        {
          key: "stakeholder-mapping",
          label: <Link href="/stakeholder-mapping">Stakeholder Mapping</Link>,
        },
        {
          key: "user-testing",
          label: <Link href="/user-testing">User Testing (Guerrilla)</Link>,
        },
      ],
    };
    categories.requirements = {
      key: "requirements",
      label: "Requirements",
      icon: <RiFileList3Line style={{ fontSize: "large" }} />,
      children: [
        {
          key: "feature-mapping",
          label: <Link href="/feature-mapping">Feature Mapping</Link>,
        },
        {
          key: "story-slicing",
          label: <Link href="/story-slicing">Story Slicing</Link>,
        },
        {
          key: "user-stories",
          label: <Link href="/user-stories">User Stories</Link>,
        },
        {
          key: "tech-tasks",
          label: <Link href="/tech-tasks">Tech Tasks</Link>,
        },
        {
          key: "estimations",
          label: <Link href="/estimations">Estimations</Link>,
        },
        {
          key: "roadmap",
          label: <Link href="/roadmap">Roadmap / Jira Integration</Link>,
        },
      ],
    };
    categories.delivery = {
      key: "delivery",
      label: "Delivery",
      icon: <RiRocket2Line style={{ fontSize: "large" }} />,
      children: [
        {
          key: "ceremonies",
          label: <Link href="/ceremonies">Ceremonies</Link>,
        },
        {
          key: "release-train",
          label: <Link href="/release-train">Release Train</Link>,
        },
        {
          key: "incident-management",
          label: (
            <Link href="/incident-management">
              Incident Management / Post-Mortems
            </Link>
          ),
        },
        {
          key: "risks-assumptions",
          label: <Link href="/risks-assumptions">Risks / Assumptions</Link>,
        },
      ],
    };
    categories.architecture = {
      key: "architecture",
      label: "Architecture",
      icon: <RiCompasses2Line style={{ fontSize: "large" }} />,
      children: [
        {
          key: "architecture-analysis",
          label: (
            <Link href="/architecture-analysis">Architecture Analysis (C4)</Link>
          ),
        },
        {
          key: "sequence-diagramming",
          label: <Link href="/sequence-diagramming">Sequence Diagramming</Link>,
        },
        {
          key: "user-system-flows",
          label: <Link href="/user-system-flows">User / System Flows</Link>,
        },
        {
          key: "dependency-mapping",
          label: <Link href="/dependency-mapping">Dependency Mapping</Link>,
        },
        {
          key: "decision-logging",
          label: <Link href="/decision-logging">Decision Logging</Link>,
        },
      ],
    };
    categories.reporting = {
      key: "reporting",
      label: "Reporting",
      icon: <RiBarChartBoxLine style={{ fontSize: "large" }} />,
      children: [
        {
          key: "metrics-dashboard",
          label: <Link href="/metrics-dashboard">Metrics and Dashboard</Link>,
        },
      ],
    };
    categories.other = {
      key: "other",
      label: "Other",
      icon: <RiChat2Line style={{ fontSize: "large" }} />,
      children: [],
      show: false,
    };
    categories.research = { key: "research", show: false, children: [] };
    categories.ideate = { key: "ideate", show: false, children: [] };
    categories.analysis = { key: "analysis", show: false, children: [] };
    categories.coding = { key: "coding", show: false, children: [] };
    categories.testing = { key: "testing", show: false, children: [] };
  };

  const categories = {
    dashboard: {
      key: "dashboard",
      label: <Link href="/">Dashboard</Link>,
      icon: <RiDashboardHorizontalLine style={{ fontSize: "large" }} />,
    },
    knowledgeChat: {
      key: "knowledgeChat",
      label: <Link href="/knowledge-chat">Chat with Haiven</Link>,
      icon: <RiChatQuoteLine style={{ fontSize: "large" }} />,
    },
  };

  if (isThoughtworksInstance) {
    addThoughtworksMenuItems(categories);
  }
  addSoftwareDeliveryMenuItems(categories);

  return categories;
};

export const staticFeaturesForDashboard = () => {
  return [
    {
      identifier: "boba-creative-matrix",
      title: "Creative Matrix",
      help_prompt_description:
        'Create a "Creative Matrix" to generate new ideas across dimensions that you can define yourself.',
      categories: ["ideate"],
      type: "static",
      link: "/creative-matrix",
    },
    {
      identifier: "boba-scenarios",
      title: "Scenario Design",
      help_prompt_description:
        "Brainstorm a range of scenarios for your product domain based on criteria like time horizon, realism, and optimism.",
      categories: ["ideate"],
      type: "static",
      link: "/scenarios",
    },
  ];
};
