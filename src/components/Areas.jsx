import { motion } from 'framer-motion'
import { Home, Car, Wrench, Briefcase, TrendingUp } from 'lucide-react'
import { trackWhatsApp, waUrl } from '../utils/analytics'
import { useSectionTracking } from '../utils/useSectionTracking'

const areas = [
  {
    icon: Home,
    title: 'Imóveis',
    waContext: 'imoveis',
    description:
      'Residencial, comercial, terreno ou construção. Carta de crédito flexível para o imóvel que você escolher.',
    examples: ['Casa própria', 'Apartamento', 'Sala comercial', 'Terreno', 'Construção'],
  },
  {
    icon: Car,
    title: 'Veículos',
    waContext: 'veiculos',
    description:
      'Carro, caminhonete, moto ou caminhão, novo ou usado. Carta adaptada ao seu perfil de uso.',
    examples: ['Automóvel', 'Motocicleta', 'Caminhonete', 'Caminhão'],
  },
  {
    icon: Wrench,
    title: 'Máquinas e Equipamentos',
    waContext: 'maquinas',
    description:
      'Para quem tem negócio: equipamentos agrícolas, industriais ou para prestação de serviços.',
    examples: ['Tratores', 'Máquinas agrícolas', 'Equipamentos industriais'],
  },
  {
    icon: Briefcase,
    title: 'Serviços',
    waContext: 'servicos',
    description:
      'Reforma, viagem, educação, casamento. A carta de serviços é uma das mais versáteis e menos conhecidas.',
    examples: ['Reforma', 'Educação', 'Viagem', 'Eventos'],
  },
  {
    icon: TrendingUp,
    title: 'Investimentos',
    waContext: 'investimentos',
    description:
      'Usar consórcio como estratégia de investimento: contemplação com lance para geração de renda ou patrimônio.',
    examples: ['Imóvel para renda', 'Patrimônio a prazo', 'Lance estratégico'],
  },
]

export default function Areas() {
  const sectionRef = useSectionTracking('areas')
  return (
    <section id="areas" className="bg-carbon py-16 sm:py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Áreas de atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Cinco modalidades, <br className="hidden sm:block" />um modelo consultivo único
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
            Independente da categoria, o ponto de partida é sempre o mesmo: entender o seu objetivo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:border-white/20 ${
                  index === 4
                    ? 'sm:col-span-2 lg:col-span-1 bg-accent/8 border-accent/20 hover:border-accent/40'
                    : 'bg-white/4 border-white/8'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mb-4 group-hover:bg-white/12 transition-colors">
                  <Icon size={18} className="text-white/60 group-hover:text-white/90 transition-colors" />
                </div>

                <h3 className="font-bold text-white text-base mb-2">{area.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{area.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {area.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-xs text-white/40 bg-white/5 border border-white/8 rounded-full px-2.5 py-1"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                <a
                  href={waUrl(area.waContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp(`areas_${area.waContext}`)}
                  className="text-xs text-white/35 hover:text-white/65 transition-colors inline-block py-2 -mb-2"
                >
                  Conversar com William →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
