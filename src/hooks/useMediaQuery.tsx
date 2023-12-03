"use client";

import { useEffect, useState } from "react";

export const useWindowSize = (): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export const UseMediaQuery = (width: number): boolean => {
  const { width: windowWidth } = useWindowSize();
  return windowWidth > width;
};
