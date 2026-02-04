"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white dark:bg-zinc-950/70 dark:border-zinc-900 sticky top-0 z-40 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="font-bold text-xl text-emerald-600">
          Mint Glow Salon
        </Link>
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 transition-colors text-zinc-700 dark:text-zinc-200 rounded-md hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-zinc-800 font-medium"
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        
        </div>
      </div>
    </nav>
  );
}