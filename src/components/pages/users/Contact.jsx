import { useState } from 'react'

const contactCards = [
  { icon: 'bi-geo-alt-fill', title: 'Visit Us', text: 'Government City, Maji Street, Dodoma, Tanzania' },
  { icon: 'bi-telephone-fill', title: 'Call Us', text: '+255 26 2322602' },
  { icon: 'bi-envelope-fill', title: 'Email Us', text: 'ps@maji.go.tz' },
  { icon: 'bi-clock-fill', title: 'Office Hours', text: 'Monday – Friday, 8:00 AM – 5:00 PM' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="contact-kicker">GET IN TOUCH</span>
              <h1>We are here to serve you</h1>
              <p>Reach the Ministry of Water for information, services, feedback, enquiries and other water-sector matters.</p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <a href="#contact-form" className="btn btn-light rounded-pill px-4">Send an Enquiry <i className="bi bi-arrow-right ms-1" /></a>
                <a href="mailto:ps@maji.go.tz" className="btn btn-outline-light rounded-pill px-4">Email the Ministry</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-hero-card">
                <i className="bi bi-chat-square-text-fill" />
                <strong>Citizen support</strong>
                <span>We welcome your questions, suggestions and feedback.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="row g-3">
            {contactCards.map((card) => (
              <div className="col-sm-6 col-lg-3" key={card.title}>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><i className={`bi ${card.icon}`} /></div>
                  <div><span>{card.title}</span><strong>{card.text}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="contact-form">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            <div className="col-lg-5">
              <div className="contact-side-panel h-100">
                <div className="eyebrow light">MINISTRY CONTACT</div>
                <h2>Let's connect</h2>
                <p>For official correspondence and general enquiries, please use the contact details provided here. For urgent water-service matters, contact the relevant water authority or service provider in your area.</p>
                <div className="contact-detail-list">
                  <div><i className="bi bi-building" /><span><small>Address</small>Government City, Maji Street<br />P.O. Box 456, Dodoma</span></div>
                  <div><i className="bi bi-telephone" /><span><small>Telephone</small>+255 26 2322602</span></div>
                  <div><i className="bi bi-envelope" /><span><small>Email</small>ps@maji.go.tz</span></div>
                </div>
                <div className="contact-socials">
                  <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                  <a href="#" aria-label="X"><i className="bi bi-twitter-x" /></a>
                  <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-card">
                <div className="section-heading mb-4">
                  <div className="eyebrow">SEND A MESSAGE</div>
                  <h2>How can we help?</h2>
                  <p>Complete the form and your enquiry can be routed to the appropriate department.</p>
                </div>
                {sent && <div className="alert alert-success border-0 rounded-3 small"><i className="bi bi-check-circle me-2" />Thank you. Your enquiry has been captured for this demo.</div>}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6"><label className="form-label">Full Name *</label><input className="form-control" required placeholder="Enter your full name" /></div>
                    <div className="col-md-6"><label className="form-label">Email Address *</label><input className="form-control" type="email" required placeholder="name@example.com" /></div>
                    <div className="col-md-6"><label className="form-label">Phone Number</label><input className="form-control" placeholder="+255 ..." /></div>
                    <div className="col-md-6"><label className="form-label">Enquiry Type *</label><select className="form-select" required defaultValue=""><option value="" disabled>Select an option</option><option>General Enquiry</option><option>Water Services</option><option>Projects</option><option>Feedback</option><option>Media Enquiry</option></select></div>
                    <div className="col-12"><label className="form-label">Subject *</label><input className="form-control" required placeholder="What is your enquiry about?" /></div>
                    <div className="col-12"><label className="form-label">Message *</label><textarea className="form-control" required rows="6" placeholder="Write your message here..." /></div>
                    <div className="col-12 d-flex justify-content-between align-items-center flex-wrap gap-3"><small className="text-muted"><i className="bi bi-shield-check me-1" />Your information is handled for official enquiry purposes.</small><button className="btn btn-primary rounded-pill px-4" type="submit">Send Message <i className="bi bi-send ms-1" /></button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-card">
            <div className="contact-map-icon"><i className="bi bi-geo-alt-fill" /></div>
            <div><div className="eyebrow">OUR LOCATION</div><h2>Ministry of Water – Dodoma</h2><p>Government City, Maji Street, Dodoma, Tanzania</p></div>
            <a className="btn btn-outline-primary rounded-pill ms-lg-auto" href="https://www.google.com/maps/search/?api=1&query=Government+City+Dodoma+Tanzania" target="_blank" rel="noreferrer">Open in Maps <i className="bi bi-box-arrow-up-right ms-1" /></a>
          </div>
        </div>
      </section>
    </div>
  )
}
