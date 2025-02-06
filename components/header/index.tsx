"use client";
import Logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import "./styles.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export function Header() {
  const pathname = usePathname();

  const [navItem, setNavItem] = useState(false);

  const clickMenu = () => {
    setNavItem(!navItem);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="hamburguer">
          {navItem ? (
            <IoMdClose onClick={clickMenu} />
          ) : (
            <GiHamburgerMenu onClick={clickMenu} />
          )}
        </div>
        <div
          className={`left-links ${navItem ? "open" : "close"} ${
            pathname === "/" ? "hidden-links" : ""
          }`}
        >
          <Link href="/">Escritório</Link>
          <Link href="/contatos">Contato</Link>
        </div>

        <div className="logo-container">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="right-links">
          <Link href="/" target="_blank" className="instagram-icon">
            <FaInstagram size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
