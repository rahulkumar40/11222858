import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findUrlByCode, recordClick } from '../service/UrlService';
import { logInfo, logError } from '../service/LoggingService';

export default function RedirectHandler() {
  const { shortcode } = useParams();

  useEffect(() => {
    const urlData = findUrlByCode(shortcode);
    if (urlData) {
      const now = new Date();
      if (now <= new Date(urlData.expiresAt)) {
        recordClick(shortcode);
        logInfo(`Redirecting shortcode ${shortcode}`);
        window.location.replace(urlData.originalUrl);
      } else {
        logError(`Shortcode expired: ${shortcode}`);
        alert("This link has expired.");
      }
    } else {
      logError(`Shortcode not found: ${shortcode}`);
      alert("Short URL not found.");
    }
  }, [shortcode]);

  return <div className="container"><h2>Redirecting...</h2></div>;
}
