import { motion } from 'motion/react';
import { Droplets, Wheat, Sparkles, Sun } from 'lucide-react';

export function Beers() {
  const beers = [
    {
      name: "Congõi Pilsen",
      type: "Pilsen",
      description: "Leve, refrescante e equilibrada. Perfeita para quem aprecia o clássico com qualidade artesanal.",
      abv: "4.5%",
      ibu: "25",
      icon: Sun,
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-500/30"
    },
    {
      name: "Congõi IPA",
      type: "India Pale Ale",
      description: "Lupulada e aromática, com notas cítricas intensas e amargor equilibrado para os apaixonados por sabor.",
      abv: "6.2%",
      ibu: "55",
      icon: Sparkles,
      color: "from-orange-500/20 to-amber-600/10",
      borderColor: "border-orange-500/30"
    },
    {
      name: "Congõi Session",
      type: "Session IPA",
      description: "O melhor dos dois mundos: sabor intenso de IPA com teor alcoólico moderado para sessões longas.",
      abv: "4.0%",
      ibu: "40",
      icon: Droplets,
      borderColor: "border-primary/30",
      color: "from-primary/20 to-primary/10"
    },
    {
      name: "Congõi Weiss",
      type: "Weissbier",
      description: "Refrescante cerveja de trigo com notas de banana e cravo. Cremosa e perfeita para dias quentes.",
      abv: "5.0%",
      ibu: "15",
      icon: Wheat,
      color: "from-secondary/20 to-secondary/10",
      borderColor: "border-secondary/30"
    }
  ];

  return (
    <section id="cervejas" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
            Nossas Cervejas Artesanais
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Cada estilo é uma celebração de sabor, aroma e tradição cervejeira, 
            elaborado com ingredientes premium e paixão artesanal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beers.map((beer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card border ${beer.borderColor} rounded-xl overflow-hidden hover:shadow-2xl transition-all group`}
            >
              {/* Beer Icon Header */}
              <div className={`h-32 bg-gradient-to-br ${beer.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <beer.icon className="w-16 h-16 text-foreground/60 group-hover:scale-110 transition-transform" />
              </div>

              {/* Beer Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-foreground">{beer.name}</h3>
                <p className="text-sm text-primary mb-4">{beer.type}</p>
                <p className="text-foreground/70 mb-6 min-h-[80px]">
                  {beer.description}
                </p>

                {/* Specs */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">ABV</p>
                    <p className="font-bold text-foreground">{beer.abv}</p>
                  </div>
                  <div className="h-8 w-px bg-border"></div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">IBU</p>
                    <p className="font-bold text-foreground">{beer.ibu}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-2 bg-gradient-to-r ${beer.color}`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-2 text-foreground">
            Todas disponíveis na nossa Kombi!
          </h3>
          <p className="text-foreground/70">
            Chopp artesanal gelado, servido na pressão perfeita diretamente no seu evento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
