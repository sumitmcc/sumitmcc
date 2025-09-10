// data/skills.ts
import { getSkillConfig } from "./skillsConfig";

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
  description?: string;
}

// Helper function to create skill with icon from config
function createSkill(
  skillKey: string,
  level: Skill["level"],
  description?: string
): Skill {
  const config = getSkillConfig(skillKey);
  return {
    name: config?.name || skillKey,
    level,
    icon: config?.svgPath,
    description,
  };
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      createSkill(
        "python",
        "Expert",
        "Primary language for automation and backend development"
      ),
      createSkill(
        "typescript",
        "Intermediate",
        "Used for frontend and full-stack development"
      ),
      createSkill("golang", "Beginner", "Used for microservices and CLI tools"),
      createSkill(
        "javascript",
        "Intermediate",
        "Frontend and Node.js development"
      ),
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      createSkill(
        "aws",
        "Advanced",
        "Lambda, EC2, S3, API Gateway, CloudWatch"
      ),
      createSkill(
        "kubernetes",
        "Expert",
        "Container orchestration and management"
      ),
      createSkill("docker", "Advanced", "Containerization and deployment"),
      createSkill("terraform", "Advanced", "Infrastructure as Code"),
      createSkill("jenkins", "Advanced", "CI/CD pipelines"),
    ],
  },
  {
    category: "Monitoring & Observability",
    skills: [
      createSkill("prometheus", "Expert", "Metrics collection and alerting"),
      createSkill("grafana", "Expert", "Data visualization and dashboards"),
      createSkill("opensearch", "Intermediate", "Log analysis and search"),
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      createSkill("react", "Intermediate", "Component-based UI development"),
      createSkill("nextjs", "Intermediate", "Full-stack React framework"),
      createSkill("tailwind", "Intermediate", "Utility-first CSS framework"),
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      createSkill("git", "Expert", "Version control and collaboration"),
      createSkill("ansible", "Intermediate", "Configuration management"),
      createSkill("robotframework", "Advanced", "Test automation"),
      createSkill("jira", "Advanced", "Project management"),
      createSkill("wireshark", "Intermediate", "Network analysis"),
    ],
  },
];
