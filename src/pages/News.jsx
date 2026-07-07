import news from "../data/news";

export default function News() {
  return (
    <main className="premium-surface min-h-screen px-6 py-20 text-[#111827]">

      <h1 className="text-4xl font-bold text-center mb-12 text-[#111827]">
        News & Updates
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {news.map((n, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-[#111827]/10 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
            <h3 className="text-xl font-semibold text-[#111827]">{n.title}</h3>
            <p className="text-sm text-[#e8a020]">{n.date}</p>
            <p className="mt-2 text-[#4b5563]">{n.description}</p>
          </div>
        ))}
      </div>

    </main>
  );
}