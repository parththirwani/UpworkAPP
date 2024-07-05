import React, { useRef } from 'react';
import './App.css';
import Header from './components/Grids';
import TopBar from './components/Topbar';
import FAQSection from './components/FAQs';

const App: React.FC = () => {
  const faqRef = useRef<HTMLElement>(null);

  return (
    <div>
      <TopBar faqRef={faqRef} />
      <Header />
      <FAQSection faqRef={faqRef} />
    </div>
  );
}

export default App;
