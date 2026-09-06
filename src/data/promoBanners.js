import accessoiresImg from "../assets/acess2.png";
import livraisonImg from "../assets/maps.png";

export const promoBanners = [
  {
    id: "accessoires",
    variant: "violet",
    title: "NOUVELLE COLLECTION\nACCESSOIRES",
    description: "Découvrez nos accessoires de qualité supérieure.",
    buttonText: "Voir la collection",
    image: accessoiresImg,
    alt: "Nouvelle collection accessoires",
  },
  {
    id: "livraison",
    variant: "green",
    title: "LIVRAISON\nPARTOUT AU MAROC",
    description: "Recevez vos commandes rapidement où que vous soyez.",
    buttonText: null,              // ← null = bla bouton
    image: livraisonImg,
    alt: "Livraison partout au Maroc",
  },
];