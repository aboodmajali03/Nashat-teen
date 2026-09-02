"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      slug: "palm-engraved-cup",
      nameAr: "كوب النخلة المنقوش",
      price: 12.00,
      quantity: 2,
      image: "/images/product-cup.jpg",
    },
    {
      id: 2,
      slug: "traditional-cooking-pot",
      nameAr: "قدر الطبخ التقليدي",
      price: 25.00,
      quantity: 1,
      image: "/images/product-pot.jpg",
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
              سلة التسوق
            </h1>
            <p className="text-lg text-[#5D4037]">
              راجع منتجاتك قبل إتمام الطلب
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="max-w-md mx-auto text-center py-16">
              <div className="w-32 h-32 mx-auto mb-6 bg-[#F5E6D3] rounded-full flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-[#8B4513]" />
              </div>
              <h2 className="text-2xl font-bold text-[#3E2723] mb-4">
                سلتك فارغة
              </h2>
              <p className="text-[#5D4037] mb-8">
                يبدو أنك لم تضف أي منتجات إلى سلتك بعد
              </p>
              <Link
                href="/products"
                className="btn-primary inline-flex items-center gap-2"
              >
                تسوق الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="card p-4 flex flex-col sm:flex-row gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 bg-[#F5E6D3] rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                      
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-lg font-bold text-[#3E2723] hover:text-[#8B4513] transition-colors"
                      >
                        {item.nameAr}
                      </Link>
                      <p className="text-[#8B4513] font-bold text-xl">
                        {item.price} د.أ
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center border-2 border-[#D2B48C] rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 text-[#8B4513] hover:bg-[#F5E6D3] transition-colors"
                            aria-label="تقليل الكمية"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-bold text-[#3E2723]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 text-[#8B4513] hover:bg-[#F5E6D3] transition-colors"
                            aria-label="زيادة الكمية"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="text-sm">حذف</span>
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-left sm:text-right">
                      <p className="text-sm text-[#5D4037]">المجموع</p>
                      <p className="text-xl font-bold text-[#8B4513]">
                        {(item.price * item.quantity).toFixed(2)} د.أ
                      </p>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping */}
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-[#8B4513] font-medium hover:underline"
                >
                  <ArrowLeft className="w-5 h-5" />
                  متابعة التسوق
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-[#3E2723] mb-6">
                    ملخص الطلب
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-[#5D4037]">
                      <span>المجموع الفرعي</span>
                      <span>{subtotal.toFixed(2)} د.أ</span>
                    </div>
                    <div className="flex justify-between text-[#5D4037]">
                      <span>الشحن</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600">مجاني</span>
                        ) : (
                          `${shipping} د.أ`
                        )}
                      </span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-sm text-green-600 bg-green-50 p-2 rounded">
                        ✓ شحن مجاني للطلبات فوق 15 د.أ
                      </p>
                    )}
                    <div className="border-t-2 border-[#D2B48C] pt-4">
                      <div className="flex justify-between text-lg font-bold text-[#3E2723]">
                        <span>المجموع الكلي</span>
                        <span className="text-[#8B4513]">
                          {total.toFixed(2)} د.أ
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button className="btn-primary w-full mt-6 py-4 text-lg">
                    إتمام الطلب
                  </button>

                  {/* Trust Badges */}
                  <div className="mt-6 space-y-2 text-sm text-[#5D4037]">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      دفع آمن ومحمي
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      إرجاع خلال 14 يوم
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      شحن سريع وموثوق
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
