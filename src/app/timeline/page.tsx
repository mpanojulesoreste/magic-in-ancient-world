'use client';

import { useState } from 'react';
import TimelineIntro from '../components/sections/TimelineIntro';
import TimelineView from '../components/sections/TimelineView';

export default function TimelinePage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main>
      {showIntro ? (
        <TimelineIntro onStart={() => setShowIntro(false)} />
      ) : (
        <TimelineView />
      )}
    </main>
  );
}