import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import { getUnitById } from "@/data/dcs-data";
import { TagTable } from "@/components/TagTable";
import { detectTagsWithClaude } from "@/lib/api";
import { DetectedTag } from "@/types/dcs";
import { SonatrachHeader } from "@/components/SonatrachHeader";
import { Upload, Loader2, Sparkles, ImageIcon, X } from "lucide-react";

export default function DCSDetail() {
  const { unitId } = useParams<{ unitId: string }>();
  const unit = getUnitById(unitId || "");

  const [image, setImage] = useState<string | null>(null);
  const [imageType, setImageType] = useState<string>("");
  const [detected, setDetected] = useState<DetectedTag[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Veuillez sélectionner une image (PNG, JPG)");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      setImage(base64);
      setImageType(file.type);
      setDetected([]);
      setError(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
    },
    [handleFile]
  );

  const handleDetect = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const results = await detectTagsWithClaude(image, imageType);
      setDetected(results);
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'analyse");
    } finally {
      setLoading(false);
    }
  };

  if (!unit) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-600">Unité introuvable</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SonatrachHeader showBack backTo="/" />
      <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{unit.name}</h1>
          <p className="text-slate-600 dark:text-slate-400">{unit.description}</p>
        </div>

        <TagTable tags={unit.defaultTags} title="Tags par défaut" />

        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Détection IA des Tags</h2>
          </div>

          {!image ? (
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-12 transition-colors hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900"
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="dcs-upload"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              <label htmlFor="dcs-upload" className="flex cursor-pointer flex-col items-center gap-3">
                <ImageIcon className="h-10 w-10 text-slate-400" />
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Cliquez ou glissez une capture DCS ici</p>
                  <p className="mt-1 text-xs text-slate-500">PNG, JPG jusqu'à 10 MB</p>
                </div>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-slate-100 dark:text-slate-900">
                  <Upload className="h-3.5 w-3.5" />
                  Sélectionner un fichier
                </span>
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
                <img src={`data:${imageType};base64,${image}`} alt="DCS Screenshot" className="max-h-96 w-full object-contain" />
                <button
                  onClick={() => { setImage(null); setDetected([]); setError(null); }}
                  className="absolute right-2 top-2 rounded-full bg-slate-900/80 p-1.5 text-white backdrop-blur hover:bg-slate-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400">
                  {error}
                </div>
              )}

              <button
                onClick={handleDetect}
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 sm:w-auto"
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Analyse en cours...</>
                ) : (
                  <><Sparkles className="h-4 w-4" /> Détecter Tags (IA)</>
                )}
              </button>
            </div>
          )}

          {detected.length > 0 && (
            <div className="mt-6">
              <TagTable tags={detected} title="Tags détectés par Claude Vision" />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
