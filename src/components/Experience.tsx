import { timelineData } from "@/data/experience";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-xl tracking-tight text-slate-200 sm:text-2xl mb-4">Experience & Education</h2>
      <div className="space-y-2">
        {timelineData.map((item, idx) => (
          <TimelineItem
            key={idx}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            logoUrl={item.logoUrl}
            isLast={item.isLast}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;