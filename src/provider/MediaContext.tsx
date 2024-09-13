// src/shared/context/MediaContext.tsx
import React, { createContext, type ReactNode, useContext } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";

export interface IMediaContext {
  isMobile: boolean;
  isTablet: boolean;
  isNarrow: boolean;
  isDesktop: boolean;
  isWide: boolean;
  isUltraWide: boolean;
}

const MediaContext = createContext<IMediaContext>({
  isMobile: false,
  isTablet: false,
  isNarrow: false,
  isDesktop: false,
  isWide: false,
  isUltraWide: false,
});

const MediaContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isNarrow = useMediaQuery("(max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isWide = useMediaQuery("(min-width: 1200px)");
  const isUltraWide = useMediaQuery("(min-width: 1441px)");

  return (
    <MediaContext.Provider
      value={{ isMobile, isTablet, isNarrow, isDesktop, isWide, isUltraWide }}
    >
      {children}
    </MediaContext.Provider>
  );
};

const useMediaContext = () => useContext(MediaContext);

export { MediaContextProvider, useMediaContext };
