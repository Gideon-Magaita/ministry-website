import React, { useEffect, useRef } from 'react'
import Dira2050Floating from "./Dira2050Floating";
import BackToTop from "./BackToTop";
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SiteLoader from './SiteLoader';
import WaterBackground from "./WaterBackground";

export default function MainLayout() {
  const layoutRef = useRef(null);

  useEffect(() => {
    const element = layoutRef.current;
    if (!element) return;

    let rafId = null;

    const handleWaterPointer = (event) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const x = `${(event.clientX / window.innerWidth) * 100}%`;
        const y = `${(event.clientY / window.innerHeight) * 100}%`;

        element.style.setProperty("--water-x", x);
        element.style.setProperty("--water-y", y);
        element.style.setProperty("--water-intensity", "1");
        element.classList.add("is-water-hovering");
      });
    };

    const resetWaterPointer = () => {
      element.style.setProperty("--water-intensity", "0");
      element.classList.remove("is-water-hovering");
    };

    element.addEventListener("pointermove", handleWaterPointer);
    element.addEventListener("pointerleave", resetWaterPointer);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      element.removeEventListener("pointermove", handleWaterPointer);
      element.removeEventListener("pointerleave", resetWaterPointer);
    };
  }, []);


  const [showSiteLoader, setShowSiteLoader] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSiteLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={layoutRef} className="public-site">
      <WaterBackground />

       {showSiteLoader && <SiteLoader />}

      <Header />
      <main>
        <Outlet />
        <Dira2050Floating />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
