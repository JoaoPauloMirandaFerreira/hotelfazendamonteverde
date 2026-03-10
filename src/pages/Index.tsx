import { Heart, Leaf, ShieldCheck, Bed, Wifi, Mountain, Bath, Triangle, MapPin, Users, Phone, ExternalLink, ChevronDown, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp, FadeIn, ScaleIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

import heroBg from "@/assets/hero-bg.jpg";
import aboutFarm from "@/assets/about-farm.jpg";
import acomodacoes from "@/assets/acomodacoes.jpg";
import cavalo from "@/assets/cavalo.jpg";
import piscina from "@/assets/piscina.jpg";
import pesca from "@/assets/pesca.jpg";
import fazenda from "@/assets/fazenda.jpg";
import contatoBg from "@/assets/contato-bg.jpg";

const navLinks = [
  { label: "SOBRE", href: "#sobre" },
  { label: "ACOMODAÇÕES", href: "#acomodacoes" },
  { label: "ATIVIDADES", href: "#atividades" },
  { label: "ROTEIRO", href: "#roteiro" },
  { label: "PACOTES", href: "#pacotes" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTATO", href: "#contato" },
];

const SectionHeader = ({ subtitle, title, gold = false }: { subtitle: string; title: React.ReactNode; gold?: boolean }) => (
  <FadeUp className="text-center mb-16">
    <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">{subtitle}</p>
    <h2 className={`font-serif text-4xl md:text-5xl ${gold ? "" : "text-foreground"}`}>{title}</h2>
    <div className="w-16 h-1 bg-farm-gold mx-auto mt-4" />
  </FadeUp>
);

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-farm-dark/98 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="font-serif text-xl font-bold text-white tracking-wide">
            Monte Verde
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-farm-gold text-xs font-semibold tracking-[0.2em] transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-farm-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-farm-dark/98 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/80 hover:text-farm-gold text-sm font-semibold tracking-[0.15em] py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroBg})`, y: heroY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            SUA ESCAPADA RURAL PERFEITA
          </motion.p>
          <motion.h1
            className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Hotel Fazenda
          </motion.h1>
          <motion.p
            className="font-serif text-5xl md:text-7xl italic text-farm-gold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Monte Verde
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Fuja do agito da cidade e viva uma experiência única na natureza.
            <br />
            Conforto, lazer e contato com a natureza em um só lugar.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a
              href="#contato"
              className="bg-farm-gold hover:bg-farm-gold/90 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-all duration-300 hover:shadow-lg hover:shadow-farm-gold/30 hover:-translate-y-0.5"
            >
              RESERVE AGORA
            </a>
            <a
              href="#sobre"
              className="border border-white/60 hover:bg-white/10 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5"
            >
              DESCUBRA MAIS
            </a>
          </motion.div>
        </motion.div>
        <motion.a
          href="#sobre"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader subtitle="CONHEÇA NOSSO ESPAÇO" title="Sobre o Hotel Fazenda" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="rounded-xl overflow-hidden shadow-2xl group">
                <img
                  src={aboutFarm}
                  alt="Vista aérea da fazenda"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </SlideInLeft>
            <StaggerContainer className="space-y-8">
              {[
                {
                  icon: Heart,
                  title: "História e Tradição",
                  desc: "O Hotel Fazenda Monte Verde oferece uma experiência autêntica e acolhedora, enraizada na tradição rural brasileira.",
                },
                {
                  icon: Leaf,
                  title: "Sustentabilidade",
                  desc: "Práticas sustentáveis que preservam a natureza e promovem o bem-estar de todos os hóspedes e da comunidade.",
                },
                {
                  icon: ShieldCheck,
                  title: "Conforto & Segurança",
                  desc: "Infraestrutura completa para que você e sua família desfrutem de momentos inesquecíveis com total tranquilidade.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full border-2 border-farm-green flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-farm-green group-hover:scale-110">
                      <item.icon className="w-5 h-5 text-farm-green transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Acomodações */}
      <section id="acomodacoes" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader subtitle="DESCANSO & CONFORTO" title="Acomodações" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="order-2 md:order-1">
              <h3 className="font-serif text-3xl text-foreground mb-6">Suítes & Quartos</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossas acomodações combinam o charme rústico com o conforto moderno. Quartos amplos com vista para os campos verdes, mobiliário em madeira e toda a tranquilidade que você merece.
              </p>
              <StaggerContainer className="grid grid-cols-2 gap-3">
                {[
                  { icon: Bed, label: "Camas confortáveis" },
                  { icon: Wifi, label: "Wi-Fi gratuito" },
                  { icon: Mountain, label: "Vista para o campo" },
                  { icon: Bath, label: "Banheiro privativo" },
                ].map((amenity) => (
                  <StaggerItem key={amenity.label}>
                    <div className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <amenity.icon className="w-5 h-5 text-farm-brown-light" />
                      <span className="text-sm text-foreground">{amenity.label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideInLeft>
            <SlideInRight className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-2xl group">
                <img src={acomodacoes} alt="Acomodações" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section id="atividades" className="py-24 bg-farm-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader subtitle="LAZER & AVENTURA" title={<>Atividades & <span className="text-farm-gold">Entretenimento</span></>} gold />
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              { img: cavalo, title: "Passeios a Cavalo", desc: "Passeios guiados por trilhas cênicas, com instrutores experientes." },
              { img: piscina, title: "Piscina", desc: "Área de lazer com piscina para toda a família." },
              { img: pesca, title: "Pesca", desc: "Pesque em lagos tranquilos rodeados pela natureza." },
              { img: fazenda, title: "Vida na Fazenda", desc: "Viva o dia a dia da fazenda de perto." },
            ].map((activity) => (
              <StaggerItem key={activity.title}>
                <motion.div
                  className="relative h-[350px] rounded-xl overflow-hidden group cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <h3 className="font-serif text-2xl font-bold mb-1">{activity.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
                      {activity.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Roteiro */}
      <section id="roteiro" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader subtitle="EXPLORE A FAZENDA" title="Roteiro de Passeios" />
          <div className="space-y-0">
            {[
              { num: "01", icon: Triangle, title: "Trilhas Ecológicas", desc: "Explore a natureza em trilhas ecológicas e admire a flora e fauna local." },
              { num: "02", icon: MapPin, title: "Visita à Fazenda", desc: "Conheça o dia a dia da fazenda, com visita à horta, ao curral e à criação de animais." },
              { num: "03", icon: Users, title: "Passeio de Cavalo", desc: "Curta um passeio relaxante pela propriedade em cavalos dóceis e bem treinados." },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.2}>
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-farm-green flex items-center justify-center text-white font-bold text-lg shrink-0"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.num}
                    </motion.div>
                    {i < 2 && <div className="w-0.5 h-24 bg-farm-green/30" />}
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-6 flex-1 mb-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-farm-brown-light" />
                      <h3 className="font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes */}
      <section id="pacotes" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader subtitle="OFERTAS ESPECIAIS" title="Pacotes & Promoções" />
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { num: "2", title: "2 Noites", desc: "Desfrute de um fim de semana inesquecível em casal.", color: "bg-farm-green" },
              { num: "12", title: "12 Pessoas", desc: "Diversão para toda a família em um pacote especial.", color: "bg-farm-gold" },
              { num: "10", title: "10 % OFF", desc: "Aproveite descontos especiais para grupos.", color: "bg-farm-green" },
            ].map((pkg) => (
              <StaggerItem key={pkg.title}>
                <motion.div
                  className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className={`w-20 h-20 ${pkg.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {pkg.num}
                  </motion.div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.desc}</p>
                  <a
                    href="#contato"
                    className="inline-block bg-farm-green hover:bg-farm-green-light text-white px-8 py-3 text-sm font-semibold tracking-[0.1em] transition-all duration-300 hover:shadow-lg hover:shadow-farm-green/20 rounded-sm"
                  >
                    SAIBA MAIS
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader subtitle="TIRE SUAS DÚVIDAS" title="Perguntas Frequentes" />
          <FadeUp>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Quais são os horários de check-in e check-out?", a: "O check-in é a partir das 14h e o check-out até às 12h. Horários flexíveis podem ser solicitados mediante disponibilidade." },
                { q: "É possível levar animais de estimação?", a: "Sim, aceitamos animais de estimação de pequeno porte. Consulte nossas condições ao fazer a reserva." },
                { q: "Quais atividades estão inclusas na diária?", a: "Piscina, trilhas ecológicas, visita à fazenda e área de lazer estão inclusos. Passeios a cavalo e pesca têm custo adicional." },
                { q: "Qual a capacidade máxima de hóspedes?", a: "Nossa fazenda comporta até 40 hóspedes simultaneamente, distribuídos em suítes e quartos." },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-6 bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${contatoBg})` }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-farm-dark/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <FadeUp>
            <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">VENHA NOS VISITAR</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Reserve Sua Estadia</h2>
            <div className="w-16 h-1 bg-farm-gold mx-auto mt-4 mb-8" />
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Garantir a sua estadia no Hotel Fazenda Monte Verde é fácil e rápido. Entre em contato conosco ou reserve diretamente pelo Airbnb.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 backdrop-blur-sm">
                <Phone className="w-5 h-5 text-farm-gold" />
                <div className="text-left">
                  <p className="text-xs text-white/60 uppercase tracking-wider">WHATSAPP</p>
                  <p className="font-semibold">(61) 98435-7851</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-farm-gold" />
                <div className="text-left">
                  <p className="text-xs text-white/60 uppercase tracking-wider">CONTATO</p>
                  <p className="font-semibold">Bruno Resende</p>
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.airbnb.com.br/rooms/1113040286107596948"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-farm-gold hover:bg-farm-gold/90 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-all duration-300 hover:shadow-lg hover:shadow-farm-gold/30 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                RESERVAR NO AIRBNB
              </a>
              <a
                href="https://wa.me/5561984357851"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/60 hover:bg-white/10 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5"
              >
                FALAR NO WHATSAPP
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-farm-dark text-white py-10">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="font-serif text-xl font-bold mb-2">Hotel Fazenda Monte Verde</h3>
            <p className="text-white/50 text-sm">
              © 2026 Todos os direitos reservados. Contato: Bruno Resende — (61) 98435-7851
            </p>
          </div>
        </FadeIn>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/5561984357851"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
};

export default Index;
