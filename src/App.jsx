import { useState } from 'react';
import Home from './pages/Home';
import Explainers from './pages/Explainers';
import CarbonAccounting from './pages/CarbonAccounting';

/**
 * App — state-driven navigation across three demo pages in the cream/dark
 * editorial register.
 *
 * No react-router-dom (avoids an extra npm install in this session); the
 * shape is identical — primary + optional secondary key, swap on navigate.
 *
 * Routes:
 *   primary='home'                                     → <Home>
 *   primary='explainers', secondary=null               → <Explainers> (chapter opener)
 *   primary='explainers', secondary='carbon-accounting'→ <CarbonAccounting>
 *   primary='inventory' / 'strategy' / any other sub   → falls back to Explainers chapter opener
 *                                                        (these aren't built; nav still highlights them)
 */
export default function App() {
  const [primary, setPrimary] = useState('home');
  const [secondary, setSecondary] = useState(null);

  const onNavigate = (primaryKey, secondaryKey = null) => {
    setPrimary(primaryKey);
    setSecondary(secondaryKey);
  };

  // Dispatch
  let Page;
  let key; // forces remount + replay of motion.entry on each nav

  if (primary === 'home') {
    Page = Home;
    key = 'home';
  } else if (primary === 'explainers' && secondary === 'carbon-accounting') {
    Page = CarbonAccounting;
    key = 'explainers.carbon-accounting';
  } else if (primary === 'explainers') {
    Page = Explainers;
    key = 'explainers';
  } else {
    // Inventory and Strategy chapters aren't built — show the Explainers
    // opener so the nav still works. Surfaces the structural pattern
    // without forcing five more page builds.
    Page = Explainers;
    key = `${primary}.${secondary || 'index'}`;
  }

  return <Page key={key} onNavigate={onNavigate} />;
}
