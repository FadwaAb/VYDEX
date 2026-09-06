// Les images depuis src/assets/slides/
import laptopImg from "../assets/laptop.png";
import ecranImg from "../assets/ecran.png";
import accessoiresImg from "../assets/access.png";
import gamingImg from "../assets/gaming.png";

import { BadgeCheck, RefreshCcw, ShieldCheck, Tag } from "lucide-react";

/* ==========================================
   Les 4 slides — beddel ghir hna
   ========================================== */
export const slides = [
  {
    id: "laptops",
    image: laptopImg,
    alt: "Laptop moderne",
    titleTop: "LA TECHNOLOGIE",
    titleBottom: "QUI VOUS",
    accent: "PROPULSE",          // ← le mot en jaune
    description:
      "Découvrez nos laptops puissants, accessoires et équipements de qualité supérieure.",
    buttonText: "Découvrir maintenant",
  },
  {
    id: "ecrans",
    image: ecranImg,
    alt: "Écran moderne",
    titleTop: "UNE IMAGE QUI",
    titleBottom: "VOUS",
    accent: "IMMERGE",
    description:
      "Écrans haute résolution, couleurs éclatantes et fluidité exceptionnelle pour une expérience visuelle unique.",
    buttonText: "Explorer les écrans",
  },
  {
    id: "accessoires",
    image: accessoiresImg,
    alt: "Accessoires informatiques",
    titleTop: "LE CONFORT À",
    titleBottom: "PORTÉE DE",
    accent: "MAIN",
    description:
      "Claviers, souris, casques et accessoires ergonomiques pour booster votre productivité au quotidien.",
    buttonText: "Voir les accessoires",
  },
  {
    id: "gaming",
    image: gamingImg,
    alt: "Setup gaming",
    titleTop: "PASSEZ AU NIVEAU",
    titleBottom: "",             // ← khawiya 7it l'accent houwa ligne kaml
    accent: "SUPÉRIEUR",
    description:
      "Setups gaming haute performance : PC, écrans 144Hz, périphériques RGB et casques immersifs.",
    buttonText: "Entrer dans le game",
  },
];

/* ==========================================
   Les 4 avantages — fixes
   ========================================== */
export const perks = [
  { icon: BadgeCheck, title: "Produits testés", sub: "Qualité garantie" },
  { icon: Tag, title: "Meilleurs prix", sub: "Prix imbattables" },
  { icon: RefreshCcw, title: "Satisfait ou remboursé", sub: "Sous 7 jours" },
  { icon: ShieldCheck, title: "Marques fiables", sub: "HP, Dell, Lenovo..." },
];