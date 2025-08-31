import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Events } from "@/components/Events";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
  <Events />
  <About />
  <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
