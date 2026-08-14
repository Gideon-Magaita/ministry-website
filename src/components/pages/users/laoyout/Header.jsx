import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/home', icon: 'bi-house-door-fill' },
  { label: 'About Us', to: '/about' },
  { label: 'Departments', to: '#departments', dropdown: ['Water Resources', 'Water Supply', 'Planning & Investment'] },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '#projects' },
  { label: 'Publications', to: '#publications' },
  { label: 'News & Events', to: '/news' },
  {
    label: 'Media Center',
    to: '#media-center',
    dropdown: [
      { label: 'Images', to: '/media/images', icon: 'bi-images' },
      { label: 'Videos', to: '/media/videos', icon: 'bi-play-btn-fill' },
    ],
  },
  { label: 'Contact', to: '/contact' },
  { label: 'Site Map', to: '/sitemap' },
]

export default function Header() {
  return (
    <>
      <header>
        <div className="top-strip">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <span><i className="bi bi-geo-alt me-1" />Dodoma, Tanzania</span>
              <span className="d-none d-md-inline"><i className="bi bi-clock me-1" />Mon–Fri, 8:00–17:00</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Link to="/contact">Contact Us</Link>
              <Link to="/contact#feedback">Feedback</Link>
              <Link to="/sitemap">Help</Link>
              <button className="language-btn" type="button">SW <i className="bi bi-chevron-down ms-1" /></button>
            </div>
          </div>
        </div>

        <div className="brand-header">
          <div className="container">
            <div className="row align-items-center g-3">
              <div className="col-3 col-lg-2">
                <div className="official-logo emblem-logo">
                  <img src="/emblem.png" alt="Coat of Arms" className="img-fluid" />
                </div>
              </div>
              <div className="col-6 col-lg-8 text-center">
                <div className="brand-kicker">THE UNITED REPUBLIC OF TANZANIA</div>
                <h1 className="brand-title">Ministry of Water</h1>
                <div className="brand-subtitle">Water for Sustainable Development</div>
              </div>
              <div className="col-3 col-lg-2 text-end">
                <div className="coat-placeholder ms-auto">
                  <img src="/logo.png" alt="Coat of Arms" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Kept outside the header so sticky positioning remains active while the page scrolls. */}
      <nav className="navbar navbar-expand-lg main-nav sticky-nav">
        <div className="container">
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-label="Toggle navigation">
            <i className="bi bi-list fs-2 text-white" />
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav mx-auto align-items-lg-center">
              {navItems.map((item) => item.dropdown ? (
                <li className="nav-item dropdown" key={item.label}>
                  <a className="nav-link dropdown-toggle" href={item.to} data-bs-toggle="dropdown">{item.label}</a>
                  <ul className="dropdown-menu border-0 shadow-lg">
                    {item.dropdown.map((child) => (
                      <li key={typeof child === 'string' ? child : child.label}>
                        <a
                          className="dropdown-item media-submenu-item"
                          href={typeof child === 'string' ? '#' : child.to}
                        >
                          {typeof child !== 'string' && child.icon && (
                            <i className={`bi ${child.icon} me-2`} aria-hidden="true" />
                          )}
                          {typeof child === 'string' ? child : child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={item.label}>
                  {item.to.startsWith('/') ?
                    <NavLink className="nav-link" to={item.to}>
                      {item.icon && <i className={`bi ${item.icon} me-1`} aria-hidden="true" />}
                      {item.label}
                    </NavLink> :
                    <a className="nav-link" href={item.to}>
                      {item.icon && <i className={`bi ${item.icon} me-1`} aria-hidden="true" />}
                      {item.label}
                    </a>}
                </li>
              ))}
            </ul>
            <button className="btn btn-light btn-sm search-button" type="button"><i className="bi bi-search me-1" /> Search</button>
          </div>
        </div>
      </nav>
    </>
  )
}
