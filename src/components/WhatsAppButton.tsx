import React from "react";

type Props = {
    phone?: string;
    message?: string;
    className?: string;
};

const WhatsAppButton: React.FC<Props> = ({
    phone = "34663193100",
    message = "Olá, tenho interesse na suíte. Pode enviar mais detalhes sobre disponibilidade e preços, por favor?",
    className = "",
}) => {
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-emerald-700 transition ${className}`}
            aria-label="Entrar em contato via WhatsApp"
        >
            {/* ícone simples */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .04 5.33.02 12A11.96 11.96 0 0 0 3.8 20.3L2 22.8l2.6-.86A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52z" fill="#fff" opacity="0.06" />
                <path d="M17.6 14.2c-.3-.15-1.76-.86-2.05-.96-.3-.1-.52-.15-.74.15s-.85.96-1.04 1.16c-.19.19-.38.21-.7.07-.32-.15-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.64.15-.15.32-.38.48-.57.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.74-1.79-1.02-2.46-.27-.64-.55-.55-.75-.56-.19-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.3.32-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.21 2.3 3.5 5.58 4.78 3.28 1.28 3.28.85 3.87.8.59-.05 1.92-.78 2.2-1.53.27-.75.27-1.39.19-1.53-.08-.15-.3-.21-.61-.36z" fill="#fff" />
            </svg>

            <span className="text-xs font-medium">WhatsApp</span>
        </a>
    );
};

export default WhatsAppButton;