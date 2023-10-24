import { useState, useEffect } from "react";

function useMobileWindowFinder() {
  const [isLargeScreen, setIsLargeScreen] = useState(window?.innerWidth > 500);

  useEffect(() => {
    function handleWindowSizeChange() {
      setIsLargeScreen(window?.innerWidth > 500);
    }

    window?.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return isLargeScreen;
}

export default useMobileWindowFinder;
