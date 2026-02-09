import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Dashboard from "@/components/Dashboard";
import ResourceStats from "@/components/ResourceStats";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Dashboard />
      <ResourceStats />
      <Featured />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;