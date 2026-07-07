import ProductCard from "../components/machine/ProductCard";
import { products } from "../data/products";

export default function AllMachines() {
  return (
    <>
      <section className="am-section">
        <div className="am-container">
          <div className="am-header">
            <span className="am-label">Machine Catalogue</span>
            <h1 className="am-title">All Machines</h1>
            <p className="am-subtitle">Explore our complete machine portfolio.</p>
          </div>

          <div className="am-grid">
            {products.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .am-section {
          padding: 72px 20px;
          background: #ffffff;
          font-family: 'Barlow', sans-serif;
        }

        .am-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .am-header {
          margin-bottom: 48px;
          max-width: 640px;
        }

        .am-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #c2410c;
          margin-bottom: 10px;
        }

        .am-title {
          font-size: 34px;
          font-weight: 800;
          color: #111827;
          margin-top: 0;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .am-subtitle {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

        .am-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px 32px;
        }

        @media (min-width: 640px) {
          .am-section { padding: 88px 32px; }
          .am-title { font-size: 38px; }
          .am-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .am-grid { grid-template-columns: repeat(3, 1fr); gap: 48px 36px; }
        }

        @media (min-width: 1280px) {
          .am-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </>
  );
}