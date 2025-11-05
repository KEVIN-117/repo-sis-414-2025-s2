export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function showProductUI({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product): string {
  return `<div style="--duration: 50s;"
            class="container-style-inverted relative rounded-2xl p-6 hover:scale-105 transition-transform duration-300 h-[60vh] flex flex-col justify-between">
            <img src="${image}" alt="Product"
              class="w-full h-80 object-contain mb-4 border-image rounded-lg">
            <h3
              class="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              ${title}</h3>
            <p class="text-sm mb-3 line-clamp-3">${description}</p>
            <div class="flex justify-between items-center mb-3">
              <span class="text-2xl font-bold text-[var(--primary)]">$${price}</span>
              <span
                class="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-[var(--dark)] font-semibold">${category}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-yellow-400">★</span>
              <span class="text-sm">${rating.rate} (${rating.count} reviews)</span>
            </div>
          </div>`;
}
