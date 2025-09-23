import { useEffect, useRef, useState } from "react";
import { Info, Check, ChevronDown } from "lucide-react";
import { ROLE_OPTIONS, labelForRole } from "@/constants/roles";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface RoleDropdownProps {
  selectedRole: string;
  onSelect: (value: string) => void;
  label: string;
  tooltipText: string;
  placeholder: string;
  t: (key: string) => string;
}

const RoleDropdown: React.FC<RoleDropdownProps> = ({
  selectedRole,
  onSelect,
  label,
  tooltipText,
  placeholder,
  t,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div>
      <div className="flex items-center mb-1 space-x-1">
        <Label htmlFor="role">{label}</Label>
        <Tooltip
          open={isMobile ? tooltipOpen : undefined}
          onOpenChange={isMobile ? setTooltipOpen : undefined}
        >
          <TooltipTrigger asChild>
            <Info
              className="w-4 h-4 text-muted-foreground cursor-pointer"
              onClick={() => isMobile && setTooltipOpen((o) => !o)}
            />
          </TooltipTrigger>
          <TooltipContent
            side={isMobile ? "top" : "right"}
            align="center"
            sideOffset={isMobile ? 8 : 0}
            className="bg-shehub-purple text-white rounded-md px-4 py-3 w-[260px] text-sm text-left"
          >
            {tooltipText}
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          id="role"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-controls="role-listbox"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={cn(
            "w-full flex items-center justify-between rounded-md border border-input bg-background mb-2 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground hover:border-primary/80 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            "focus-ring-shehub"
          )}
        >
          <span
            className={cn(
              selectedRole ? "text-foreground" : "text-muted-foreground",
              "text-left w-full"
            )}
          >
            {selectedRole ? labelForRole(selectedRole, t) : placeholder}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </button>

        {dropdownOpen && (
          <div
            tabIndex={-1}
            id="role-listbox"
            role="listbox"
            onKeyDown={(e) => {
              const optionButtons =
                dropdownRef.current?.querySelectorAll<HTMLButtonElement>(
                  'button[data-role-option="true"]'
                );

              if (e.key === "Tab") {
                const lastButton = optionButtons?.[optionButtons.length - 1];
                if (document.activeElement === lastButton && !e.shiftKey) {
                  setDropdownOpen(false);
                }
              }

              if (e.key === "Escape") {
                setDropdownOpen(false);
              }

              if (e.key === "ArrowDown") {
                e.preventDefault();
                if (!optionButtons) return;
                const index = Array.from(optionButtons).findIndex(
                  (btn) => btn === document.activeElement
                );
                const next = optionButtons[index + 1] || optionButtons[0];
                next?.focus();
              }

              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (!optionButtons) return;
                const index = Array.from(optionButtons).findIndex(
                  (btn) => btn === document.activeElement
                );
                const prev =
                  optionButtons[index - 1] || optionButtons[optionButtons.length - 1];
                prev?.focus();
              }
            }}

            className={cn(
              "absolute p-2 shehub-scroll z-50 w-full mt-1 max-h-60 overflow-y-auto overflow-x-hidden bg-popover text-popover-foreground rounded-md border border-input shadow-md",
              "focus-ring-shehub"
            )}
          >
            {ROLE_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                data-role-option="true"
                onClick={() => {
                  onSelect(option.value);
                  setDropdownOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2 text-sm flex items-center justify-between rounded-md transition-colors text-foreground",
                  "hover:bg-shehub-purple/10 focus-visible:bg-shehub-purple/10",
                  "focus-ring-shehub"
                )}
                role="option"
                aria-selected={selectedRole === option.value}
              >
                <span className="text-left">
                  {labelForRole(option.value, t)}
                </span>
                {selectedRole === option.value && (
                  <Check className="h-4 w-4 text-shehub-purple" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleDropdown;
