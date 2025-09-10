// data/constants.ts
export const SITE_CONFIG = {
  name: "Sumit Chachadi",
  title: "Software Engineer | Portfolio",
  description:
    "Site Reliability Engineer specializing in Python, Kubernetes, and observability solutions",
  url: "https://your-domain.com",
} as const;

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const WORK_CATEGORIES = [
  "work",
  "education",
  "projects",
  "skills",
] as const;

export const SKILL_COLORS = {
  python: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  golang: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  kubernetes:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  docker:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  typescript: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  javascript:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  react: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  nextjs: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  aws: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  terraform:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
} as const;
