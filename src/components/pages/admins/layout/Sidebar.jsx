import { NavLink, Link } from 'react-router-dom'

const groups = [
  { title:'Overview', items:[['Dashboard','/admin','bi-grid-1x2-fill']] },
  { title:'Content', items:[
    ['News','/admin/news','bi-newspaper'],['Announcements','/admin/announcements','bi-megaphone'],['Projects','/admin/projects','bi-buildings'],['Events','/admin/events','bi-calendar-event'],['Publications','/admin/publications','bi-file-earmark-text'],['Media Library','/admin/media','bi-images']
  ]},
  { title:'Website', items:[['Pages','/admin/pages','bi-file-richtext'],['Navigation','/admin/navigation','bi-list-nested'],['Services','/admin/services','bi-grid-3x3-gap'],['Site Map','/admin/sitemap','bi-diagram-3']] },
  { title:'Administration', items:[['Users & Roles','/admin/users','bi-people'],['Audit Logs','/admin/audit','bi-clock-history'],['Settings','/admin/settings','bi-gear']] }
]

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <Link to="/admin" className="admin-brand">
        <div className="admin-logo">MW</div>
        <div><strong>Ministry of Water</strong><small>Content Management</small></div>
      </Link>
      <div className="sidebar-menu">
        {groups.map(group => (
          <div className="sidebar-group" key={group.title}>
            <div className="sidebar-label">{group.title}</div>
            {group.items.map(([label,to,icon]) => (
              <NavLink key={label} to={to} end={to==='/admin'} className="sidebar-link">
                <i className={`bi ${icon}`} /><span>{label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div className="sidebar-bottom">
        <Link to="/admin/login" className="sidebar-link"><i className="bi bi-box-arrow-in-right" /><span>Admin Login</span></Link>
        <Link to="/home" className="sidebar-link"><i className="bi bi-box-arrow-up-right" /><span>View Website</span></Link>
      </div>
    </aside>
  )
}
