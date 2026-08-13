import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getNews, getAnnouncements } from '../../../data/content'
import ministerAweso from '../../../assets/leadership/minister-aweso.jpg'
import deputyMinister from '../../../assets/leadership/deputy-minister.jpg'
import psMwajuma from '../../../assets/leadership/ps-mwajuma.jpg'
import deputyPs from '../../../assets/leadership/deputy-ps.svg'



/* const legacyNews = [
  { date: '12 AUG 2026', category: 'MINISTRY NEWS', title: 'Strengthening water security for communities across Tanzania', image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=900&q=80' },
  { date: '08 AUG 2026', category: 'PROJECTS', title: 'New water infrastructure projects enter implementation phase', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80' },
  { date: '04 AUG 2026', category: 'ANNOUNCEMENT', title: 'Public notice on sustainable water resource management', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80' },
]
*/

const projects = [
  { title: 'Urban Water Supply Programme', location: 'Dodoma Region', progress: 78, status: 'Ongoing', image: 'https://images.unsplash.com/photo-1578307988045-9f12c0f2d1b4?auto=format&fit=crop&w=800&q=80' },
  { title: 'Rural Water Access Initiative', location: 'Singida Region', progress: 64, status: 'Ongoing', image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4f0?auto=format&fit=crop&w=800&q=80' },
  { title: 'Water Resource Monitoring', location: 'National Programme', progress: 91, status: 'Near completion', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80' },
]

function LeadershipCarousel({ id, ribbon, people }) {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div className="leadership-card">
      <div className="leadership-ribbon">{ribbon}</div>
      <div
        id={id}
        className="carousel slide carousel-fade leadership-carousel"
        data-bs-ride="carousel"
        data-bs-interval="4200"
        data-bs-pause="false"
        data-bs-touch="true"
      >
        <div className="carousel-inner">
          {people.map((person, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={person.name}>
              <img src={person.image} className="leadership-photo" alt={`${person.name}, ${person.role}`} />
              <div className="leadership-caption">
                <div className="leadership-role">{person.role}</div>
                <h3>{person.name}</h3>
                <span>Ministry of Water</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, text, link }) {
  return (
    <div className="section-heading d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
      <div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>
      {link && <Link className="btn btn-outline-primary rounded-pill px-4" to={link === 'View All News' ? '/news' : '#'}>{link} <i className="bi bi-arrow-right ms-1" /></Link>}
    </div>
  )
}

export default function Home() {
  const [news, setNews] = useState(getNews())
  const [announcements, setAnnouncements] = useState(getAnnouncements())
  useEffect(() => { const refresh = () => { setNews(getNews()); setAnnouncements(getAnnouncements()) }; window.addEventListener('content-updated', refresh); return () => window.removeEventListener('content-updated', refresh) }, [])
  return (
    <>
      <section className="hero-wrap">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-3 d-flex flex-column gap-3">
              <LeadershipCarousel
                id="ministerLeadershipCarousel"
                ribbon="MINISTERIAL LEADERSHIP"
                people={[
                  { image: ministerAweso, name: 'Jumaa H. Aweso', role: 'Minister for Water' },
                  { image: deputyMinister, name: 'Kundo A. Mathew', role: 'Deputy Minister for Water' },
                ]}
              />
              <LeadershipCarousel
                id="psLeadershipCarousel"
                ribbon="EXECUTIVE LEADERSHIP"
                people={[
                  { image: psMwajuma, name: 'Eng. Mwajuma Waziri', role: 'Permanent Secretary' },
                  { image: deputyPs, name: 'Agnes K. Meena', role: 'Deputy Permanent Secretary' },
                ]}
              />
            </div>
            <div className="col-lg-9">
              <div id="heroCarousel" className="carousel slide hero-carousel h-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" />
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" />
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" />
                </div>
                <div className="carousel-inner h-100">
                  <div className="carousel-item active h-100">
                    <img src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=1600&q=85" alt="Water landscape" />
                    <div className="hero-overlay" />
                    <div className="carousel-caption text-start">
                      <span className="hero-label">WATER FOR DEVELOPMENT</span>
                      <h1>Building a water-secure Tanzania</h1>
                      <p>Advancing sustainable water resources and reliable services for every community.</p>
                      <a href="#projects" className="btn btn-primary rounded-pill px-4">Explore Our Projects <i className="bi bi-arrow-right ms-1" /></a>
                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85" alt="Water infrastructure" />
                    <div className="hero-overlay" />
                    <div className="carousel-caption text-start">
                      <span className="hero-label">SUSTAINABLE RESOURCES</span>
                      <h1>Protecting water for generations</h1>
                      <p>Supporting responsible water resource management and climate resilience.</p>
                      <a href="#services" className="btn btn-primary rounded-pill px-4">Our Services <i className="bi bi-arrow-right ms-1" /></a>
                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1600&q=85" alt="Clean water" />
                    <div className="hero-overlay" />
                    <div className="carousel-caption text-start">
                      <span className="hero-label">CLEAN & SAFE WATER</span>
                      <h1>Water services that reach people</h1>
                      <p>Expanding access to safe, affordable and sustainable water supply.</p>
                      <a href="#news" className="btn btn-primary rounded-pill px-4">Latest Updates <i className="bi bi-arrow-right ms-1" /></a>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev"><span className="carousel-control-prev-icon" /></button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next"><span className="carousel-control-next-icon" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-section">
        <div className="container">
          <div className="quick-grid">
            {[
              ['bi-laptop','Online Services','Access digital government services'],
              ['bi-droplet-half','Water Resources','Information and resources'],
              ['bi-buildings','Our Projects','Explore national projects'],
              ['bi-file-earmark-text','Publications','Reports, policies and forms'],
              ['bi-megaphone','Tenders','Procurement opportunities'],
              ['bi-person-workspace','Vacancies','Careers and opportunities'],
            ].map(([icon,title,text]) => (
              <Link className="quick-card" to={title === 'Online Services' ? '/services' : '#'} key={title}>
                <span className="quick-icon"><i className={`bi ${icon}`} /></span>
                <span><strong>{title}</strong><small>{text}</small></span>
                <i className="bi bi-arrow-up-right quick-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeading eyebrow="MINISTRY AT A GLANCE" title="Making an impact through water" text="A snapshot of our programmes and commitment to sustainable water services." />
          <div className="row g-3 mt-2">
            {[
              ['4,800+','Water Projects','bi-droplet'],
              ['26','Regions Covered','bi-geo-alt'],
              ['68%','National Water Coverage','bi-graph-up-arrow'],
              ['1,200+','Communities Reached','bi-people'],
            ].map(([num,label,icon]) => (
              <div className="col-6 col-lg-3" key={label}><div className="stat-card"><i className={`bi ${icon}`} /><div className="stat-number">{num}</div><div className="stat-label">{label}</div></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section bg-light-subtle" id="news">
        <div className="container">
          <SectionHeading eyebrow="LATEST UPDATES" title="News & announcements" text="Stay informed about the Ministry's programmes, decisions and activities." link="View All News" />
          <div className="row g-4 mt-1">
            {news.map((item, i) => (
              <div className={i === 0 ? 'col-lg-6' : 'col-lg-3 col-md-6'} key={item.title}>
                <article className={`news-card ${i === 0 ? 'featured' : ''}`}>
                  <img src={item.image} alt="" />
                  <div className="news-body">
                    <div className="news-meta"><span>{item.category}</span><time>{item.date}</time></div>
                    <h3>{item.title}</h3>
                    <Link to={`/news/${item.id}`}>Read More <i className="bi bi-arrow-right ms-1" /></Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section announcements-section">
        <div className="container">
          <div className="section-heading d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
            <div><div className="eyebrow">PUBLIC NOTICES</div><h2>Announcements</h2><p>Important notices and public information from the Ministry of Water.</p></div>
            <Link className="btn btn-outline-primary rounded-pill px-4" to="/admin/announcements">View Notices <i className="bi bi-arrow-right ms-1" /></Link>
          </div>
          <div className="row g-4 mt-1">
            {announcements.slice(0,3).map((item, i) => (
              <div className="col-lg-4 col-md-6" key={item.id || item.title}>
                <article className={`announcement-card announcement-${item.priority.toLowerCase()}`}>
                  <div className="announcement-icon"><i className="bi bi-megaphone-fill" /></div>
                  <div className="announcement-content">
                    <div className="announcement-top"><span className="announcement-priority">{item.priority}</span><time>{item.date}</time></div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <Link to="/contact" className="announcement-link">Enquire About This Notice <i className="bi bi-arrow-up-right ms-1" /></Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="OUR WORK" title="Featured projects" text="Explore programmes transforming access to water across Tanzania." link="View All Projects" />
          <div className="row g-4 mt-1">
            {projects.map(p => (
              <div className="col-lg-4 col-md-6" key={p.title}>
                <article className="project-card">
                  <div className="project-image"><img src={p.image} alt="" /><span className="project-status">{p.status}</span></div>
                  <div className="p-4">
                    <small className="text-muted"><i className="bi bi-geo-alt me-1" />{p.location}</small>
                    <h3 className="h5 fw-bold mt-2">{p.title}</h3>
                    <div className="d-flex justify-content-between small mt-3 mb-2"><span>Project progress</span><strong>{p.progress}%</strong></div>
                    <div className="progress" role="progressbar"><div className="progress-bar" style={{width:`${p.progress}%`}} /></div>
                    <a href="#" className="project-link mt-3">View Project <i className="bi bi-arrow-right" /></a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section bg-navy" id="publications">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-white">
              <div className="eyebrow light">PUBLICATIONS & RESOURCES</div>
              <h2 className="display-6 fw-bold">Knowledge for better water management</h2>
              <p className="text-white-50">Access official reports, policies, guidelines, strategic plans and other ministry documents.</p>
              <a href="#" className="btn btn-light rounded-pill px-4 mt-2">Browse Publications <i className="bi bi-arrow-right ms-1" /></a>
            </div>
            <div className="col-lg-7">
              {['Water Sector Status Report 2026','National Water Policy Guidelines','Strategic Plan 2025/26 – 2029/30'].map((doc,i) => (
                <div className="document-row" key={doc}>
                  <div className="document-icon"><i className="bi bi-file-earmark-pdf" /></div>
                  <div className="flex-grow-1"><strong>{doc}</strong><small>PDF · {i+2}.4 MB · Published 2026</small></div>
                  <button className="btn btn-outline-light btn-sm rounded-pill"><i className="bi bi-download" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="feedback-section" id="feedback">
        <div className="container">
          <div className="feedback-box">
            <div><div className="eyebrow">WE VALUE YOUR VOICE</div><h2>Have a question or feedback?</h2><p>Help us improve water services by sharing your experience with the Ministry.</p></div>
            <a href="#" className="btn btn-primary rounded-pill px-4">Send Feedback <i className="bi bi-arrow-right ms-1" /></a>
          </div>
        </div>
      </section>
    </>
  )
}
