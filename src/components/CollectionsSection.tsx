import { LuxuryButton } from "./LuxuryButton";
import noirPortrait from "@/assets/camisa_preta.jpg";
import espressoPortrait from "@/assets/camisa_marrom.jpg";
import oliveWalk from "@/assets/camisa_verde.jpg";
import peachPortrait from "@/assets/camisa_rosa.jpg";
import oliveDetail from "@/assets/camisa_verde_zoom.jpg";

const collections = [
  {
    title: "Noir Première",
    subtitle: "Capsule I · Noir",
    highlight: "Pré-venda privada",
    description:
      "Camisas em seda preta com caimento líquido e alfaiataria em risca de giz para noites de presença absoluta.",
    image: noirPortrait,
    objectPosition: "center 25%",
    alt: "Modelo em camisa preta fluida apoiado em parapeito urbano.",
  },
  {
    title: "Cognac Mirage",
    subtitle: "Capsule II · Cognac",
    highlight: "Showroom sob consulta",
    description:
      "Seda acetinada em tom conhaque, lapelas generosas e detalhes dourados que refletem a luz do entardecer.",
    image: espressoPortrait,
    objectPosition: "center 35%",
    alt: "Modelo com camisa marrom acetinada refletindo a luz dourada.",
  },
  {
    title: "Sage Vanguard",
    subtitle: "Capsule III · Sage",
    highlight: "Lançamento oficial",
    description:
      "Smoking reinterpretado em cetim oliva, botões forrados e proporções alongadas para uma alfaiataria genderless.",
    image: oliveWalk,
    objectPosition: "center 40%",
    alt: "Modelo caminhando diante de um palácio vestindo conjunto verde oliva.",
  },
  // {
  //   title: "Blush Aura",
  //   subtitle: "Capsule IV · Blush",
  //   highlight: "Lista de espera",
  //   description:
  //     "Chemises em pêssego pálido, punhos esculturais e amarrações suaves que evocam poesia matinal.",
  //   image: peachPortrait,
  //   objectPosition: "center 35%",
  //   alt: "Modelo com camisa pêssego com laço lateral junto a uma porta verde.",
  // },
  // {
  //   title: "Verdant Lines",
  //   subtitle: "Capsule V · Detail",
  //   highlight: "Sob medida",
  //   description:
  //     "Encarnação artesanal da cápsula em verde musgo, costuras milimétricas e botões duplos em foco.",
  //   image: oliveDetail,
  //   objectPosition: "center 45%",
  //   alt: "Close da camisa verde com abotoamento duplo em detalhe.",
  // },
];

const CollectionsSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-petal-sateen/15 via-ivory-haze/40 to-ivory-haze/80" />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-light uppercase tracking-[0.45em] text-muted-foreground">Coleções</p>
          <div className="luxury-line mt-6 inline-block">
            <h2 className="text-4xl font-light tracking-tight text-primary md:text-5xl">Coleções Cápsula</h2>
          </div>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Uma seleção curada de looks assinados para cada momento do seu calendário — das soirées intimistas aos amanheceres à
            beira-mar.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/70 shadow-elegant backdrop-blur-sm transition-all duration-500 hover:border-sage-velour/40"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  style={{ objectPosition: collection.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-velvet/45 via-ink-velvet/10 to-transparent transition-opacity duration-500 group-hover:from-ink-velvet/55 group-hover:via-ink-velvet/20" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[0.65rem] font-light uppercase tracking-[0.5em] text-ivory-haze/80">
                  <span className="h-px w-10 bg-ivory-haze/70" aria-hidden="true" />
                  {collection.subtitle}
                </div>
              </div>

              <div className="flex h-full flex-col gap-4 p-6">
                <span className="text-xs uppercase tracking-[0.4em] text-gilded-amber">{collection.highlight}</span>
                <h3 className="text-2xl font-light tracking-tight text-primary serif">{collection.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{collection.description}</p>
                <div className="mt-auto flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-[0.45em] text-cognac-lustre transition-all duration-500 group-hover:text-primary">
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