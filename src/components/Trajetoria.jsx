// Baseado em: https://ui.aceternity.com/components/timeline
// Adaptado: TypeScript→JSX, motion/react→framer-motion, dark: classes→paleta fixa, dados reais William Weiss

import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trackWhatsApp, waUrl } from '../utils/analytics';
import { useSectionTracking } from '../utils/useSectionTracking';

const timelineData = [
  {
    title: "BV Financeira",
    content: (
      <div>
        <p className="font-semibold text-carbon text-sm md:text-base mb-2">
          8 anos
        </p>
        <p className="text-carbon/60 text-sm md:text-base leading-relaxed">
          Base técnica em crédito e financiamento. 8 anos atendendo pessoa física
          e jurídica em uma das maiores financeiras do país.
        </p>
      </div>
    ),
  },
  {
    title: "Barigui Financeira",
    content: (
      <div>
        <p className="font-semibold text-carbon text-sm md:text-base mb-2">
          2 anos
        </p>
        <p className="text-carbon/60 text-sm md:text-base leading-relaxed">
          Aprofundamento em consultoria individual: leitura de perfil e adequação
          à necessidade real, não ao catálogo.
        </p>
      </div>
    ),
  },
  {
    title: "Santander",
    content: (
      <div>
        <p className="font-semibold text-carbon text-sm md:text-base mb-2">
          1 semestre
        </p>
        <p className="text-carbon/60 text-sm md:text-base leading-relaxed">
          Agente comercial com visão de ecossistema financeiro e atendimento
          de alta complexidade no maior banco privado europeu com operação no Brasil.
        </p>
      </div>
    ),
  },
  {
    title: "Embracon",
    content: (
      <div>
        <p className="font-semibold text-carbon text-sm md:text-base mb-2">
          Hoje, especialista em consórcio
        </p>
        <p className="text-carbon/60 text-sm md:text-base leading-relaxed">
          Toda essa trajetória em um único modelo: entender o momento do cliente
          antes de indicar qualquer produto.
        </p>
      </div>
    ),
  },
];

function TimelineItem({ item, lineHeight, innerRef }) {
  const dotRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const dotOffsetRef = useRef(null);

  // Pré-computa o offset do dot em relação ao topo de innerRef no mount,
  // antes de qualquer sticky entrar em jogo.
  useEffect(() => {
    if (!dotRef.current || !innerRef.current) return;
    const containerTop = innerRef.current.getBoundingClientRect().top + window.scrollY;
    const dotTop = dotRef.current.getBoundingClientRect().top + window.scrollY;
    dotOffsetRef.current = dotTop - containerTop + 20;
  }, [innerRef]);

  useMotionValueEvent(lineHeight, "change", (h) => {
    if (dotOffsetRef.current === null) return;
    setIsActive(h >= dotOffsetRef.current);
  });

  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div
          ref={dotRef}
          className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-offwhite flex items-center justify-center"
        >
          <motion.div
            className="h-4 w-4 rounded-full border p-2"
            animate={{
              backgroundColor: isActive ? 'var(--color-accent)' : 'rgba(26,26,26,0.1)',
              borderColor:     isActive ? 'var(--color-accent)' : 'rgba(26,26,26,0.2)',
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.h3
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
          animate={{ color: isActive ? 'var(--color-accent)' : 'rgba(26,26,26,0.35)' }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>
      </div>

      <div className="relative pl-16 pr-4 md:pl-4 w-full">
        <motion.h3
          className="md:hidden block text-2xl mb-4 text-left font-bold"
          animate={{ color: isActive ? 'var(--color-accent)' : 'rgba(26,26,26,0.40)' }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>
        {item.content}
      </div>
    </div>
  );
}

function Timeline({ data }) {
  const innerRef = useRef(null);
  const lineHeight = useMotionValue(0);
  const lineOpacity = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => {
      const el = innerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const containerH = el.offsetHeight;

      if (containerH === 0) return;

      // progress 0→1:
      //   0 = container top at viewport center (rect.top = vh*0.5)
      //   1 = container bottom at viewport center (rect.bottom = vh*0.5)
      // denominator = containerH → tracking 1:1 com o scroll, sem delay inicial
      const progress = Math.max(0, Math.min(1,
        (vh * 0.5 - rect.top) / containerH
      ));

      lineHeight.set(progress * containerH);
      lineOpacity.set(Math.min(1, progress * 5));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // evaluate immediately on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [lineHeight, lineOpacity]);

  return (
    <div className="w-full bg-offwhite font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
          Trajetória
        </span>
        <h2 className="text-2xl md:text-4xl mb-4 text-carbon max-w-4xl font-bold leading-tight">
          Uma década no mercado financeiro. A serviço do cliente, não do produto.
        </h2>
      </div>

      <div ref={innerRef} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            lineHeight={lineHeight}
            innerRef={innerRef}
          />
        ))}

        <motion.div
          style={{ opacity: lineOpacity }}
          className="absolute md:left-8 left-8 top-0 h-full overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-carbon/15 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: lineHeight }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent via-accent/40 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20 pb-20">
        <div className="border-t border-carbon/10 pt-10 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 max-w-2xl">
          <p className="text-carbon/50 text-sm leading-relaxed">
            Toda essa experiência em bancos foi boa escola.<br className="hidden sm:block" />
            O melhor modelo: entender o cliente antes de qualquer produto.
          </p>
          <a
            href={waUrl('trajetoria')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('trajetoria')}
            className="inline-flex items-center justify-center gap-2 text-carbon font-semibold text-sm border border-carbon/20 rounded-full px-5 py-3 min-h-[44px] hover:bg-carbon/5 transition-colors flex-shrink-0"
          >
            Conversar com William →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Trajetoria() {
  const sectionRef = useSectionTracking('trajetoria')
  return (
    <section id="trajetoria" ref={sectionRef}>
      <Timeline data={timelineData} />
    </section>
  );
}
