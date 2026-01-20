import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export function FinalCTA({ onCtaClick }: FinalCTAProps) {
  return (
    <section id="agendar" className="py-20 relative overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232dd4bf' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-card via-card to-muted border-2 border-primary/30 rounded-3xl p-12 shadow-2xl shadow-primary/20 text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-xl shadow-primary/30"
            >
              <span className="text-4xl">
                <img
                  src="/images/cocar.png"
                  alt="Cerveja"
                  className="w-20 h-20"
              />
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Leve a experiência Congõi para o seu evento
            </h2>
            
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Transforme sua celebração em um momento inesquecível com cerveja artesanal de qualidade 
              e o charme único da nossa Kombi cervejeira.
            </p>

            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-xl px-12 py-8 shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 transition-all hover:scale-105"
            >
               Agendar a Kombi Congõi
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Atendemos eventos em toda a região de Minas Gerais
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">Telefone</h3>
              <p className="text-foreground/70 text-sm">Wagner: (35) 9846-8392</p>
              <p className="text-foreground/70 text-sm">Andressa: (35) 9131-8090</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-secondary/20 rounded-xl p-6 text-center hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">WhatsApp</h3>
              <p className="text-foreground/70 text-sm">Atendimento rápido</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">Localização</h3>
              <p className="text-foreground/70 text-sm">Congonhal, Minas Gerais</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
