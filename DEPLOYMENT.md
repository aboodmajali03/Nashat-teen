# دليل النشر على Vercel و Netlify

## ✅ متطلبات ما قبل النشر

### 1. متغيرات البيئة (Environment Variables)

يجب إضافة المتغير التالي في لوحة تحكم منصة النشر:

| المتغير | القيمة المقترحة | الوصف |
|---------|----------------|-------|
| `DATABASE_URL` | `postgresql://user:password@host:port/database` | رابط قاعدة بيانات PostgreSQL |

**هام:** بدون `DATABASE_URL` سيفشل البناء لأن `src/db/index.ts` يتوقع وجود هذا المتغير.

### 2. حل مشكلة DATABASE_URL المفقود

إذا لم تكن تريد استخدام قاعدة بيانات، عدّل `src/db/index.ts`:

```typescript
const databaseUrl = process.env.DATABASE_URL || "postgresql://localhost:5432/naqshat";
```

أو احذف التحقق من وجود المتغير.

## 📁 هيكل المشروع (Root Directory)

```
naqshat-teen/
├── package.json          ✓ في الجذر
├── next.config.ts        ✓ في الجذر
├── vercel.json           ✓ في الجذر
├── netlify.toml          ✓ في الجذر
├── src/
│   └── app/              ✓ مجلد Next.js App Router
│       ├── page.tsx
│       ├── layout.tsx
│       └── ...
└── public/
    └── images/
```

## 🚀 النشر على Vercel

### الخطوة 1: ربط مستودع GitHub
1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط "Add New Project"
3. اختر مستودع GitHub الخاص بـ `naqshat-teen`

### الخطوة 2: إعدادات البناء
- **Framework Preset:** Next.js
- **Root Directory:** `./` (اتركه فارغ)
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (اتركه افتراضي)

### الخطوة 3: متغيرات البيئة
اضغط "Environment Variables" وأضف:
```
DATABASE_URL=postgresql://postgres:postgres@your-db-host:5432/naqshat_db
```

### الخطوة 4: النشر
اضغط "Deploy" وانتظر اكتمال البناء.

## 🌐 النشر على Netlify

### الخطوة 1: ربط المستودع
1. اذهب إلى [netlify.com](https://netlify.com)
2. اضغط "Add new site" → "Import an existing project"
3. اختر GitHub واختر مستودع `naqshat-teen`

### الخطوة 2: إعدادات البناء
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Functions directory:** `.netlify/functions` (اختياري)

### الخطوة 3: متغيرات البيئة
في Site settings → Build & deploy → Environment:
```
DATABASE_URL=postgresql://postgres:postgres@your-db-host:5432/naqshat_db
```

### الخطوة 4: النشر
اضغط "Deploy site".

## 🔧 حل المشاكل الشائعة

### المشكلة: "Command exited with 1"
**الحل:** تأكد من وجود `DATABASE_URL` في متغيرات البيئة.

### المشكلة: "Module not found"
**الحل:** تأكد من أن `package.json` في الجذر وليس في مجلد فرعي.

### المشكلة: "DATABASE_URL is required"
**الحل:** 
1. أضف المتغير في لوحة التحكم
2. أو عدّل `src/db/index.ts` ليكون:
```typescript
const databaseUrl = process.env.DATABASE_URL || "";
if (!databaseUrl && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL not set");
}
```

### المشكلة: استهلاك Build Credits على Netlify
**الحل:**
- استخدم Vercel بدلاً من Netlify (مجاني بلا حدود للمشاريع الشخصية)
- أو قلل عدد مرات النشر بتجربة محلياً أولاً: `npm run build`

## 📝 ملاحظات هامة

1. **لا تُرفع ملفات `.env` إلى GitHub** - استخدم متغيرات البيئة في لوحة التحكم
2. **تأكد من `node_modules` في `.gitignore`**
3. **جرب البناء محلياً قبل النشر:** `npm run build`
4. **استخدم فرع `main` أو `master` للنشر**

## 🔗 روابط مفيدة

- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
- [Netlify Next.js Plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Drizzle ORM Deployment](https://orm.drizzle.team/docs/deployment)

---

**آخر تحديث:** 2026
**الإصدار:** 1.0.0
