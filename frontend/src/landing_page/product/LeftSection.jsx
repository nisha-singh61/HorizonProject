import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="product-section-wrapper py-5">
      <div className="container py-lg-4">
        {/* Subtle background glow for depth */}
        <div className="product-bg-glow"></div>

        <div className="row align-items-center g-5 position-relative">
          {/* Image Column */}
          <div className="col-12 col-lg-6 text-center">
            <div className="product-image-container">
              <img 
                src={imageURL} 
                className="img-fluid main-product-img" 
                alt={productName} 
              />
              <div className="image-shadow-accent"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-12 col-lg-6">
            <div className="product-content-box ps-lg-4">
              <div className="product-category-tag mb-3">Market Tool</div>
              
              <h1 className="product-display-title mb-3">
                {productName}
              </h1>
              
              <p className="product-lead-text mb-4">
                {productDesription}
              </p>

              <div className="product-action-row mb-5">
                <a href={tryDemo || "#"} className="modern-action-btn">
                  Start Trading
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
                <a href={learnMore || "#"} className="secondary-text-link">
                  View Documentation
                </a>
              </div>

              <div className="store-badge-row">
                <a href={googlePlay} className="store-link">
                  <img src="media/images/googlePlayBadge.svg" className="badge-svg" alt="Google Play" />
                </a>
                <a href={appStore} className="store-link">
                  <img src="media/images/appstoreBadge.svg" className="badge-svg" alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;