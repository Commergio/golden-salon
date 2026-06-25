export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-cream"
      role="status"
      aria-live="polite"
      aria-label="جاري التحميل"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
        <p className="font-cairo text-sm text-warm-gray">جاري التحميل...</p>
      </div>
    </div>
  );
}
