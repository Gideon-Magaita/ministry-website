import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getAnnouncements } from '../../../../data/content'

const posters = [
  { title: 'Ministry announcements', text: 'Stay informed about official notices, programmes and public updates.', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Water for sustainable development', text: 'Manage content that keeps citizens informed and connected to water services.', image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Digital content management', text: 'A centralized workspace for publishing news, announcements and ministry information.', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1400&q=85' },
]

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [show, setShow] = useState(false)
  const announcements = getAnnouncements()

  const submit = (event) => {
    event.preventDefault()
    sessionStorage.setItem('mw_admin_demo_login', JSON.stringify({ email, remember, loggedIn: true }))
    navigate('/admin')
  }

  return <div className="admin-login-page">
    <div className="container-fluid p-0"><div className="row g-0 min-vh-100">
      <div className="col-lg-7 login-showcase">
        <div id="loginPosterCarousel" className="carousel slide h-100" data-bs-ride="carousel">
          <div className="carousel-indicators">{posters.map((_, i) => <button key={i} type="button" data-bs-target="#loginPosterCarousel" data-bs-slide-to={i} className={i === 0 ? 'active' : ''}/>)}</div>
          <div className="carousel-inner h-100">{posters.map((poster, i) => <div className={`carousel-item h-100 ${i === 0 ? 'active' : ''}`} key={poster.title}><img src={poster.image} alt=""/><div className="login-poster-overlay"/><div className="login-poster-content"><span className="login-kicker">MINISTRY OF WATER · CMS</span><h1>{poster.title}</h1><p>{poster.text}</p><div className="login-announcement-strip"><i className="bi bi-megaphone-fill"/><span>{announcements[0]?.title || 'Official ministry announcements'}</span></div></div></div>)}</div>
          <button className="carousel-control-prev" type="button" data-bs-target="#loginPosterCarousel" data-bs-slide="prev"><span className="carousel-control-prev-icon"/></button><button className="carousel-control-next" type="button" data-bs-target="#loginPosterCarousel" data-bs-slide="next"><span className="carousel-control-next-icon"/></button>
        </div>
      </div>
      <div className="col-lg-5 login-form-side"><div className="login-form-wrap">
        <Link to="/home" className="login-brand"><span className="login-brand-mark">MW</span><span><strong>Ministry of Water</strong><small>Administration Portal</small></span></Link>
        <div className="login-heading"><span className="eyebrow">SECURE ACCESS</span><h2>Welcome back</h2><p>Sign in to manage ministry website content.</p></div>
        <form onSubmit={submit} className="login-form">
          <label className="form-label">Email address</label><div className="login-input"><i className="bi bi-envelope"/><input type="email" className="form-control" placeholder="admin@maji.go.tz" value={email} onChange={e => setEmail(e.target.value)} required/></div>
          <label className="form-label mt-3">Password</label><div className="login-input"><i className="bi bi-lock"/><input type={show ? 'text' : 'password'} className="form-control" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required/><button type="button" onClick={() => setShow(!show)} aria-label="Toggle password"><i className={`bi ${show ? 'bi-eye-slash' : 'bi-eye'}`}/></button></div>
          <div className="d-flex justify-content-between align-items-center mt-3"><label className="form-check small text-muted"><input className="form-check-input" type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}/> <span className="form-check-label">Remember me</span></label><a href="#forgot" className="small text-primary text-decoration-none">Forgot password?</a></div>
          <button className="btn btn-primary w-100 rounded-3 py-3 mt-4 fw-bold" type="submit">Sign In <i className="bi bi-arrow-right ms-2"/></button>
        </form>
        <div className="login-security"><i className="bi bi-shield-check"/><span>Your connection and credentials should be protected in production with HTTPS, secure sessions and backend authentication.</span></div>
        <Link to="/home" className="login-back"><i className="bi bi-arrow-left me-2"/>Back to public website</Link>
      </div></div>
    </div></div>
  </div>
}
