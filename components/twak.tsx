// TawkToChat.jsx (Client Component - must use "use client")
"use client";

import { useEffect } from 'react';

export const TawkToChat = ({ propertyId = '694bbd531b401c197cbf28b4', widgetId = '1jd7tn3r3' }) => {
  useEffect(() => {
    // Prevent duplicate loading
    if (document.querySelector(`script[src*="${propertyId}"]`)) {
      return;
    }
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
    
    return () => {
      const tawkScript = document.querySelector(`script[src*="${propertyId}"]`);
      if (tawkScript && tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript);
      }
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything
};
