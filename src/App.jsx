import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/users/Home'
import About from './components/pages/users/About'
import Contact from './components/pages/users/Contact'
import Services from './components/pages/users/services/Services'
import UserSitemap from './components/pages/users/sitemap/Sitemap'
import AdminSitemap from './components/pages/admins/sitemap/Sitemap'
import AdminLogin from './components/pages/admins/auth/Login'
import NewsList from './components/pages/users/news/NewsList'
import NewsDetail from './components/pages/users/news/NewsDetail'
import MainLayout from './components/pages/users/laoyout/MainLayout'
import AdminMainLayout from './components/pages/admins/laoyout/MainLayout'
import Dashboard from './components/pages/admins/Dashboard'
import Users from './components/pages/admins/Users'
import News from './components/pages/admins/content/News'
import NewsForm from './components/pages/admins/content/NewsForm'
import Announcements from './components/pages/admins/content/Announcements'
import AnnouncementForm from './components/pages/admins/content/AnnouncementForm'




export default function App() {
  return <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<NewsList />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/sitemap" element={<UserSitemap />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin" element={<AdminMainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="news" element={<News />} />
      <Route path="news/create" element={<NewsForm />} />
      <Route path="news/edit/:id" element={<NewsForm />} />
      <Route path="announcements" element={<Announcements />} />
      <Route path="announcements/create" element={<AnnouncementForm />} />
      <Route path="announcements/edit/:id" element={<AnnouncementForm />} />
      <Route path="sitemap" element={<AdminSitemap />} />
      <Route path="*" element={<div className="py-5"><h2>Admin page coming soon</h2><p className="text-muted">This module is ready to be connected to the CMS API.</p></div>} />
    </Route>
    <Route path="*" element={<div className="container py-5 text-center"><div className="display-1 fw-bold text-primary">404</div><h2>Page not found</h2><p className="text-muted">The page you are looking for does not exist.</p></div>} />
  </Routes>
}
