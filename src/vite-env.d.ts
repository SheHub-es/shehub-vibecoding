/// <reference types="vite/client" />

interface Window {
  gtag?: (...args: [command: string, targetIdOrEventName: string, config?: Record<string, unknown>]) => void;
}