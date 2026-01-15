'use client';

import { useState } from 'react';
import { skillsData } from '@/lib/skillsData';
import AccordionCard from './AccordionCard';

const Accordion = () => {
  const [openPanel, setOpenPanel] = useState(0);

  const ToggleOpen = (id) => {
    setOpenPanel(openPanel === id ? 0 : id);
  };

  const totalPanels = skillsData.length;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-center xl:flex-col">
      {skillsData.map((cardData) => (
        <AccordionCard
          key={cardData.id}
          cardData={cardData}
          openPanel={openPanel}
          ToggleOpen={ToggleOpen}
          totalPanels={totalPanels}
        />
      ))}
    </div>
  );
};

export default Accordion;
