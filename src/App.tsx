import { useState, useEffect } from 'react';
import {
  Headphones,
  MessageCircle,
  Clock,
  Users,
  ShieldCheck,
  Zap,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Send,
} from 'lucide-react';

const WHATSAPP_NUMBER = '5511967450723';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de falar com o atendimento ao cliente.'
)}`;

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-red-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-md shadow-red-200 group-hover:scale-110 transition-transform">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              Central de <span className="text-red-600">Atendimento</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md shadow-red-200"
            >
              <MessageCircle className="w-4 h-4" />
              Falar Agora
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 text-white text-sm font-semibold rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-red-700">
              Atendimento online agora
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Atendimento ao cliente{' '}
            <span className="text-red-600">e Suporte</span>
          </h1>

          <p
            className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Fale com nossa equipe diretamente pelo WhatsApp. Tire suas dúvidas,
            resolva problemas e receba suporte especializado sem complicação.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar Conversa no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-red-300 hover:text-red-600 transition-all"
            >
              Conhecer Serviços
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div
            className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { value: '24h', label: 'Disponível' },
              { value: '100%', label: 'Qualidade' },
              { value: '< 2min', label: 'Resposta' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: HelpCircle,
      title: 'Tira-Dúvidas',
      description:
        'Esclareça suas dúvidas sobre produtos, serviços e processos com nossa equipe especializada.',
      message: 'Olá! Tenho algumas dúvidas e gostaria de falar com o atendimento.',
    },
    {
      icon: ShieldCheck,
      title: 'Suporte Técnico',
      description:
        'Resolva problemas técnicos com orientação passo a passo da nossa equipe de suporte.',
      message: 'Olá! Preciso de suporte técnico. Pode me ajudar?',
    },
    {
      icon: Zap,
      title: 'Atendimento Express',
      description:
        'Para situações urgentes, oferecemos um canal prioritado para resposta rápida.',
      message: 'Olá! Preciso de atendimento urgente.',
    },
    {
      icon: Users,
      title: 'Falar com Especialista',
      description:
        'Converse diretamente com um especialista da área que você precisa.',
      message: 'Olá! Gostaria de falar com um especialista.',
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Como podemos te ajudar?
          </h2>
          <p className="mt-4 text-gray-600">
            Escolha a opção que melhor atende sua necessidade e fale conosco
            pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href={waLink(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Escolha o serviço',
      description:
        'Selecione a opção de atendimento que melhor se adapta à sua necessidade.',
    },
    {
      number: '02',
      title: 'Clique no botão',
      description:
        'Toque em qualquer botão do WhatsApp e você será redirecionado direto para nossa conversa.',
    },
    {
      number: '03',
      title: 'Converse conosco',
      description:
        'Nossa equipe responderá em poucos minutos com toda a ajuda que você precisa.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
            Como Funciona
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Atendimento em 3 passos simples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-red-200 to-transparent -translate-x-1/2" />
              )}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:shadow-red-50 transition-all">
                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-red-600">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Começar Agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como falo com o atendimento?',
      answer:
        'Basta clicar em qualquer botão do WhatsApp em nosso site. Você será redirecionado diretamente para uma conversa com nossa equipe.',
    },
    {
      question: 'Qual o horário de atendimento?',
      answer:
        'Nosso atendimento está disponível 24 horas por dia, 7 dias por semana. Em horários de pico, a resposta pode levar alguns minutos a mais.',
    },
    {
      question: 'Preciso pagar pelo atendimento?',
      answer:
        'Não! Nosso atendimento ao cliente é totalmente gratuito. Você só paga pela conexão com a internet ao usar o WhatsApp.',
    },
    {
      question: 'Quanto tempo leva para responder?',
      answer:
        'Na maioria dos casos, respondemos em menos de 2 minutos. Para situações urgentes, utilize o canal de Atendimento Express.',
    },
    {
      question: 'Posso falar com um especialista específico?',
      answer:
        'Sim! Escolha a opção "Falar com Especialista" e informe qual área você precisa. Direcionaremos sua conversa para o profissional certo.',
    },
  ];

  return (
    <section id="duvidas" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Perguntas comuns
          </h2>
          <p className="mt-4 text-gray-600">
            Não encontrou sua resposta? Fale conosco no WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-red-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronRight
                  className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-red-600 font-semibold rounded-xl border-2 border-red-200 hover:border-red-300 hover:bg-red-50 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Ainda tem dúvidas? Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactItems = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(11) 96745-0723',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'atendimento@central.com',
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Disponível 24 horas',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Atendimento Online',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
              Contato
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Estamos prontos para te atender
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Escolha o canal de sua preferência. Para atendimento imediato,
              recomendamos o WhatsApp — nossa equipe responde em minutos.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 md:p-10 text-center shadow-2xl shadow-red-200">
              <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6 animate-float">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Fale conosco agora
              </h3>
              <p className="mt-3 text-red-100 leading-relaxed">
                Clique no botão abaixo e inicie uma conversa direta pelo
                WhatsApp com nossa equipe de atendimento.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Iniciar Conversa
                <Send className="w-4 h-4" />
              </a>
              <div className="mt-6 flex items-center justify-center gap-2 text-red-100 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Resposta em menos de 2 minutos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center">
              <Headphones className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Central de Atendimento
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#inicio" className="text-sm text-gray-400 hover:text-white transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-sm text-gray-400 hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="text-sm text-gray-400 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#duvidas" className="text-sm text-gray-400 hover:text-white transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contato
            </a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Central de Atendimento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-300 animate-pulse-ring hover:bg-green-600 transition-colors"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}

export default App;
