import { Link } from "react-router-dom";
import "./Home.css";
import heroImg from "../Projects/Ecomcomp/images/banner.jpg"; 

export default function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <img src={heroImg} alt="Shop Banner" className="hero-img" />
        <div className="hero-text">
          <h1>🛍️ Welcome to Smart Shopping</h1>
          <p>Shop fresh produce, electronics, fashion & more at best prices!</p>
          <Link to="/Fruits" className="shop-now-btn">🛒 Start Shopping</Link>
        </div>
      </header>

      <section className="category-preview">
        <h2>🧺 Shop by Category</h2>
        <div className="category-cards">
          <Link to="/Fruits" className="category-card">🍎 Fruits</Link>
          <Link to="/Vegetables" className="category-card">🥦 Vegetables</Link>
          <Link to="/Electronic" className="category-card">💻 Electronics</Link>
          <Link to="/Fashion" className="category-card">👗 Fashion</Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>📦 Free delivery over ₹499 | 💳 Secure Payments | 📞 24x7 Support</p>
      </footer>
    </div>
  );
}
