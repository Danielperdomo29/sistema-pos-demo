import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PermissionsPanel from "./components/PermissionsPanel";
import { systemModules } from "./data/mockData";
import type { ModuleCategory } from "./types";

export default function App() {
  // clonamos los mocks para poder mutar en estado
  const [modules, setModules] = useState<ModuleCategory[]>(() => JSON.parse(JSON.stringify(systemModules)));
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);

  const activeModule = modules.find(m => m.id === activeModuleId) as ModuleCategory;

  const onSelectModule = (id: string) => setActiveModuleId(id);

  const onTogglePermission = (permId: string) => {
    setModules(prev => prev.map(m => m.id === activeModuleId ? {
      ...m,
      permissions: m.permissions.map(p => p.id === permId ? { ...p, isEnabled: !p.isEnabled } : p)
    } : m));
  };

  const onToggleAll = (state: boolean) => {
    setModules(prev => prev.map(m => m.id === activeModuleId ? {
      ...m,
      permissions: m.permissions.map(p => ({ ...p, isEnabled: state }))
    } : m));
  };

  const onSave = () => {
    console.log("Guardando permisos:", JSON.stringify(modules, null, 2));
    alert("Configuración guardada en consola (ver DevTools).");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar modules={modules} activeId={activeModuleId} onSelect={onSelectModule} />

      <main className="flex-1 flex flex-col h-full relative">
        <header className="h-16 bg-white border-b border-slate-200 flex justify-between items-center px-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Gestión de Roles</h1>
              <p className="text-xs text-slate-500">Configura los accesos del sistema</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
            <i className="fa-solid fa-arrow-left"></i> Regresar
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nombre del Rol <span className="text-red-500">*</span></label>
                <input type="text" defaultValue="Administrador" className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none font-medium" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Estado <span className="text-red-500">*</span></label>
                <select className="w-full bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none">
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col md:flex-row overflow-hidden min-h-[600px]">
            <div className="w-full md:w-1/3 border-r border-slate-100 bg-slate-50/50">
              <div className="p-5 border-b border-slate-100">
                <h3 className="font-semibold text-slate-800">Módulos del Sistema</h3>
                <p className="text-xs text-slate-500 mt-1">Selecciona un módulo para ver sus permisos</p>
              </div>

              <div className="p-3">
                {/* Sidebar list is handled by Sidebar component */}
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-white">
              <PermissionsPanel module={activeModule} onTogglePermission={onTogglePermission} onToggleAll={onToggleAll} onSave={onSave} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
