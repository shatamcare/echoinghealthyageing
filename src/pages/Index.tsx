import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stories } from "@/components/Stories";
import { Telehealth } from "@/components/Telehealth";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Stories />
        <Telehealth />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
