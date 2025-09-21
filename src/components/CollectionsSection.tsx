import { LuxuryButton } from "./LuxuryButton";
import noirPortrait from "@/assets/camisa_preta.jpg";
import espressoPortrait from "@/assets/camisa_marrom.jpg";
import oliveWalk from "@/assets/camisa_verde.jpg";
import peachPortrait from "@/assets/camisa_rosa.jpg";
import oliveDetail from "@/assets/camisa_verde_zoom.jpg";

const collections = [
  {
    title: "Timeless  Sophistication",
    subtitle: "Timeless  Sophistication",
    highlight: "Igor Fagundes collection",
    description:
      "Timeless shirts in a limited edition, crafted to flow effortlessly between the feminine and the masculine a statement of sophistication, fluidity, and elegance.",
    image: peachPortrait,
    objectPosition: "center 25%",
    alt: "Modelo em camisa preta fluida apoiado em parapeito urbano.",
  },
  {
    title: "Poetry in Motion",
    subtitle: "Poetry in Motion",
    highlight: "Igor Fagundes collection",
    description:
      "Exclusive pieces that capture movement and delicacy, blending poetry with modernity in every detail , for those who see dressing as an act of artistic expression.",
    image: espressoPortrait,
    objectPosition: "center 35%",
    alt: "Modelo com camisa marrom acetinada refletindo a luz dourada.",
  },
  {
    title: "The Art of Individuality",
    subtitle: "The Art of Individuality",
    highlight: "Igor Fagundes collection",
    description:
      "An original capsule collection, created in limited numbers, celebrating individuality and embodying fashion as art, manifesto, and aesthetic statement.",
    image: oliveDetail,
    objectPosition: "center 40%",
    alt: "Modelo caminhando diante de um palácio vestindo conjunto verde oliva.",
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-petal-sateen/15 via-ivory-haze/40 to-ivory-haze/80" />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-light uppercase tracking-[0.45em] text-muted-foreground">Collections</p>
          <div className="luxury-line mt-6 inline-block">
            <h2 className="text-4xl font-light tracking-tight text-primary md:text-5xl">Capsule Collections</h2>
          </div>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            A curated selection of signature looks for every moment on your calendar
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group relative flex h-full flex-col overflow-hidden border max-h-[680px] border-border/60 bg-card/70 shadow-elegant backdrop-blur-sm transition-all duration-500 hover:border-sage-velour/40"
            >
              <div className="relative aspect-[2/4] overflow-hidden">
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
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={`https://wa.me/34663193100?text=${encodeURIComponent("Olá, tenho interesse na suíte. Pode enviar mais detalhes sobre disponibilidade e preços, por favor?")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato via WhatsApp"
          >
            <LuxuryButton
              variant="outline"
              size="lg"
              className="uppercase tracking-[0.4em] text-xs font-light md:text-sm">
              See complete lookbook
            </LuxuryButton>
          </a>
        </div>
      </div >
    </section >
  );
};

export default CollectionsSection;