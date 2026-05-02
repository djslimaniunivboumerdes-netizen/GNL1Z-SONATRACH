import { dcsUnits } from "@/data/dcs-data";
import { DCSCard } from "@/components/DCSCard";
import { SonatrachHeader } from "@/components/SonatrachHeader";

export default function DCSDirectory() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SonatrachHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">DCS Directory</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Sélectionnez une unité pour consulter ses tags et analyser des captures d'écran par IA.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dcsUnits.map((unit) => (
            <DCSCard key={unit.id} unit={unit} />
          ))}
        </div>
      </main>
    </div>
  );
}
