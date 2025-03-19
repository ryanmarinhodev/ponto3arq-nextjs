"use client";
import Logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import "./styles.css";

export function Header() {
  const [navItem, setNavItem] = useState(false);
  const [logoItem, setLogoItem] = useState(false);

  const clickMenu = () => {
    setNavItem(!navItem);
  };
  const logoItemClick = () => {
    setLogoItem(!logoItem);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="hamburguer" onClick={clickMenu}>
          {navItem ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>

        {/* Menu Links */}
        <div className={`left-links ${navItem ? "open" : "close"}`}>
          <Link className="Links" href="/" onClick={clickMenu}>
            Escritório
          </Link>
          <Link className="Links" href="/contatos" onClick={clickMenu}>
            Contato
          </Link>
        </div>

        {/* Logo */}
        <div className="logo-container">
          <Link href="/" onClick={logoItemClick}>
            <Image src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Instagram Icon */}
        <div className={`right-links ${navItem ? "instaOpen" : "instaClose"}`}>
          <Link
            href="https://www.instagram.com/ponto3arquitetura/?hl=pt"
            target="_blank"
            className="instagram-icon"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
