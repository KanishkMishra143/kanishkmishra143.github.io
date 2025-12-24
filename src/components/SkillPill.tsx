import React from 'react';

interface SkillPillProps {
    name: string;
    icon: React.ElementType;
}

const SkillPill = ({ name, icon: Icon }: SkillPillProps) => (
    <div className="flex items-center rounded-md bg-blue-400/10 px-3 py-1.5 text-sm font-medium text-blue-300">
        <Icon className="mr-2 h-4 w-4" />
        {name}
    </div>
);

export default SkillPill