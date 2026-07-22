# William Weiss — Landing Page

Landing page para consultor credenciado Embracon. Stack: React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion v12.

---

## Decisões de conversão

### WhatsApp como único CTA
Formulários criam atrito. WhatsApp é o canal esperado para o público-alvo (clientes PF interessados em consórcio). Cada botão abre uma conversa já contextualizada com o nome da seção (ex: "Olá, li sobre sua trajetória..."), reduzindo o esforço do cliente para iniciar.

### Mensagem diferente por ponto de entrada
O `waUrl(context)` gera URLs com texto pré-preenchido para cada seção (imóveis, veículos, trajetória etc.). Clientes que chegam pelo bloco de imóvel falam de imóvel; não precisam se explicar. Isso melhora a taxa de resposta e a qualidade da conversa.

### "Sem compromisso. Se não for o momento certo, William vai te dizer isso."
Consórcio tem resistência emocional: medo de compromisso de longo prazo. Esse copy remove a barreira diretamente. Posicionar William como quem *desaconselha quando necessário* aumenta a credibilidade e reduz o custo por conversa iniciada em tráfego pago.

### Seção "Como funciona" com comparativo numérico
Juros do financiamento (~50%) vs. taxa de consórcio (~15-20%) = diferença de ~30%. Números concretos convertem mais que explicações abstratas. Usuário que entende o que está comprando tem menor taxa de abandono pós-conversa.

### Trajetória como prova de autoridade
10+ anos de mercado financeiro (BV, Barigui, Santander) antes da Embracon. Mostrar o caminho, não só o destino final, comunica profundidade técnica sem precisar de testemunhos ainda não disponíveis.

### Foto do William no hero (desktop)
Rostos humanos aumentam a confiança e diminuem a percepção de "landing page genérica". No mobile a foto foi removida para priorizar a leitura do headline sem scrollar.

### Float WhatsApp com detecção de seção
O botão flutuante detecta em qual seção o usuário está e registra o evento no GA4 (`float__trajetoria`, `float__areas`, etc.). Isso permite identificar qual conteúdo converte melhor sem depender de UTMs externos.

---

## Analytics (GA4: G-WSV58JJ3FM)

| Evento | Dimensões | Para que serve |
|---|---|---|
| `whatsapp_click` | `location`, `utm_*`, `scroll_depth_pct`, `seconds_to_click` | Principal conversão |
| `section_view` | `section_name` | Medir engajamento por seção |
| `faq_open` | `question_index`, `question_text` | Identificar dúvidas mais comuns |

> **Ação manual necessária**: marcar `whatsapp_click` como conversão em GA4 → Admin → Eventos → toggle "Marcar como conversão".

---

## Próximos passos (quando disponível)

- **Prova social**: adicionar depoimentos reais de clientes com nome, cidade e tipo de consórcio
- **Números reais**: quantos grupos ativos, valor médio de carta, prazo médio de contemplação
