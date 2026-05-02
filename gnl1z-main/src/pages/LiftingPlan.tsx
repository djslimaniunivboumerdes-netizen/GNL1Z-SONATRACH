import { SonatrachHeader } from "@/components/SonatrachHeader";
import { liftingPlans } from "@/data/lifting-data";
import { Crane, Scale, Ruler, Clock, ShieldAlert, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function LiftingPlanPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SonatrachHeader showBack backTo="/" />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Plans de Levage</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Spécifications des grues nécessaires par équipement selon le poids et la hauteur.</p>
        </div>

        <div className="space-y-4">
          {liftingPlans.map((plan) => (
            <div key={plan.id} className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
              <button
                onClick={() => setExpanded(expanded === plan.id ? null : plan.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`rounded-lg p-2 ${plan.weightTons > 50 ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : plan.weightTons > 15 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"}`}>
                    <Crane className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{plan.equipmentId} — {plan.equipmentName}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Scale className="h-3.5 w-3.5" />{plan.weightTons} T</span>
                      <span className="flex items-center gap-1"><Crane className="h-3.5 w-3.5" />{plan.craneRequired}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{plan.estimatedTime}</span>
                    </div>
                  </div>
                </div>
                {expanded === plan.id ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
              </button>

              {expanded === plan.id && (
                <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Configuration Grue</h4>
                      <div className="space-y-3">
                        {[
                          { label: "Grue requise", value: plan.craneRequired },
                          { label: "Configuration", value: plan.craneConfig },
                          { label: "Longueur flèche", value: plan.boomLength },
                          { label: "Rayon", value: plan.radius },
                          { label: "Hauteur levage", value: plan.liftingHeight },
                          { label: "Centre de gravité", value: plan.centerOfGravity },
                        ].map((item) => (
                          <div key={item.label} className="flex justify-between rounded-lg bg-slate-50 px-4 py-2 dark:bg-slate-900">
                            <span className="text-sm text-slate-600 dark:text-slate-400">{item.label}</span>
                            <span className="text-right text-sm font-medium text-slate-900 dark:text-slate-100">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Élingage & Sécurité</h4>
                      <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Matériel d'élingage</p>
                        <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">{plan.rigging}</p>
                      </div>

                      {plan.permitRequired && (
                        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                          <ShieldAlert className="h-4 w-4" />
                          <span className="font-semibold">Permis de levage obligatoire</span>
                        </div>
                      )}

                      <div>
                        <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">Restrictions</p>
                        <ul className="space-y-2">
                          {plan.restrictions.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                              <Ruler className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
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
