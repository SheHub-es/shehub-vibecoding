import * as React from "react";
import { cn } from "@/lib/utils";

interface TermsCheckboxProps {
  t: (key: string) => string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  privacyHref?: string;
  termsHref?: string;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({
  t,
  checked,
  onChange,
  className,
  privacyHref = "/privacy",
  termsHref = "/legal-notice",
}) => {
  return (
    <div className={cn("flex items-start gap-2 text-sm", className)}>
      <input
        aria-describedby="terms-description"
        id="terms"
        name="termsAccepted"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 mt-1 rounded border-border text-accent focus:ring-accent"
        required
      />
      <label htmlFor="terms" className="text-muted-foreground cursor-pointer">
        {t("waitlist.form.terms.prefix")}{" "}
        <a
          href={privacyHref}
          className="underline text-shehub-purple hover:text-shehub-purple/80 link-purple"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("waitlist.form.terms.privacy")}
        </a>{" "}
        {t("waitlist.form.terms.connector")}{" "}
        <a
          href={termsHref}
          className="underline text-shehub-purple hover:text-shehub-purple/80 link-purple"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("waitlist.form.terms.terms")}
        </a>
      </label>
    </div>
  );
};

export default TermsCheckbox;
