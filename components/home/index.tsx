import Image from "next/image";
import Link from "next/link";
import { ScrollTop } from "../scroll-top/scroll";

import casaAT from "../../public/assets/arquitetura/casaAt/2-CAPA.webp";
import casaEHE from "../../public/assets/arquitetura/casaEhe/05.webp";
import casaFEL from "../../public/assets/arquitetura/casaFEL/1.webp";
import CasaGLC from "../../public/assets/arquitetura/casaGlc/glc1-_1_.webp";
import casaIEG from "../../public/assets/arquitetura/casaIEG/casaieg1-_1_.webp";
import casaLCF from "../../public/assets/arquitetura/casaLCF/02-capa.webp";
import casaTEE from "../../public/assets/arquitetura/casaTEE/casateecapa.webp";
import casaSQC from "../../public/assets/arquitetura/casaSQC/capasqc.webp";
import casaMD from "../../public/assets/arquitetura/casaMD/-23-capa.webp";

export const HomeArquitetura = () => {
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
            <Image src={casaFEL.src} alt="Imagem 3" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA FEL</span>
              <span className="date">2021</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-glc"}>
            <Image src={CasaGLC.src} alt="Imagem 4" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA GLC</span>
              <span className="date">2020</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-ieg"}>
            <Image src={casaIEG.src} alt="Imagem 5" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA IEG</span>
              <span className="date">2021</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-lcf"}>
            <Image src={casaLCF.src} alt="Imagem 6" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA LCF</span>
              <span className="date">2022</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-tee"}>
            <Image src={casaTEE.src} alt="Imagem 7" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA TEE</span>
              <span className="date">2024</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/casa-sqc"}>
            <Image src={casaSQC.src} alt="Imagem 8" width={500} height={300} />
            <div className="text-image">
              <span className="title">CASA SQC</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Imagens que ocupará 100% da tela */}
      <div className="galleryall">
        <Link href={"/projetos/casa-md"}>
          <img src={casaMD.src} alt="Imagem 9" />
          <div className="text-image">
            <span className="title">CASA MD</span>
            <span className="date">2023</span>
          </div>
        </Link>
      </div>

      <ScrollTop />
    </>
  );
};
