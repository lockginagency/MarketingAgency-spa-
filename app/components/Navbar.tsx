"use client";

import { useState } from "react";
import { agencyName } from "@/app/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/about", label: "Кто мы" },
    { href: "#services", label: "Услуги" },
    { href: "#cases", label: "Кейсы" },
    { href: "#pricing", label: "Тарифы" },
    { href: "#footer", label: "Контакты" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          {agencyName}
        </a>

        <button
          className="navbar-burger"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
