"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Nav className="top-2" />
    </div>)
  );
}

function Nav({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-xs md:text-sm", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About Me">
          <ProductItem
              href=""
              src="/about.png"
              alt="about"
            />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Experiences">
          <ProductItem
              href=""
              src="/exp.png"
              alt="experiences"
            />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
        <ProductItem
              href=""
              src="/projects.png"
              alt="projects"
            />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Connect">
        <ProductItem
              href=""
              src="/contact.png"
              alt="contact"
            />
        </MenuItem>
      </Menu>
    </div>)
  );
}
