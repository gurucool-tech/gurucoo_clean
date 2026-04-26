import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force instant scroll to avoid conflicts with smooth scrolling settings
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Also try setting it on documentElement for cross-browser reliability
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
