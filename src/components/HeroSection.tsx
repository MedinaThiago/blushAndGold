import { LuxuryButton } from "./LuxuryButton";
import heroPortrait from "@/assets/InitialPageIMG.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left elegant-fade">
            <div className="mb-6">
              <p className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Coleção Exclusiva
              </p>
              <div className="luxury-line">
                <h1 className="hero-text mb-6 text-balance">
                  Acesso Antecipado
                </h1>
              </div>
            </div>

            <div className="mb-8 max-w-lg mx-auto lg:mx-0">
              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                Seja o primeiro a conhecer nossa mais nova coleção.
                Uma seleção exclusiva que combina sofisticação atemporal
                com o contemporâneo.
              </p>

              <div className="space-y-3 text-sm font-light text-muted-foreground">
                <p>✦ Acesso 48h antes do lançamento oficial</p>
                <p>✦ Peças em edição limitada</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <LuxuryButton variant="outline" size="lg">
                  Saiba Mais
                </LuxuryButton>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative elegant-fade">
            <div className="relative overflow-hidden">
              <img
                src={heroPortrait}
                alt="Modelo vestindo peça da coleção exclusiva"
                className="w-full h-auto object-cover luxury-hover"
                style={{ aspectRatio: "4/5" }}
              />

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/10 to-transparent pointer-events-none" />

              {/* Decorative gold line */}
              <div className="absolute bottom-8 left-8 w-16 h-px bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;