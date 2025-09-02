import "../Componets/Popup.css";
import { useState } from "react";

export default function Popup({
    product,
    showPopup,
    closePopup,
    increment,
    decrement,
    removeItem,
}) {
    const [showPaymentModal, setShowPaymentModal] = useState(false); 
    const selectedItems = product.filter((val) => val.SelectedItem === 1);

    if (!showPopup) return null;

    const handleBuyClick = () => {
        setShowPaymentModal(true);  
    };

    const handlePaymentConfirm = () => {
        alert("Payment Successful!"  );  
        setShowPaymentModal(false);  
        
    };

    return (
        <div className="popup">
            <div className="popup-in">
                <button className="closebtn" onClick={closePopup}>x</button>

                {selectedItems.length === 0 && <div>Your cart is empty.</div>}

                {selectedItems.map((val) => (
                    <div className="popup-content" key={val.name}>
                        <span>{val.name}</span>
                        <span>Rs.{val.price}</span>

                        <span>
                            {val.quantity}
                            {val.category === "electronic" || val.category === "fashion" ? " item(s)" : "kg"}
                        </span>
                        <span>Rs.{val.price * val.ordered_v}</span>
                        <span>
                            {val.quantity * val.ordered_v}
                            {val.category === "electronic" || val.category === "fashion" ? " item(s)" : "kg"}
                        </span>
                        <button onClick={() => increment(val.name)}>+</button>
                        <span>{val.ordered_v}</span>
                        <button onClick={() => decrement(val.name)}>-</button>
                        <button onClick={() => removeItem(val.name)}>Delete</button>
                    </div>
                ))}

                {/* ✅ Buy button at bottom */}
                {selectedItems.length > 0 && (
                    <div className="popup-footer">
                        <button className="buy-btn" onClick={handleBuyClick}>Buy</button>
                    </div>
                )}
            </div>

            {/* Payment Confirmation Modal */}
            {showPaymentModal && (
                <div className="payment-modal">
                    <div className="modal-content">
                        <h3>Confirm Payment</h3>
                        <p>Are you sure you want to proceed with the payment?</p>
                        <div className="modal-buttons">
                            <button onClick={handlePaymentConfirm}>Confirm Payment</button>
                            <button onClick={() => setShowPaymentModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}



