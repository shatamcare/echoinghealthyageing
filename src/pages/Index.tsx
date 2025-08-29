import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Events } from "@/components/Events";
import { Connect } from "@/components/Connect";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Events />
        <Connect />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
