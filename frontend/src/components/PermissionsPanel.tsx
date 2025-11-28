import React from "react";
import type { ModuleCategory } from "../types";

type Props = {
  module: ModuleCategory;
  onTogglePermission: (permId: string) => void;
  onToggleAll: (state: boolean) => void;
  onSave: () => void;
};

export default function PermissionsPanel({ module, onTogglePermission, onToggleAll, onSave }: Props) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
        <div>
          <h3 className="font-semibold text-slate-800">Permisos de {module.label}</h3>
          <p className="text-xs text-slate-500 mt-1">Habilita o deshabilita acciones específicas</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onToggleAll(true)} className="text-xs font-medium text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded">
            Marcar todo
          </button>
        </div>
      </div>

      <div className="p-5 space-y-4 overflow-auto">
        {module.permissions.length === 0 ? (
          <div className="text-center text-slate-400 py-10">No hay permisos configurables para este módulo.</div>
        ) : (
          module.permissions.map((perm) => (
            <div key={perm.id} className={`flex justify-between items-center p-4 border rounded-xl transition-all duration-200 ${perm.isEnabled ? "bg-indigo-50/30 border-indigo-200" : "bg-white border-slate-200"}`}>
              <div>
                <p className={`text-sm font-bold ${perm.isEnabled ? "text-indigo-900" : "text-slate-700"}`}>{perm.title}</p>
                <p className="text-xs text-slate-500 mt-1">{perm.description}</p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={perm.isEnabled}
                  onChange={() => onTogglePermission(perm.id)}
                  className="sr-only"
                />
                <div className="w-11 h-6 bg-slate-200 rounded-full after:content-[''] relative after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          ))
        )}

        <div className="mt-4 flex justify-end gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-medium hover:bg-slate-50 transition-colors">Cancelar</button>
          <button onClick={onSave} className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5">
            <i className="fa-solid fa-save mr-2"></i> Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
