import video from "@/assets/video_camisa_preta.mp4";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left elegant-fade">
            <div className="mb-6">
              <div>
                <h1 className="hero-text mb-6 text-balance">
                  The Essence of My Capsule Collection
                </h1>
              </div>
            </div>

            <div className="mb-8 max-w-lg mx-auto lg:mx-0">
              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                I have always seen fashion as more than clothing: it is identity, presence, and the art of expression. From this vision I created my first capsule collection, a unique and limited edition conceived as a personal statement of elegance and individuality.              </p>

              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                I chose the shirt as the centerpiece: timeless and versatile, it shifts between the feminine and the masculine, becoming naturally genderless. In satin fabrics, each piece carries poetry and subtle luxury, designed to feel both classic and contemporary.              </p>

              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                This is an exclusive, one-time launch, produced in limited numbers to preserve the experience of owning something truly rare and personal.
              </p>

              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                For further details or to inquire about the collection, please get in touch directly because true exclusivity deserves a private service.              </p>
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