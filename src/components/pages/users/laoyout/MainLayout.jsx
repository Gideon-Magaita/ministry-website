import Dira2050Floating from "./Dira2050Floating";
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className="public-site">
      <Header />
      <main><Outlet /><Dira2050Floating />
</main>
      <Footer />
    </div>
  )
}
