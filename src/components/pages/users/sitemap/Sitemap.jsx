import { Link } from 'react-router-dom'

const sections = [
  { title: 'Main Pages', icon: 'bi-house-door', links: [['Home', '/home'], ['About Us', '/about'], ['Services', '/services'], ['News & Events', '/news'], ['Site Map', '/sitemap']] },
  { title: 'Ministry', icon: 'bi-building', links: [['Leadership', '/about'], ['Departments', '#departments'], ['Projects', '#projects'], ['Publications', '#publications'], ['Water Resources', '#resources']] },
  { title: 'Public Information', icon: 'bi-info-circle', links: [['Announcements', '/news'], ['Tenders', '#tenders'], ['Vacancies', '#vacancies'], ['FAQs', '#faqs'], ['Contact Us', '#contact']] },
  { title: 'Online Services', icon: 'bi-laptop', links: [['Water Service Requests', '/services'], ['Citizen Feedback', '#feedback'], ['Service Information', '/services'], ['Project Information', '#projects']] },
  { title: 'News & Media', icon: 'bi-newspaper', links: [['Latest News', '/news'], ['News Details', '/news/1'], ['Photo Gallery', '#gallery'], ['Announcements', '/news']] },
  { title: 'Resources', icon: 'bi-folder2-open', links: [['Reports', '#publications'], ['Policies & Guidelines', '#publications'], ['Forms', '#publications'], ['Downloads', '#publications']] },
]

export default function Sitemap() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow light">NAVIGATION</div>
          <h1>Site Map</h1>
          <p>Explore the Ministry of Water website and quickly find services, information, news, projects and resources.</p>
        </div>
      </section>
      <section className="content-section sitemap-page">
        <div className="container">
          <div className="row g-4">
            {sections.map(section => (
              <div className="col-md-6 col-xl-4" key={section.title}>
                <div className="sitemap-card h-100">
                  <div className="sitemap-icon"><i className={`bi ${section.icon}`} /></div>
                  <h2>{section.title}</h2>
                  <ul>
                    {section.links.map(([label, to]) => (
                      <li key={label}>
                        {to.startsWith('/') ? (
                          <Link to={to}>{label}<i className="bi bi-arrow-right" /></Link>
                        ) : (
                          <a href={to}>{label}<i className="bi bi-arrow-right" /></a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
