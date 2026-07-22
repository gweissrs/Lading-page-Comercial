import { ArrowRight } from "lucide-react";
import { trackWhatsApp, WA_URL } from '../utils/analytics';
import { useSectionTracking } from '../utils/useSectionTracking';

export default function Hero() {
  const sectionRef = useSectionTracking('hero')
  return (
    <div className="relative w-full bg-carbon text-white overflow-hidden font-sans" ref={sectionRef}>

      {/* Layout principal */}
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 items-stretch">

          {/* Coluna esquerda: texto */}
          <div className="lg:col-span-5 px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-32 flex flex-col justify-center gap-6 sm:gap-7">

            {/* Badge — estático, sem ping */}
            <div className="hero-fade hero-delay-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40 flex-shrink-0" />
                <span className="text-[12px] font-semibold uppercase tracking-wider text-white/50">
                  Consultor Embracon · Todo o Brasil
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="hero-fade hero-delay-2 text-[2rem] sm:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tighter leading-[0.95] sm:leading-[0.92]">
              Antes de indicar,<br />
              eu entendo<br />
              o{' '}
              <span className="bg-gradient-to-br from-white via-white to-salmon bg-clip-text text-transparent">
                seu momento.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="hero-fade hero-delay-3 text-base text-zinc-400 leading-relaxed sm:max-w-sm">
              10 anos nos maiores bancos do Brasil. Hoje consultor Embracon: imóvel ou veículo sem pagar juros de financiamento.
            </p>

            {/* CTAs — método primeiro, WA segundo */}
            <div className="hero-fade hero-delay-4 flex flex-col sm:flex-row gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('hero')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.97] active:bg-accent-dark min-h-[48px]"
              >
                <WhatsAppIcon />
                Falar com William
              </a>
              <a
                href="#metodo"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20 active:bg-white/15 min-h-[48px]"
              >
                Ver o método
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Coluna direita: foto (desktop) */}
          <div className="hidden lg:block lg:col-span-7 relative overflow-hidden min-h-[820px]">

            {/* Halo ambiente */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background: [
                  'radial-gradient(ellipse 60% 55% at 52% 36%, rgba(255,255,255,0.05) 0%, transparent 65%)',
                  'radial-gradient(ellipse 45% 8%  at 50% 100%, rgba(0,0,0,0.45)          0%, transparent 100%)',
                ].join(', '),
              }}
            />

            <img
              src="/william.png"
              alt="William Weiss, consultor de consórcio em Florianópolis"
              fetchPriority="high"
              loading="eager"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none select-none pointer-events-none z-10"
              draggable={false}
            />

            {/* Gradientes de integração */}
            <div
              className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-20"
              style={{ background: 'linear-gradient(to top, var(--color-carbon) 0%, transparent 100%)' }}
            />
            <div
              className="absolute inset-y-0 left-0 w-36 pointer-events-none z-20"
              style={{ background: 'linear-gradient(to right, var(--color-carbon) 0%, transparent 100%)' }}
            />
            <div
              className="absolute inset-x-0 top-0 h-20 pointer-events-none z-20"
              style={{ background: 'linear-gradient(to bottom, var(--color-carbon) 0%, transparent 100%)' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
