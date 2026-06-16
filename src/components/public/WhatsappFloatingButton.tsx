type WhatsappFloatingButtonProps = {
    href: string;
};

export function WhatsappFloatingButton({
    href,
}: WhatsappFloatingButtonProps) {
    return (
        <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noreferrer"
          : undefined
      }
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-emerald-700"
      aria-label="Hubungi kami melalui WhatsApp"
    >
      <span aria-hidden="true">●</span>
      <span className="hidden sm:inline">
        WhatsApp
      </span>
    </a>
    );
}