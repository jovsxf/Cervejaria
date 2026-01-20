import { Button } from './ui/button';
import { motion } from 'motion/react';

interface HeroProps {
  onCtaClick: () => void;
  onKitClick: () => void;
}

export function Hero({ onCtaClick, onKitClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="public/images/2025-02-04 (1).webp"
          alt="Congõi em eventos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary via-primary/80 to-secondary rounded-full mb-8 shadow-2xl shadow-primary/50"
          >
            <span className="text-5xl">
              <img
                  src="public/images/cocar.png"
                  alt="Cerveja"
                  className="w-24 h-24"
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              Cerveja artesanal que vai até o seu evento!
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-2xl mx-auto"
          >
            A kombi da cervejaria Congõi leva chopp artesanal, sabor e experiência para onde você estiver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 transition-all"
            >
              Quero a Kombi no meu evento
            </Button>
            <Button
              onClick={onKitClick}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Comprar kit
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            className="mt-16"
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
