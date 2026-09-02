import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoriesPage() {
  const categories = [
    {
      slug: "cups-mugs",
      nameAr: "أكواب ونقوش",
      nameEn: "Cups & Mugs",
      description: "أكواب فخارية منقوشة يدوياً بتصاميم تراثية أصيلة. كل كوب يحمل نقوشاً فريدة تحكي قصة الحرفة والإتقان.",
      productCount: 12,
      icon: "☕",
      color: "#A0522D",
    },
    {
      slug: "pottery-vessels",
      nameAr: "أواني",
      nameEn: "Pottery Vessels",
      description: "أواني فخارية تقليدية بتصاميم أصيلة. تعكس جمال التراث الأردني الأصيل.",
      productCount: 8,
      icon: "",
      color: "#8B4513",
    },
    {
      slug: "decor-artifacts",
      nameAr: "مناظر وتُحف",
      nameEn: "Decor & Artifacts",
      description: "تحف فنية ومناظر منزلية تضيف جمالاً لمساحتك. قطع ديكور فخارية أنيقة تعكس الذوق الأصيل.",
      productCount: 15,
      icon: "🏺",
      color: "#CD853F",
    },
    {
      slug: "decor-tools",
      nameAr: "أدوات ديكور",
      nameEn: "Decor Tools",
      description: "قطع ديكور فخارية متنوعة لإضفاء لمسة دافئة على منزلك. صواني، أواني بهارات، وقطع زينة متعددة الاستخدامات.",
      productCount: 10,
      icon: "✨",
      color: "#D2691E",
    },
    {
      slug: "gifts-sets",
      nameAr: "هدايا ومجموعات",
      nameEn: "Gifts & Sets",
      description: "مجموعات هدايا فاخرة من الفخار اليدوي. مثالية للمناسبات والأعياد، تُقدّم بتغليف أنيق.",
      productCount: 6,
      icon: "🎁",
      color: "#DEB887",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
              تصنيفات المنتجات
            </h1>
            <p className="text-lg text-[#5D4037]">
              تصفح منتجاتنا حسب الفئة واكتشف ما يناسب ذوقك
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <div className="card overflow-hidden h-full">
                  <div 
                    className="aspect-[4/3] flex items-center justify-center text-8xl transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    {category.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h2 
                        className="text-2xl font-bold transition-colors"
                        style={{ color: category.color }}
                      >
                        {category.nameAr}
                      </h2>
                      <span className="text-sm text-[#5D4037] bg-[#F5E6D3] px-3 py-1 rounded-full">
                        {category.productCount} منتج
                      </span>
                    </div>
                    <p className="text-[#5D4037] leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#8B4513] font-medium group-hover:gap-4 transition-all">
                      تصفح المنتجات
                      <ArrowLeft className="w-5 h-5" />
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
