import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { trackWhatsApp, trackFaqOpen, waUrl } from '../utils/analytics'
import { useSectionTracking } from '../utils/useSectionTracking'

const faqs = [
  {
    q: 'O que é consórcio?',
    a: 'Consórcio é um sistema de compra coletiva: um grupo de pessoas contribui com parcelas mensais e, periodicamente, um ou mais participantes são contemplados com uma carta de crédito no valor do bem desejado. É regulamentado pelo Banco Central do Brasil.',
  },
  {
    q: 'Qual a diferença entre consórcio e financiamento?',
    a: 'No financiamento você paga juros sobre o saldo devedor. O custo real do bem cresce substancialmente ao longo do contrato. No consórcio não há juros: você paga apenas uma taxa de administração sobre o valor total da carta. Na prática, o consórcio costuma custar de 15% a 20% do valor do bem, enquanto um financiamento pode chegar a 50% ou mais dependendo do prazo e da taxa.',
  },
  {
    q: 'Quando sou contemplado?',
    a: 'A contemplação acontece de duas formas: por sorteio (mensal, ao longo de todo o plano) ou por lance (você oferta uma porcentagem do crédito para antecipar a contemplação). Quanto maior o lance, mais chances de ser contemplado antes. Não é possível garantir prazo. Quem promete isso não está sendo honesto.',
    cta: { text: 'Entender a estratégia de lance no meu caso →', context: 'faq_prazo' },
  },
  {
    q: 'Posso usar a carta de crédito para qualquer imóvel ou veículo?',
    a: 'Sim, para o tipo de bem da modalidade contratada. Uma carta de imóvel serve para qualquer imóvel: residencial, comercial, terreno ou construção. A carta de veículo serve para qualquer veículo novo ou usado (de acordo com as regras do grupo). Isso dá liberdade de escolha que o financiamento vinculado não oferece.',
  },
  {
    q: 'Consórcio é para qualquer perfil de renda?',
    a: 'Sim, desde que as parcelas caibam no orçamento do cliente. O planejamento define a carta ideal, o prazo e a estratégia de lance para que o compromisso mensal seja sustentável. É exatamente aí que entra a consultoria.',
  },
  {
    q: 'Consórcio é seguro?',
    a: 'Sim. O consórcio é regulamentado e fiscalizado pelo Banco Central do Brasil. A Embracon é uma das maiores administradoras do país, com mais de 35 anos de operação. Por lei, os recursos dos participantes ficam segregados do patrimônio da administradora. Seus pagamentos estão protegidos independentemente de qualquer problema com a empresa.',
  },
]

export default function ComoFunciona() {
  const [open, setOpen] = useState(null)
  const sectionRef = useSectionTracking('como-funciona')

  return (
    <section id="como-funciona" className="bg-carbon py-16 sm:py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Entenda antes de decidir
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Consórcio não é financiamento.
            <br className="hidden sm:block" /> A diferença importa.
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
            Sem juros, sem custo oculto. Só taxa de administração sobre o valor do bem.
            Entenda como funciona antes de qualquer decisão.
          </p>
        </motion.div>

        {/* Cards de comparação */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            { label: 'Financiamento', value: '50%+', note: 'custo adicional com juros' },
            { label: 'Consórcio', value: '15–20%', note: 'taxa de administração total' },
            { label: 'Diferença', value: '30%+', note: 'que fica no seu bolso' },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`rounded-2xl p-5 border ${
                i === 1
                  ? 'bg-accent/10 border-accent/30'
                  : 'bg-white/4 border-white/8'
              }`}
            >
              <p className="text-white/40 text-xs font-medium uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className={`text-3xl font-bold mb-1 ${i === 1 ? 'text-accent' : 'text-white'}`}>
                {item.value}
              </p>
              <p className="text-white/50 text-xs">{item.note}</p>
            </div>
          ))}
        </motion.div>

        {/* FAQ accordion */}
        <div className="divide-y divide-white/8 border-y border-white/8">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                type="button"
                onClick={() => {
                  const newIndex = open === index ? null : index
                  setOpen(newIndex)
                  if (newIndex !== null) trackFaqOpen(index, item.q)
                }}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open === index}
              >
                <span className="text-white font-medium text-base group-hover:text-white/80 transition-colors">
                  {item.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 ${
                    open === index ? 'bg-accent border-accent rotate-45' : 'bg-white/5'
                  }`}
                >
                  <Plus size={12} className="text-white" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/55 text-sm leading-relaxed pb-3 pr-4">
                      {item.a}
                    </p>
                    {item.cta && (
                      <a
                        href={waUrl(item.cta.context)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsApp(`faq_${item.cta.context}`)}
                        className="inline-block text-xs text-accent hover:text-accent/70 transition-colors pb-5"
                      >
                        {item.cta.text}
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
