// data/skillsConfig.ts
export interface SkillConfig {
  name: string;
  svgPath?: string;
  iconType?: "svg" | "tabler";
  tablerIcon?: string;
  color?: string;
  size?: number;
}

export const skillsConfig: { [key: string]: SkillConfig } = {
  // Programming Languages
  python: {
    name: "Python",
    svgPath: "/python.svg",
    iconType: "svg",
  },
  typescript: {
    name: "TypeScript",
    svgPath: "/typescript.svg",
    iconType: "svg",
  },
  javascript: {
    name: "JavaScript",
    svgPath: "/javascript.svg",
    iconType: "svg",
  },
  golang: {
    name: "Go",
    svgPath: "/golang.svg",
    iconType: "tabler",
    tablerIcon: "IconBrandGolang",
  },

  // Cloud & DevOps
  aws: {
    name: "AWS",
    svgPath: "/aws.svg",
    iconType: "svg",
  },
  kubernetes: {
    name: "Kubernetes",
    svgPath: "/kubernetes.svg",
    iconType: "svg",
  },
  docker: {
    name: "Docker",
    svgPath: "/docker.svg",
    iconType: "tabler",
    tablerIcon: "IconBrandDocker",
  },
  terraform: {
    name: "Terraform",
    svgPath: "/terraform.svg",
    iconType: "svg",
  },
  jenkins: {
    name: "Jenkins",
    svgPath: "/jenkins.svg",
    iconType: "svg",
  },
  ansible: {
    name: "Ansible",
    svgPath: "/ansible.svg",
    iconType: "tabler",
    tablerIcon: "IconBrandAnsible",
    color: "black",
  },

  // Monitoring & Observability
  prometheus: {
    name: "Prometheus",
    svgPath: "/prometheus.svg",
    iconType: "svg",
  },
  grafana: {
    name: "Grafana",
    svgPath: "/grafana.svg",
    iconType: "svg",
  },
  opensearch: {
    name: "OpenSearch",
    svgPath: "/opensearch.svg",
    iconType: "svg",
  },

  // Frontend Development
  react: {
    name: "React",
    svgPath: "/react.svg",
    iconType: "tabler",
    tablerIcon: "IconBrandReact",
  },
  nextjs: {
    name: "Next.js",
    svgPath: "/nextjs.svg",
    iconType: "tabler",
    tablerIcon: "IconBrandNextjs",
    color: "black",
  },
  tailwind: {
    name: "Tailwind CSS",
    svgPath: "/tailwind.svg",
    iconType: "svg",
  },

  // Tools & Technologies
  git: {
    name: "Git",
    svgPath: "/git.svg",
    iconType: "svg",
  },
  robotframework: {
    name: "Robot Framework",
    svgPath: "/robotframework.svg",
    iconType: "svg",
  },
  jira: {
    name: "Jira",
    svgPath: "/jira.svg",
    iconType: "svg",
  },
  wireshark: {
    name: "Wireshark",
    svgPath: "/wireshark.svg",
    iconType: "svg",
  },

  // Special skills (non-technical)
  "incident management": {
    name: "Incident Management",
    iconType: "tabler",
    tablerIcon: "IconAlertHexagon",
    color: "red",
  },
  "customer management": {
    name: "Customer Management",
    iconType: "tabler",
    tablerIcon: "IconMessageUser",
    color: "violet",
  },
  leadership: {
    name: "Leadership",
    iconType: "tabler",
    tablerIcon: "IconUsers",
    color: "green",
  },
  "rest api": {
    name: "REST API",
    iconType: "tabler",
    tablerIcon: "IconApi",
    color: "green",
  },

  // Legacy mappings
  "cisco ios": {
    name: "Cisco IOS",
    svgPath: "/cisco.svg",
    iconType: "svg",
  },
  ntplib: {
    name: "NTPLib",
    svgPath: "/python.svg",
    iconType: "svg",
  },
  "aws lambda": {
    name: "AWS Lambda",
    svgPath: "/aws.svg",
    iconType: "svg",
  },
  "aws api gateway": {
    name: "AWS API Gateway",
    svgPath: "/aws.svg",
    iconType: "svg",
  },
};

// Helper function to get skill configuration
export function getSkillConfig(skillName: string): SkillConfig | undefined {
  if (!skillName) return undefined;

  const normalizedName = skillName.toLowerCase().trim();

  // Direct lookup
  if (skillsConfig[normalizedName]) {
    return skillsConfig[normalizedName];
  }

  // Try original name
  if (skillsConfig[skillName]) {
    return skillsConfig[skillName];
  }

  // Handle common variations
  const variations: { [key: string]: string } = {
    react: "react",
    nextjs: "nextjs",
    "next.js": "nextjs",
    typescript: "typescript",
    "tailwind css": "tailwind",
    tailwindcss: "tailwind",
    golang: "golang",
    go: "golang",
    // Handle exact content variations
    React: "react",
    Nextjs: "nextjs",
    Typescript: "typescript",
    "Tailwind CSS": "tailwind",
  };

  // Try direct match with original case
  if (variations[skillName]) {
    return skillsConfig[variations[skillName]];
  }

  if (variations[normalizedName]) {
    return skillsConfig[variations[normalizedName]];
  }

  return undefined;
}
