import { motion } from 'motion/react';

export function Events() {
  const eventImages = [
    {
      url: "https://images.unsplash.com/photo-1701396632939-0e74c9c2aee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwZ2xhc3NlcyUyMGNoZWVyc3xlbnwxfHx8fDE3NjU5MTUyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Brindando momentos"
    },
    {
      url: "/images/kit.webp",
      title: "Festivais inesquecíveis"
    },
    {
      url: "https://images.unsplash.com/photo-1629808222864-282aa0cb3ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXIlMjB0YXAlMjBwb3VyaW5nfGVufDF8fHx8MTc2NTkxNzQ0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cerveja na pressão perfeita"
    },
    {
      url: "/images/2025-02-04 (1).webp",
      title: "Casamentos memoráveis"
    },
    {
      url: "/images/casal.webp",
      title: "Nossa Kombi icônica"
    },
    {
      url: "/images/casal (2).webp",
      title: "Processo artesanal"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Eventos & Momentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-6"></div>
          <p className="text-3xl font-bold text-foreground mb-4 italic">
            "Mais que cerveja, criamos experiências."
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Cada evento é único, cada momento é especial. Veja como a Congõi tem feito parte 
            de celebrações incríveis por toda região.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group ${
                index % 3 === 0 ? 'lg:row-span-2' : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index % 3 === 0 ? 'h-[500px]' : 'h-[240px]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  <div className="w-12 h-1 bg-primary mt-2"></div>
                </div>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
