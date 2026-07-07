import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="mp-card">
        <div className="mp-card-bar" />
        <div className="mp-card-img">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="mp-card-body">
          <h3 className="mp-card-name">{product.name}</h3>
          <p className="mp-card-desc">{product.shortDesc}</p>
          <Link className="mp-btn-details" to={`/product/${product.name}`}>
            View Details
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="11" height="11">
              <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=Montserrat:wght@400;500;600&display=swap');

        .mp-card {
          background: #ffffff;
          border: 1px solid #ecd9c4;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }

        .mp-card:hover {
          box-shadow: 0 10px 26px rgba(194, 65, 12, 0.09);
          border-color: #f0b489;
          transform: translateY(-3px);
        }

        .mp-card-bar {
          height: 3px;
          background: #ecd9c4;
          transition: background .25s;
        }
        .mp-card:hover .mp-card-bar {
          background: #c2410c;
        }

        .mp-card-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #fdf0e4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0;
        }

        .mp-card-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s ease;
        }

        .mp-card:hover .mp-card-img img {
          transform: scale(1.04);
        }

        .mp-card-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .mp-card-name {
          font-family: 'Oswald', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #9a3412;
          margin: 0;
          line-height: 1.35;
          text-transform: uppercase;
          letter-spacing: .01em;
        }

        .mp-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px;
          color: #8a7563;
          line-height: 1.55;
          margin: 0;
          flex: 1;
        }

        .mp-btn-details {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
          font-family: 'Oswald', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #c2410c;
          text-decoration: none;
          width: fit-content;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .mp-btn-details svg {
          transition: transform 0.2s ease;
        }

        .mp-btn-details:hover {
          color: #9a3412;
          gap: 9px;
        }

        .mp-btn-details:hover svg {
          transform: translateX(2px);
        }
      `}</style>
    </>
  );
}