// Certifique-se de que 'use client' está na primeira linha
"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";
import "../../src/app/home.css";

export default function ScrollLinks() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="namesLinks">
      <Link to="arquitetura" smooth={true} duration={500}>
        <span>ARQUITETURA</span>
      </Link>
      <Link to="interiores" smooth={true} duration={500}>
        <span>INTERIORES</span>
      </Link>
      <Link to="comercial" smooth={true} duration={500}>
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
