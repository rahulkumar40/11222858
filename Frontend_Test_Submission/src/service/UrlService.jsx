// src/services/urlService.js

import { logInfo, logError } from './LoggingService'

let urls = []; // In-memory storage

export function createShortUrl(originalUrl, validityMinutes, customCode) {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + validityMinutes * 60 * 1000);
  let shortcode = customCode || generateRandomCode();

  // Ensure uniqueness
  while (urls.find(u => u.shortcode === shortcode)) {
    shortcode = generateRandomCode();
  }

  const newUrl = {
    originalUrl,
    shortcode,
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
    clicks: [],
  };

  urls.push(newUrl);
  logInfo(`Short URL created with code: ${shortcode}`);
  return newUrl;
}

export function getAllUrls() {
  return urls;
}

export function findUrlByCode(shortcode) {
  return urls.find(u => u.shortcode === shortcode);
}

export function recordClick(shortcode) {
  const url = findUrlByCode(shortcode);
  if (url) {
    url.clicks.push({
      timestamp: new Date().toISOString(),
      source: "Browser",
      location: "Unknown", // You can enhance to get approximate location
    });
    logInfo(`Click recorded for shortcode: ${shortcode}`);
  } else {
    logError(`Failed to record click: shortcode not found (${shortcode})`);
  }
}

function generateRandomCode() {
  return Math.random().toString(36).substring(2, 8);
}
