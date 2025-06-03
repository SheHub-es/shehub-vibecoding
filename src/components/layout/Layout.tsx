import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
