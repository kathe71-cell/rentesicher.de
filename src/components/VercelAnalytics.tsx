import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

export default function VercelAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('pageview', {
        route: location.pathname + location.search
      });
    }
  }, [location]);

  return <Analytics />;
}
