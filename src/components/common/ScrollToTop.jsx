import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately jump to the top on every navigation to avoid preserved scroll
    // or layout shifts caused by components that render off-screen.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Ensure both html/body are reset for older browsers or css overrides
    document.documentElement && (document.documentElement.scrollTop = 0);
    document.body && (document.body.scrollTop = 0);
  }, [pathname]);

  return null;
}
