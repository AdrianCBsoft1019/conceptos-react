import Header from "./components/header"
import Card from "./components/card";
import Galeria from "./components/galeria";
import GaleriaSection from "./components/galeriasection";
import Counter from "./components/counter";
import Footer from "./components/footer";


export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header title="EcoHuerta 🌿" subtitle="la mejor pagina de vegetales" />
    
      <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        <Card title="Tomate" description="jugoso, perfecto para muchas ensaladas." />
        <Card title="pepino" description="perfecto para adelgazar y combina con esnaladas." />
        <Card title="lechuga" description="de gran cuidado, rica en vitaminas." />
      </section>
      <GaleriaSection  title="Galeria">
        
        <Galeria  src= "../public/img/tomates.png" alt="tomates" desciption="cultivo de tomate" />
        <Galeria  src= "../public/img/pepino.png" alt="pepinos" desciption="cultivo de pepino" />
        <Galeria  src= "../public/img/lechuga.png" alt="lechugas" desciption="cultivo de lechuga" />

      </GaleriaSection>
      <Counter />
      <Footer ano="2025" title="Ecohuerta" />


    </main>
  );
}