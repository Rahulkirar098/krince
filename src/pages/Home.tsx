import { useEffect, useState } from "react";
import "@/styles/Home.css";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Portfolio from "@/components/home/Portfolio";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/ScrollToTop";

const SECTION_IDS = ["top", "services", "process", "work", "why", "contact"] as const;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowScrollTop(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="krince">
      <Header scrolled={scrolled} active={active} onNavClick={handleNavClick} />
      <Hero />
      <Services onNavClick={handleNavClick} />
      <Process />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop visible={showScrollTop} />
    </div>
  );
}
