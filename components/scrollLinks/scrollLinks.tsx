"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";
import "./styles.css";

export default function ScrollLinks() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="namesLinks-Container">
      <Link
        to="arquitetura"
        className="namesLinks"
        smooth={true}
        duration={500}
      >
        <span>ARQUITETURA</span>
      </Link>
      <Link to="interiores" className="namesLinks" smooth={true} duration={500}>
        <span>INTERIORES</span>
      </Link>
      <Link to="comercial" className="namesLinks" smooth={true} duration={500}>
        <span>COMERCIAL</span>
      </Link>
      <LinkNext href="/escritorio" className="LinksNext">
        ESCRITÓRIO
      </LinkNext>
      <LinkNext href="/contatos" className="LinksNext">
        CONTATO
      </LinkNext>
    </div>
  );
}
