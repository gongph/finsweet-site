import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Human from "./Human";
import Experience from "./Experience";
import Corner from "./Corner";
import Teamwork from "./Teamwork";
import Dream from "@/pages/home/Dream";
import News from "@/pages/home/News";

export default function About() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Human */}
      <Human />
      {/* Experience */}
      <Experience />
      {/* Corner */}
      <Corner />
      {/* Teamwork */}
      <Teamwork />
      {/* Dream */}
      <Dream />
      {/* News */}
      <News />
      {/* Footer */}
      <Footer />
    </>
  );
}