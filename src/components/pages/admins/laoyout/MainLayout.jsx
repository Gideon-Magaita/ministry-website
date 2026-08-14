import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
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
    <div className="admin-shell">

      {showSiteLoader && <SiteLoader />}
      
      <Sidebar />
      <div className="admin-main">
        <header className="admin-topbar">
          <div>
            <div className="small text-muted">Ministry of Water CMS</div>
            <h1 className="h5 fw-bold mb-0">Administration Panel</h1>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light position-relative"><i className="bi bi-bell" /><span className="notification-dot" /></button>
            <div className="admin-user"><div className="avatar">A</div><div className="d-none d-sm-block"><strong>Administrator</strong><small>Super Admin</small></div></div>
          </div>
        </header>
        <main className="admin-content"><Outlet /></main>
      </div>
    </div>
  )
}
