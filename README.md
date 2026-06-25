# صالون اللمسة الذهبية ✨

موقع فاخر لصالون نسائي بالرياض — مبني بـ Next.js 15، TypeScript، Tailwind CSS، و Framer Motion.

## التشغيل

```bash
npm install
npm run dev
```

افتحي [http://localhost:3000](http://localhost:3000)

## البناء للإنتاج

```bash
npm run build
npm start
```

## هيكل المشروع

```
app/           — التخطيط والصفحة الرئيسية
components/    — مكونات قابلة لإعادة الاستخدام
sections/      — أقسام الصفحة
lib/           — بيانات، حركات، أدوات
styles/        — أنماط عامة
```

## التخصيص

- **رقم الواتساب والهاتف:** عدّلي `lib/data.ts` → `SITE.phone` و `SITE.whatsapp`
- **خريطة Google:** استبدلي `SITE.mapEmbed` برابط embed من Google Maps
- **صور الفريق:** حدّثي روابط الصور في `TEAM` و `AboutAmal`

## التقنيات

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- RTL عربي كامل
