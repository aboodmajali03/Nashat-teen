import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Heart, Check, Star } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  // Sample product data - in production this would come from the database
  const product = {
    slug: "palm-engraved-cup",
    nameAr: "كوب النخلة المنقوش",
    nameEn: "Palm Engraved Cup",
    description: `كوب فخاري مصنوع يدوياً من أجود أنواع الطين الطبيعي، مزخرف بنقوش النخلة التراثية التي تعكس أصالة الحرفة العربية. كل كوب يحمل بصمة الصانع الفريدة، مما يجعله قطعة فنية لا تُكرر.

يتميز الكوب بتصميمه المريح الذي يناسب اليد، مع مقبض متين وسطح داخلي أملس. النقوش الخارجية تضيف لمسة جمالية فريدة وتُبرز مهارة الحرفي في النحت اليدوي.

هذا الكوب ليس مجرد أداة للشرب، بل هو قطعة من التراث تحكي قصة الأرض والإنسان.`,
    price: "12.00",
    category: "أكواب ونقوش",
    images: ["/images/product-cup.jpg"],
    specifications: [
      { key: "المادة", value: "طين طبيعي 100%" },
      { key: "السعة", value: "350 مل" },
      { key: "الارتفاع", value: "10 سم" },
      { key: "القطر", value: "8 سم" },
      { key: "الوزن", value: "280 غرام" },
      { key: "اللون", value: "بني ترابي طبيعي" },
    ],
    careInstructions: `• يُغسل يدوياً بالماء الفاتر والصابون اللطيف
• تجنب استخدام غسالة الصحون للحفاظ على النقوش
• لا يُستخدم في الميكروويف أو الفرن
• تجنب الصدمات الحرارية المفاجئة
• يُجفف فوراً بعد الغسل لمنع تراكم الرطوبة
• يُعامل بحفظه في مكان جاف بعيداً عن الرطوبة`,
    isHandmade: true,
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 24,
  };

  const relatedProducts = [
    {
      slug: "traditional-hospitality-set",
      nameAr: "طقم الضيافة التراثي",
      price: "28.00",
      image: "/images/product-set.jpg",
    },
    {
      slug: "spice-jar-set",
      nameAr: "مجموعة البهارات الفخارية",
      price: "15.00",
      image: "/images/product-spice.jpg",
    },
    {
      slug: "decorative-serving-tray",
      nameAr: "صينية التقديم المزخرفة",
      price: "18.00",
      image: "/images/product-tray.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-[#5D4037]">
            <Link href="/" className="hover:text-[#8B4513] transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#8B4513] transition-colors">
              المنتجات
            </Link>
            <span>/</span>
            <span className="text-[#8B4513]">{product.nameAr}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-[#F5E6D3] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-9xl">
                  🏺
                </div>
              </div>
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-24 h-24 bg-[#F5E6D3] rounded-lg flex items-center justify-center text-4xl cursor-pointer hover:ring-2 hover:ring-[#8B4513] transition-all"
                  >
                    
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category & Badge */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#A0522D]">{product.category}</span>
                {product.isHandmade && (
                  <span className="badge-handmade flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    صنع يدوي
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723]">
                {product.nameAr}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(product.rating)
                          ? "fill-[#CD853F] text-[#CD853F]"
                          : "text-[#D2B48C]"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#5D4037]">
                  {product.rating} ({product.reviewCount} تقييم)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#8B4513]">
                  {product.price} د.أ
                </span>
                {product.inStock ? (
                  <span className="text-green-600 font-medium">متوفر في المخزن</span>
                ) : (
                  <span className="text-red-600 font-medium">نفذت الكمية</span>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-arabic max-w-none">
                <p className="text-[#5D4037] leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 pt-4">
                <button className="btn-primary flex-1 flex items-center justify-center gap-2 text-lg py-4">
                  <ShoppingCart className="w-5 h-5" />
                  أضف إلى السلة
                </button>
                <button className="p-4 border-2 border-[#8B4513] rounded-lg text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-xl p-6 space-y-4">
                <h3 className="font-bold text-[#3E2723] text-lg">معلومات سريعة</h3>
                <ul className="space-y-2 text-[#5D4037]">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    شحن مجاني للطلبات فوق 15 د.أ
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    إرجاع خلال 14 يوم
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    تغليف آمن للهدايا
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#3E2723] mb-6 text-center">
              المواصفات
            </h2>
            <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr
                      key={spec.key}
                      className={index % 2 === 0 ? "bg-[#FFF8E7]" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-medium text-[#3E2723]">
                        {spec.key}
                      </td>
                      <td className="px-6 py-4 text-[#5D4037]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#3E2723] mb-6 text-center">
              طريقة العناية بالفخار
            </h2>
            <div className="bg-[#FFF8E7] rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#8B4513]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-[#8B4513]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3E2723] mb-2">
                    للحفاظ على جمال قطعة الفخار الخاصة بك
                  </h3>
                  <p className="text-[#5D4037] leading-relaxed whitespace-pre-line">
                    {product.careInstructions}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#3E2723] mb-8 text-center">
              منتجات قد تعجبك أيضاً
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/products/${related.slug}`}
                  className="group"
                >
                  <div className="product-card">
                    <div className="aspect-square bg-[#F5E6D3] flex items-center justify-center text-6xl">
                      🏺
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#3E2723] group-hover:text-[#8B4513] transition-colors">
                        {related.nameAr}
                      </h3>
                      <p className="text-[#8B4513] font-bold mt-2">
                        {related.price} د.أ
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to Products */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="btn-secondary inline-flex items-center gap-2"
            >
              العودة للمنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
