import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Clients from "./Clients";
import Stragety from "./Stragety";
import Risk from "./Risk";
import Dream from "@/pages/home/Dream";
import News from "@/pages/home/News";

export default function About() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Clients */}
      <Clients />
      {/* Stragety */}
      <Stragety />
      {/* Risk */}
      <Risk />
      {/* Dream */}
      <Dream />
      {/* News */}
      <News />
      {/* Footer */}
      <Footer />
    </>
  );
}