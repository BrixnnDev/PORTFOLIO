import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  useEffect(() => {
    history.replaceState(null, '', window.location.pathname)
  }, [])

  return (
    <div className="min-h-screen bg-dark scroll-smooth">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
