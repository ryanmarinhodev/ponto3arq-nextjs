import Image from "next/image";
import Link from "next/link";
import { ScrollTop } from "../scroll-top/scroll";

import aptAEP from "../../public/assets/interiores/aptAEP/aptaep1-_8_.webp";
import aptEDJ from "../../public/assets/interiores/aptEDJ/edj1-_11_.webp";
import aptEEA from "../../public/assets/interiores/aptEEA/apt2-_3_.webp";
import aptRBC from "../../public/assets/interiores/aptRBC/02.webp";
import aptTEA from "../../public/assets/interiores/aptTEP/casa1-_3_.webp";
import aptFEF from "../../public/assets/interiores/aptFEF/fef01-_4_.webp";
import aptMEM from "../../public/assets/interiores/aptMEM/12.webp";

export const HomeInterioes = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery-item">
          <Link href={"/projetos/interiores/apt-aep"}>
            <Image src={aptAEP.src} alt="Imagem 1" width={500} height={300} />
            <div className="text-image">
              <span className="title">APT AEP</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/interiores/apt-edj"}>
            <Image src={aptEDJ.src} alt="Imagem 2" width={500} height={300} />
            <div className="text-image">
              <span className="title">APT EDJ</span>
              <span className="date">2022</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/interiores/apt-eea"}>
            <Image src={aptEEA.src} alt="Imagem 3" width={500} height={300} />
            <div className="text-image">
              <span className="title">APT EEA</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/interiores/apt-rbc"}>
            <Image src={aptRBC.src} alt="Imagem 4" width={500} height={300} />
            <div className="text-image">
              <span className="title">APT RBC</span>
              <span className="date">2022</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/interiores/apt-tep"}>
            <Image src={aptTEA.src} alt="Imagem 5" width={500} height={300} />
            <div className="text-image">
              <span className="title">APT TEP</span>
              <span className="date">2023</span>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link href={"/projetos/interiores/apt-fef"}>
            <Image src={aptFEF.src} alt="Imagem 6" width={500} height={300} />
            <div className="text-image">
              <span className="title">APT FEF</span>
              <span className="date">2019</span>
            </div>
          </Link>
        </div>
      </div>
      {/* Imagens que ocupará 100% da tela */}
      <div className="galleryall">
        <Link href={"/projetos/interiores/casa-mem"}>
          <img src={aptMEM.src} alt="Imagem 7" />
          <div className="text-image">
            <span className="title">CASA MEM</span>
            <span className="date">2023</span>
          </div>
        </Link>
      </div>

      <ScrollTop />
    </>
  );
};
