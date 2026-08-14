import React from 'react'
import Dira2050Floating from "./Dira2050Floating";
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SiteLoader from './SiteLoader';

export default function MainLayout() {

  const [showSiteLoader, setShowSiteLoader] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSiteLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="public-site">

       {showSiteLoader && <SiteLoader />}

      <Header />
      <main>
        <Outlet />
        <Dira2050Floating />
      </main>
      <Footer />
    </div>
  )
}
