import { LuxuryButton } from "./LuxuryButton";
import lookEditorial from "@/assets/InitialPageIMG.jpg";
import lookTailored from "@/assets/hero-portrait.jpg";

const collections = [
  {
    title: "Noir Soirée",
    subtitle: "Capsule I · Noir",
    highlight: "Pré-venda exclusiva",
    description:
      "Vestidos coluna com recortes arquitetônicos, capas em seda e alfaiataria leve para noites intimistas.",
    image: lookEditorial,
    objectPosition: "center 30%",
    alt: "Modelo em vestido preto drapeado da coleção Noir Soirée",
  },
  {
    title: "Olive Reverie",
    subtitle: "Capsule II · Olive",
    highlight: "Disponível no showroom",
    description:
      "Silhuetas utilitárias em cetim oliva e dourado envelhecido, pensadas para encontros diurnos de verão.",
    image: lookTailored,
    objectPosition: "center",
    alt: "Modelo usando blazer oliva e calça tailleur da coleção Olive Reverie",
  },
  {
    title: "Peach Dawn",
    subtitle: "Capsule III · Dawn",
    highlight: "Lista de espera aberta",
    description:
      "Organza leve, transparências delicadas e acabamentos em couro pêssego para amanheceres luminosos.",
    image: lookEditorial,
    objectPosition: "center 68%",
    alt: "Detalhe de vestido em tons pêssego da coleção Peach Dawn",
  },
];

const CollectionsSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-peach-rose/20 via-champagne-cream/40 to-champagne-cream/80" />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-light uppercase tracking-[0.45em] text-muted-foreground">Coleções</p>
          <div className="luxury-line mt-6 inline-block">
            <h2 className="text-4xl font-light tracking-tight text-primary md:text-5xl">Coleções Cápsula</h2>
          </div>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Uma seleção curada de looks assinados para cada momento do seu calendário — das soirées intimistas
            aos amanheceres à beira-mar.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/70 shadow-elegant backdrop-blur-sm transition-all duration-500 hover:border-olive-sheen/40"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  style={{ objectPosition: collection.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-silk/45 via-noir-silk/10 to-transparent transition-opacity duration-500 group-hover:from-noir-silk/55 group-hover:via-noir-silk/20" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[0.65rem] font-light uppercase tracking-[0.5em] text-champagne-cream/80">
                  <span className="h-px w-10 bg-champagne-cream/70" aria-hidden="true" />
                  {collection.subtitle}
                </div>
              </div>

              <div className="flex h-full flex-col gap-4 p-6">
                <span className="text-xs uppercase tracking-[0.4em] text-olive-sheen">{collection.highlight}</span>
                <h3 className="text-2xl font-light tracking-tight text-primary serif">{collection.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{collection.description}</p>
                <div className="mt-auto flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-[0.45em] text-espresso-suede transition-all duration-500 group-hover:text-primary">
                  Ver coleção
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <LuxuryButton
            variant="outline"
            size="lg"
            className="uppercase tracking-[0.4em] text-xs font-light md:text-sm"
          >
            Ver lookbook completo
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
