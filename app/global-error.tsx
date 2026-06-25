"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ar-SA" dir="rtl">
      <body className="flex min-h-screen items-center justify-center bg-[#F8F6F2] p-6 font-sans text-[#2C2416]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">حدث خطأ في التطبيق</h1>
          <p className="mt-3 text-sm opacity-80">يرجى إعادة تحميل الصفحة.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-full bg-[#C9A86A] px-6 py-3 text-sm text-white"
          >
            إعادة المحاولة
          </button>
        </div>
      </body>
    </html>
  );
}
