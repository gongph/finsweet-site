import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hired from "./Hired";
import Positions from "./Positions";
import News from "@/pages/Home/News";

export default function About() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Hired */}
      <Hired />
      {/* Positions */}
      <Positions />
      {/* News */}
      <News />
      {/* Footer */}
      <Footer />
    </>
  );
}
