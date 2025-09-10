# Portfolio Project - Refactored Structure

## Project Overview
This is a Next.js portfolio website showcasing professional experience, education, projects, and technical skills. The project has been refactored to follow modern React/Next.js best practices with a well-organized directory structure.

## Directory Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── work/                    # Work section
│   │   └── page.tsx            # Work page
│   ├── about/                   # About section
│   └── contact/                 # Contact section
│
├── components/                   # React components
│   ├── work/                    # Work-specific components
│   │   ├── WorkPage.tsx         # Main work page component
│   │   ├── WorkNav.tsx          # Navigation for work sections
│   │   └── SkillsSection.tsx    # Skills display component
│   ├── common/                  # Shared components
│   │   ├── WorkCard.tsx         # Card component for work/education/projects
│   │   └── WorkCard.module.css  # Styles for WorkCard
│   ├── ui/                      # Reusable UI components
│   └── layout/                  # Layout-specific components
│
├── data/                        # Data and content
│   ├── content.ts              # Work, education, and project data
│   ├── skills.ts               # Technical skills data
│   └── constants.ts            # Site configuration and constants
│
├── lib/                         # Utilities and types
│   ├── types.ts                # TypeScript type definitions
│   └── utils.ts                # Utility functions
│
├── hooks/                       # Custom React hooks
│   └── useWorkContent.ts       # Hook for managing work content state
│
├── public/                      # Static assets
│   ├── images/                 # Images and icons
│   └── favicon.ico             # Site favicon
│
└── styles/                      # Additional styles
```

## Key Features

### 1. Type Safety
- Centralized TypeScript types in `lib/types.ts`
- Strict typing for all components and data structures
- Interface definitions for work items, education, and projects

### 2. Data Management
- Separated content data from components
- Structured data files for easy maintenance
- Skills data with categories and proficiency levels

### 3. Component Architecture
- Modular component structure
- Separation of concerns (work-specific vs. common components)
- Reusable UI components

### 4. Custom Hooks
- `useWorkContent` hook for state management
- Clean separation of business logic from UI components

### 5. Utility Functions
- Duration formatting
- Skill color mapping
- Text truncation helpers

## Data Structure

### Work Experience
```typescript
interface WorkItem {
  title: string;
  subtitle: string;
  description?: string;
  duration?: string;
  location?: string;
  icon?: string;
  skills?: string[];
  current?: boolean;
}
```

### Skills
```typescript
interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
  description?: string;
}
```

## Usage

### Adding New Work Experience
1. Update `data/content.ts`
2. Add new entry to `workExperience` array
3. Include relevant skills and metadata

### Adding New Skills
1. Update `data/skills.ts`
2. Add to appropriate category or create new category
3. Include proficiency level and description

### Customizing Styles
1. Update CSS modules in `components/common/`
2. Modify utility functions in `lib/utils.ts`
3. Update constants in `data/constants.ts`

## Development

### Running the Project
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

## Benefits of This Structure

1. **Maintainability**: Clear separation of data, logic, and presentation
2. **Scalability**: Easy to add new sections and features
3. **Type Safety**: Comprehensive TypeScript integration
4. **Reusability**: Modular components that can be reused
5. **Performance**: Optimized component structure for React
6. **Developer Experience**: Clear file organization and naming conventions

## Future Enhancements

1. Add unit tests in `__tests__/` directory
2. Implement search functionality for work items
3. Add filtering capabilities for skills
4. Create admin interface for content management
5. Add analytics and performance monitoring
