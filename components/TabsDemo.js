'use client';

import { Tabs } from './ui/tabs';
import { achievementData } from '@/lib/achievementData';

export function TabsDemo() {
  return (
    <div className="h-[36rem] xl:h-[24rem] mb-4 [perspective:1000px] relative flex flex-col max-w-5xl xl:max-w-6xl mx-auto w-full items-start justify-center my-4">
      <Tabs
        tabs={achievementData}
        containerClassName={'justify-center flex-wrap overflow-visible'}
        tabClassName={''}
        activeTabClassName={
          'bg-[rgba(240,240,255,1)] border border-[rgba(189,189,255,1)]'
        }
        contentClassName={'mt-10 p-4'}
      />
    </div>
  );
}
