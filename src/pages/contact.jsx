function Contact() {
  return (
    <section className="content-section">
      <h2>Contact 📩</h2>

      <p>
        Jika ingin menghubungi saya, silakan isi form di bawah ini.
      </p>

      <form className="contact-form">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan nama"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Masukkan email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pesan</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Tulis pesan..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Kirim Pesan
        </button>
      </form>
    </section>
  )
}

export default Contact