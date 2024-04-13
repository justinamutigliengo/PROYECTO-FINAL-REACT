const products = [
  {
    id: 1,
    title: "Top Clouds Crop",
    price: 25000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/top1.webp",
    stock: 10,
  },
  {
    id: 2,
    title: "Top Helene",
    price: 20000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/top2.webp",
    stock: 14,
  },
  {
    id: 3,
    title: "Top Rock Colors",
    price: 22000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/top3.webp",
    stock: 15,
  },
  {
    id: 4,
    title: "Top Suri New",
    price: 23000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/top1.webp",
    stock: 20,
  },
  {
    id: 5,
    title: "Pantalón Arizona",
    price: 35000,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/pantalon1.webp",
    stock: 10,
  },
  {
    id: 6,
    title: "Babucha New Josephine",
    price: 34000,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/pantalon2.webp",
    stock: 12,
  },
  {
    id: 7,
    title: "Pantalon Recto New Cuero",
    price: 32400,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/pantalon3.webp",
    stock: 20,
  },
  {
    id: 8,
    title: "Pantalon Slit Shine",
    price: 32700,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../src/assets/images/pantalon4.jpg",
    stock: 15,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

// export const getProductByCategory = (category) => {
//   return products.find((prod) => prod.category == category);
// };
