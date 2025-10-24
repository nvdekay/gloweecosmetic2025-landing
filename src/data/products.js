// src/data/products.js

// Danh sách bảng màu mắt
export const eyeshadows = [
  {
    id: 1,
    name: "Rosy Dream Palette",
    thumbnail: "/imgs/eyeshadow/es-1.jpg",
    swatches: ["#f6d0e0", "#f1a3c2", "#8b5e83", "#5d3a4f"],
    price: 350000,
  },
  {
    id: 2,
    name: "Sunset Glow Collection",
    thumbnail: "/imgs/eyeshadow/es-2.jpg",
    swatches: ["#ffd4b8", "#ffb89f", "#ff9b7e", "#d97561"],
    price: 380000,
  },
  {
    id: 3,
    name: "Nude Elegance",
    thumbnail: "/imgs/eyeshadow/es-3.jpg",
    swatches: ["#f5e6d3", "#d4b5a0", "#a68872", "#6d5447"],
    price: 320000,
  },
  {
    id: 4,
    name: "Berry Bliss Palette",
    thumbnail: "/imgs/eyeshadow/es-4.jpg",
    swatches: ["#e8c5d6", "#d1879f", "#a84d6f", "#7a3653"],
    price: 365000,
  },
  {
    id: 5,
    name: "Golden Hour",
    thumbnail: "/imgs/eyeshadow/es-5.jpg",
    swatches: ["#f9e4c8", "#e8c597", "#c9a36a", "#8b6f47"],
    price: 340000,
  },
  {
    id: 6,
    name: "Lavender Dreams",
    thumbnail: "/imgs/eyeshadow/es-6.jpg",
    swatches: ["#e6d5f7", "#c9aee3", "#9b7bb8", "#6b548a"],
    price: 355000,
  },
];

// Danh sách bút kẻ mắt
export const eyeliners = [
  {
    id: 1,
    name: "Classic Black Pencil",
    colorName: "Midnight Black",
    swatch: "#000000",
    price: 85000,
    img: "/imgs/eyeliner/el-1.jpg",
  },
  {
    id: 2,
    name: "Soft Brown Liner",
    colorName: "Chocolate",
    swatch: "#5d4037",
    price: 85000,
    img: "/imgs/eyeliner/el-2.jpg",
  },
  {
    id: 3,
    name: "Navy Blue Liner",
    colorName: "Deep Ocean",
    swatch: "#1a237e",
    price: 90000,
    img: "/imgs/eyeliner/el-3.jpg",
  },
  {
    id: 4,
    name: "Plum Perfect",
    colorName: "Berry Plum",
    swatch: "#6a1b4d",
    price: 90000,
    img: "/imgs/eyeliner/el-4.jpg",
  },
  {
    id: 5,
    name: "Emerald Gleam",
    colorName: "Forest Green",
    swatch: "#1b5e20",
    price: 95000,
    img: "/imgs/eyeliner/el-5.webp",
  },
  {
    id: 6,
    name: "Golden Hour Liner",
    colorName: "Metallic Gold",
    swatch: "#d4af37",
    price: 95000,
    img: "/imgs/eyeliner/el-6.jpg",
  },
  {
    id: 7,
    name: "Silver Starlight",
    colorName: "Shimmer Silver",
    swatch: "#c0c0c0",
    price: 95000,
    img: "/imgs/eyeliner/el-7.jpg",
  },
  {
    id: 8,
    name: "Rose Quartz",
    colorName: "Soft Pink Glow",
    swatch: "#d81b60",
    price: 90000,
    img: "/imgs/eyeliner/el-8.jpg",
  },
];

