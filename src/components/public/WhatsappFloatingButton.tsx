import { MessageCircle } from "lucide-react";

type WhatsappFloatingButtonProps = {
  href: string;
};

export function WhatsappFloatingButton({
  href,
}: WhatsappFloatingButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-600 px-4 font-bold text-white shadow-2xl shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
      aria-label="Hubungi kami melalui WhatsApp"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
        aria-hidden="true"
      >
        <MessageCircle className="h-4 w-4" />
      </span>
      <span className="hidden pr-1 sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
