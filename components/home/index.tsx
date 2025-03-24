import Image from "next/image";
import Link from "next/link";
import { ScrollTop } from "../scroll-top/scroll";

import casaAT from "../../public/assets/arquitetura/casaAt/2-CAPA.webp";
import casaEHE from "../../public/assets/arquitetura/casaEhe/05.webp";
import casaFEL from "../../public/assets/arquitetura/casaFEL/1.webp";
import CasaGLC from "../../public/assets/arquitetura/casaGlc/glc1-_1_.webp";

export const HomePage = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery-item">
          <Link href={"/projetos/casa-at"}>
            <Image src={casaAT.src} alt="Imagem 1" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA AT</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-ehe"}>
            <Image src={casaEHE.src} alt="Imagem 2" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA AT</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-fel"}>
            <Image src={casaFEL.src} alt="Imagem 2" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA FEL</span>
              <span className="date">2021</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-glc"}>
            <Image src={CasaGLC.src} alt="Imagem 2" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA GLC</span>
              <span className="date">2020</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Imagens que ocupará 100% da tela */}
      <div className="galleryall">
        <img src={casaAT.src} alt="Imagem 4" />
        <div className="text-image">
          <span className="title">CASA AT</span>
          <span className="date">2023</span>
        </div>
      </div>

      <ScrollTop />
    </>
  );
};
