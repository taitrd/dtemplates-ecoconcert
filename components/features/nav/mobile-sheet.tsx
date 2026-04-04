"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NAV_CATEGORIES } from "@/lib/constants/navigation";
import Image from "next/image";

export function MobileSheet() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hover:text-primary p-2 -ml-2"
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
        <SheetHeader className="p-6 border-b text-left">
          <SheetTitle>
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/ticketer.png"
                height={40}
                width={80}
                alt="Ticketer"
                className="object-contain min-h-6 max-h-10"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 px-6 py-4">
          <div className="flex flex-col gap-8 pb-12">
            {NAV_CATEGORIES.map((category) => (
              <div key={category.title} className="space-y-4">
                <h4 className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest pl-2">
                  {category.title}
                </h4>
                <div className="flex flex-col space-y-1">
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium py-3 px-3 hover:bg-primary/5 hover:text-primary rounded-xl transition-all active:scale-95 flex items-center gap-4 group"
                      onClick={() => setOpen(false)}
                    >
                      {item.icon && (
                        <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                          <item.icon className="w-5 h-5 text-primary/70 group-hover:text-primary" />
                        </div>
                      )}
                      <div className="flex flex-col gap-0.5 overflow-hidden">
                        <span className="leading-none font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="text-[11px] font-normal text-muted-foreground line-clamp-1">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
