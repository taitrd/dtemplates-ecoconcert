"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LayoutContextType {
  floatOnHero: boolean;
  setFloatOnHero: (value: boolean) => void;
  showFooter: boolean;
  setShowFooter: (value: boolean) => void;
  showBottomNav: boolean;
  setShowBottomNav: (value: boolean) => void;
  showBackground: boolean;
  setShowBackground: (value: boolean) => void;
  navTransparent: boolean;
  setNavTransparent: (value: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [floatOnHero, setFloatOnHero] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [showBackground, setShowBackground] = useState(true);
  const [navTransparent, setNavTransparent] = useState(true);

  return (
    <LayoutContext.Provider
      value={{
        floatOnHero,
        setFloatOnHero,
        showFooter,
        setShowFooter,
        showBottomNav,
        setShowBottomNav,
        showBackground,
        setShowBackground,
        navTransparent,
        setNavTransparent,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
