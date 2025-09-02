
import React from "react";
import "./Customer.css"; 

export default function Customer() {
  return (
    <div className="customer-page">
      <section className="customer-service">
        <h2>Customer & Services</h2>
        <p>If you have any issues with our products or services, please contact us directly:</p>
        <ul>
          <li>Email: support@yourecommerce.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Hours: Mon-Fri, 9AM - 6PM</li>
        </ul>
      </section>

      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <strong>Ravi S.</strong>
          <p>⭐️⭐️⭐️⭐️⭐️ A Game-Changer for My Home!
The picture quality is stunning, and the smart features make everything so convenient. Setup took just minutes. It looks great in my space and has really upgraded my daily routine.

Great service and fast delivery!</p>
        </div>
        <div className="review">
          <strong>Anita M.</strong>
          <p>⭐️⭐️⭐️⭐️⭐️ Love the Fit and Quality! ✨
Absolutely obsessed with this outfit! 😍 The fabric feels amazing and fits like a dream. Super comfy and stylish — I’ve already gotten so many compliments! 💃


</p>
        </div>
        <div className="review">
          <strong>Alex.F</strong>
          <p> Beautiful and Durable! 👜
So chic and well-made! The stitching is neat, and the design is . It’s become my go-to — both fashionable and practical. Highly recommend! 💯


</p>
        </div>
        <div className="review">
          <strong>Ajith.K</strong>
          <p>⭐️⭐️⭐️⭐️ Fast, Sleek, and Reliable! 💻
Blazing speed and a gorgeous screen! I use it for work and streaming, and it never lags. Battery lasts all day 🔋 and the design is super clean. 😎


</p>
        </div>
        <div className="review">
          <strong>Vikram.L</strong>
          <p>⭐️⭐️⭐️⭐️⭐️ Elegant and Well-Made
          Perfect for the office or events. The stitching is clean, and the material has a nice weight to it. It looks high-end and feels comfortable all day.</p>
        </div>
        <div className="review">
          <strong>Trisha.v</strong>
          <p>⭐️⭐️⭐️⭐️ Compact and Feature-Packed!
          Setup was super easy, and it works flawlessly. The sound quality is excellent, and the battery lasts longer than I expected. Stylish design, too—perfect for daily use!</p>
        </div>
      </section>
    </div>
  );
}
