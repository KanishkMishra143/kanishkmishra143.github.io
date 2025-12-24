export interface Project {
    name: string;
    description: string;
    tags: string[];
    url?: string;
}

export const projectsData: Project[] = [
    {
        name: "NextStep – Career Recommendation Platform",
        description: "Backend development for a career advisory system (SIH 2025). Implemented APIs to process psychological assessment parameters and map results to career paths.",
        tags: ['Node.js', 'Express', 'API Design', 'Backend'],
        // Check if this URL is correct or add the real one
        url: "https://github.com/KanishkMishra143/NextStep", 
    },
    {
        name: "NotionSafe – Secure Notion Backup Tool",
        description: "A CLI tool to securely back up Notion workspace data via official APIs. Designed foautomation, data integrity, and fault tolerance.",
        tags: ['Python', 'CLI', 'Notion API', 'Automation'],
        // Check if this URL is correct
        url: "https://github.com/KanishkMishra143/NotionSafe", 
    },
    {
        name: "Sink Switch – Linux Audio Management CLI",
        description: "Command-line utility to switch PipeWire/PulseAudio sinks. Published to Fedora COPR and Arch User Repository.",
        tags: ['Python', 'CLI', 'Linux', 'PipeWire', 'Fedora COPR'],
        url: "https://github.com/KanishkMishra143/sink-switch",
    },
    {
        name: "Alien Invasion – Python Game",
        description: "A 2D game built using Python and Pygame, focusing on Object-Oriented Programming, event loops, and game-state management.",
        tags: ['Python', 'Pygame', 'OOP', 'Game Dev'],
        // Check if this URL is correct
        url: "https://github.com/KanishkMishra143/Alien-Invasion", 
    },
];