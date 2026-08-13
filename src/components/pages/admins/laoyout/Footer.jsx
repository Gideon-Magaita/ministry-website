import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="public-footer text-white">
      <div className="container py-5">
        <div className="row g-4">

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="mb-2">
              <strong>Ministry of Water</strong>
            </p>
            <p className="mb-2">
              Government City, Maji Street<br />
              P.O. Box 456, Dodoma, Tanzania
            </p>
            <p className="mb-2">Tel: +255 26 2322602</p>
            <p className="mb-2">
              Email: <a href="mailto:ps@maji.go.tz" className="footer-link">ps@maji.go.tz</a>
            </p>
            <p className="mb-0">Mon–Fri: 07:30 – 16:30</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/home" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/news" className="footer-link">News & Events</Link></li>
              <li><Link to="/publications" className="footer-link">Publications</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/sitemap" className="footer-link">Site Map</Link></li>
            </ul>
          </div>

          {/* Related Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Related Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="footer-link">The United Republic of Tanzania</a></li>
              <li><a href="#" className="footer-link">Government Portal</a></li>
              <li><a href="#" className="footer-link">Tanzania Water Supply and Sanitation Authority</a></li>
              <li><a href="#" className="footer-link">Water Resources Authority</a></li>
              <li><a href="#" className="footer-link">Other Government Institutions</a></li>
            </ul>
          </div>

          {/* Website Visitors */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Website Visitors</h5>
            <div className="visitor-card p-3 rounded-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>Today</span>
                <strong>1,248</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>This Month</span>
                <strong>28,640</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Total Visitors</span>
                <strong>1,284,920</strong>
              </div>
            </div>

            <div className="mt-4">
              <h6 className="fw-bold">Follow Us</h6>
              <div className="d-flex gap-2 mt-2">
                <a href="#" className="social-link" aria-label="Facebook">f</a>
                <a href="#" className="social-link" aria-label="X">X</a>
                <a href="#" className="social-link" aria-label="YouTube">▶</a>
                <a href="#" className="social-link" aria-label="Instagram">◎</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom border-top border-light border-opacity-25">
        <div className="container py-3">
          <div className="row align-items-center g-2">
            <div className="col-md-7">
              <small>
                © 2026 Ministry of Water, United Republic of Tanzania. All Rights Reserved.
              </small>
            </div>
            <div className="col-md-5 text-md-end">
              <Link to="/sitemap" className="footer-link me-3">Site Map</Link>
              <Link to="/contact" className="footer-link me-3">Contact</Link>
              <a href="#" className="footer-link me-3">Privacy Policy</a>
              <a href="#" className="footer-link">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
