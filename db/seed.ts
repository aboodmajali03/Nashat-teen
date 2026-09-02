import { db } from "./index";
import { categories, products } from "./schema";

export async function seedDatabase() {
  console.log("Seeding database...");

  // Insert categories
  const insertedCategories = await db
    .insert(categories)
    .values([
      {
        nameAr: "أكواب ونقوش",
        nameEn: "Cups & Mugs",
        description: "أكواب فخارية منقوشة يدوياً بتصاميم تراثية أصيلة",
        slug: "cups-mugs",
      },
      {
        nameAr: "أواني",
        nameEn: "Pottery Vessels",
        description: "أواني فخارية تقليدية بتصاميم أصيلة",
        slug: "pottery-vessels",
      },
      {
        nameAr: "مناظر وتُحف",
        nameEn: "Decor & Artifacts",
        description: "تحف فنية ومناظر منزلية تضيف جمالاً لمساحتك",
        slug: "decor-artifacts",
      },
      {
        nameAr: "أدوات ديكور",
        nameEn: "Decor Tools",
        description: "قطع ديكور فخارية متنوعة لإضفاء لمسة دافئة",
        slug: "decor-tools",
      },
      {
        nameAr: "هدايا ومجموعات",
        nameEn: "Gifts & Sets",
        description: "مجموعات هدايا فاخرة من الفخار اليدوي",
        slug: "gifts-sets",
      },
    ])
    .returning();

  console.log("Categories inserted:", insertedCategories.length);

  // Insert products
  await db.insert(products).values([
    {
      nameAr: "كوب النخلة المنقوش",
      nameEn: "Palm Engraved Cup",
      description: `كوب فخاري مصنوع يدوياً من أجود أنواع الطين الطبيعي، مزخرف بنقوش النخلة التراثية التي تعكس أصالة الحرفة العربية. كل كوب يحمل بصمة الصانع الفريدة، مما يجعله قطعة فنية لا تُكرر.

يتميز الكوب بتصميمه المريح الذي يناسب اليد، مع مقبض متين وسطح داخلي أملس. النقوش الخارجية تضيف لمسة جمالية فريدة وتُبرز مهارة الحرفي في النحت اليدوي.

هذا الكوب ليس مجرد أداة للشرب، بل هو قطعة من التراث تحكي قصة الأرض والإنسان.`,
      price: "12.00",
      categoryId: insertedCategories[0].id,
      specifications: JSON.stringify([
        { key: "المادة", value: "طين طبيعي 100%" },
        { key: "السعة", value: "350 مل" },
        { key: "الارتفاع", value: "10 سم" },
        { key: "القطر", value: "8 سم" },
        { key: "الوزن", value: "280 غرام" },
        { key: "اللون", value: "بني ترابي طبيعي" },
      ]),
      careInstructions: `• يُغسل يدوياً بالماء الفاتر والصابون اللطيف
• تجنب استخدام غسالة الصحون للحفاظ على النقوش
• لا يُستخدم في الميكروويف أو الفرن
• تجنب الصدمات الحرارية المفاجئة
• يُجفف فوراً بعد الغسل لمنع تراكم الرطوبة
• يُعامل بحفظه في مكان جاف بعيداً عن الرطوبة`,
      isHandmade: true,
      inStock: true,
      stockQuantity: 15,
      slug: "palm-engraved-cup",
    },
    {
      nameAr: "طقم الضيافة التراثي",
      nameEn: "Traditional Hospitality Set",
      description: `طقم ضيافة فخاري متكامل يتكون من إبريق و6 أكواب صغيرة، مصمم خصيصاً لتقديم القهوة والشاي بطريقة تراثية أصيلة. كل قطعة في الطقم تحمل نقوشاً هندسية مستوحاة من الفن الإسلامي.

الإبريق يتميز بفوهة دقيقة تتيح الصب السهل دون انسكاب، بينما الأكواب الصغيرة مصممة لتحمل المشروبات الساخنة براحة تامة.

هذا الطقم مثالي لاستقبال الضيوف وإضفاء جو من الدفء والكرم العربي على منزلك.`,
      price: "28.00",
      categoryId: insertedCategories[4].id,
      specifications: JSON.stringify([
        { key: "المادة", value: "فخار طبيعي" },
        { key: "عدد القطع", value: "7 قطع (إبريق + 6 أكواب)" },
        { key: "سعة الإبريق", value: "500 مل" },
        { key: "سعة الكوب", value: "80 مل" },
        { key: "النقش", value: "هندسي إسلامي" },
      ]),
      careInstructions: `• الغسل اليدوي فقط
• تجنب الصدمات الحرارية
• لا يُستخدم على النار مباشرة
• يُحفظ في مكان جاف`,
      isHandmade: true,
      inStock: true,
      stockQuantity: 8,
      slug: "traditional-hospitality-set",
    },
    {
      nameAr: "إناء الزهور الكبير",
      nameEn: "Large Flower Vase",
      description: `إناء فخاري كبير مصمم لعرض الزهور والنباتات الجافة أو الطازجة. يتميز بشكله الأنيق الذي يجمع بين البساطة والفخامة، مع نقوش موجية تضيف حركة بصرية جميلة.

الإناء مصنوع من طين عالي الجودة ومُحرق في درجات حرارة عالية لضمان المتانة. قاعدته العريضة تمنحه استقراراً ممتازاً، بينما فتحته الواسعة تسهل ترتيب الزهور.

قطعة ديكور مثالية لإضفاء لمسة طبيعية ودافئة على أي غرفة في منزلك.`,
      price: "22.00",
      categoryId: insertedCategories[2].id,
      specifications: JSON.stringify([
        { key: "المادة", value: "فخار مُحرق" },
        { key: "الارتفاع", value: "35 سم" },
        { key: "القطر العلوي", value: "12 سم" },
        { key: "القطر السفلي", value: "15 سم" },
        { key: "الوزن", value: "1.2 كغ" },
      ]),
      careInstructions: `• يُمسح بقطعة قماش جافة أو مبللة قليلاً
• تجنب استخدام المواد الكيميائية القاسية
• يُعامل بحذر عند النقل
• لا يُعرض لأشعة الشمس المباشرة لفترات طويلة`,
      isHandmade: true,
      inStock: true,
      stockQuantity: 12,
      slug: "large-flower-vase",
    },
    {
      nameAr: "قدر الطبخ التقليدي",
      nameEn: "Traditional Cooking Pot",
      description: `قدر فخاري تقليدي مصمم للطهي على النار، يعيد إحياء طريقة الطهي القديمة التي تضفي نكهة خاصة على الطعام. الفخار الطبيعي يوزع الحرارة بشكل متساوٍ ويحافظ على العصارة الطبيعية للمأكولات.

مثالي لتحضير اليخنات والمرق والأرز، حيث يمنح الطعام نكهة ترابية أصيلة. الغطاء المحكم يحافظ على الرطوبة ويقلل من وقت الطهي.

استمتع بتجربة طهي صحية وطبيعية مع هذا القدر التراثي.`,
      price: "25.00",
      categoryId: insertedCategories[1].id,
      specifications: JSON.stringify([
        { key: "المادة", value: "فخار طبيعي مقاوم للحرارة" },
        { key: "السعة", value: "3 لتر" },
        { key: "القطر", value: "22 سم" },
        { key: "الارتفاع", value: "15 سم" },
        { key: "يشمل", value: "غطاء فخاري" },
      ]),
      careInstructions: `• يُنقع في الماء قبل الاستخدام الأول لمدة ساعتين
• يُستخدم على نار هادئة إلى متوسطة
• تجنب الصدمات الحرارية (لا يُوضع على نار عالية مباشرة)
• يُغسل يدوياً بعد أن يبرد تماماً
• يُجفف جيداً قبل التخزين
• يمكن استخدامه في الفرن`,
      isHandmade: true,
      inStock: true,
      stockQuantity: 20,
      slug: "traditional-cooking-pot",
    },
    {
      nameAr: "صينية التقديم المزخرفة",
      nameEn: "Decorative Serving Tray",
      description: `صينية فخارية مزخرفة مثالية لتقديم الطعام والمشروبات. تتميز بتصميم دائري أنيق مع نقوش زهرية محفورة يدوياً على الحواف.

السطح الأملس يسهل التنظيف، بينما الحواف المرتفعة تمنع انزلاق الأطباق والأكواب. يمكن استخدامها أيضاً كقطعة ديكور على الطاولة أو الرف.

قطعة متعددة الاستخدامات تجمع بين الجمال والوظيفة.`,
      price: "18.00",
      categoryId: insertedCategories[3].id,
      specifications: JSON.stringify([
        { key: "المادة", value: "فخار مزجج" },
        { key: "القطر", value: "40 سم" },
        { key: "الارتفاع", value: "3 سم" },
        { key: "النقش", value: "زخارف زهرية" },
        { key: "اللون", value: "بيج مع تفاصيل بنية" },
      ]),
      careInstructions: `• يُغسل يدوياً أو في غسالة الصحون على درجة حرارة منخفضة
• تجنب استخدام الأواني الحادة على السطح
• لا تُستخدم في الفرن أو الميكروويف`,
      isHandmade: true,
      inStock: true,
      stockQuantity: 18,
      slug: "decorative-serving-tray",
    },
    {
      nameAr: "مجموعة البهارات الفخارية",
      nameEn: "Spice Jar Set",
      description: `مجموعة أنيقة من 4 أواني فخارية صغيرة مخصصة لحفظ البهارات والتوابل. كل إناء مزود بغطاء محكم يحافظ على نضارة البهارات ورائحتها.

التصميم الصغير والأنيق يجعلها مثالية للوضع على رف المطبخ أو بجانب الموقد. النقوش البسيطة تضيف لمسة جمالية مع الحفاظ على الطابع العملي.

نظّم مطبخك بطريقة أنيقة وعملية مع هذه المجموعة الفخارية.`,
      price: "15.00",
      categoryId: insertedCategories[3].id,
      specifications: JSON.stringify([
        { key: "المادة", value: "فخار طبيعي" },
        { key: "عدد القطع", value: "4 أواني" },
        { key: "سعة كل إناء", value: "150 مل" },
        { key: "الارتفاع", value: "8 سم" },
        { key: "الغطاء", value: "فخاري محكم" },
      ]),
      careInstructions: `• يُغسل يدوياً بالماء الفاتر
• يُجفف جيداً قبل إعادة التعبئة
• تجنب الصدمات الحرارية`,
      isHandmade: true,
      inStock: true,
      stockQuantity: 25,
      slug: "spice-jar-set",
    },
  ]);

  console.log("Products seeded successfully!");
}
