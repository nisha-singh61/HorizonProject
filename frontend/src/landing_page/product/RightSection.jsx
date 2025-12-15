import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container right-section-container">
      <div className="row align-items-center">
        <div className="col-6 p-3 mt-4">
          <h1 className="product-title">{productName}</h1>
          <p>{productDesription}</p>
          <div className="custom-links">
            <a href={learnMore || "#"}>
              View Documentation <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6 text-center">
          <img src={imageURL} className="img-fluid zoom-hover" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;