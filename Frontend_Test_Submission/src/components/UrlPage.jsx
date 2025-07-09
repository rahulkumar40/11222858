import  {useEffect, useState} from 'react'
import { getAllUrls } from '../service/UrlService';

 function UrlPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(getAllUrls());
  }, []);

  return (
    <div className="container">
      <h2>Shortened URL Statistics</h2>
      {urls.map((url, idx) => (
        <div className="card" key={idx}>
          <p><strong>Short URL:</strong> {window.location.origin + "/" + url.shortcode}</p>
          <p><strong>Created:</strong> {new Date(url.createdAt).toLocaleString()}</p>
          <p><strong>Expires:</strong> {new Date(url.expiresAt).toLocaleString()}</p>
          <p><strong>Clicks:</strong> {url.clicks.length}</p>

          <div className="accordion">
            {url.clicks.length === 0 ? (
              <div className="accordion-item">No clicks recorded yet.</div>
            ) : (
              url.clicks.map((click, i) => (
                <div className="accordion-item" key={i}>
                  {new Date(click.timestamp).toLocaleString()} - Source: {click.source}, Location: {click.location}
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


export default UrlPage