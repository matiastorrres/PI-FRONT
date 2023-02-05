import { useState, useEffect } from "react";
export const useIsWide = () => {
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 980px)");
    const handleMediaQueryChange = (event) => {
      setIsWide(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return { isWide };
};
