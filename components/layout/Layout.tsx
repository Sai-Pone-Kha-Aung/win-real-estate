import Navbar from '../navbar/Navbar'
import '@/components/layout/Layout.scss'

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  )
}

export default Layout