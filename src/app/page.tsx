import React from "react";
import "./home.css";
import ScrollLinks from "../../components/scrollLinks/scrollLinks";
import { HomeArquitetura } from "../../components/home";
import { HomeInterioes } from "../../components/home/interioes";
import { HomeComercial } from "../../components/home/comercial";

export default function Home() {
  return (
    <>
      <ScrollLinks />

      {/* Seções de conteúdo */}
      <div id="arquitetura">
        <HomeArquitetura />
      </div>

      <div id="interiores">
        <HomeInterioes />
      </div>
      <div id="comercial">
        <HomeComercial />
      </div>
    </>
  );
}
