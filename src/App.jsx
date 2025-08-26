// App.jsx
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="app">
      {/* Hero / Intro */}
      <section className="hero">
        <div className="container">
          <h1>Hi, Saya Yuniar 👋</h1>
          <p>Full Stack Developer | Software Engineer | Web Developer</p>
          <div className="cta-buttons">
            <button className="btn primary">Lihat Portfolio</button>
            <button className="btn secondary">Hubungi Saya</button>
          </div>
        </div>
      </section>

      {/* Tentang Saya */}
      <section className="about">
        <div className="container">
          <h2>Tentang Saya</h2>
          <p>
            Saya seorang Full Stack Developer yang suka membangun aplikasi
            modern. Berpengalaman dengan PHP, Laravel, React, Node.js, dan
            MySQL.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <div className="grid">
            <div className="card">Proyek 1</div>
            <div className="card">Proyek 2</div>
            <div className="card">Proyek 3</div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="testimonials">
        <div className="container">
          <h2>Services</h2>
          <ul className="skills">
            <li>Laravel</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Git</li>
          </ul>
        </div>
      </section>

      {/* Kontak */}
      <section className="contact">
        <div className="container">
          <h2>Kontak Saya</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nama" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Pesan" rows="4"></textarea>
            <button className="btn primary">Kirim</button>
          </form>
          <div className="socials">
            <a href="#">LinkedIn</a> | <a href="#">GitHub</a> |{" "}
            <a href="#">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Yuniar Nariswari F</p>
      </footer>
    </div>
  );
}

export default App;
