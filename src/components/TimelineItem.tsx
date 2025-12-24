// import Image from "next/image";
// import { TimelineItemProps } from "@/data/experience"; // Import the type

// const TimelineItem = ({ date, title, subtitle, description, logoUrl, isLast }: { date: string; title: string; subtitle: string; description: string; logoUrl: string; isLast?: boolean }) => (
//     <div className="relative flex items-start">
//         <div className="flex flex-col items-center mr-4">
//             <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-700">
//                 <Image src={logoUrl} alt={`${subtitle} logo`} className="w-8 h-8 object-contain" width={32} height={32} />
//             </div>
//             {!isLast && <div className="w-px h-24 bg-slate-600 mt-2"></div>}
//         </div>
//         <div className="bg-slate-800/50 p-4 rounded-md flex-1">
//             <p className="text-sm text-slate-400 mb-1">{date}</p>
//             <h3 className="font-bold text-slate-200">{title}</h3>
//             <h4 className="text-sm font-medium text-teal-300 mb-2">{subtitle}</h4>
//             <p className="text-sm text-slate-400">{description}</p>
//         </div>
//     </div>
// );
// return (
//     <div className="relative pl-8 my-4">
//         <div className="absolute left-0 top-0 h-full w-px bg-gray-600"></div>
//         <div className="absolute left-[-8px] top-4 w-4 h-4 bg-teal-500 rounded-full border-2 border-gray-800"></div>
//         {link ? (
//             <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg hover:bg-gray-800 transition-colors">
//                 {content}
//             </a>
//         ) : (
//             <div className="p-4 rounded-lg">
//                 {content}
//             </div>
//         )}
//     </div>
//     );
// };

// export default TimelineItem;

import Image from "next/image";
import { TimelineItemProps } from "@/data/experience";
    5 
const TimelineItem = ({ date, title, subtitle, description, logoUrl, isLast }: TimelineItemProps) => {
return (
    <div className="relative flex items-start">
        <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-700">
                <Image src={logoUrl} alt={`${subtitle} logo`} className="w-8 h-8 object-contain" width={32} height={32} />
            </div>
            {!isLast && <div className="w-px h-24 bg-slate-600 mt-2"></div>}
        </div>
        <div className="bg-slate-800/50 p-4 rounded-md flex-1">
            <p className="text-sm text-slate-400 mb-1">{date}</p>
            <h3 className="font-bold text-slate-200">{title}</h3>
            <h4 className="text-sm font-medium text-teal-300 mb-2">{subtitle}</h4>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    </div>
);
};

export default TimelineItem;