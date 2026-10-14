function Team() {
  return (
    <section className="content-section">
      <h2>Our Team 👥</h2>

      <p>
        Berikut adalah anggota tim yang mengerjakan project React JS ini.
      </p>

      <div className="row g-4 mt-2">
        <div className="col-md-4">
          <div className="team-card">
            <h4>Angeliq</h4>
            <p>Frontend Developer</p>
            <small>React JS & UI Development</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="team-card">
            <h4>Adinda</h4>
            <p>Team Member</p>
            <small>Project Development</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="team-card">
            <h4>Team Member</h4>
            <p>Team Member</p>
            <small>Project Support</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team