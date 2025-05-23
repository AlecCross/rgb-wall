"use client";

import { useEffect } from "react";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("SW registered: ", registration);
          },
          (registrationError) => {
            console.log("SW registration failed: ", registrationError);
          }
        );
      });
    }
  }, []);

  return null;
}
