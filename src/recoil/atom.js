import { atom } from "recoil";

export const cart = atom({
  key: "cart",
  default: [],
});

export const fliterCat = atom({
  key: "filter-cat",
  default: null,
});

export const Category = atom({
  key: "category",
  default: [
    {
      label: "Watch",
      key: "watch",
    },
    {
      label: "Bag",
      key: "bag",
    },
    {
      label: "Shoes",
      key: "shoes",
    },
  ],
});

// TODO: CHange the image link and image name in the json it will update in the product list
export const Products = atom({
  key: "products",
  default: [
    {
      label: "Sonata",
      key: "test_1",
      des: "Sonata analog watch",
      price: "1999",
      image: "images/watch.jpg",
      category: "watch",
    },
    {
      label: "Desial",
      key: "test_2",
      des: "Desial digital watch",
      price: "3000",
      image: "images/watch1.jpg",
      category: "watch",
    },
    {
      label: "Titan",
      key: "test_3",
      des: "Titan analog watch",
      price: "4000",
      image: "images/watch2.jpg",
      category: "watch",
    },
    {
      label: "Fastrack",
      key: "test_4",
      des: "Fastrack smart watck",
      price: "5000",
      image: "images/watch3.jpg",
      category: "watch",
    },
    {
      label: "Nike",
      key: "test_5",
      des: "Nike running shoe",
      price: "2500",
      image: "images/shoe2.jpg",
      category: "shoes",
    },
    {
      label: "Spartz",
      key: "test_6",
      des: "Spartz sneakers",
      price: "1200",
      image: "images/shoe1.jpg",
      category: "shoes",
    },
    {
      label: "Kitex",
      key: "test_7",
      des: "Kitex polyster bag",
      price: "1000",
      image: "images/bag1.jpg",
      category: "bag",
    },
    {
      label: "Adidas",
      key: "test_8",
      des: "Adidas ladys bag",
      price: "4500",
      image: "images/bag2.jpg",
      category: "bag",
    },
  ],
});
