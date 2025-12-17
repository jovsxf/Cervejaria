import { motion } from 'motion/react';
import { Beer, Heart, Award } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
            A Cervejaria Congõi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src="https://images.unsplash.com/photo-1629808222864-282aa0cb3ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXIlMjB0YXAlMjBwb3VyaW5nfGVufDF8fHx8MTc2NTkxNzQ0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cerveja artesanal sendo servida"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary">Nossa História</h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Nascemos em Minas Gerais com uma missão simples: levar a verdadeira experiência da cerveja artesanal 
              para onde as pessoas estão. Mais do que produzir cerveja, criamos momentos inesquecíveis.
            </p>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Cada gota é cuidadosamente elaborada com ingredientes selecionados, seguindo receitas artesanais 
              que respeitam a tradição cervejeira e abraçam a inovação.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nossa Kombi itinerante é a extensão perfeita dessa filosofia: levar qualidade, autenticidade e 
              diversão para festas, festivais, casamentos e eventos corporativos em toda a região.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Beer className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-primary">Artesanal</h4>
            <p className="text-foreground/70">
              Cada lote é produzido com cuidado artesanal, garantindo qualidade e sabor únicos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-secondary/20 rounded-xl p-8 text-center hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-secondary">Paixão</h4>
            <p className="text-foreground/70">
              Amor genuíno pela cerveja artesanal e por criar experiências memoráveis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-primary">Excelência</h4>
            <p className="text-foreground/70">
              Compromisso constante com a qualidade, do processo à experiência final.
            </p>
          </motion.div>
        </div>

        {/* Brewery Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 h-[300px]">
            <img
              src="src\components\images\2025-02-04.webp"
              alt="Barris da cervejaria"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="px-12">
                <p className="text-3xl md:text-4xl font-bold text-white italic">
                  "Cerveja de verdade, feita com o coração."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
