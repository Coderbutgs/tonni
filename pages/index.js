import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Projects from "../src/components/Projects";
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
import DataState from "../src/context/dataState";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout>
      <DataState>
      <MobileMenu />
      <Header />
      <Home />
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
      {/* PROJECTS */}
      <Projects />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      <Mouse />
      <PogressBar />
      </DataState>
    </Layout>
  );
};
export default Index;
