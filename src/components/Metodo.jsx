import { motion } from 'framer-motion'
import { Search, BarChart2, Layers, Users } from 'lucide-react'
import { useSectionTracking } from '../utils/useSectionTracking'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Entender o que você já construiu, o que está construindo agora e onde quer chegar. Sem esse mapeamento, qualquer produto é um chute.',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'Análise de viabilidade',
    description:
      'Avaliar se consórcio é de fato a ferramenta certa para o seu momento, considerando renda, prazo, objetivo e alternativas disponíveis.',
    pendingNote: true,
  },
  {
    number: '03',
    icon: Layers,
    title: 'Estruturação',
    description:
      'Desenhar a carta ideal, o prazo adequado, a parcela que cabe no orçamento e a estratégia de lance para antecipar a contemplação quando fizer sentido.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Acompanhamento',
    description:
      'Seguir com o cliente até a contemplação e a utilização da carta, não só até a assinatura do contrato. A jornada não termina na venda.',
  },
]

export default function Metodo() {
  const sectionRef = useSectionTracking('metodo')
  return (
    <section id="metodo" className="bg-offwhite py-16 sm:py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Método
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-carbon leading-tight mb-4">
            Uma abordagem consultiva, <br className="hidden sm:block" />
            do diagnóstico ao acompanhamento
          </h2>
          <p className="text-carbon/55 text-base sm:text-lg max-w-xl leading-relaxed">
            Quatro etapas que garantem que a decisão seja tomada com informação, não com pressa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 border border-carbon/8 hover:border-carbon/16 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute top-5 right-5 text-carbon/10 font-bold text-4xl leading-none select-none">
                  {step.number}
                </span>

                <div className="w-10 h-10 rounded-xl bg-carbon/5 flex items-center justify-center mb-4 group-hover:bg-accent/8 transition-colors duration-300">
                  <Icon size={18} className="text-carbon/60 group-hover:text-accent transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-carbon text-lg mb-2">{step.title}</h3>
                <p className="text-carbon/55 text-sm leading-relaxed">{step.description}</p>

                {step.pendingNote && (
                  <p className="mt-3 text-carbon/40 text-xs italic border-t border-carbon/8 pt-3">
                    "Quando consórcio não é a ferramenta certa, eu digo."
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
