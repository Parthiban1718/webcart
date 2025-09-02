
import { useState } from "react";
import { productData } from "../datas/ProductData";
import "../Componets/Template.css";
import Popup from "./Popup";
import Navbar from "../../../Navbar/Navbar";
import Header from "../Componets/Header";



export default function Template(props) {
    const [products, setProducts] = useState(props.customProducts || productData);
    const [showPopup, setShowPopup] = useState(false); 
    const [searchTerm, setSearchTerm] = useState("");
    const [wishlistMode, setWishlistMode] = useState(false);

    function increment(productName) {
        const updatedP = products.map((val) => {
            if (val.name === productName) {
                return { ...val, ordered_v: val.ordered_v + 1 };
            }
            return val;
        });
        setProducts(updatedP);
    }

    function decrement(productName) {
        const updatedP = products.map((val) => {
            if (val.name === productName) {
                return { ...val, ordered_v: Math.max(0, val.ordered_v - 1) };
            }
            return val;
        });
        setProducts(updatedP);
    }

    function handleAddToCart(product) {
        const updatedP = products.map((val) => {
            if (val.name === product.name && val.ordered_v > 0) {
                return { ...val, SelectedItem: 1 };
            }
            return val;
        });
        const headercount = updatedP.filter((val) => val.SelectedItem === 1).length;
        setProducts(updatedP);
        props.sendHeadercount(headercount);
    }

    function removeItem(productName) {
        const updatedP = products.map((product) => {
            if (product.name === productName) {
                return {
                    ...product,
                    SelectedItem: 0,
                    ordered_v: 0,
                };
            }
            return product;
        });
        setProducts(updatedP);
        const headercount = updatedP.filter((val) => val.SelectedItem === 1).length;
        props.sendHeadercount(headercount);
    }

    function togglePopup() {
        setShowPopup(!showPopup); 
    }
    
    function toggleWishlist(productName) {
        const updated = products.map((p) =>
          p.name === productName ? { ...p, wishlist: !p.wishlist } : p
        );
        setProducts(updated);
      }
      


      return (
        <>
          <Navbar />
          <Header
            headercount={products.filter((p) => p.SelectedItem === 1).length}
            showPopup={togglePopup}
            setSearchTerm={setSearchTerm}
            wishlistMode={wishlistMode}              
            setWishlistMode={setWishlistMode}  
          />
      
          <div className="mx-w">
            <Popup
              product={products}
              showPopup={showPopup}
              closePopup={togglePopup}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
            />
      
            <div className="products grid">
              {products
  .filter((val) =>
    wishlistMode
      ? val.wishlist
      : val.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
                .map((val) => (


                    
                  <div key={val.name} className={`product-card ${val.bestSeller ? "badge-best" : ""}`}>
                    <div className="product-in">
                      {/* Wishlist Icon ❤️ */}
                      <div className="wishlist-icon" onClick={() => toggleWishlist(val.name)}>
                        {val.wishlist ? "❤️" : "🤍"}
                      </div>
      
                      {/* Badges */}
                      {val.bestSeller && <div className="badge"></div>}
                      {val.new && <div className="badge-new">🆕 New</div>}
      
                      <div className="product-img-wrapper">
                        <img src={val.img} alt={val.name} />
                      </div>
      
                      <h2>{val.name}</h2>
      
                      {/* Ratings ⭐ */}
                      <div className="ratings">
                        {"⭐".repeat(Math.floor(val.rating)) + "☆".repeat(5 - Math.floor(val.rating))} ({val.rating})
                      </div>
      
                      <div className="df mx-w-100">
                        <div>Rs.{val.price}</div>
                        <div>
                        <div className="ordered_q">
                          {val.quantity}
                          {val.category === "electronic" || val.category === "fashion" ? " item(s)" : "kg"}
                        </div>
                      </div>
                      </div>
                      <div className="df mx-w-100 counter-group">
                        <button className="counter-btn" onClick={() => increment(val.name)}>+</button>
                        <div className="count-text">{val.ordered_v}</div>
                        <button className="counter-btn" onClick={() => decrement(val.name)}>-</button>
                      </div>
      
                      <div className="df mx-w-100">
                        <div className="ordered_price">₹{val.ordered_v * val.price}</div>
                        <div className="ordered_q">{val.ordered_v * val.quantity}kg</div>
                      </div>
      
                      <button className="add-cart-btn" onClick={() => handleAddToCart(val)}>Add To Cart</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      );
    }      
