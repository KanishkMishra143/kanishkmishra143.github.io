export interface Project {
    name: string;
    description: string;
    tags: string[];
    url?: string;
}

export const projectsData: Project[] = [
    {
        name: "NotionSafe – Secure Notion Backup Tool",
        description: "A CLI with cross-platform GUI to securely back up Notion workspace data via official APIs. Designed for automation, data integrity, and fault tolerance.",
        tags: ['Python', 'CLI', 'Notion API', 'Automation'],
        // Check if this URL is correct
        url: "https://github.com/KanishkMishra143/NotionSafe", 
    },
    {
        name: "Sink Switch – Audio Management Suite",
        description: "Linux: Command-line utility to switch PipeWire/PulseAudio sinks. Windows: Native Go application that interacts directly with Windows Core Audio APIs.",
        tags: ['Windows', 'Linux', 'Python', 'GO','CLI', 'PipeWire', 'Fedora COPR', 'Arch User Repository(AUR)'],
        url: "https://github.com/KanishkMishra143/sink-switch",
    },
    {
        name: "NextStep – Career Recommendation Platform",
        description: "Backend development for a career advisory system (SIH 2025). Implemented APIs to process psychological assessment parameters and map results to career paths.",
        tags: ['Node.js', 'Express', 'API Design', 'Backend'],
        // Check if this URL is correct or add the real one
        url: "https://github.com/KanishkMishra143/NextStep", 
    },
    {
        name: "Interactive Symlink Creator – File Management Tool",
        description: "Interactive Bash utility to create and manage symbolic links with user-friendly prompts.Designed for safe file operations and streamlined workflow automation in Linux environments.",
        tags: ['Bash', 'Linux'],
        // Check if this URL is correct
        url: "https://github.com/KanishkMishra143/Interactive-Symlink-Creator", 
    },
    {
        name: "Alien Invasion – Python Game",
        description: "A 2D game built using Python and Pygame, focusing on Object-Oriented Programming, event loops, and game-state management.",
        tags: ['Python', 'Pygame', 'OOP', 'Game Dev'],
        // Check if this URL is correct
        url: "https://github.com/KanishkMishra143/Alien-Invasion", 
    },
];