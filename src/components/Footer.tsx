import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { href: "/products", label: "جميع المنتجات" },
      { href: "/categories/cups-mugs", label: "أكواب ونقوش" },
      { href: "/categories/pottery-vessels", label: "أواني" },
      { href: "/categories/decor-artifacts", label: "مناظر وتُحف" },
      { href: "/categories/gifts-sets", label: "هدايا ومجموعات" },
    ],
    company: [
      { href: "/about", label: "قصتنا" },
      { href: "/about#values", label: "قيمنا" },
      { href: "/contact", label: "تواصل معنا" },
      { href: "/faq", label: "الأسئلة الشائعة" },
    ],
    support: [
      { href: "/shipping", label: "سياسة الشحن" },
      { href: "/returns", label: "الإرجاع والاستبدال" },
      { href: "/privacy", label: "سياسة الخصوصية" },
      { href: "/terms", label: "الشروط والأحكام" },
    ],
  };

  return (
    <footer className="bg-[#3E2723] text-[#F5E6D3]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="شعار نقشة طين" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-white">نقشة طين</h3>
                <p className="text-sm text-[#D2B48C]">فخار يُصنع باليد، ويحكي الحكاية</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#D2B48C]">
              في نقشة طين، نؤمن بأن كل قطعة فخار تحمل روح صانعها. نقدم لكم منتجات فخارية يدوية الصنع، 
              تجمع بين الأصالة التراثية والتصميم العصري.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-[#8B4513]/30 rounded-full hover:bg-[#8B4513] transition-colors text-white font-bold" aria-label="إنستغرام">
                IG
              </a>
              <a href="https://wa.me/962795226962" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#25D366]/30 rounded-full hover:bg-[#25D366] transition-colors text-white font-bold" aria-label="واتساب">
                WA
              </a>
              <a href="https://www.facebook.com/profile.php?id=61593860166971" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#8B4513]/30 rounded-full hover:bg-[#8B4513] transition-colors text-white font-bold" aria-label="فيسبوك">
                FB
              </a>
              <a href="#" className="p-2 bg-[#8B4513]/30 rounded-full hover:bg-[#8B4513] transition-colors text-white font-bold" aria-label="تويتر">
                TW
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">المنتجات</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#D2B48C] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#D2B48C] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#D2B48C]">
                <Mail className="w-5 h-5 text-[#CD853F]" />
                <span className="text-sm">info@naqshatteen.com</span>
              </li>
              <li className="flex items-center gap-3 text-[#D2B48C]">
                <Phone className="w-5 h-5 text-[#CD853F]" />
                <a href="tel:+962795226962" className="hover:text-white transition-colors">+962 795 226 962</a>
              </li>
              <li className="flex items-center gap-3 text-[#D2B48C]">
                <MapPin className="w-5 h-5 text-[#CD853F]" />
                <span className="text-sm">الأردن - الكرك</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#8B4513]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#D2B48C]">
              © {currentYear} نقشة طين. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-[#D2B48C] hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-sm text-[#D2B48C] hover:text-white transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
