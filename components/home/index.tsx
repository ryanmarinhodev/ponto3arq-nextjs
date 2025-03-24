import Image from "next/image";
import casaAT from "../../public/assets/arquitetura/casaAt/2-CAPA.webp";
import casaEHE from "../../public/assets/arquitetura/casaEhe/05.webp";
import Link from "next/link";
import { ScrollTop } from "../scroll-top/scroll";

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
          <img src={casaAT.src} alt="Imagem 1" />
          <div className="text-image">
            <span className="title">CASA AT</span>
            <span className="date">2023</span>
          </div>
        </div>
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 1" />
          <div className="text-image">
            <span className="title">CASA AT</span>
            <span className="date">2023</span>
          </div>
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
