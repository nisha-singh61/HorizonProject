import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current path (e.g., /about, /team)
  const { pathname } = useLocation();

 useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Slid up instead of jump
  });
}, [pathname]);

  return null;
};

export default ScrollToTop;