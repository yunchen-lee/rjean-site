// src/components/RectangleCard.jsx
export default function RectangleCard({
  title,
  img,
  desc,
  url,
  badge = "",
  tags = [],
  target = "_blank",
  date,
}) {
  const imageSrc = typeof img === "string" ? img : img?.src;
  const imageAlt = typeof img === "object" && img?.alt ? img.alt : title;

  return (
    <div class="workshop-card">
      <a href={url} target={target} class="workshop-card__link">
        <div class="workshop-card__inner">
          <div class="workshop-card__media">
            <img
              src={imageSrc}
              alt={imageAlt}
              class="workshop-card__image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="workshop-card__body">
            <h1 class="workshop-card__title">{title}</h1>
            <p class="workshop-card__description">{desc}</p>
            <p class="workshop-card__meta">{date}</p>
          </div>
        </div>
      </a>
      <style>{`
        .workshop-card {
          border-bottom: 1px solid #000;
        }

        .workshop-card__link {
          display: block;
          color: inherit;
          transition:
            transform 0.5s ease,
            opacity 0.5s ease;
        }

        .workshop-card__link:hover {
          transform: translateY(-2px);
          opacity: 0.75;
          color: inherit;
        }

        .workshop-card__inner {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          align-items: flex-start;
          padding: 1rem 0 2.5rem;
        }

        .workshop-card__media {
          width: 100%;
        }

        .workshop-card__image {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .workshop-card__body {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          min-width: 0;
        }

        .workshop-card__title {
          margin: 0;
          font-size: var(--font-size-card-title);
          font-weight: 700;
          line-height: var(--line-height-card-title);
        }

        .workshop-card__description {
          margin: 0;
          font-size: var(--font-size-card-body);
          line-height: var(--line-height-card-body);
          color: var(--color-text);
        }

        .workshop-card__meta {
          margin: 0;
          font-size: var(--font-size-card-meta);
          line-height: var(--line-height-card-meta);
          color: var(--color-text-alt);
        }

        @media screen and (min-width: 425px) {
          .workshop-card__inner {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 1rem;
            align-items: start;
          }

          .workshop-card__media {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}
