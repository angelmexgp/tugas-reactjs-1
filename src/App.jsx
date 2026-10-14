import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { Outlet, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-line"></div>

        <h1>ANGELIQ'S PERSONAL WEB</h1>
        <p>Teknik Informatika | STT Terpadu Nurul Fikri</p>
      </header>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar-custom">
        <span className="nav-title">NAVIGATION</span>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-button active' : 'nav-button'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive ? 'nav-button active' : 'nav-button'
          }
        >
          Team
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-button active' : 'nav-button'
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* ================= MAIN ================= */}
      <div className="container-fluid">
        <div className="row">

          {/* ================= SIDEBAR KIRI ================= */}
          <aside className="col-md-2 sidebar-left">

            <h3>My Friends</h3>

            <p className="subtitle">
              Teman dan lingkungan pertemanan
            </p>

            <ol className="friend-list">

              <li>
                <div className="friend-card">
                  <strong>Adinda Angesti Chandra</strong>
                  <small>Teman kuliah</small>
                </div>
              </li>

              <li>
                <div className="friend-card">
                  <strong>Varrel Mahardika</strong>
                  <small>Teman kuliah</small>
                </div>
              </li>

              <li>
                <div className="friend-card">
                  <strong>Diva Novia Nautica</strong>
                  <small>Teman kuliah</small>
                </div>
              </li>

              <li>
                <div className="friend-card">
                  <strong>Allyun Zetira</strong>
                  <small>Teman kuliah</small>
                </div>
              </li>

              <li>
                <div className="friend-card">
                  <strong>Izzati Akhsani</strong>
                  <small>Teman kuliah</small>
                </div>
              </li>

            </ol>
          </aside>

          {/* ================= KONTEN UTAMA ================= */}
          <main className="col-md-8 main-content">
            <Outlet />
          </main>

          {/* ================= SIDEBAR KANAN ================= */}
          <aside className="col-md-2 sidebar-right">

            <div className="materi-box">

              <h4>Materi Fullstack</h4>

              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>React JS</li>
              </ol>

            </div>
          </aside>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-line"></div>

        <p>
          Dibuat oleh{' '}
          <strong>Angeliq Mexgaputri Prameswari</strong>
        </p>

        <p>
          Teknik Informatika — STT Terpadu Nurul Fikri | 2026
        </p>

      </footer>

    </div>
  )
}

export default App