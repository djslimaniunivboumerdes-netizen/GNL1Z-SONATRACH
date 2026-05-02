import { DCSUnit } from "@/types/dcs";
import { useNavigate } from "react-router-dom";

export function DCSCard({ unit }: { unit: DCSUnit }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/dcs/${unit.id}`)}
      className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{unit.name}</h3>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {unit.defaultTags.length} tags
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">{unit.description}</p>
      <div className="space-y-2">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-500">Tags connus :</p>
        <div className="flex flex-wrap gap-1.5">
          {unit.defaultTags.map((tag) => (
            <span
              key={tag.tag}
              className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-600/20 dark:bg-slate-900 dark:text-slate-300"
            >
              {tag.tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
