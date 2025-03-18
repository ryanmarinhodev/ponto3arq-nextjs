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

  const clickMenu = () => {
    setNavItem(!navItem);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="hamburguer" onClick={clickMenu}>
          {navItem ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>

        {/* Menu Links */}
        <div className={`left-links ${navItem ? "open" : "close"}`}>
          <Link href="/">Escritório</Link>
          <Link href="/contatos">Contato</Link>
        </div>

        {/* Logo */}
        <div className="logo-container">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Instagram Icon */}
        <div className={`right-links ${navItem ? "instaOpen" : "instaClose"}`}>
          <Link href="/" target="_blank" className="instagram-icon">
            <FaInstagram size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
