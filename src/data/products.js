// Danh sách sản phẩm
export const products = [
  {
    id: 1,
    name: "Bảng phấn mắt đa năng Lemonade Aesthetic Multi-task Palette",
    thumbnail: "/imgs/products/p-1.png",
    swatches: ["#f2d6d7", "#d8a7a7", "#a67873", "#6e4b4f"],
    price: 275000,
  },
  {
    id: 2,
    name: "Bảng phấn mắt đa năng Lemonade Aesthetic Multi-task Palette",
    thumbnail: "/imgs/products/p-2.png",
    swatches: ["#f3dce2", "#d9a8b3", "#a47c89", "#5f4752"],
    price: 275000,
  },
  {
    id: 3,
    name: "Bảng phấn mắt đa năng Lemonade Aesthetic Multi-task Palette",
    thumbnail: "/imgs/products/p-3.png",
    swatches: ["#fde2cf", "#f9b997", "#e28863", "#8b4f3d"],
    price: 275000,
  },
  {
    id: 4,
    name: "Son Kem Lì Thuần Chay Perfect Couple Lip",
    thumbnail: "/imgs/products/p-4.png",
    swatches: ["#ffd6cc", "#ff9e80", "#ff6f61", "#b33c2e"],
    price: 169000,
  },
  {
    id: 5,
    name: "Son Kem Lì Thuần Chay Perfect Couple Lip",
    thumbnail: "/imgs/products/p-5.png",
    swatches: ["#f1d9d9", "#d8a5a5", "#b37c7c", "#6e4e4e"],
    price: 169000,
  },
  {
    id: 6,
    name: "Son Kem Lì Thuần Chay Perfect Couple Lip",
    thumbnail: "/imgs/products/p-6.png",
    swatches: ["#f8d4d8", "#eb9aa4", "#cf6679", "#8a3c4a"],
    price: 169000,
  },
  {
    id: 7,
    name: "Chì Kẻ Mày 2 Đầu Dual Eyebrow",
    thumbnail: "/imgs/products/p-7.jpg",
    swatches: ["#d8c4b2", "#a67c52", "#704214", "#3b2410"],
    price: 160000,
  },
  {
    id: 8,
    name: "Chì Kẻ Mày 2 Đầu Dual Eyebrow",
    thumbnail: "/imgs/products/p-8.jpg",
    swatches: ["#d7ccc0", "#b8a89f", "#8d7b6e", "#5a4b43"],
    price: 160000,
  },
  {
    id: 9,
    name: "Chì Kẻ Mày 2 Đầu Dual Eyebrow",
    thumbnail: "/imgs/products/p-9.jpg",
    swatches: ["#e5d0b5", "#c8a97e", "#a47551", "#6b4a2b"],
    price: 160000,
  },
];

// Đánh giá khách hàng
export const testimonials = [
  {
    id: 1,
    name: "Linh Nguyễn",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "Glowee's eyeshadow palettes are absolutely stunning! The colors blend beautifully and last all day. I've received so many compliments!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mai Trần",
    avatar: "https://i.pravatar.cc/150?img=22",
    text: "The lipsticks are so smooth and the color payoff is amazing. I love that they don't dry out my lips. Will definitely buy more!",
    rating: 5,
  },
  {
    id: 3,
    name: "Hương Phạm",
    avatar: "https://i.pravatar.cc/150?img=36",
    text: "Best eyeliner pencils I've ever used! They glide on smoothly and stay put without smudging. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "Anh Lê",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "I'm obsessed with the Rosy Dream palette! The quality is incredible for the price. Glowee has become my go-to brand.",
    rating: 5,
  },
  {
    id: 5,
    name: "Thu Võ",
    avatar: "https://i.pravatar.cc/150?img=52",
    text: "Fast shipping and beautiful packaging! The products exceeded my expectations. Love supporting Glowee!",
    rating: 5,
  },
  {
    id: 6,
    name: "Trang Đỗ",
    avatar: "https://i.pravatar.cc/150?img=65",
    text: "Perfect for sensitive skin! No irritation and the colors are so pigmented. Thank you Glowee for such amazing products!",
    rating: 5,
  },
];

// Câu hỏi thường gặp
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

// Hàm format giá
export const formatPrice = (price) => {
  if (typeof price !== "number") return "";
  return price.toLocaleString("vi-VN") + "₫";
};