// 💋 Danh sách son môi
export const lipsticks = [
  {
    id: 1,
    name: "Rose Petal Matte",
    colorName: "Soft Rose",
    swatch: "#f1a3c2",
    price: 120000,
    img: "/images/lip-1.jpg",
    finish: "Matte",
  },
  {
    id: 2,
    name: "Coral Kiss",
    colorName: "Coral Bloom",
    swatch: "#ff8a80",
    price: 120000,
    img: "/images/lip-1.jpg",
    finish: "Satin",
  },
  {
    id: 3,
    name: "Berry Crush",
    colorName: "Deep Berry",
    swatch: "#880e4f",
    price: 125000,
    img: "/images/lip-1.jpg",
    finish: "Matte",
  },
  {
    id: 4,
    name: "Nude Blush",
    colorName: "Natural Nude",
    swatch: "#d4a5a5",
    price: 115000,
    img: "/images/lip-1.jpg",
    finish: "Cream",
  },
  {
    id: 5,
    name: "Cherry Red",
    colorName: "Classic Red",
    swatch: "#c62828",
    price: 125000,
    img: "/images/lip-1.jpg",
    finish: "Satin",
  },
  {
    id: 6,
    name: "Peachy Keen",
    colorName: "Peach Sorbet",
    swatch: "#ffb74d",
    price: 120000,
    img: "/images/lip-1.jpg",
    finish: "Glossy",
  },
  {
    id: 7,
    name: "Mauve Magic",
    colorName: "Dusty Mauve",
    swatch: "#b39ddb",
    price: 120000,
    img: "/images/lip-1.jpg",
    finish: "Matte",
  },
  {
    id: 8,
    name: "Pink Paradise",
    colorName: "Hot Pink",
    swatch: "#ec407a",
    price: 120000,
    img: "/images/lip-1.jpg",
    finish: "Glossy",
  },
];

// 💬 Đánh giá khách hàng
export const testimonials = [
  {
    id: 1,
    name: "Linh Nguyễn",
    avatar: "/images/customer-1.jpg",
    text: "Glowee's eyeshadow palettes are absolutely stunning! The colors blend beautifully and last all day. I've received so many compliments!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mai Trần",
    avatar: "/images/customer-1.jpg",
    text: "The lipsticks are so smooth and the color payoff is amazing. I love that they don't dry out my lips. Will definitely buy more!",
    rating: 5,
  },
  {
    id: 3,
    name: "Hương Phạm",
    avatar: "/images/customer-1.jpg",
    text: "Best eyeliner pencils I've ever used! They glide on smoothly and stay put without smudging. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "Anh Lê",
    avatar: "/images/customer-1.jpg",
    text: "I'm obsessed with the Rosy Dream palette! The quality is incredible for the price. Glowee has become my go-to brand.",
    rating: 5,
  },
  {
    id: 5,
    name: "Thu Võ",
    avatar: "/images/customer-1.jpg",
    text: "Fast shipping and beautiful packaging! The products exceeded my expectations. Love supporting Glowee!",
    rating: 5,
  },
  {
    id: 6,
    name: "Trang Đỗ",
    avatar: "/images/customer-1.jpg",
    text: "Perfect for sensitive skin! No irritation and the colors are so pigmented. Thank you Glowee for such amazing products!",
    rating: 5,
  },
];

// ❓ Câu hỏi thường gặp
export const faqs = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "You can order directly through our Shopee store or contact us via Facebook and Instagram messages. We'll guide you through the entire process!",
  },
  {
    id: 2,
    question: "What is your shipping policy?",
    answer:
      "We ship nationwide within Vietnam. Standard shipping takes 2-5 business days. Free shipping for orders over 500,000₫.",
  },
  {
    id: 3,
    question: "Are Glowee products cruelty-free?",
    answer:
      "Yes! All Glowee products are 100% cruelty-free and we never test on animals. We believe in ethical beauty.",
  },
  {
    id: 4,
    question: "Can I return or exchange products?",
    answer:
      "We accept returns and exchanges within 7 days of delivery for unopened products. Please contact us through our social media channels to initiate a return.",
  },
  {
    id: 5,
    question: "How should I store my makeup products?",
    answer:
      "Store in a cool, dry place away from direct sunlight. Keep products tightly closed when not in use to maintain freshness and quality.",
  },
  {
    id: 6,
    question: "Are your products safe for sensitive skin?",
    answer:
      "Most of our products are formulated to be gentle, but we recommend doing a patch test first if you have very sensitive skin. Check product descriptions for specific ingredients.",
  },
];

// Hàm format giá – pure, ổn định, không side effect
export const formatPrice = (price) => {
  if (typeof price !== "number") return "";
  return price.toLocaleString("vi-VN") + "₫";
};
