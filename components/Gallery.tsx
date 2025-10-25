import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2F9fb4c423757a4ecba1be15c92858d513?format=webp&width=2000',
      alt: 'Aerial view of geometric pool with blue water'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2Fde3d34805c9b402fa72aad507b45e0c8?format=webp&width=2000',
      alt: 'Luxury backyard pool with stone patio'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2F6ca101d12f164cea968b5efc7b3695b5?format=webp&width=2000',
      alt: 'Modern pool with turquoise water and white edges'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2F14cc3c0fb2ea4c758735616ba77a8e9d?format=webp&width=2000',
      alt: 'Indoor spa pool with steps'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2Fe6150bd306b942a78a5cb516758dc63a?format=webp&width=2000',
      alt: 'Two-section luxury pool with spa'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2F5e1d94cf6b0549da83531edea6f76b25?format=webp&width=2000',
      alt: 'Geometric pool stairs design'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2F17e1e418160b4a849712d69faa1bcea7?format=webp&width=2000',
      alt: 'Backyard pool with spa and lighting'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2Fbd3a2cc9bce141c293e30c00bd1a659c?format=webp&width=2000',
      alt: 'Lap pool with black tile and modern architecture'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2Fff0c8a5964cc4117bbb7bb8b4066ff53?format=webp&width=2000',
      alt: 'Curved infinity pool with landscape'
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fb06b2db23eb5472dbd3e7a506ba7141a%2F96e559f67d7d4497a913bfd651922972?format=webp&width=2000',
      alt: 'Indoor swimming pool with skylight'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-light italic text-primo-blue mb-4">Our Portfolio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our collection of exceptional pool transformations, from complete renovations to custom installations.
          </p>
        </div>

        <div className="masonry-gallery columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg break-inside-avoid bg-gray-100 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primo-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-center font-semibold uppercase tracking-wider text-sm">View Project</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-slate-600">
          Transform your pool with expert refurbishment services
        </p>
      </div>

      <style>{`
        .masonry-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .masonry-gallery {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .masonry-gallery {
            display: columns;
            columns: 3;
            column-gap: 2rem;
          }

          .masonry-gallery > div {
            break-inside: avoid;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
