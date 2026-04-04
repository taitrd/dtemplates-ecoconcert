"use client";

import { useLayout } from "@/components/providers/layout-provider";
import { Button } from "@/components/ui/button";
import {
  Layout as LayoutIcon,
  Settings2,
  Navigation,
  PanelBottom,
  Eye,
  EyeOff,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function LayoutToolbar() {
  const [open, setOpen] = useState(false);
  const {
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
  } = useLayout();

  return (
    <div
      className={cn(
        "fixed left-0 top-[50%] -translate-y-1/2 z-[200] transition-transform duration-300 flex items-center",
        !open && "-translate-x-[calc(100%-40px)]",
      )}
    >
      {/* Toolbar Content */}
      <div className="bg-background/90 backdrop-blur-xl border-y border-r border-border rounded-r-2xl p-5 shadow-2xl w-64">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
          <Settings2 className="w-5 h-5 text-primary animate-pulse" />
          <h3 className="font-bold text-sm uppercase tracking-widest line-clamp-1">
            Global Layout
          </h3>
        </div>

        <div className="space-y-6">
          {/* Float on Hero Toggle */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <Navigation className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <Label
                htmlFor="float-on-hero"
                className="text-xs font-semibold cursor-pointer"
              >
                Float on Hero
              </Label>
            </div>
            <Switch
              id="float-on-hero"
              checked={floatOnHero}
              onCheckedChange={setFloatOnHero}
            />
          </div>

          {/* Show Footer Toggle */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <PanelBottom className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <Label
                htmlFor="show-footer"
                className="text-xs font-semibold cursor-pointer"
              >
                Show Footer
              </Label>
            </div>
            <Switch
              id="show-footer"
              checked={showFooter}
              onCheckedChange={setShowFooter}
            />
          </div>

          {/* Show Bottom Nav Toggle */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <LayoutIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <Label
                htmlFor="show-bottom-nav"
                className="text-xs font-semibold cursor-pointer text-left leading-none"
              >
                Bottom Navigation
              </Label>
            </div>
            <Switch
              id="show-bottom-nav"
              checked={showBottomNav}
              onCheckedChange={setShowBottomNav}
            />
          </div>

          {/* Show Background Toggle */}
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                {showBackground ? (
                  <Eye className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <EyeOff className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
                <Label
                  htmlFor="show-background"
                  className="text-xs font-semibold cursor-pointer text-left leading-none"
                >
                  Background Effects
                </Label>
              </div>
              <Switch
                id="show-background"
                checked={showBackground}
                onCheckedChange={setShowBackground}
              />
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <Navigation className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <Label
                  htmlFor="nav-transparent"
                  className="text-xs font-semibold cursor-pointer text-left leading-none"
                >
                  Transparent Nav
                </Label>
              </div>
              <Switch
                id="nav-transparent"
                checked={navTransparent}
                onCheckedChange={setNavTransparent}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trigger Pill */}
      <Button
        variant="outline"
        size="icon"
        className="h-12 w-10 rounded-full ml-1 bg-background border border-border shadow-md hover:bg-primary/10 transition-all border-l-0 rounded-l-none"
        onClick={() => setOpen(!open)}
      >
        <ChevronRight
          className={cn("w-5 h-5 transition-transform", open && "rotate-180")}
        />
      </Button>
    </div>
  );
}
