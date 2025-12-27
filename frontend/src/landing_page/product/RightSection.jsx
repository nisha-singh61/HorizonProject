import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <section className="product-section-wrapper py-5 alternate-bg">
      <div className="container py-lg-4">
        {/* Decorative glow on the right side for this section */}
        <div className="product-bg-glow glow-right"></div>

        <div className="row align-items-center g-5 position-relative">
          
          {/* Content Column (Left side now) */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="product-content-box pe-lg-4">
              <div className="product-category-tag mb-3">Enterprise Suite</div>
              
              <h1 className="product-display-title mb-3">
                {productName}
              </h1>
              
              <p className="product-lead-text mb-4">
                {productDesription}
              </p>

              <div className="product-action-row">
                <a href={learnMore || "#"} className="modern-action-btn">
                  Explore Documentation
                  <i className="fa-solid fa-book-open ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Image Column (Right side now) */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 text-center">
            <div className="product-image-container">
              <img 
                src={imageURL} 
                className="img-fluid main-product-img right-side-shadow" 
                alt={productName} 
              />
              <div className="image-shadow-accent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RightSection;