export default function BlogLoading() {
  return (
    <div
      className="min-h-screen bg-section-light pt-28"
      role="status"
      aria-live="polite"
      aria-label="جاري تحميل المدونة"
    >
      <div className="mx-auto max-w-7xl animate-pulse px-5 md:px-8 lg:px-12">
        <div className="mx-auto h-8 w-48 rounded-full bg-gold/10" />
        <div className="mx-auto mt-6 h-12 max-w-2xl rounded-2xl bg-gold/10" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-3xl border border-gold/10 bg-white/60">
              <div className="aspect-[16/10] bg-gold/10" />
              <div className="space-y-3 p-6">
                <div className="h-4 w-24 rounded bg-gold/10" />
                <div className="h-6 rounded bg-gold/10" />
                <div className="h-4 w-full rounded bg-gold/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
