import React, { useState } from 'react';
import { Menu, X, Check, ArrowRight, Users, Shield, BarChart, Award, ChevronDown, Instagram, Linkedin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    segment: '',
    revenue: '',
    participatesInBidding: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonialVideos = [
    {
      embedUrl: "https://www.youtube.com/embed/85OARhhvOhw?si=Boi0Z9iuN-D0nl9E",
      title: "Depoimento Cliente 1"
    },
    {
      embedUrl: "https://www.youtube.com/embed/Ou4lsJzFHzI?si=MUI0IP6zMmjC5xPt",
      title: "Depoimento Cliente 2"
    },
    {
      embedUrl: "https://www.youtube.com/embed/6flHoH41PsU?si=gmtdpUbW2FJYYHLa",
      title: "Depoimento Cliente 3"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">LGC Consultoria</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-primary hover:text-primary-light transition">Serviços</a>
            <a href="#sobre" className="text-primary hover:text-primary-light transition">Sobre</a>
            <a href="#depoimentos" className="text-primary hover:text-primary-light transition">Depoimentos</a>
            <button 
              onClick={scrollToContact}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition"
            >
              Fale com um Especialista
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#servicos" className="text-primary">Serviços</a>
              <a href="#sobre" className="text-primary">Sobre</a>
              <a href="#depoimentos" className="text-primary">Depoimentos</a>
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-6 py-2 rounded-full w-full"
              >
                Fale com um Especialista
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6">
              Assessoria Completa em Licitações para Sua Empresa
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 mb-8">
              Cuidamos de todo o processo para que sua empresa participe de licitações públicas com mais chances reais, segurança, eficiência e organização.
            </p>
            
            {/* Bullet Points */}
            <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-10">
              <div className="flex items-start gap-3">
                <Check className="text-secondary flex-shrink-0 mt-1" />
                <p className="text-primary/80">Mais tempo para focar no que realmente importa: a execução dos contratos</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-secondary flex-shrink-0 mt-1" />
                <p className="text-primary/80">Segurança e conformidade garantidas por especialistas em licitações</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-secondary flex-shrink-0 mt-1" />
                <p className="text-primary/80">Estratégias personalizadas para maximizar suas chances de vitória</p>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Fale com um Especialista
              <ArrowRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Como Funciona Nossa Assessoria em Licitações
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Gerenciamos todo o processo para que sua empresa concorra com mais eficiência, segurança e estratégias vencedoras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Captação de Oportunidades",
                description: "Identificamos as melhores oportunidades para o seu negócio, analisando editais e filtrando oportunidades que realmente fazem sentido para sua empresa.",
                icon: <BarChart className="w-12 h-12 text-secondary" />
              },
              {
                title: "Montagem e Revisão da Documentação",
                description: "Cuidamos de cada detalhe da documentação com rigor técnico, garantindo total conformidade com a legislação.",
                icon: <Shield className="w-12 h-12 text-secondary" />
              },
              {
                title: "Operação e Participação na Licitação",
                description: "Gerenciamos todas as etapas do processo licitatório, desde o credenciamento até a fase de lances e recursos.",
                icon: <Users className="w-12 h-12 text-secondary" />
              },
              {
                title: "Assistência Pós-Licitação",
                description: "Garantimos acompanhamento especializado após a adjudicação, assegurando o cumprimento integral das obrigações contratuais.",
                icon: <Award className="w-12 h-12 text-secondary" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-primary/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+R$ 200M</div>
              <p className="text-secondary">em contratos conquistados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+1.200</div>
              <p className="text-secondary">licitações bem-sucedidas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">12 Anos</div>
              <p className="text-secondary">de experiência no mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Veja o que nossos clientes têm a dizer
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              {testimonialVideos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="video-container bg-black">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-xl text-primary/80 mb-6">
                "A LGC Foi um divisor de águas! A partir no momento que a LGC começou a cuidar das licitações para nós, percebemos um salto no faturamento!"
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full"></div>
                <div>
                  <div className="font-semibold text-primary">Flávio Vasconcellos</div>
                  <div className="text-primary/70">Rally Locadora</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-xl text-primary/80 mb-6">
                "Profissionalismo e competência definem a LGC. Nossa empresa cresceu muito desde que começamos a trabalhar juntos."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full"></div>
                <div>
                  <div className="font-semibold text-primary">Maria Silva</div>
                  <div className="text-primary/70">Tech Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Fale com um Especialista
            </h2>
            <p className="text-xl text-primary/80 text-center mb-12">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas úteis.
            </p>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-primary mb-2">Nome Completo *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-primary mb-2">E-mail *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-primary mb-2">Telefone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-primary mb-2">Nome da Empresa *</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-primary mb-2">Segmento da Empresa *</label>
                <select
                  value={formData.segment}
                  onChange={(e) => setFormData({...formData, segment: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition appearance-none"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="servicos">Serviços</option>
                  <option value="comercio">Comércio</option>
                  <option value="industria">Indústria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-primary mb-2">Faturamento Anual *</label>
                <select
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition appearance-none"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="ate-1m">Até R$ 1 milhão</option>
                  <option value="1m-5m">R$ 1 milhão a R$ 5 milhões</option>
                  <option value="5m-10m">R$ 5 milhões a R$ 10 milhões</option>
                  <option value="mais-10m">Mais de R$ 10 milhões</option>
                </select>
              </div>

              <div>
                <label className="block text-primary mb-2">Já Participa de Licitações? *</label>
                <select
                  value={formData.participatesInBidding}
                  onChange={(e) => setFormData({...formData, participatesInBidding: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition appearance-none"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">LGC Consultoria</div>
              <p className="text-white/80">
                Especialistas em licitações públicas, ajudando empresas a crescerem de forma segura e sustentável.
              </p>
            </div>

            <div>
              <div className="font-semibold mb-4">Links Rápidos</div>
              <div className="flex flex-col gap-2">
                <a href="#servicos" className="text-white/80 hover:text-white transition">Serviços</a>
                <a href="#sobre" className="text-white/80 hover:text-white transition">Sobre</a>
                <a href="#depoimentos" className="text-white/80 hover:text-white transition">Depoimentos</a>
                <a href="#contact" className="text-white/80 hover:text-white transition">Contato</a>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-4">Redes Sociais</div>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            © {new Date().getFullYear()} LGC Consultoria. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;