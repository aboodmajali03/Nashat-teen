import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Star, Heart, Gift, Leaf } from "lucide-react";

export default function HomePage() {
  const categories = [
    {
      slug: "cups-mugs",
      nameAr: "أكواب ونقوش",
      description: "أكواب فخارية منقوشة يدوياً",
      image: "/images/category-cups.jpg",
      icon: "☕",
    },
    {
      slug: "pottery-vessels",
      nameAr: "أواني",
      description: "أواني فخارية بتصاميم أصيلة",
      image: "/images/product-pot.jpg",
      icon: "🏺",
    },
    {
      slug: "decor-artifacts",
      nameAr: "مناظر وتُحف",
      description: "تحف فنية للمنازل",
      image: "/images/category-decor.jpg",
      icon: "🏺",
    },
    {
      slug: "gifts-sets",
      nameAr: "هدايا ومجموعات",
      description: "مجموعات هدايا فاخرة",
      image: "/images/category-gifts.jpg",
      icon: "🎁",
    },
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "صنع يدوي بشغف",
      description: "كل قطعة تُصنع يدوياً بحرفية عالية واهتمام بأدق التفاصيل",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "مواد طبيعية",
      description: "نستخدم طين طبيعي 100% صديق للبيئة وصحي للاستخدام",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "تصاميم محفورة فريدة",
      description: "نقوش وزخارف تراثية تجعل كل قطعة فريدة لا تُكرر",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "مثالية للهدايا",
      description: "قطع فخارية أنيقة تصلح كهدايا قيمة للأحباب والمناسبات",
    },
  ];

  const featuredProducts = [
    {
      slug: "palm-engraved-cup",
      nameAr: "كوب النخلة المنقوش",
      price: "12.00",
      image: "/images/product-cup.jpg",
      badge: "الأكثر مبيعاً",
    },
    {
      slug: "traditional-hospitality-set",
      nameAr: "طقم الضيافة التراثي",
      price: "28.00",
      image: "/images/product-set.jpg",
      badge: "مجموعة مميزة",
    },
    {
      slug: "large-flower-vase",
      nameAr: "إناء الزهور الكبير",
      price: "22.00",
      image: "/images/product-vase.jpg",
      badge: "جديد",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
          }}
        >
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 fade-in">
            {/* Logo */}
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
              <img
                src="/images/logo.png"
                alt="شعار نقشة طين"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#8B4513] heading-arabic">
              نقشة طين
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-[#A0522D] font-medium">
              لمسة من الأرض.. تتبض بالجمال
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#5D4037] max-w-2xl mx-auto leading-relaxed">
              منتجات فخارية بدوية الصنع.. بتصاميم محفورة تعكس أصالة الطين وجمال التفاصيل
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/products"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                تسوق الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary text-lg px-8 py-4"
              >
                اكتشف قصتنا
              </Link>
            </div>

            {/* Value Proposition Badge */}
            <div className="mt-12 inline-block bg-[#8B4513]/10 backdrop-blur-sm rounded-full px-6 py-3 border border-[#8B4513]/20">
              <p className="text-[#8B4513] font-medium">
                ✨ كل قطعة.. خياية من الطين
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#8B4513] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#8B4513] rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
              لماذا تختار نقشة طين؟
            </h2>
            <p className="text-[#5D4037] max-w-2xl mx-auto">
              نجمع بين الأصالة التراثية والجودة العصرية في كل قطعة نصنعها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#FFF8E7] rounded-full flex items-center justify-center text-[#8B4513]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#3E2723] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#5D4037] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
              تصفح تصنيفاتنا
            </h2>
            <p className="text-[#5D4037] max-w-2xl mx-auto">
              اكتشف مجموعتنا المتنوعة من المنتجات الفخارية اليدوية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group block"
              >
                <div className="card overflow-hidden">
                  <div className="aspect-square bg-[#F5E6D3] flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {category.icon}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-[#3E2723] group-hover:text-[#8B4513] transition-colors">
                      {category.nameAr}
                    </h3>
                    <p className="text-sm text-[#5D4037] mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="btn-secondary inline-flex items-center gap-2"
            >
              عرض جميع التصنيفات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
              منتجات مميزة
            </h2>
            <p className="text-[#5D4037] max-w-2xl mx-auto">
              اخترنا لكم مجموعة من أفضل قطعنا الفخارية
            </p>
          </div>

          <div className="grid-products max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
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
                    {product.badge && (
                      <span className="absolute top-4 right-4 badge-handmade">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-[#8B4513]/0 group-hover:bg-[#8B4513]/10 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#3E2723] group-hover:text-[#8B4513] transition-colors">
                      {product.nameAr}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[#8B4513] font-bold text-lg">
                        {product.price} د.أ
                      </span>
                      <span className="text-sm text-[#5D4037]">
                        مصنوع يدوياً
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="btn-primary inline-flex items-center gap-2"
            >
              عرض جميع المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <img
                src="/images/logo.png"
                alt="شعار نقشة طين"
                className="w-full h-full object-contain"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-6">
              عن نقشة طين
            </h2>
            
            <p className="text-lg text-[#5D4037] leading-relaxed mb-8">
              &quot;نقشة طين&quot; ليست مجرد متجر، بل هي رحلة في عالم الفخار الأصيل. 
              كل قطعة نحملها تحمل في طياتها حكاية الأرض والإنسان، 
              وصُنعت بحب وإتقان لتضيف لمسة دافئة إلى منزلك.
            </p>

            <div className="decorative-divider">
              <span>✦</span>
            </div>

            <Link
              href="/about"
              className="btn-secondary inline-flex items-center gap-2"
            >
              اقرأ المزيد عن قصتنا
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="section-padding bg-[#25D366] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              تواصل معنا مباشرة
            </h2>
            <p className="text-white/90 text-lg mb-8">
              استفسر عن المنتجات، اطلب هدايا خاصة، أو تواصل معنا عبر واتساب مباشرة
            </p>
            <a
              href="https://wa.me/962795226962"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#25D366] px-10 py-4 rounded-xl font-bold text-xl hover:bg-[#F0FDF4] transition-colors shadow-lg"
            >
              <span>تواصل عبر واتساب</span>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
