import { useEffect } from "react";

export function RedirectToTeaserPage() {
  useEffect(() => {
    window.location.href = "https://shehub-gules.vercel.app";
  }, []);

  return null;
}
