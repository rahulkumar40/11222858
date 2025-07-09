// src/services/loggingService.js

let logs = [];

export function logInfo(message) {
  logs.push({ type: "INFO", message, timestamp: new Date().toISOString() });
}

export function logError(message) {
  logs.push({ type: "ERROR", message, timestamp: new Date().toISOString() });
}

export function getLogs() {
  return logs;
}
