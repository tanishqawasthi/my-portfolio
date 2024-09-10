import Image from "next/image";
import React from "react";  
import { Timeline } from "@/components/ui/timeline";

export default function ExpTimeline() {
  const data = [
    {
      title: "July 2024 - Present",
      content: (
        <div>
            <h3 className="text-2xl font-bold">Brane Enterprises - Associate Solutions Leader (SDE 1)</h3>
            <ul className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <li>Worked with a cross-functional team of 15+ developers and product managers to enhance the application code-generating engine module.</li>
              <li>Developed interactive and user-friendly dashboards to display application analytics using React.js and Oracle JET, used by 300+ solution developers.</li>
              <li>Worked on creating backend REST APIs for the Solution Path Visualizer using Flask.</li>
            </ul>
          <div className="">
            <Image
              src={"/brane.png"}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2024 - Jun 2024",
      content: (
        <div>
            <h3 className="text-2xl font-bold">WeSourceU (Seekme.AI) - Full Stack Development Intern</h3>
            <ul className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <li>Constructed a suite of over 30 reusable components using React and Tailwind CSS, adhering to responsive design principles to decreased UI inconsistencies. </li>
              <li>Migrated the application from React to Next.js, significantly improving SEO and user experience that resulted in 5,000+ impressions within the first 20 days of launch. </li>
              <li>Automated solutions for tasks such as web scraping and content generation for fetching data for 1000+ pages of the website.</li>
            </ul>
          <div className="">
            <Image
              src={"/seekme.png"}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
