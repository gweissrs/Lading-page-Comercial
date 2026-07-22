import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'O que é consórcio?',
    a: 'Sistema de compra coletiva regulamentado pelo Banco Central. Um grupo de pessoas contribui com parcelas mensais e, periodicamente, um ou mais participantes são contemplados com uma carta de crédito — que funciona como dinheiro para comprar o bem escolhido.',
  },
  {
    q: 'Qual a diferença entre consórcio e financiamento?',
    a: 'No financiamento você paga juros sobre o valor que você ainda deve — o custo real do bem cresce substancialmente. No consórcio não há juros: apenas uma taxa de administração entre 15% e 20% do valor total. Um financiamento pode chegar a 50% ou mais de custo adicional.',
  },
  {
    q: 'Quando sou contemplado?',
    a: 'Por sorteio mensal ao longo de todo o plano, ou por lance — quando você oferta uma porcentagem do crédito para antecipar a contemplação. Não existe prazo garantido — desconfie de quem prometer isso.',
  },
  {
    q: 'Posso usar a carta para qualquer imóvel ou veículo?',
    a: 'Sim. Uma carta de imóvel serve para residencial, comercial, terreno ou construção. Uma carta de veículo vale para qualquer veículo novo ou usado dentro das regras do grupo. Você escolhe o bem depois de contemplado.',
  },
  {
    q: 'Preciso ter dinheiro guardado para entrar em um consórcio?',
    a: 'Não. Você começa com a primeira parcela. Se quiser antecipar a contemplação por lance, pode usar o próprio saldo acumulado no grupo — sem tirar nada do bolso. A consultoria define se essa estratégia faz sentido para o seu caso.',
  },
  {
    q: 'Consórcio é para qualquer perfil de renda?',
    a: 'Sim, desde que as parcelas caibam no orçamento. O planejamento define a carta ideal, o prazo e a estratégia de lance para que o compromisso mensal seja sustentável. É exatamente aí que entra a consultoria.',
  },
]

export default function FAQMonochrome() {
  const [open, setOpen] = useState(null)

  return (
    <section id="como-funciona" className="bg-offwhite py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-carbon/40 mb-4 block">
            Perguntas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-carbon leading-tight">
            Entenda antes de decidir.
          </h2>
        </div>

        {/* Items */}
        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border-t border-carbon/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-5 py-7 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  {/* Number */}
                  <span className="text-xs font-mono tabular-nums text-carbon/50 flex-shrink-0 w-5 select-none pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-lg font-medium leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-carbon' : 'text-carbon/65'
                    }`}
                  >
                    {item.q}
                  </span>

                  {/* Icon */}
                  <span className="flex-shrink-0 w-5 h-5 relative ml-4 mt-0.5" aria-hidden="true">
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-carbon/40 -translate-y-1/2 rounded-full" />
                    <motion.span
                      className="absolute top-0 left-1/2 h-full w-[1.5px] bg-carbon/40 -translate-x-1/2 rounded-full"
                      animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pl-10 pb-8 text-sm leading-relaxed"
                        style={{ color: 'rgba(26,26,26,0.6)' }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
          <div className="border-t border-carbon/10" />
        </div>

      </div>
    </section>
  )
}
