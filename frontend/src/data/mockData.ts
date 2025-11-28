import type { ModuleCategory } from "../types";

export const systemModules: ModuleCategory[] = [
  {
    id: 'stats',
    label: 'Estadísticas',
    icon: 'fa-chart-column',
    permissions: [
      { id: 'view_cat_card', title: 'Card de Categorías', description: 'Visualizar resumen de categorías en dashboard', isEnabled: true },
      { id: 'view_prod_card', title: 'Card de Productos', description: 'Visualizar resumen de productos totales', isEnabled: true },
      { id: 'view_users_card', title: 'Card de Usuarios', description: 'Visualizar métricas de usuarios activos', isEnabled: true },
      { id: 'view_charts_vert', title: 'Gráficas Verticales', description: 'Acceso a gráficas de barras comparativas', isEnabled: false },
      { id: 'view_charts_pie', title: 'Gráficas Circulares', description: 'Acceso a distribución porcentual (Pie Chart)', isEnabled: true },
    ]
  },
  {
    id: 'warehouse',
    label: 'Almacenes',
    icon: 'fa-warehouse',
    permissions: [
      { id: 'wh_create', title: 'Crear Almacén', description: 'Registrar nuevas ubicaciones físicas', isEnabled: false },
      { id: 'wh_edit', title: 'Editar Almacén', description: 'Modificar datos de almacenes existentes', isEnabled: false },
      { id: 'wh_stock', title: 'Ver Stock', description: 'Visualizar existencias actuales', isEnabled: true },
    ]
  },
  {
    id: 'products',
    label: 'Productos',
    icon: 'fa-box-archive',
    permissions: [
      { id: 'prod_list', title: 'Listar Productos', description: 'Ver tabla general de productos', isEnabled: true },
      { id: 'prod_price', title: 'Ver Precios Costo', description: 'Permiso sensible: Ver costo de adquisición', isEnabled: false },
    ]
  },
  {
    id: 'users',
    label: 'Usuarios',
    icon: 'fa-user-group',
    permissions: [
      { id: 'usr_invite', title: 'Invitar Usuarios', description: 'Enviar correos de invitación', isEnabled: true },
    ]
  }
];
