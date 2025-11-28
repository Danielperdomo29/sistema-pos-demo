export interface Permission {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

export interface ModuleCategory {
  id: string;
  label: string;
  icon: string;
  permissions: Permission[];
}
