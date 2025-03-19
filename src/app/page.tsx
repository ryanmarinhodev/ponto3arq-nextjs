import React from "react";
import "./home.css";
import ScrollLinks from "../../components/scrollLinks/scrollLinks";
import { HomePage } from "../../components/home";

export default function Home() {
  return (
    <>
      <ScrollLinks />

      {/* Seções de conteúdo */}
      <div id="arquitetura">
        <HomePage />
      </div>

      <div
        id="interiores"
        style={{ height: "100vh", backgroundColor: "lightgreen" }}
      >
        <h2>INTERIORES</h2>
      </div>
      <div
        id="comercial"
        style={{ height: "100vh", backgroundColor: "lightcoral" }}
      >
        <h2>COMERCIAL</h2>
      </div>
    </>
  );
}
