import { SonatrachHeader } from "@/components/SonatrachHeader";
import { equipmentTools } from "@/data/tools-data";
import { Wrench, Clock, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function ToolsDirectory() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SonatrachHeader showBack backTo="/" />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Parc Outils — Clés en Pouces</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Prédiction des clés nécessaires par équipement selon les joints et boulons ANSI.</p>
        </div>

        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-400" />
            <div className="text-sm text-amber-800 dark:text-amber-300">
              <p className="font-semibold">Norme ANSI — Système impérial</p>
              <p>Toutes les cotes sont en pouces ("). Chaque équipement nécessite de 2 à 8 clés différentes selon la diversité des brides.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {equipmentTools.map((eq) => (
            <div key={eq.id} className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
              <button
                onClick={() => setExpanded(expanded === eq.id ? null : eq.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-900">
                    <Wrench className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{eq.id} — {eq.name}</h3>
                    <p className="text-sm text-slate-500">{eq.components.length} composants • {eq.requiredWrenches.length} clés requises</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400 sm:flex">
                    <Clock className="h-3 w-3" />{eq.estimatedDuration}
                  </span>
                  {expanded === eq.id ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                </div>
              </button>

              {expanded === eq.id && (
                <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Composants & Boulons</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                          <tr>
                            <th className="px-4 py-2 font-medium">Composant</th>
                            <th className="px-4 py-2 font-medium">Boulon ANSI</th>
                            <th className="px-4 py-2 font-medium">Qté</th>
                            <th className="px-4 py-2 font-medium">Joint</th>
                            <th className="px-4 py-2 font-medium">Couple</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                          {eq.components.map((c, i) => (
                            <tr key={i}>
                              <td className="px-4 py-2 text-slate-900 dark:text-slate-100">{c.name}</td>
                              <td className="px-4 py-2 font-mono text-slate-700 dark:text-slate-300">{c.boltSize}</td>
                              <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{c.boltCount}</td>
                              <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{c.gasketType}</td>
                              <td className="px-4 py-2 font-mono text-slate-700 dark:text-slate-300">{c.torqueSpec}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Clés Requises ({eq.requiredWrenches.length})</h4>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {eq.requiredWrenches.map((w, i) => (
                        <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-slate-900 dark:text-slate-100">{w.size}</span>
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${w.type === "torque" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : w.type === "socket" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-400"}`}>
                              {w.type}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-slate-500">Carré : {w.drive}</p>
                          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{w.application}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
