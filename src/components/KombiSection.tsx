import { motion } from 'motion/react';
import { Briefcase, PartyPopper, Heart, Users } from 'lucide-react';
import { Button } from './ui/button';

interface KombiSectionProps {
  onCtaClick: () => void;
}

export function KombiSection({ onCtaClick }: KombiSectionProps) {
  const services = [
    {
      icon: Briefcase,
      title: "Eventos Corporativos",
      description: "Happy hours, confraternizações e lançamentos de produtos com um toque especial.",
      color: "primary"
    },
    {
      icon: PartyPopper,
      title: "Festas Privadas",
      description: "Aniversários, reuniões de família e comemorações que merecem cerveja de qualidade.",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Casamentos",
      description: "Torne o dia mais especial com a experiência única da nossa Kombi cervejeira.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Festivais e Eventos Públicos",
      description: "Levamos alegria e sabor para festivais, feiras e eventos de grande porte.",
      color: "secondary"
    }
  ];

  return (
    <section id="kombi" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent pb-2">
            A Kombi Congõi – Experiência Itinerante
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Nossa Kombi icônica transforma qualquer evento em uma experiência memorável, 
            servindo cerveja artesanal gelada direto da torneira.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card border ${
                service.color === 'primary' ? 'border-primary/20 hover:border-primary/40' : 'border-secondary/20 hover:border-secondary/40'
              } rounded-xl p-6 text-center hover:shadow-lg hover:shadow-${service.color}/10 transition-all group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${
                service.color === 'primary' ? 'from-primary/20 to-primary/10' : 'from-secondary/20 to-secondary/10'
              } rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Kombi Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">A Kombi em Ação</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all group">
              <img
                src="public/images/kombi.webp"
                alt="Kombi em festival"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-bold">Festivais & Eventos</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-secondary/20 transition-all group">
              <img
                src="public/images/kombi2.webp"
                alt="Casamento"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-bold">Casamentos Especiais</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all group">
              <img
                src="public/images/kombi.webp"
                alt="Festa privada"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-bold">Festas Privadas</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-10 py-6 shadow-xl shadow-primary/30"
          >
            Quero a Kombi no meu evento
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
