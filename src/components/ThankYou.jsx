import React from 'react';
import './ThankYou.css';

function ThankYou() {
  return (
    <section id="thank-you">
      <div className="thank-you-container">
        <div className="image-container">
          <img
            src="https://drive.google.com/uc?id=10_DU5ObplaIGUwx6saOQZSoJa9o7W-E-"
            alt="Thank You"
            className="thank-you-image"
          />
        </div>
        <div className="content-container">
          <div className="text-container">
            <h2>Thank You, Skillpire!</h2>
                <p>
                I would like to express my sincere gratitude to Skillpire for the valuable knowledge, guidance, and support
                provided throughout the boot camp.
                </p>
                <p>
                Thank you once again to the entire Skillpire team for their commitment to empowering aspiring developers like
                me. I am excited to apply the skills and knowledge gained from this boot camp in my future endeavors.
                </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
