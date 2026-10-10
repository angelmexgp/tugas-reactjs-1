import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

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

        <a href="#home" className="nav-button">
          Home
        </a>

        <a href="#team" className="nav-button">
          Team
        </a>

        <a href="#contact" className="nav-button">
          Contact
        </a>
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

            {/* ================= HOME ================= */}
            <section id="home" className="content-section">

              <div className="welcome-box">

                <p>
                  Anyeong semua, saya{' '}
                  <strong>Angeliq Mexgaputri Prameswari</strong>,
                  mahasiswa Teknik Informatika di{' '}
                  <strong>STT Terpadu Nurul Fikri.</strong>
                </p>

                <p>
                  Selamat datang di personal web saya.
                  Website ini dibuat menggunakan React JS
                  dan Bootstrap sebagai penerapan materi
                  pengembangan website.
                </p>

              </div>


              <div className="row g-3 mt-1">

                <div className="col-md-6">

                  <div className="info-card">

                    <h4>Profil Singkat</h4>

                    <p>
                      Saya merupakan mahasiswa Teknik Informatika
                      yang tertarik pada bidang pengembangan website,
                      pemrograman, database, dan teknologi informasi.
                    </p>

                  </div>

                </div>


                <div className="col-md-6">

                  <div className="info-card">

                    <h4>Tujuan Website</h4>

                    <p>
                      Website ini dibuat untuk menerapkan konsep
                      React JS, component, JSX, Bootstrap,
                      serta pembuatan tampilan website yang
                      responsif dan menarik.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* ================= TEAM ================= */}
            <section id="team" className="team-section">

              <div className="section-title">

                <h2>Our Team</h2>

                <p>
                  Berikut adalah anggota team yang terlibat
                  dalam pengembangan website.
                </p>

              </div>


              <div className="row g-4">

                {/* TEAM 1 */}
                <div className="col-md-4">

                  <div className="team-card">

                    <div className="team-icon">
                      👩‍💻
                    </div>

                    <h4>Adinda Angesti</h4>

                    <p className="team-role">
                      Frontend Developer
                    </p>

                    <p>
                      Bertanggung jawab dalam membuat tampilan
                      website menggunakan React JS dan Bootstrap.
                    </p>

                  </div>

                </div>


                {/* TEAM 2 */}
                <div className="col-md-4">

                  <div className="team-card">

                    <div className="team-icon">
                      👨‍💻
                    </div>

                    <h4>Angeliq Mexgaputri</h4>

                    <p className="team-role">
                      UI/UX Designer
                    </p>

                    <p>
                      Bertanggung jawab dalam merancang tampilan
                      website agar menarik dan mudah digunakan.
                    </p>

                  </div>

                </div>


                {/* TEAM 3 */}
                <div className="col-md-4">

                  <div className="team-card">

                    <div className="team-icon">
                      👨‍💻
                    </div>

                    <h4>Muhammad Varrel Mahardika</h4>

                    <p className="team-role">
                      Backend Developer
                    </p>

                    <p>
                      Bertanggung jawab dalam mengembangkan
                      proses dan pengelolaan data website.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* ================= CONTACT ================= */}
            <section id="contact" className="contact-section">

              <div className="section-title">

                <h2>Contact Us</h2>

                <p>
                  Silakan isi form berikut jika ingin
                  menghubungi kami.
                </p>

              </div>


              <div className="contact-card">

                <div className="mb-3">

                  <label className="form-label">
                    Nama
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama"
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Masukkan email"
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Pesan
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tulis pesan kamu..."
                  ></textarea>

                </div>


                <button className="btn btn-primary w-100">
                  Kirim Pesan
                </button>

              </div>

            </section>

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
