import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/axis.png"
        productName="Axis"
        productDesription="Our flagship, next-generation trading terminal. Axis provides an ultra-low latency execution environment, real-time data streaming, and powerful analytical tools. Access the seamless Axis experience from any device—desktop, Android, or iOS."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/axisDash.png"
        productName="Dashboard"
        productDesription="Insight is the central command center for your Horizon financial universe. Track your total wealth, analyze portfolio performance with advanced metrics, and access comprehensive tax and trade reports. Your full financial overview, visualized."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/crest.png"
        productName="Crest"
        productDesription="Invest directly in mutual funds online with zero commission, securely linked to your Horizon account. Track, manage, and grow your investments seamlessly on both Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/axisConnect.png"
        productName="Axis Connect API"
        productDesription="Power your innovations with our robust, super simple HTTP/JSON APIs. Connect directly to Horizon's ultra-low latency ecosystem to build advanced trading platforms, investment apps, and personalized experiences for your users."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/ascend.png"
        productName="Ascend Academy"
        productDesription="Ascend Academy is your definitive educational resource for mastering the financial markets. Featuring structured modules, in-depth tutorials, and interactive content, we break down complex trading concepts into easily digestible lessons for learning anytime, anywhere."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5 fs-5 custom-links">
       Curious about how we built the platform? Read about our engineering principles and open-source contributions on the{" "}
        <a href="">Horizon.tech</a>blog.
      </p>
      <Universe />
    </>
  );
}

export default PricingPage;
