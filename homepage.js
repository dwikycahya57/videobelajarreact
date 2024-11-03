import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1 className="logo">videobelajar</h1>
        <div className="avatar">
          <button>Kategori</button>
          <img src="https://i.ibb.co.com/phrK7vL/user.jpg" alt="User Avatar" className="avatar-img" />
        </div>
      </header>

      {/* Banner */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h2>
          <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
          <button className="hero-button">Temukan Video Course untuk Dipelajari!</button>
        </div>
      </section>

      {/* Bridge Banner Katalog */}
      <section className="main-section">
        <h3>Koleksi Video Pembelajaran Unggulan</h3>
        <p className="subtitle">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

        {/* Kategori */}
        <nav className="category-nav">
          <span className="active">Semua Kelas</span>
          <span>Pemasaran</span>
          <span>Desain</span>
          <span>Pengembangan Diri</span>
          <span>Bisnis</span>
        </nav>

        {/* Katalog */}
        <div className="courses-grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="course-card">
              <img src="https://i.ibb.co.com/0Bt50PZ/katalog.jpg" alt="Course Thumbnail" className="course-image" />
              <div className="course-info">
                <h4>Big 4 Auditor Financial Analyst</h4>
                <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan... </p>
                <div className="instructor">
                  <img src="https://i.ibb.co.com/dJw63YS/female1-512.webp" alt="Instructor" className="instructor-img" />
                  <span>Jenna Ortega</span>
                  <span className="instructor-position">Senior Accountant di Gojek</span>
                </div>
                <div className="rating-price">
                  <span className="rating">⭐ 3.5 (86)</span>
                  <span className="price">Rp 300K</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-logo">videobelajar</h2>
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Kategori</h4>
              <button>Digital & Teknologi</button>
              <button>Pemasaran</button>
              <button>Manajemen Bisnis</button>
              <button>Pengembangan Diri</button>
              <button>Desain</button>
            </div>
            <div className="footer-column">
              <h4>Perusahaan</h4>
              <button>Tentang Kami</button>
              <button>FAQ</button>
              <button>Kebijakan Privasi</button>
              <button>Ketentuan Layanan</button>
              <button>Bantuan</button>
            </div>
            <div className="footer-column">
              <h4>Komunitas</h4>
              <button>Tips Sukses</button>
              <button>Blog</button>
            </div>
          </div>
          <div className="footer-bottom">
          <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
