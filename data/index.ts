// data/index.ts
export { content, workExperience, education, projects } from "./content";
export { skillsData } from "./skills";
export { skillsConfig, getSkillConfig } from "./skillsConfig";
export {
  SITE_CONFIG,
  NAVIGATION_ITEMS,
  WORK_CATEGORIES,
  SKILL_COLORS,
} from "./constants";

// Re-export types from lib/types for convenience
export type {
  Item,
  Content,
  BaseItem,
  WorkItem,
  EducationItem,
  ProjectItem,
  ContentCategory,
} from "../lib/types";
