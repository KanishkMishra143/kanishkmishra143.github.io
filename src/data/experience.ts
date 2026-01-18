export interface TimelineItemProps {
    date: string;
    title: string;
    subtitle: string;
    description: string;
    logoUrl: string;
    isLast?: boolean;
}

export const timelineData: TimelineItemProps[] = [
    {
        date: "Present",
        title: "Future Role",
        subtitle: "To be determined",
        description: "Open to new opportunities and challenges.",
        logoUrl: "/future.svg",
    },
    {
        date: "Jan – Apr 2026",
        title: "Full Stack Developer (Intern)",
        subtitle: "Graphura India Private Limited",
        description: "Specialising in efficient and resourceful deployement of projects and contributed to many of the major projects, which was released to the clients. It gave me a much real life experience of how to handle clients.",
        logoUrl: "/graphura.png",
    },
    {
        date: "Jul – Oct 2025",
        title: "Senior Team Leader (Intern)",
        subtitle: "UpToSkills",
        description: "Led a 14-member team to deliver a FinTech platform. Built backend data pipelines using Python, Pandas, PostgreSQL, and Supabase. Designed backend APIs using Node.js and owned cross-team coordination.",
        logoUrl: "/uptoskills.svg",
    },
    {
        date: "Sept 2023 – Sept 2027",
        title: "B.Tech (ECE)",
        subtitle: "Dr. Akhilesh Das Gupta Institute of Professional Studies (ADGIPS)",
        description: "CGPA (1st Year): 8.50 — CGPA (2nd Year): 8.57",
        logoUrl: "/adgips.svg",
    },
    {
        date: "2022",
        title: "12th Grade",
        subtitle: "CBSE - SL Suri DAV Public School",
        description: "Class 10: 85% — Class 12: 80%",
        logoUrl: "/cbse.png",
        isLast: true,
    },
];