import video from "@/assets/video_camisa_preta.mp4";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left elegant-fade">
            <div className="mb-6">
              <div className="luxury-line">
                <h1 className="hero-text mb-6 text-balance">
                  A Essência da Minha Primeira Coleção Cápsula
                </h1>
              </div>
            </div>

            <div className="mb-8 max-w-lg mx-auto lg:mx-0">
              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                Sempre acreditei que a moda é mais do que vestir: é identidade, expressão e presença. Dessa visão nasceu meu desejo de criar algo verdadeiramente autoral peças que traduzem poesia, delicadeza e elegância em cada detalhe.
              </p>

              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                Assim surgiu minha primeira coleção cápsula. Camisas em tecidos acetinados, que revelam movimento e luxo em cada gesto, foram o ponto de partida dessa criação.
              </p>

              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                Escolhi as camisas porque carregam uma força atemporal: clássicas e versáteis, transitam entre o feminino e o masculino, tornando-se peças genderless. Produzidas em número limitado, são exclusivas, reinterpretadas com fluidez e contemporaneidade.
              </p>

              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                Cada criação é um reflexo da minha visão: moda como arte, manifesto e celebração da individualidade.
              </p>
            </div>
          </div>

          <div className="relative elegant-fade">
            <div className="relative overflow-hidden">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover luxury-hover max-w-[360px] lg:max-w-[480px] mx-auto"
                style={{ aspectRatio: "3/5" }}
              />

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir-silk/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;