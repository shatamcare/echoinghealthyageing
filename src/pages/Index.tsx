import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import TrustBarMarquee from "@/components/TrustBarMarquee";
import PullQuoteSpotlight from "@/components/PullQuoteSpotlight";
import { Services } from "@/components/Services";
import { Stories } from "@/components/Stories";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
  <TrustBarMarquee speedSeconds={28} direction="left" />
  <Services />
  <PullQuoteSpotlight intervalMs={7000} className="my-10 sm:my-14 md:my-16" />
        <Stories />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
