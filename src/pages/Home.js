import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./home.css"; // animasiyalar üçün CSS

export default function Home({ theme }) {
  const scrollRef = useRef(null);


  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.7, // scroll sürətini yavaşlatdıq
      inertia: 0.75,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {/* Hero Section */}
    
        <Hero theme={theme} />
    

      {/* Product Section */}
      <section
        className="section product"
        data-scroll
        data-scroll-call="animate"
        data-scroll-repeat
      >
        <Product />
      </section>

      {/* Footer Section */}
      <section
        className="section footer"
        data-scroll
        data-scroll-call="animate"
        data-scroll-repeat
      >
        <Footer theme={theme} />
      </section>
    </div>
  );
}
