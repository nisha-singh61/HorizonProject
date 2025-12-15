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
    <div className="container left-section-container">
      <div className="row align-items-center">
        <div className="col-6 pe-5 text-center">
          <img src={imageURL} className="img-fluid zoom-hover" />
        </div>
        <div className="col-6 p-3 mt-4">
          <h1 className="product-title">{productName}</h1>
          <p>{productDesription}</p>
          <div className="custom-links">
            <a href={tryDemo || "#"}>
              Start Trading <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore || "#"}>
              View Documentation <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="store-badge" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" className="store-badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;