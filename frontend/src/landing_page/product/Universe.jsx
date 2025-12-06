import React from "react";

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;


function Universe() {
   const handleSignInClick = () => {
        window.location.href = DASHBOARD_SIGNUP_URL;
   };
   
  return (
    <div
      className="container universe-container"
      style={{
        marginTop: "6rem",
        lineHeight: "2",
        fontSize: "1.05em",
        maxWidth: "1140px",
      }}
    >
      <div className="row text-center">
        <h1 className="universe-title mb-4">The Zerodha Universe</h1>
        <p className="universe-intro">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Row 1 */}
        <div className="row mt-4">
          <div className="col-4 p-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              className="img-fluid mb-3"
              alt="Zerodha Fundhouse"
              style={{ maxHeight: "60px" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              className="mb-3"
              style={{
                height: "40px", // force bigger size
                width: "auto", // keep proportions
                display: "block",
                margin: "0 auto", // center align
              }}
            />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/tijori.svg"
              className="img-fluid mb-3"
              alt="Tijori"
              style={{ maxHeight: "60px" }}
            />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mt-4">
          <div className="col-4 p-4">
            <img
              src="media/images/streakLogo.png"
              className="img-fluid mb-3"
              alt="Streak"
              style={{ maxHeight: "60px" }}
            />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/smallcaseLogo.png"
              className="img-fluid mb-3"
              alt="Smallcase"
              style={{ maxHeight: "60px" }}
            />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/dittoLogo.png"
              className="img-fluid mb-3"
              alt="Ditto"
              style={{ maxHeight: "60px" }}
            />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <button 
         onClick={handleSignInClick} 
        className="universe-btn p-2 btn fs-5 mb-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
