/* FE3L Oficina Modular — home editorial: mostrar o produto, provar o cuidado, encaminhar a compra. */
import { ArrowUpRight, Check, Instagram, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { products } from "@/lib/products";

const heroImage = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand brand-swap" aria-label="FE3L, início"><span className="brand-word" aria-hidden="true">FE<span className="brand-e">E</span>L</span><img className="brand-symbol" src="/fe3l-logo.png" alt="" /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <a href="#catalogo" onClick={() => setOpen(false)}>Catálogo</a>
          <a href="#processo" onClick={() => setOpen(false)}>Como fazemos</a>
          <a href="#sobre" onClick={() => setOpen(false)}>A FE3L</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
        </nav>
        <a className="header-cta" href="#catalogo">Ver peças <ArrowUpRight size={16} /></a>
      </div>
    </header>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <Link href={`/produto/${product.slug}`} className="product-card">
      <div className="product-photo">
        <img src={product.image} alt={`${product.name} — ${product.short}`} loading="lazy" />
        <span className="product-code">{product.code}</span>
        <span className="product-arrow"><ArrowUpRight size={18} /></span>
      </div>
      <div className="product-copy">
        <div><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.short}</p></div>
        <strong>{product.price}</strong>
      </div>
    </Link>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<"Todos" | "Organização" | "Setup">("Todos");
  const visibleProducts = useMemo(() => filter === "Todos" ? products : products.filter((product) => product.category === filter), [filter]);

  return (
    <div className="site-page">
      <Header />
      <main>
        <section className="hero-section">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> FE3L / OFICINA MODULAR</div>
              <h1>Pequenas peças.<br /><em>Menos ruído</em><br />na sua rotina.</h1>
              <p className="hero-lede">Objetos impressos em 3D para organizar seu setup e seu espaço — projetados com intenção, produzidos em pequenos lotes.</p>
              <div className="hero-actions"><a className="button button-primary" href="#catalogo">Explorar catálogo <ArrowUpRight size={17} /></a><a className="text-link" href="#processo">Conhecer o processo <span>↓</span></a></div>
              <div className="hero-note"><span className="status-dot" /> Produção em pequenos lotes <span className="note-separator">/</span> Envio pelos marketplaces</div>
            </div>
            <div className="hero-visual">
              <img src={heroImage} alt="Organizador modular FE3L em uma bancada de oficina" />
              <div className="image-stamp"><span>FE3L</span><small>OBJETOS ÚTEIS<br />PARA ROTINAS REAIS</small></div>
              <div className="hero-measure">01 <span /> 06</div>
            </div>
          </div>
          <div className="hero-bottom shell"><span>Projetado internamente</span><span className="scroll-mark">⌁</span><span>Precisão, camada por camada</span></div>
        </section>

        <section className="proof-strip"><div className="shell proof-grid"><div><span className="proof-number">01</span><strong>Design que resolve</strong><p>Menos improviso. Mais espaço para o que importa.</p></div><div><span className="proof-number">02</span><strong>Feito em pequenos lotes</strong><p>Cada peça passa pela nossa bancada antes de sair.</p></div><div><span className="proof-number">03</span><strong>Compre onde preferir</strong><p>O checkout acontece no marketplace que você já usa.</p></div></div></section>

        <section className="catalog-section" id="catalogo"><div className="shell">
          <div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> CATÁLOGO / DROP 01</div><h2>Peças para<br /><em>dar espaço</em> ao dia.</h2></div><p>Escolha uma peça, veja medidas e materiais e siga para o marketplace de sua preferência.</p></div>
          <div className="filter-row" role="tablist" aria-label="Filtrar produtos">{(["Todos", "Organização", "Setup"] as const).map((item) => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}<span className="catalog-count">{visibleProducts.length.toString().padStart(2, "0")} peças</span></div>
          <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div></section>

        <section className="process-section" id="processo"><div className="shell process-layout"><div className="process-aside"><div className="eyebrow"><span className="eyebrow-line" /> O PROCESSO</div><h2>Da ideia à<br /><em>sua mesa.</em></h2><p>Imprimir é só uma parte. O trabalho começa antes, entendendo o gesto que cada peça precisa facilitar.</p><a className="text-link dark-link" href="#sobre">Mais sobre a FE3L <ArrowUpRight size={16} /></a></div><div className="process-steps"><div className="process-step"><span>01</span><div><h3>Desenhar</h3><p>Observamos a rotina e transformamos uma fricção pequena em uma solução simples.</p></div></div><div className="process-step"><span>02</span><div><h3>Ajustar</h3><p>Testamos encaixes, escala e resistência na prática — não só na tela.</p></div></div><div className="process-step"><span>03</span><div><h3>Conferir</h3><p>Cada lote é revisado à mão para que o objeto chegue pronto para fazer seu trabalho.</p></div></div></div></div></section>

        <section className="about-section" id="sobre"><div className="shell about-layout"><div className="about-mark"><img src="/fe3l-logo.png" alt="" /><span>TRÊS PESSOAS<br />UMA BANCADA<br />MUITO CUIDADO</span></div><div><div className="eyebrow"><span className="eyebrow-line" /> A FE3L</div><h2>Objetos bons são<br /><em>quase silenciosos.</em></h2><p>A FE3L nasceu da vontade de tirar o excesso do caminho. Somos uma pequena equipe projetando e imprimindo objetos para setups, mesas e rotinas que pedem um pouco mais de ordem.</p><p>A gente cuida do desenho, dos ajustes e da conferência final. É assim que uma peça deixa de ser só impressa e passa a pertencer ao espaço de alguém.</p><div className="about-facts"><div><strong>100%</strong><span>projetado<br />internamente</span></div><div><strong>0.1</strong><span>mm de camada<br />quando o projeto pede</span></div><div><strong>03</strong><span>pessoas<br />na bancada</span></div></div></div></div></section>

        <section className="contact-section" id="contato"><div className="shell contact-layout"><div><div className="eyebrow"><span className="eyebrow-line" /> FALE COM A GENTE</div><h2>Tem uma ideia<br /><em>para imprimir?</em></h2></div><div><p>Parcerias, dúvidas ou suporte pós-venda. A caixa de entrada é essa:</p><a href="mailto:oi@fe3l.com.br" className="contact-email">oi@fe3l.com.br <ArrowUpRight size={20} /></a><p className="contact-small">Respondemos em até 2 dias úteis.</p></div></div></section>
      </main>
      <footer className="site-footer"><div className="shell footer-top"><Link href="/" className="brand"><img src="/fe3l-logo.png" alt="" /><span>FE3L</span></Link><div className="footer-links"><a href="#catalogo">Catálogo</a><a href="#sobre">Sobre</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div></div><div className="shell footer-bottom"><span>© 2026 FE3L / Oficina Modular</span><span>Preço e frete confirmados no marketplace.</span></div></footer>
    </div>
  );
}
