// src/services/urlService.js

import { logInfo, logError } from "./LoggingService";

let urls = loadUrls(); // Load from localStorage

export function createShortUrl(originalUrl, validityMinutes, customCode) {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + validityMinutes * 60 * 1000);
  let shortcode = customCode || generateRandomCode();

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
  saveUrls(); // Save to localStorage
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
      location: "Unknown",
    });
    saveUrls(); // Save updated clicks
    logInfo(`Click recorded for shortcode: ${shortcode}`);
  } else {
    logError(`Failed to record click: shortcode not found (${shortcode})`);
  }
}

function generateRandomCode() {
  return Math.random().toString(36).substring(2, 8);
}

function saveUrls() {
  localStorage.setItem("urls", JSON.stringify(urls));
}

function loadUrls() {
  const stored = localStorage.getItem("urls");
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
}
