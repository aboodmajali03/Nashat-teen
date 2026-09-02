import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Filter, Search, ArrowLeft } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      slug: "palm-engraved-cup",
      nameAr: "كوب النخلة المنقوش",
      nameEn: "Palm Engraved Cup",
      description: "كوب فخاري مصنوع يدوياً من أجود أنواع الطين الطبيعي، مزخرف بنقوش النخلة التراثية",
      price: "12.00",
      category: "أكواب ونقوش",
      image: "/images/product-cup.jpg",
      isHandmade: true,
      inStock: true,
    },
    {
      slug: "traditional-hospitality-set",
      nameAr: "طقم الضيافة التراثي",
      nameEn: "Traditional Hospitality Set",
      description: "طقم ضيافة فخاري متكامل يتكون من إبريق و6 أكواب صغيرة",
      price: "28.00",
      category: "هدايا ومجموعات",
      image: "/images/product-set.jpg",
      isHandmade: true,
      inStock: true,
    },
    {
      slug: "large-flower-vase",
      nameAr: "إناء الزهور الكبير",
      nameEn: "Large Flower Vase",
      description: "إناء فخاري كبير مصمم لعرض الزهور والنباتات الجافة أو الطازجة",
      price: "22.00",
      category: "مناظر وتُحف",
      image: "/images/product-vase.jpg",
      isHandmade: true,
      inStock: true,
    },
    {
      slug: "traditional-cooking-pot",
      nameAr: "قدر الطبخ التقليدي",
      nameEn: "Traditional Cooking Pot",
      description: "قدر فخاري تقليدي مصمم للطهي على النار",
      price: "25.00",
      category: "أواني",
      image: "/images/product-pot.jpg",
      isHandmade: true,
      inStock: true,
    },
    {
      slug: "decorative-serving-tray",
      nameAr: "صينية التقديم المزخرفة",
      nameEn: "Decorative Serving Tray",
      description: "صينية فخارية مزخرفة مثالية لتقديم الطعام والمشروبات",
      price: "18.00",
      category: "أدوات ديكور",
      image: "/images/product-tray.jpg",
      isHandmade: true,
      inStock: true,
    },
    {
      slug: "spice-jar-set",
      nameAr: "مجموعة البهارات الفخارية",
      nameEn: "Spice Jar Set",
      description: "مجموعة أنيقة من 4 أواني فخارية صغيرة مخصصة لحفظ البهارات",
      price: "15.00",
      category: "أدوات ديكور",
      image: "/images/product-spice.jpg",
      isHandmade: true,
      inStock: true,
    },
  ];

  const categories = [
    "جميع المنتجات",
    "أكواب ونقوش",
    "أواني",
    "مناظر وتُحف",
    "أدوات ديكور",
    "هدايا ومجموعات",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
              منتجاتنا
            </h1>
            <p className="text-lg text-[#5D4037]">
              اكتشف مجموعتنا الكاملة من المنتجات الفخارية اليدوية
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5D4037]" />
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                className="input-field pr-12"
              />
            </div>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              تصفية
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-[#8B4513] text-white"
                    : "bg-white text-[#5D4037] hover:bg-[#8B4513] hover:text-white border border-[#D2B48C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid-products">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="product-card">
                  <div className="relative aspect-square bg-[#F5E6D3] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      🏺
                    </div>
                    {product.isHandmade && (
                      <span className="absolute top-4 right-4 badge-handmade">
                        صنع يدوي
                      </span>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg bg-red-600 px-4 py-2 rounded">
                          نفذت الكمية
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#8B4513]/0 group-hover:bg-[#8B4513]/10 transition-colors" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#A0522D]">{product.category}</span>
                    <h3 className="text-lg font-bold text-[#3E2723] group-hover:text-[#8B4513] transition-colors mt-1">
                      {product.nameAr}
                    </h3>
                    <p className="text-sm text-[#5D4037] mt-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[#8B4513] font-bold text-xl">
                        {product.price} د.أ
                      </span>
                      <span className="text-sm text-[#A0522D]">
                        {product.inStock ? "متوفر" : "غير متوفر"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="btn-secondary inline-flex items-center gap-2"
            >
              العودة للرئيسية
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
