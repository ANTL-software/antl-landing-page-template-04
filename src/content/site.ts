import atelierDiagnostic from "../assets/atelier-diagnostic.jpg";
import modernSuv from "../assets/hero-modern-suv.jpg";
import blueCrossover from "../assets/vehicle-blue-crossover.jpg";
import whiteHatchback from "../assets/vehicle-white-hatchback.jpg";
import type { VehicleSite } from "../types";

export const site: VehicleSite = {
  brand: "Garage Élan",
  navigation: [{ label: "Nos véhicules", href: "#collection" }, { label: "L’atelier", href: "#atelier" }, { label: "Services", href: "#methode" }],
  headerCta: { label: "Nous contacter", href: "#contact" },
  hero: { eyebrow: "Vente · Entretien · Reprise — près de chez vous", title: "La bonne voiture,\nau bon moment.", text: "Des véhicules récents, vérifiés et prêts à partir. Ici, on prend le temps de vous conseiller, simplement.", cta: { label: "Voir les véhicules", href: "#collection" }, image: { src: modernSuv, alt: "SUV gris récent devant un garage moderne", position: "center" } },
  collection: {
    eyebrow: "Véhicules disponibles", title: "Votre prochaine voiture est peut-être ici.", text: "Citadines, familiales et SUV : une sélection courte de véhicules révisés, avec un historique clair et une garantie adaptée.",
    items: [
      { name: "Citadine essence", year: "2021", description: "5 portes · 62 000 km", image: { src: whiteHatchback, alt: "Citadine blanche récente sur le parc du garage" }, href: "#contact" },
      { name: "SUV électrique", year: "2023", description: "Autonomie 460 km · 18 500 km", image: { src: blueCrossover, alt: "SUV électrique bleu récent sur le parc du garage" }, href: "#contact" },
      { name: "SUV hybride", year: "2024", description: "Boîte auto · 12 000 km", image: { src: modernSuv, alt: "SUV gris récent devant un garage moderne" }, href: "#contact" },
    ],
  },
  story: { eyebrow: "L’atelier", title: "Entretenue avec soin.\nPrête à rouler longtemps.", text: "Nos techniciens contrôlent chaque véhicule avant sa mise en vente et assurent aussi l’entretien courant de votre voiture, quelle que soit sa marque.", image: { src: atelierDiagnostic, alt: "Technicien réalisant un diagnostic sur un SUV récent dans l’atelier" }, fact: "100 % des véhicules contrôlés avant livraison" },
  approach: { eyebrow: "Nos services", title: "Bien plus qu’une vente.", steps: [{ number: "01", title: "Véhicules révisés", text: "Chaque véhicule est contrôlé, préparé et présenté avec ses informations essentielles." }, { number: "02", title: "Reprise & financement", text: "Nous étudions votre reprise et trouvons une solution de financement adaptée à votre projet." }, { number: "03", title: "Entretien local", text: "Révision, pneumatiques et réparations : l’atelier reste à vos côtés après votre achat." }] },
  contact: { eyebrow: "Passer nous voir", title: "Un projet auto ? Parlons-en.", text: "Dites-nous ce que vous cherchez ou venez découvrir les véhicules disponibles au garage.", cta: { label: "Prendre rendez-vous", href: "mailto:bonjour@garage-elan.fr" }, note: "Du lundi au samedi · Essai sur rendez-vous" },
  footer: { city: "Votre ville · France", email: "bonjour@garage-elan.fr", copyright: "© 2026 Garage Élan" },
  sections: [{ id: "collection", enabled: true }, { id: "story", enabled: true }, { id: "approach", enabled: true }, { id: "contact", enabled: true }],
};
