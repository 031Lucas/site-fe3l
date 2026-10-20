/* FE3L Oficina Modular — fonte única do catálogo, usada na home e nas fichas. */
export type Marketplace = { name: string; url: string; note: string };

export type Product = {
  slug: string;
  code: string;
  category: "Organização" | "Setup";
  name: string;
  short: string;
  description: string;
  price: string;
  image: string;
  gallery: string[];
  color: string;
  material: string;
  dimensions: string;
  weight: string;
  availability: string;
  marketplaces: Marketplace[];
  featured?: boolean;
};

const marketplaceSearch = (query: string) => [
  { name: "Mercado Livre", note: "Pesquisar anúncio", url: `https://lista.mercadolivre.com.br/${query}` },
  { name: "Shopee", note: "Pesquisar anúncio", url: `https://shopee.com.br/search?keyword=${encodeURIComponent(query)}` },
  { name: "Amazon", note: "Pesquisar anúncio", url: `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}` },
];

export const products: Product[] = [
  {
    slug: "organizador-desk", code: "DROP 01", category: "Organização", name: "Organizador Desk",
    short: "Divisórias modulares para a mesa respirar.",
    description: "Um sistema compacto para canetas, cabos e pequenos itens que vivem espalhados. As divisórias se adaptam à sua rotina sem parafusos ou fita.", price: "R$ 89,00",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85", gallery: ["https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85", "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85"], color: "Grafite fosco", material: "PLA+ / PETG", dimensions: "18 × 10 × 6 cm", weight: "180 g", availability: "Produção em pequenos lotes", marketplaces: marketplaceSearch("organizador de mesa modular"), featured: true,
  },
  {
    slug: "suporte-headset", code: "DROP 02", category: "Setup", name: "Suporte Headset Orbit",
    short: "Seu fone no lugar certo, sem ocupar a mesa.",
    description: "Base estável e desenho vertical para manter o headset protegido, visível e pronto para a próxima sessão.", price: "R$ 69,00",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1100&q=85", gallery: ["https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1100&q=85", "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1100&q=85"], color: "Preto fosco", material: "PETG", dimensions: "12 × 12 × 24 cm", weight: "210 g", availability: "Pronta entrega", marketplaces: marketplaceSearch("suporte de headset para mesa"),
  },
  {
    slug: "cable-tray", code: "DROP 03", category: "Setup", name: "Cable Tray Modular",
    short: "Menos cabo à vista. Mais espaço para criar.",
    description: "Canaleta para organizar e esconder cabos sob a mesa, com módulos que acompanham o crescimento do seu setup.", price: "R$ 59,00",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1100&q=85", gallery: ["https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1100&q=85", "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1000&q=85"], color: "Grafite fosco", material: "PLA+", dimensions: "30 × 5 × 4 cm", weight: "140 g", availability: "Produção em pequenos lotes", marketplaces: marketplaceSearch("organizador de cabos sob mesa"), featured: true,
  },
  {
    slug: "porta-controle", code: "DROP 04", category: "Setup", name: "Suporte Controle Dual",
    short: "Dois controles, uma base limpa.",
    description: "Ângulo pensado para manter seus controles à mão e liberar a frente do monitor, com passagem confortável para cabos.", price: "R$ 55,00",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1100&q=85", gallery: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1100&q=85", "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1100&q=85"], color: "Preto fosco", material: "PETG", dimensions: "20 × 9 × 10 cm", weight: "160 g", availability: "Pronta entrega", marketplaces: marketplaceSearch("suporte para dois controles"),
  },
  {
    slug: "caixa-modular", code: "DROP 05", category: "Organização", name: "Caixa Modular Grid",
    short: "Organização que cresce com você.",
    description: "Caixas empilháveis com encaixe por gravidade para construir seu próprio sistema, sem trava e sem parafuso.", price: "R$ 75,00",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=85", gallery: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=85", "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1100&q=85"], color: "Grafite fosco", material: "PLA+", dimensions: "14 × 14 × 8 cm", weight: "150 g", availability: "Produção em pequenos lotes", marketplaces: marketplaceSearch("caixa organizadora modular empilhável"),
  },
  {
    slug: "hub-mesa", code: "DROP 06", category: "Setup", name: "Hub de Mesa Compacto",
    short: "Carregadores reunidos. Fiação escondida.",
    description: "Uma estação central para carregadores e cabos USB, com passagem interna para tirar a fiação da tomada do campo de visão.", price: "R$ 99,00",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1100&q=85", gallery: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1100&q=85", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85"], color: "Preto fosco", material: "PETG", dimensions: "16 × 10 × 7 cm", weight: "195 g", availability: "Produção em pequenos lotes", marketplaces: marketplaceSearch("organizador carregadores mesa"),
  },
];

export const getProduct = (slug?: string) => products.find((product) => product.slug === slug);
