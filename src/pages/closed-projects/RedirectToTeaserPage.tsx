import { useEffect } from "react";

export function RedirectToTeaserPage(): JSX.Element {
  useEffect(() => {
    window.location.replace("https://shehub-gules.vercel.app");
  }, []);

  return <></>;
}
