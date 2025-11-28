import React from "react";
import type { ModuleCategory } from "../types";

type Props = {
  modules: ModuleCategory[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function Sidebar({ modules, activeId, onSelect }: Props) {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-10 transition-all duration-300">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900">
        <i className="fa-solid fa-feather-pointed text-indigo-500 text-xl mr-3"></i>
        <span className="font-bold text-white text-lg tracking-wide">POS SYSTEM</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 space-y-1 px-3">
        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">General</p>

        {modules.map((mod) => {
          const isActive = mod.id === activeId;
          return (
            <button
              key={mod.id}
              onClick={() => onSelect(mod.id)}
              className={`w-full text-left cursor-pointer flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                isActive ? "bg-slate-800 text-white border-l-4 border-indigo-500" : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <i className={`fa-solid ${mod.icon} w-6 text-center ${isActive ? "text-indigo-400" : "text-slate-500"}`}></i>
              <span className="ml-2 text-sm font-medium">{mod.label}</span>
            </button>
          );
        })}

        <div className="mt-4 px-3">
          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-slate-800 text-white">
            <div className="flex items-center">
              <i className="fa-solid fa-gear w-6 text-indigo-500"></i>
              <span className="ml-2 text-sm font-medium">Configuración</span>
            </div>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </div>
          <div className="pl-6 mt-1 space-y-1">
            <div className="block px-3 py-2 text-sm text-indigo-400 font-medium bg-slate-800/50 rounded-md">Roles</div>
            <div className="block px-3 py-2 text-sm hover:text-white transition-colors">Permisos</div>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-800 text-xs text-center text-slate-500">
        &copy; 2024 TechPOS v2.0
      </div>
    </aside>
  );
}
