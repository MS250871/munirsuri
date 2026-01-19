'use client';

import { useState } from 'react';
import { skillsData } from '@/lib/skillsData';
import AccordionCard from './AccordionCard';

const Accordion = ({ overlay = false, containerSize = 700 }) => {
  const [openPanel, setOpenPanel] = useState(0);
  const ToggleOpen = (id) => setOpenPanel(openPanel === id ? 0 : id);
  const totalPanels = skillsData.length;

  if (overlay) {
    return (
      <div className="relative w-full h-full">
        {skillsData.map((cardData, index) => (
          <AccordionCard
            key={cardData.id}
            cardData={cardData}
            index={index}
            openPanel={openPanel}
            ToggleOpen={ToggleOpen}
            totalPanels={totalPanels}
            overlay
            containerSize={containerSize}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {skillsData.map((cardData, index) => (
        <AccordionCard
          key={cardData.id}
          cardData={cardData}
          index={index}
          openPanel={openPanel}
          ToggleOpen={ToggleOpen}
          totalPanels={totalPanels}
        />
      ))}
    </div>
  );
};

export default Accordion;
