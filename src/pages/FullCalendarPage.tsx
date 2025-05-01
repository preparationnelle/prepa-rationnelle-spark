
import React, { useEffect, useRef } from 'react';

const FullCalendarPage = () => {
  const calendlyInlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly && calendlyInlineRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/preparationnelle/30min',
          parentElement: calendlyInlineRef.current,
          prefill: {},
          utm: {},
          // Disable the cookie banner
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#FF6A00',
        });
      }
    };

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div 
        ref={calendlyInlineRef}
        className="w-full h-full"
        style={{ height: '100vh' }}
      ></div>
    </div>
  );
};

export default FullCalendarPage;
