import { Heart, Leaf, ShieldCheck, Bed, Wifi, Mountain, Bath, Triangle, MapPin, Users, Phone, ExternalLink, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-farm-dark/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <a href="#" className="font-serif text-xl font-bold text-white tracking-wide">
            Monte Verde
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-xs font-semibold tracking-[0.2em] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
            SUA ESCAPADA RURAL PERFEITA
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-2">
            Hotel Fazenda
          </h1>
          <p className="font-serif text-5xl md:text-7xl italic text-farm-gold mb-8">
            Monte Verde
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fuja do agito da cidade e viva uma experiência única na natureza.
            <br />
            Conforto, lazer e contato com a natureza em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-farm-gold hover:bg-farm-gold/90 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-colors"
            >
              RESERVE AGORA
            </a>
            <a
              href="#sobre"
              className="border border-white/60 hover:bg-white/10 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-colors"
            >
              DESCUBRA MAIS
            </a>
          </div>
        </div>
        <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">
              CONHEÇA NOSSO ESPAÇO
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Sobre o Hotel Fazenda
            </h2>
            <div className="w-16 h-1 bg-farm-gold mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={aboutFarm} alt="Vista aérea da fazenda" className="w-full h-[400px] object-cover" />
            </div>
            <div className="space-y-8">
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
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-farm-green flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-farm-green" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acomodações Section */}
      <section id="acomodacoes" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">
              DESCANSO & CONFORTO
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Acomodações
            </h2>
            <div className="w-16 h-1 bg-farm-gold mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-serif text-3xl text-foreground mb-6">
                Suítes & Quartos
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossas acomodações combinam o charme rústico com o conforto moderno. Quartos amplos com vista para os campos verdes, mobiliário em madeira e toda a tranquilidade que você merece.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Bed, label: "Camas confortáveis" },
                  { icon: Wifi, label: "Wi-Fi gratuito" },
                  { icon: Mountain, label: "Vista para o campo" },
                  { icon: Bath, label: "Banheiro privativo" },
                ].map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-3"
                  >
                    <amenity.icon className="w-5 h-5 text-farm-brown-light" />
                    <span className="text-sm text-foreground">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img src={acomodacoes} alt="Acomodações" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Atividades Section */}
      <section id="atividades" className="py-24 bg-farm-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">
              LAZER & AVENTURA
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Atividades & <span className="text-farm-gold">Entretenimento</span>
            </h2>
            <div className="w-16 h-1 bg-farm-gold mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                img: cavalo,
                title: "Passeios a Cavalo",
                desc: "Passeios guiados por trilhas cênicas, com instrutores experientes. Diversas opções de duração e dificuldade.",
              },
              {
                img: piscina,
                title: "Piscina",
                desc: "",
              },
              {
                img: pesca,
                title: "Pesca",
                desc: "",
              },
              {
                img: fazenda,
                title: "Vida na Fazenda",
                desc: "",
              },
            ].map((activity) => (
              <div
                key={activity.title}
                className="relative h-[350px] rounded-lg overflow-hidden group"
              >
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-2xl font-bold mb-1">{activity.title}</h3>
                  {activity.desc && (
                    <p className="text-white/80 text-sm leading-relaxed">{activity.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roteiro Section */}
      <section id="roteiro" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">
              EXPLORE A FAZENDA
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Roteiro de Passeios
            </h2>
            <div className="w-16 h-1 bg-farm-gold mx-auto mt-4" />
          </div>
          <div className="space-y-0">
            {[
              {
                num: "01",
                icon: Triangle,
                title: "Trilhas Ecológicas",
                desc: "Explore a natureza em trilhas ecológicas e admire a flora e fauna local.",
              },
              {
                num: "02",
                icon: MapPin,
                title: "Visita à Fazenda",
                desc: "Conheça o dia a dia da fazenda, com visita à horta, ao curral e à criação de animais.",
              },
              {
                num: "03",
                icon: Users,
                title: "Passeio de Cavalo",
                desc: "Curta um passeio relaxante pela propriedade em cavalos dóceis e bem treinados.",
              },
            ].map((step, i) => (
              <div key={step.num} className="flex items-start gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-farm-green flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {step.num}
                  </div>
                  {i < 2 && <div className="w-0.5 h-24 bg-farm-green/30" />}
                </div>
                {/* Content */}
                <div className="bg-secondary/50 rounded-lg p-6 flex-1 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-farm-brown-light" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes Section */}
      <section id="pacotes" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">
              OFERTAS ESPECIAIS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Pacotes & Promoções
            </h2>
            <div className="w-16 h-1 bg-farm-gold mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "2",
                title: "2 Noites",
                desc: "Desfrute de um fim de semana inesquecível em casal.",
                color: "bg-farm-green",
              },
              {
                num: "12",
                title: "12 Pessoas",
                desc: "Diversão para toda a família em um pacote especial.",
                color: "bg-farm-gold",
              },
              {
                num: "10",
                title: "10 % OFF",
                desc: "Aproveite descontos especiais para grupos.",
                color: "bg-farm-green",
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-20 h-20 ${pkg.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6`}
                >
                  {pkg.num}
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{pkg.title}</h3>
                <p className="text-muted-foreground mb-6">{pkg.desc}</p>
                <a
                  href="#contato"
                  className="inline-block bg-farm-green hover:bg-farm-green-light text-white px-8 py-3 text-sm font-semibold tracking-[0.1em] transition-colors"
                >
                  SAIBA MAIS
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">
              TIRE SUAS DÚVIDAS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Perguntas Frequentes
            </h2>
            <div className="w-16 h-1 bg-farm-gold mx-auto mt-4" />
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Quais são os horários de check-in e check-out?",
                a: "O check-in é a partir das 14h e o check-out até às 12h. Horários flexíveis podem ser solicitados mediante disponibilidade.",
              },
              {
                q: "É possível levar animais de estimação?",
                a: "Sim, aceitamos animais de estimação de pequeno porte. Consulte nossas condições ao fazer a reserva.",
              },
              {
                q: "Quais atividades estão inclusas na diária?",
                a: "Piscina, trilhas ecológicas, visita à fazenda e área de lazer estão inclusos. Passeios a cavalo e pesca têm custo adicional.",
              },
              {
                q: "Qual a capacidade máxima de hóspedes?",
                a: "Nossa fazenda comporta até 40 hóspedes simultaneamente, distribuídos em suítes e quartos.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-6 bg-secondary/30"
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
        </div>
      </section>

      {/* Contato / Reserve Section */}
      <section
        id="contato"
        className="relative py-24"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contatoBg})` }}
        />
        <div className="absolute inset-0 bg-farm-dark/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-farm-gold text-sm tracking-[0.3em] uppercase mb-4">
            VENHA NOS VISITAR
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Reserve Sua Estadia
          </h2>
          <div className="w-16 h-1 bg-farm-gold mx-auto mt-4 mb-8" />
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Garantir a sua estadia no Hotel Fazenda Monte Verde é fácil e rápido. Entre em contato conosco ou reserve diretamente pelo Airbnb.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-farm-gold" />
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase tracking-wider">WHATSAPP</p>
                <p className="font-semibold">(61) 98435-7851</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-farm-gold" />
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase tracking-wider">CONTATO</p>
                <p className="font-semibold">Bruno Resende</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-farm-gold hover:bg-farm-gold/90 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              RESERVAR NO AIRBNB
            </a>
            <a
              href="https://wa.me/5561984357851"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/60 hover:bg-white/10 text-white px-10 py-4 text-sm font-semibold tracking-[0.15em] transition-colors"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-farm-dark text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-serif text-xl font-bold mb-2">Hotel Fazenda Monte Verde</h3>
          <p className="text-white/50 text-sm">
            © 2026 Todos os direitos reservados. Contato: Bruno Resende — (61) 98435-7851
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
