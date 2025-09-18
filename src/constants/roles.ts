export type RoleKey =
  | "roles.options.backend_developer"
  | "roles.options.frontend_developer"
  | "roles.options.full_stack_developer"
  | "roles.options.ux_ui_designer"
  | "roles.options.product_manager"
  | "roles.options.product_marketing_manager"
  | "roles.options.data_analyst"
  | "roles.options.qa"
  | "roles.options.project_manager"
  | "roles.options.other";

export type RoleOption = { value: string; key: RoleKey };

export const ROLE_OPTIONS: RoleOption[] = [
  { value: "Backend Developer", key: "roles.options.backend_developer" },
  { value: "Frontend Developer", key: "roles.options.frontend_developer" },
  { value: "Full Stack Developer", key: "roles.options.full_stack_developer" },
  { value: "UX/UI Designer", key: "roles.options.ux_ui_designer" },
  { value: "Product Manager", key: "roles.options.product_manager" },
  {
    value: "Product Marketing Manager",
    key: "roles.options.product_marketing_manager",
  },
  { value: "Data Analyst", key: "roles.options.data_analyst" },
  { value: "QA", key: "roles.options.qa" },
  { value: "Project Manager", key: "roles.options.project_manager" },
  { value: "Other", key: "roles.options.other" },
];

export const labelForRole = (value: string, t: (k: string) => string) =>
  t(ROLE_OPTIONS.find((o) => o.value === value)?.key ?? "roles.options.other");
