import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Instagram, Sun, Moon } from "lucide-react";
import PixelLogo from "./PixelLogo";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const STORAGE_KEY = "theme-preference";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <footer
      className={cn(
        "py-16 md:py-20 bg-[#EAE4F9] dark:bg-[#1E1E2A] text-foreground",
        className
      )}
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 items-start">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link
              to="/"
              className="inline-block"
            >
              <PixelLogo className="h-12 text-foreground" />
            </Link>
            <p className="flex items-center text-foreground">
              <Mail
                size={16}
                className="mr-2"
              />
              <a
                href="mailto:info@shehub.es"
                className="hover:underline"
              >
                info@shehub.es
              </a>
            </p>
            <a
              href="https://www.shehub.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.shehub.es
            </a>
            <div className="flex space-x-4 items-center">
              <span className="text-foreground">{t("footer.follow")}</span>
              <a
                href="https://www.linkedin.com/company/shehub-es/about/"
                aria-label="LinkedIn"
                className="text-foreground hover:text-primary transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/shehub.es/"
                aria-label="Instagram"
                className="text-foreground hover:text-primary transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <nav className="flex flex-col items-center md:items-end space-y-2">
              {["features", "how-it-works", "impact", "mentorship", "faq"].map(
                (href, i) => (
                  <HashLink
                    key={href}
                    smooth
                    to={`/#${href}`}
                    className="text-foreground hover:text-primary transition"
                  >
                    {t(
                      `footer.${["why", "how", "impact", "mentors.title", "faq.title"][
                      i
                      ]
                      }`
                    )}
                  </HashLink>
                )
              )}
            </nav>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="mt-3 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition"
            >
              {theme === "dark" ? (
                <Sun
                  size={20}
                  className="text-foreground"
                />
              ) : (
                <Moon
                  size={20}
                  className="text-foreground"
                />
              )}
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-foreground/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-foreground/70">
            <p className="text-center md:text-left w-full md:w-auto">
              &copy; {new Date().getFullYear()} SheHub. {t("footer.rights")}
            </p>
            <nav
              className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-full md:w-auto"
              aria-label="Enlaces legales"
            >
              <Link
                to="/privacy"
                className="hover:text-foreground transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/cookies"
                className="hover:text-foreground transition-colors"
              >
                {t("footer.cookies")}
              </Link>
              <Link
                to="/legal-notice"
                className="hover:text-foreground transition-colors"
              >
                {t("footer.legal")}
              </Link>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
