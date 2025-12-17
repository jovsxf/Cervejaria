import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { KombiSection } from './components/KombiSection';
import { Beers } from './components/Beers';
import { Events } from './components/Events';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const handleCtaClick = () => {
    const phone = '553591318090';
    const message = encodeURIComponent('Olá! Gostaria de agendar a Kombi Congõi para meu evento.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleKitClick = () => {
    window.open(
    "https://www.mercadolivre.com.br/kit-cerveja-pilsen-congoi-com-2-latas-473ml-e-um-copo/up/MLBU2968257663?pdp_filters=seller_id%3A82686361#polycard_client=search-nordic&search_layout=grid&position=1&type=product&tracking_id=a1ca8061-3e93-4fe1-bf89-f2d306fe0f9e&wid=MLB3956429549&sid=search",
    "_blank"
  );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onCtaClick={handleCtaClick} onKitClick={handleKitClick} />
        <About />
        <KombiSection onCtaClick={handleCtaClick} />
        <Beers />
        <Events />
        <FinalCTA onCtaClick={handleCtaClick} />
      </main>
      <Footer />
    </div>
  );
}
