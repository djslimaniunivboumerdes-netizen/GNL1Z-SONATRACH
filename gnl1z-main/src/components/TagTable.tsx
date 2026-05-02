import { DCSTag, DetectedTag } from "@/types/dcs";

type Tag = DCSTag | DetectedTag;

export function TagTable({ tags, title }: { tags: Tag[]; title: string }) {
  if (tags.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th className="px-6 py-3 font-medium">Tag</th>
              <th className="px-6 py-3 font-medium">Type</th>
              <th className="px-6 py-3 font-medium">Description</th>
              <th className="px-6 py-3 font-medium">Valeur</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {tags.map((t, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                <td className="px-6 py-3 font-mono font-medium text-slate-900 dark:text-slate-100">{(t as any).tag}</td>
                <td className="px-6 py-3">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400">
                    {(t as any).type}
                  </span>
                </td>
                <td className="px-6 py-3 text-slate-600 dark:text-slate-400">{(t as any).description}</td>
                <td className="px-6 py-3 font-mono text-slate-700 dark:text-slate-300">
                  {(t as any).value || (t as any).defaultValue || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
