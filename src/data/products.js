import dellImg from "../assets/products/P1.png";
import lenovoImg from "../assets/products/P2.png";
import hpImg from "../assets/products/P3.png";
import asusImg from "../assets/products/P4.png";
import macbookImg from "../assets/products/P5.png";
import acerImg from "../assets/products/P6.png";

export const products = [
  {
    id: 1,
    name: "Dell Latitude 7400",
    specs: "Core i7 • 16GB RAM • 512GB SSD",
    price: "4 100",
    oldPrice: "4 600",          // ← zedna
    badge: { type: "new", label: "NEW" },
    image: dellImg,
  },
  {
    id: 2,
    name: "Lenovo ThinkPad T480",
    specs: "Core i5 • 8GB RAM • 256GB SSD",
    price: "2 600",
    oldPrice: "2 900",          // ← zedna
    badge: { type: "top", label: "TOP" },
    image: lenovoImg,
  },
  {
    id: 3,
    name: "HP ProBook 450 G6",
    specs: "Core i5 • 8GB RAM • 256GB SSD",
    price: "2 400",
    oldPrice: "2 700",          // ← zedna
    badge: { type: "new", label: "NEW" },
    image: hpImg,
  },
  {
    id: 4,
    name: "Asus VivoBook X509",
    specs: "Core i3 • 4GB RAM • 1TB HDD",
    price: "2 100",
    oldPrice: "2 450",
    badge: { type: "promo", label: "-15%" },
    image: asusImg,
  },
  {
    id: 5,
    name: "MacBook Air M1",
    specs: "Apple M1 • 8GB RAM • 256GB SSD",
    price: "7 900",
    oldPrice: "8 900",          // ← zedna
    badge: { type: "top", label: "TOP" },
    image: macbookImg,
  },
  {
    id: 6,
    name: "Acer Swift 3",
    specs: "Ryzen 5 • 16GB RAM • 512GB SSD",
    price: "3 200",
    oldPrice: "3 800",
    badge: { type: "promo", label: "-16%" },
    image: acerImg,
  },
];