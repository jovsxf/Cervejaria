import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-gradient-to-b from-background to-muted/50 border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">
                  <img
                  src="src\components\images\cocar.png"
                  alt="Cerveja"
                  className="w-12 h-12"
              />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Congõi</h3>
                <p className="text-xs text-muted-foreground">Cervejaria Artesanal</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70">
              Levando experiências únicas através da cerveja artesanal de qualidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kombi')}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  A Kombi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cervejas')}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Nossas Cervejas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('eventos')}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Eventos
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                 (35) 9131-8090 ou (35) 9846-8392
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                contato@congoi.com.br
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Congonhal, Minas Gerais<br />Atendemos toda a região</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Siga-nos</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center hover:from-primary hover:to-primary/80 hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-foreground/70 mt-4">
              @cervejariacongoi
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Cervejaria Congõi. Todos os direitos reservados.
            </p>
            <p className="text-sm text-foreground/60">
              Beba com moderação. Venda proibida para menores de 18 anos.
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <span>🍺</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
