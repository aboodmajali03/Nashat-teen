import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      value: "info@naqshatteen.com",
      href: "mailto:info@naqshatteen.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "رقم الهاتف / واتساب",
      value: "+962 795 226 962",
      href: "https://wa.me/962795226962",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "العنوان",
      value: "الأردن - الكرك",
      href: "https://maps.google.com/?q=الكرك,الأردن",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات العمل",
      value: "السبت - الخميس: 9 ص - 6 م",
      href: "#",
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
              تواصل معنا
            </h1>
            <p className="text-lg text-[#5D4037]">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-[#3E2723] mb-6">
                أرسل لنا رسالة
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-[#3E2723] font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-[#3E2723] font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-[#3E2723] font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    placeholder="أدخل رقم هاتفك"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-[#3E2723] font-medium mb-2">
                    الموضوع
                  </label>
                  <select className="input-field">
                    <option value="">اختر الموضوع</option>
                    <option value="inquiry">استفسار عام</option>
                    <option value="order">استفسار عن طلب</option>
                    <option value="custom">طلب خاص</option>
                    <option value="partnership">تعاون وشراكة</option>
                    <option value="feedback">مقترح أو ملاحظة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#3E2723] font-medium mb-2">
                    الرسالة
                  </label>
                  <textarea
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="input-field resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#3E2723] mb-6">
                  معلومات التواصل
                </h2>
                <p className="text-[#5D4037] leading-relaxed mb-8">
                  نسعد بتواصلكم معنا في أي وقت. فريقنا جاهز للإجابة على جميع استفساراتكم 
                  ومساعدتكم في اختيار المنتجات المناسبة لكم.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#FFF8E7] rounded-full flex items-center justify-center text-[#8B4513] group-hover:bg-[#8B4513] group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3E2723]">
                        {info.title}
                      </h3>
                      <p className="text-[#5D4037]">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="card overflow-hidden">
                <div className="aspect-video bg-[#F5E6D3] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#8B4513] mx-auto mb-2" />
                    <p className="text-[#5D4037]">خريطة الموقع</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#3E2723] mb-8 text-center">
              الأسئلة الشائعة
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "كم تستغرق عملية الشحن؟",
                  answer: "تستغرق عملية الشحن عادةً من 3-5 أيام عمل داخل المملكة العربية السعودية.",
                },
                {
                  question: "هل يمكن إرجاع المنتجات؟",
                  answer: "نعم، يمكن إرجاع المنتجات خلال 14 يوم من تاريخ الاستلام في حال كانت بحالتها الأصلية.",
                },
                {
                  question: "هل المنتجات آمنة للاستخدام الغذائي؟",
                  answer: "نعم، جميع منتجاتنا مصنوعة من طين طبيعي 100% وآمنة تماماً للاستخدام الغذائي.",
                },
                {
                  question: "هل يمكن طلب تصاميم خاصة؟",
                  answer: "نعم، نقبل الطلبات الخاصة والتصاميم المخصصة. يرجى التواصل معنا للتفاصيل.",
                },
              ].map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="font-bold text-[#3E2723] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[#5D4037]">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-[#8B4513] font-medium hover:underline">
                عرض جميع الأسئلة الشائعة
              </Link>
            </div>
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
