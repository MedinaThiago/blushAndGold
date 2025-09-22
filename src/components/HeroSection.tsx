// HeroSection.tsx
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [failedAutoplay, setFailedAutoplay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS/Safari: garanta inline + mudo antes do play
    const enhancedVideo = video as HTMLVideoElement & { defaultMuted?: boolean };
    enhancedVideo.muted = true;
    enhancedVideo.defaultMuted = true;
    enhancedVideo.playsInline = true;
    enhancedVideo.setAttribute("webkit-playsinline", "true");

    const playPromise = enhancedVideo.play?.();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => setFailedAutoplay(true)); // fallback se bloquear autoplay
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left elegant-fade">
            <h1 className="hero-text mb-6 text-balance">
              The Essence of My Capsule Collection
            </h1>
            <div className="mb-8 max-w-lg mx-auto lg:mx-0">
              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                I have always seen fashion as more than clothing: it is identity, presence, and the art of expression. From this vision I created my first capsule collection, a unique and limited edition conceived as a personal statement of elegance and individuality.
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
                I chose the shirt as the centerpiece: timeless and versatile, it shifts between the feminine and the masculine, becoming naturally genderless. In satin fabrics, each piece carries poetry and subtle luxury, designed to feel both classic and contemporary.
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                This is an exclusive, one-time launch, produced in limited numbers to preserve the experience of owning something truly rare and personal.
              </p>
            </div>
          </div>

          {/* Vídeo da hero (Hostinger) */}
          <div className="relative elegant-fade">
            <div className="relative overflow-hidden">
              <div
                className="mx-auto w-full max-w-[360px] lg:max-w-[480px]"
                style={{ aspectRatio: "3/5" }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  preload="auto"
                  loop
                  muted
                  playsInline
                  webkit-playsinline="true"
                >
                  <source
                    src="https://ifexclusivecollection.com/videos/IMG_4382_480p.mp4"
                    type="video/mp4"
                    media="(max-width: 640px)"
                  />
                  <source
                    src="https://ifexclusivecollection.com/videos/IMG_4382_720p.mp4"
                    type="video/mp4"
                    media="(max-width: 1280px)"
                  />
                  <source
                    src="https://ifexclusivecollection.com/videos/IMG_4382_1080p.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir-silk/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
