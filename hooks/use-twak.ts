import { useCallback, useRef } from 'react';

export const useTawkTo = (propertyId = '694bbd531b401c197cbf28b4', widgetId = '1jd7tn3r3') => {
  const scriptLoadedRef = useRef(false);

  const loadScript = useCallback(() => {
    // Prevent duplicate loading
    if (scriptLoadedRef.current || document.querySelector(`script[src*="${propertyId}"]`)) {
      return;
    }
    
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.body.appendChild(s1);
    }
    
    scriptLoadedRef.current = true;
    
    // Return cleanup function
    return () => {
      const tawkScript = document.querySelector(`script[src*="${propertyId}"]`);
      if (tawkScript && tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript);
      }
      scriptLoadedRef.current = false;
    };
  }, [propertyId, widgetId]);

  return loadScript()
};