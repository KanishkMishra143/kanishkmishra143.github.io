
import React from 'react';
import SkillPill from './SkillPill';
import { Code, Database, GitMerge, Server, Users, Gamepad2, ChartBar, Table2, AppWindow, ClipboardCheck, Send } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4">Skills</h2>
        <div className="mt-3">
            <h3 className="text-lg font-semibold text-slate-300 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
                <SkillPill name="Python" icon={Code} />
                <SkillPill name="HTML" icon={Code} />
                <SkillPill name="CSS" icon={Code} />
                <SkillPill name="C++" icon={Code} />
                <SkillPill name="Bash" icon={Code} />
            </div>
        </div>
        <div className="mt-3">
            <h3 className="text-lg font-semibold text-slate-300 mb-2">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
                <SkillPill name="Django" icon={Server} />
                <SkillPill name="Flask" icon={AppWindow} />
                <SkillPill name="Pandas" icon={Table2} />
                <SkillPill name="Matplotlib" icon={ChartBar} />
                <SkillPill name="PyGame" icon={Gamepad2} />
            </div>
        </div>
        <div className="mt-3">
            <h3 className="text-lg font-semibold text-slate-300 mb-2">Backend & Databases</h3>
            <div className="flex flex-wrap gap-2">
                <SkillPill name="PostgreSQL" icon={Database} />
                <SkillPill name="SQLite" icon={Database} />
                <SkillPill name="REST APIs" icon={AppWindow} />
                <SkillPill name="Node.Js" icon={AppWindow} />
            </div>
        </div>
        <div className="mt-3">
            <h3 className="text-lg font-semibold text-slate-300 mb-2">Practices & Tools</h3>
            <div className="flex flex-wrap gap-2">
                <SkillPill name="Git" icon={GitMerge} />
                <SkillPill name="Agile" icon={Users} />
                <SkillPill name="Microservices" icon={Server} />
                <SkillPill name="Jira" icon={ClipboardCheck} />
                <SkillPill name="Postman" icon={Send} />
            </div>
        </div>
    </section>
  );
};

export default Skills;
