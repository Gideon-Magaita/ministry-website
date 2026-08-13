import { Link } from 'react-router-dom'

const groups = [
  ['Dashboard', [['Dashboard', '/admin', 'bi-grid-1x2-fill']]],
  ['Content Management', [['News', '/admin/news', 'bi-newspaper'], ['Announcements', '/admin/announcements', 'bi-megaphone'], ['Projects', '/admin/projects', 'bi-buildings'], ['Events', '/admin/events', 'bi-calendar-event'], ['Publications', '/admin/publications', 'bi-file-earmark-text'], ['Media Library', '/admin/media', 'bi-images']]],
  ['Website Management', [['Pages', '/admin/pages', 'bi-file-richtext'], ['Navigation', '/admin/navigation', 'bi-list-nested'], ['Services', '/admin/services', 'bi-grid-3x3-gap'], ['Users & Roles', '/admin/users', 'bi-people']]],
  ['System', [['Audit Logs', '/admin/audit', 'bi-clock-history'], ['Settings', '/admin/settings', 'bi-gear'], ['Admin Login', '/admin/login', 'bi-box-arrow-in-right']]],
]

export default function Sitemap() {
  return <>
    <div className="admin-page-heading"><div><div className="eyebrow">ADMINISTRATION</div><h2>Admin Site Map</h2><p>A visual overview of all administration modules and reusable routes.</p></div><Link to="/admin" className="btn btn-outline-primary rounded-pill px-4"><i className="bi bi-grid me-2"/>Dashboard</Link></div>
    <div className="row g-4">{groups.map(([title, links]) => <div className="col-md-6" key={title}><div className="admin-card sitemap-admin-card h-100"><div className="card-header-custom"><h3>{title}</h3><span className="role-badge">{links.length} {links.length === 1 ? 'module' : 'modules'}</span></div><div className="p-3">{links.map(([label,to,icon]) => <Link className="admin-sitemap-link" to={to} key={label}><span className="admin-sitemap-icon"><i className={`bi ${icon}`}/></span><span><strong>{label}</strong><small>{to}</small></span><i className="bi bi-arrow-right ms-auto"/></Link>)}</div></div></div>)}</div>
  </>
}
