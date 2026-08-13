import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <h6>Contact</h6>
            <p className="footer-copy mb-2"><strong>Ministry of Water</strong></p>
            <div className="footer-contact"><i className="bi bi-geo-alt" /><span>Government City, Maji Street<br />P.O. Box 456, Dodoma, Tanzania</span></div>
            <div className="footer-contact"><i className="bi bi-telephone" /><span>+255 26 2322602</span></div>
            <div className="footer-contact"><i className="bi bi-envelope" /><span>ps@maji.go.tz</span></div>
            <div className="footer-contact"><i className="bi bi-clock" /><span>Mon–Fri: 07:30 – 16:30</span></div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6>Quick Links</h6>
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/news">News & Events</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/sitemap">Site Map</Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6>Related Links</h6>
            <a href="#">United Republic of Tanzania</a>
            <a href="#">Government Portal</a>
            <a href="#">Water Supply Institutions</a>
            <a href="#">Water Resources Institutions</a>
            <a href="#">Other Government Institutions</a>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6>Website Visitors</h6>
            <div className="visitor-card">
              <div><span>Today</span><strong>1,248</strong></div>
              <div><span>This Month</span><strong>28,640</strong></div>
              <div><span>Total Visitors</span><strong>1,284,920</strong></div>
            </div>
            <h6 className="mt-4">Follow Us</h6>
            <div className="social-links mt-2">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="X"><i className="bi bi-twitter-x" /></a>
              <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© 2026 Ministry of Water, United Republic of Tanzania. All Rights Reserved.</span>
          <div className="d-flex gap-3">
            <Link to="/sitemap">Site Map</Link>
            <Link to="/contact">Contact</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
