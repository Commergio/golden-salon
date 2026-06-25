"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-5 text-center">
      <h1 className="font-playfair text-3xl font-semibold text-charcoal md:text-4xl">
        حدث خطأ غير متوقع
      </h1>
      <p className="mt-4 max-w-md font-cairo text-warm-gray">
        نعتذر عن الإزعاج. يمكنكِ المحاولة مرة أخرى أو التواصل معنا مباشرة.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={reset} className="btn-primary">
          إعادة المحاولة
        </button>
        <Link href="/" className="btn-outline">
          العودة للرئيسية
        </Link>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          تواصلي عبر واتساب
        </a>
      </div>
    </div>
  );
}
