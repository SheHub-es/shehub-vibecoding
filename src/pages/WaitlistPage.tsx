import { useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground pt-36 md:pt-40">
      <WaitlistForm />
    </main>
  );
}
