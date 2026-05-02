import { BackButton } from "./BackButton";

export function SonatrachHeader({ showBack = false, backTo }: { showBack?: boolean; backTo?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          {showBack && <BackButton to={backTo} />}
          <div className="flex items-center gap-3">
            <img
              src="/sonatrach-logo.png"
              alt="Sonatrach"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight text-slate-900 dark:text-slate-100">
                GNL1Z
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Complexe de Liquéfaction — Sonatrach
              </p>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-1">
          <a href="/" className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100">DCS</a>
          <a href="/outils" className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100">Outils</a>
          <a href="/levage" className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100">Levage</a>
          <a href="/about" className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100">À Propos</a>
        </nav>
      </div>
    </header>
  );
}
