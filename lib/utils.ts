// lib/utils.ts
import { SKILL_COLORS } from "@/data/constants";

export function cn(...inputs: string[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatDuration(duration: string): string {
  if (!duration) return "";

  // Handle current positions
  if (duration.endsWith("-")) {
    const startYear = duration.slice(0, -1);
    return `${startYear} - Present`;
  }

  return duration;
}

export function getSkillColor(skill: string): string {
  const normalizedSkill = skill.toLowerCase().replace(/\s+/g, "");
  return (
    SKILL_COLORS[normalizedSkill as keyof typeof SKILL_COLORS] ||
    SKILL_COLORS.default
  );
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

export function getYearsOfExperience(startYear: string): number {
  const currentYear = new Date().getFullYear();
  const start = parseInt(startYear);
  return isNaN(start) ? 0 : currentYear - start;
}
