"use client";

import Logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./styles.css";

export function Header() {
  const [navItem, setNavItem] = useState(false);
  const [logoItem, setLogoItem] = useState(false);
  const pathname = usePathname(); //Verifica a rota
  const isHome = pathname === "/";

  const clickMenu = () => {
    setNavItem(!navItem);
  };
  const logoItemClick = () => {
    setLogoItem(!logoItem);
  };

  // Bloquear a rolagem da página quando o menu estiver aberto
  useEffect(() => {
    if (navItem) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
      document.documentElement.style.overflow = "hidden"; // Bloqueia o scroll também no HTML
    } else {
      document.body.style.overflow = "auto"; // Restaura o scroll
      document.documentElement.style.overflow = "auto"; // Restaura o scroll também no HTML
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [navItem]);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="hamburguer" onClick={clickMenu}>
          {navItem ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>

        {/* Menu Links */}
        <div className="Container-Links-Modal">
          <div
            className={`left-links ${navItem ? "open" : "close"} ${
              isHome ? "isHome" : "notHome"
            }`}
          >
            <Link className="Links" href="/" onClick={clickMenu}>
              Escritório
            </Link>
            <Link className="Links" href="/contatos" onClick={clickMenu}>
              Contato
            </Link>

            <Link
              href="https://www.instagram.com/ponto3arquitetura/?hl=pt"
              target="_blank"
              className="instagram-icon-mobile"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="logo-container">
          <Link href="/" onClick={navItem ? clickMenu : logoItemClick}>
            <Image src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Instagram Icon */}
        <div className={`right-links ${navItem ? "instaOpen" : "instaClose"}`}>
          <Link
            href="https://www.instagram.com/ponto3arquitetura/?hl=pt"
            target="_blank"
            className={"instagram-icon"}
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
