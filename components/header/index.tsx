import Logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/" className="logo-container">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={50}
            className="logo"
          />
        </Link>
        <Link href={"/"} target="_blank" className="instagram-icon">
          <FaInstagram size={20} />
        </Link>
      </nav>
    </header>
  );
}
