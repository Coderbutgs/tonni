import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import HomeGlitch from "../src/components/HomeGlitch";
import News from "../src/components/News";
import Priceing from "../src/components/Priceing";
import Service from "../src/components/Service";
import Testimonials from "../src/components/Testimonials";
import TimeLine from "../src/components/TimeLine";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import MobileMenu from "../src/layout/MobileMenu";
import Mouse from "../src/layout/Mouse";
import PogressBar from "../src/layout/PogressBar";
import { activeSkillProgress } from "../src/utilits";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexGlitch = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout>
      <MobileMenu />
      <Header />
      <HomeGlitch />
      {/* /HERO */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Service />
      {/* /SERVICE */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* TIMELINE */}
      <TimeLine />
      {/* /TIMELINE */}
      {/* PRICING */}
      <Priceing />
      {/* /PRICING */}
      {/* TESTIMONIALS */}
      <Testimonials />

      {/* /TESTIMONIALS */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      <Mouse />
      <PogressBar />
    </Layout>
  );
};
export default IndexGlitch;
