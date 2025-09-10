# Centralized Skills System

## Overview
The skills are now managed in a centralized system to eliminate duplication between the WorkCard badges and SkillsSection displays.

## Architecture

### 1. Skills Configuration (`data/skillsConfig.ts`)
- **Single source of truth** for all skill metadata
- Maps skill keys to display names, icons, and colors
- Supports both SVG files and Tabler icons

### 2. Skill Icon Component (`components/common/SkillIcon.tsx`)
- **Reusable component** for rendering skill icons
- Handles both SVG and Tabler icon types automatically
- Consistent sizing and styling

### 3. Skills Data (`data/skills.ts`)
- Uses `createSkill()` helper function
- Gets icons and names from the centralized config
- Maintains skill levels and descriptions

## Usage

### Adding New Skills

1. **Add to skillsConfig.ts:**
```typescript
export const skillsConfig = {
  // ...existing skills...
  newskill: {
    name: 'New Skill',
    svgPath: '/newskill.svg',
    iconType: 'svg'
  }
};
```

2. **Use in skills.ts:**
```typescript
createSkill("newskill", "Advanced", "Description of the skill")
```

3. **Use in work experience:**
```typescript
skills: ["python", "newskill", "kubernetes"]
```

### Icon Types

#### SVG Icons
```typescript
python: {
  name: 'Python',
  svgPath: '/python.svg',
  iconType: 'svg'
}
```

#### Tabler Icons
```typescript
docker: {
  name: 'Docker',
  iconType: 'tabler',
  tablerIcon: 'IconBrandDocker'
}
```

#### With Custom Colors
```typescript
'incident management': {
  name: 'Incident Management',
  iconType: 'tabler',
  tablerIcon: 'IconAlertHexagon',
  color: 'red'
}
```

## Components That Use This System

### WorkCard Component
- Uses `<SkillIcon>` in badge leftSection
- Automatically renders correct icon for each skill

### SkillsSection Component  
- Uses skill icons from the centralized data
- Displays skill levels and descriptions

## Benefits

1. **🔄 No Duplication**: Skills defined once, used everywhere
2. **✅ Consistency**: Same icons across all components  
3. **🛠️ Easy Maintenance**: Add skill once, appears everywhere
4. **🎨 Flexible Icons**: Support for SVG files and icon libraries
5. **🏷️ Type Safety**: TypeScript ensures correct skill references
6. **📦 Reusable**: SkillIcon component can be used anywhere

## File Structure

```
data/
├── skillsConfig.ts      # Central skill definitions
├── skills.ts           # Skill categories and levels
└── constants.ts        # Other app constants

components/common/
├── SkillIcon.tsx       # Reusable skill icon component
└── WorkCard.tsx        # Uses SkillIcon for badges
```

## Migration Complete ✅

- ✅ Removed duplicate skill icon mapping from WorkCard
- ✅ Created centralized skillsConfig system
- ✅ Updated skills.ts to use createSkill helper
- ✅ Created reusable SkillIcon component
- ✅ All components now use the same skill definitions

No more duplication - skills are now managed in one place! 🎉
