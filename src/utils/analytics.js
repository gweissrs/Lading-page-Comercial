const _pageLoadTime = Date.now()

export function trackWhatsApp(location) {
  if (typeof window.gtag !== 'function') return
  const params = new URLSearchParams(window.location.search)
  const scrollPct = Math.round(
    (window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)) * 100
  )
  window.gtag('event', 'whatsapp_click', {
    location,
    utm_source:       params.get('utm_source')   || '(none)',
    utm_medium:       params.get('utm_medium')   || '(none)',
    utm_campaign:     params.get('utm_campaign') || '(none)',
    referrer:         document.referrer          || '(direct)',
    seconds_to_click: Math.round((Date.now() - _pageLoadTime) / 1000),
    scroll_depth_pct: scrollPct,
  })
}

export function trackSection(sectionName) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'section_view', { section_name: sectionName })
}

export function trackFaqOpen(index, question) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'faq_open', { question_index: index, question_text: question })
}

const _WA_BASE = 'https://wa.me/554898173153'
const _defaultText = 'Olá, William! Vim pelo site e gostaria de conversar sobre consórcio.'

const _messages = {
  imoveis:       'Olá, William! Tenho interesse em consórcio de imóvel e quero entender se faz sentido para mim.',
  veiculos:      'Olá, William! Tenho interesse em consórcio de veículo e gostaria de entender as opções.',
  maquinas:      'Olá, William! Tenho interesse em consórcio de máquinas ou equipamentos e quero conversar.',
  servicos:      'Olá, William! Tenho interesse em consórcio de serviços e quero entender como funciona.',
  investimentos: 'Olá, William! Quero entender como usar consórcio como estratégia de investimento.',
  faq_prazo:     'Olá, William! Fiquei com dúvida sobre estratégia de lance. Quero entender como funciona no meu caso.',
  trajetoria:    'Olá, William! Li sobre sua trajetória e gostaria de conversar sobre consórcio.',
}

export function waUrl(context) {
  const text = _messages[context] || _defaultText
  return `${_WA_BASE}?text=${encodeURIComponent(text)}`
}

export const WA_URL = `${_WA_BASE}?text=${encodeURIComponent(_defaultText)}`
