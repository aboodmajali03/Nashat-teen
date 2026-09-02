import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Heart, Star, Users, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "الحب والإتقان",
      description: "نصنع كل قطعة بحب وشغف، نؤمن بأن الفخار ليس مجرد منتج، بل هو تعبير عن الروح",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "الجودة والأصالة",
      description: "نلتزم بأعلى معايير الجودة، ونحافظ على الأصالة التراثية في كل نقشة وتفاصيل",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "دعم الحرفيين",
      description: "ندعم الحرفيين المحليين ونسهم في الحفاظ على هذه الحرفة العريقة للأجيال القادمة",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "الاستدامة",
      description: "نستخدم مواد طبيعية وصديقة للبيئة، ونسعى لتقليل تأثيرنا البيئي",
    },
  ];

  const team = [
    { name: "أم أحمد", role: "الحرفية الرئيسية", specialty: "النقش والتزويق" },
    { name: "أبو محمد", role: "صانع الفخار", specialty: "تشكيل الطين" },
    { name: "فاطمة", role: "مصممة", specialty: "التصاميم التراثية" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-8">
              <img
                src="/images/logo.png"
                alt="شعار نقشة طين"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">
              عن نقشة طين
            </h1>
            <p className="text-xl text-[#5D4037] leading-relaxed">
              فخار يُصنع باليد، ويحكي الحكاية
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="decorative-divider mb-8">
              <span>✦</span>
            </div>

            <h2 className="text-3xl font-bold text-[#8B4513] text-center mb-8">
              لماذا &quot;نقشة طين&quot;؟
            </h2>

            <div className="prose prose-arabic max-w-none space-y-6 text-[#5D4037] text-lg leading-relaxed">
              <p>
                <strong className="text-[#8B4513]">&quot;نقشة طين&quot;</strong>.. اسم يحمل في حروفه دفء الأرض وجمال الحرفة. 
                &quot;النقشة&quot; هي تلك اللمسة الفنية التي يتركها الحرفي على الطين، والخطوط والزخارف التي تحكي قصة 
                وتعبّر عن هوية. و&quot;الطين&quot; هو الأصل، هو المادة الأولى التي منها بدأ الإنسان يصنع أدواته وجمالياته.
              </p>

              <p>
                بدأت حكايتنا من شغف عميق بالفخار التقليدي، ومن رغبة في إحياء هذه الحرفة العريقة وتقديمها 
                بأسلوب يجمع بين الأصالة والمعاصرة. نؤمن أن كل قطعة فخار تحمل روح صانعها، وأن النقوش التي 
                نحتها الحرفي بحب هي بمثابة بصمة فريدة لا تُكرر.
              </p>

              <p>
                في ورشتنا الصغيرة، نعمل بأيدينا ونشكّل الطين بحب، ننقش كل قطعة بتصاميم مستوحاة من تراثنا 
                الغني، من النخلة ومن الزخارف الهندسية الإسلامية، ومن الطبيعة من حولنا. كل كوب، كل إناء، 
                كل صينية.. تحمل قصة وتروي حكاية.
              </p>

              <p>
                هدفنا ليس فقط بيع منتجات فخارية، بل نقل تجربة. تجربة اللمس الدافئ للفخار، وجمال النقوش 
                التي تزيّنه، والشعور بالأصالة والانتماء الذي يمنحه. نريد أن تكون منتجاتنا جزءاً من بيوتكم، 
                من طقوسكم اليومية، من ذكرياتكم.
              </p>

                <p className="text-center font-bold text-[#8B4513] text-xl mt-8">
                &quot;نقشة طين&quot;.. حيث تلتقي الأرض بالفن، وتتحول كل قطعة إلى حكاية
              </p>
              <p className="text-center text-[#A0522D] mt-4">
                من قلب الأردن - الكرك، نصنع لكم أجود المنتجات الفخارية اليدوية
              </p>
            </div>

            <div className="decorative-divider mt-12">
              <span>✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-secondary" id="values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
              قيمنا
            </h2>
            <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
              المبادئ التي نؤمن بها ونسعى لتجسيدها في كل ما نصنعه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-[#FFF8E7] rounded-full flex items-center justify-center text-[#8B4513]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#3E2723] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#5D4037] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
              فريقنا
            </h2>
            <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
              خلف كل قطعة فخار، هناك أيادٍ ماهرة وقلوب محبة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-[#F5E6D3] rounded-full flex items-center justify-center text-5xl">
                  👨🎨
                </div>
                <h3 className="text-xl font-bold text-[#3E2723]">
                  {member.name}
                </h3>
                <p className="text-[#8B4513] font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-sm text-[#5D4037] mt-2">
                  متخصص في: {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              انضم إلى عائلتنا
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              اكتشف مجموعتنا من المنتجات الفخارية اليدوية، واجعل من منزلك مساحة دافئة تعكس جمال التراث والأصالة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-[#8B4513] px-8 py-4 rounded-lg font-bold hover:bg-[#FFF8E7] transition-colors inline-flex items-center justify-center gap-2"
              >
                تسوق الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#8B4513] transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
