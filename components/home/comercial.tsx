import Image from "next/image";
import Link from "next/link";
import { ScrollTop } from "../scroll-top/scroll";

import cliniSA from "../../public/assets/comercial/clinicaSA/01-CAPA.png";
import mostra19 from "../../public/assets/comercial/mostra19/mostra01-_11_.webp";
import mostra22 from "../../public/assets/comercial/mostra22/mostra01-_1_.webp";
import mostra23 from "../../public/assets/comercial/mostra23/mostra1-_1_.webp";
import semog from "../../public/assets/comercial/semog/01.webp";
import mostra24 from "../../public/assets/comercial/mostra24/03.webp";
import domus from "../../public/assets/comercial/domus/04.webp";

export const HomeComercial = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery-item">
          <Link href={"/projetos/comercial/clinica-sa"}>
            <Image src={cliniSA.src} alt="Imagem 1" width={500} height={300} />
            <div className="text-image">
              <span className="title">CLÍNICA SA</span>
              <span className="date">2021</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/comercial/mostra-19"}>
            <Image src={mostra19.src} alt="Imagem 2" width={500} height={300} />
            <div className="text-image">
              <span className="title">MOSTRA ARTEFACTO</span>
              <span className="date">2019</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/comercial/mostra-22"}>
            <Image src={mostra22.src} alt="Imagem 3" width={500} height={300} />
            <div className="text-image">
              <span className="title">MOSTRA ARTEFACTO</span>
              <span className="date">2022</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/comercial/mostra-23"}>
            <Image src={mostra23.src} alt="Imagem 4" width={500} height={300} />
            <div className="text-image">
              <span className="title">MOSTRA ARTEFACTO</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/comercial/semog"}>
            <Image src={semog.src} alt="Imagem 5" width={500} height={300} />
            <div className="text-image">
              <span className="title">SEMOG</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/comercial/mostra-24"}>
            <Image src={mostra24.src} alt="Imagem 5" width={500} height={300} />
            <div className="text-image">
              <span className="title">MOSTRA ARTEFACTO</span>
              <span className="date">2024</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Imagens que ocupará 100% da tela */}
      <div className="galleryall">
        <Link href={"/projetos/comercial/domus"}>
          <img src={domus.src} alt="Imagem 5" />
          <div className="text-image">
            <span className="title">DOMUS JARDINS</span>
            <span className="date">2024</span>
          </div>
        </Link>
      </div>

      <ScrollTop />
    </>
  );
};
