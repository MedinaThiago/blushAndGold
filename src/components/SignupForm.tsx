import { useState } from "react";
import { LuxuryButton } from "./LuxuryButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "5531991911609";
    const messageParts = [
      "Olá! Gostaria de reservar meu acesso exclusivo.",
    ];

    if (name.trim()) {
      messageParts.push(`Meu nome é ${name.trim()}.`);
    }

    if (email.trim()) {
      messageParts.push(`Meu email é ${email.trim()}.`);
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      messageParts.join(" ")
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="serif text-3xl font-light mb-4">
              Reserve Seu Acesso
            </h2>
            <p className="text-sm font-light text-muted-foreground">
              Preencha os dados abaixo para garantir sua vaga exclusiva
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-light tracking-wide">
                Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-background border-border focus:border-accent focus:ring-accent"
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-light tracking-wide">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background border-border focus:border-accent focus:ring-accent"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="pt-4">
              <LuxuryButton type="submit" className="w-full" size="lg">
                Garantir Acesso Exclusivo
              </LuxuryButton>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs font-light text-muted-foreground">
                Ao se cadastrar, você concorda com nossos{" "}
                <a href="#" className="underline hover:text-accent">
                  termos de uso
                </a>{" "}
                e{" "}
                <a href="#" className="underline hover:text-accent">
                  política de privacidade
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
