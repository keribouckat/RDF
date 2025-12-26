import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pastor from "@/components/Pastor";
import Ministries from "@/components/Ministries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pastor />
        <Ministries />
      </main>
      <Footer />
    </>
  );
}
