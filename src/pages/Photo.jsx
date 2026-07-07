import images from "../data/images";

export default function PhotoGallery() {
  return (
    <main className="premium-surface min-h-screen px-6 py-20 text-[#111827]">

      <h1 className="text-4xl font-bold text-center mb-12 text-[#111827]">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-[#111827]/10 bg-white/80 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
            <img
              src={img.src}
              className="w-full h-48 object-cover hover:scale-110 transition"
            />
          </div>
        ))}
      </div>

    </main>
  );
}