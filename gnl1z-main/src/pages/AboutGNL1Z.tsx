import { SonatrachHeader } from "@/components/SonatrachHeader";
import { Factory, Shield, Droplets, Flame, MapPin, Users, Wrench, TrendingUp } from "lucide-react";

export default function AboutGNL1Z() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SonatrachHeader showBack backTo="/" />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Complexe GNL1Z</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Unité de liquéfaction de gaz naturel — Sonatrach</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <MapPin className="h-4 w-4" />
            Zone industrielle — Boumerdès, Algérie
          </div>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Factory, label: "Trains de production", value: "4 unités" },
            { icon: Droplets, label: "Capacité nominale", value: "4.7 Mt/an" },
            { icon: Flame, label: "Procédé", value: "APCI C3-MR" },
            { icon: Users, label: "Personnel", value: "850+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-slate-700 dark:text-slate-300" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <section className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-slate-900 p-2 text-white dark:bg-slate-100 dark:text-slate-900"><Factory className="h-5 w-5" /></div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Description du Procédé</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>Le complexe <strong>GNL1Z</strong> constitue l'une des unités stratégiques de liquéfaction de gaz naturel du groupe Sonatrach. Le procédé de liquéfaction adopté repose sur la technologie <strong>APCI C3-MR</strong> (Propane Pre-Cooled Mixed Refrigerant), permettant d'atteindre des températures cryogéniques de <strong>−162 °C</strong> nécessaires à la condensation du méthane.</p>
              <p>Le gaz naturel brut, après prétraitement (déshydratation, élimination du mercure et des hydrocarbures lourds), traverse successivement les trains de liquéfaction. Chaque train (Train 100, Train 200) comprend des sections de compression de réfrigérant, d'échange thermique multi-niveaux, et de stockage cryogénique.</p>
              <p>Les unités utilitaires (Unité 500) assurent la production de vapeur moyenne pression, l'air instrument, l'eau déminéralisée et l'électricité de secours. L'Unité 600 gère l'expédition des produits finis vers les méthaniers.</p>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-slate-900 p-2 text-white dark:bg-slate-100 dark:text-slate-900"><Shield className="h-5 w-5" /></div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Instrumentation & Sécurité</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>Le système de contrôle distribué (DCS) supervise plus de <strong>12 000 points I/O</strong> répartis sur l'ensemble du complexe. L'architecture instrumentale suit la norme <strong>ISA-5.1</strong> avec une codification rigoureuse :</p>
              <ul className="ml-6 list-disc space-y-2">
                <li><strong>PT / TT / FT / LT</strong> : Transmetteurs de pression, température, débit et niveau</li>
                <li><strong>FCV / LCV / TCV</strong> : Vannes de régulation avec positionneur intelligent</li>
                <li><strong>XV / HV / SDV</strong> : Vannes tout-ou-rien et vannes de sécurité (ESD)</li>
                <li><strong>PSH / PSL / TSH / LSHH</strong> : Interrupteurs de sécurité process</li>
                <li><strong>SIS (Safety Instrumented System)</strong> : Indépendant du DCS, SIL 3</li>
              </ul>
              <p>Le système DCS permet la conduite automatique des trains, la gestion des alarmes hiérarchisées, et l'enregistrement historique des tendances pour l'analyse de performance et la maintenance prédictive.</p>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-slate-900 p-2 text-white dark:bg-slate-100 dark:text-slate-900"><Wrench className="h-5 w-5" /></div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Maintenance & Fiabilité</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>La stratégie de maintenance repose sur un mixte de <strong>maintenance préventive systématique</strong> et <strong>maintenance conditionnelle</strong>. Les arrêts techniques majeurs (Turnaround) sont planifiés tous les 4 à 5 ans.</p>
              <p>Les équipements critiques (compresseurs centrifuges, turbines à gaz, échangeurs cryogéniques à plaques brasées) font l'objet d'un suivi vibratoire continu et d'une thermographie infrarouge périodique. Le parc d'outillage spécialisé inclut des clés dynamométriques en pouces, des vérins hydrauliques de 100 tonnes, et des grues tout-terrain de 300 tonnes pour les levages lourds.</p>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-slate-900 p-2 text-white dark:bg-slate-100 dark:text-slate-900"><TrendingUp className="h-5 w-5" /></div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Performance & Environnement</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>Le complexe GNL1Z maintient un taux de disponibilité supérieur à <strong>95 %</strong> avec une consommation spécifique d'énergie compétitive. Les émissions sont traitées via des systèmes de récupération des vapeurs (VRU) et des torchères à haute efficacité de combustion.</p>
              <p>L'unité respecte les normes internationales <strong>ISO 14001</strong> et <strong>OHSAS 18001</strong>, avec un système de management intégré (SMI) couvrant la qualité, la sécurité et l'environnement.</p>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
          <p>© 2026 Sonatrach — Complexe GNL1Z. Tous droits réservés.</p>
          <p className="mt-1">Direction Maintenance & Instrumentation</p>
        </div>
      </main>
    </div>
  );
}
