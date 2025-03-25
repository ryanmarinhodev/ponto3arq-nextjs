import Image from "next/image";
import Link from "next/link";
import { ScrollTop } from "../scroll-top/scroll";

import aptAEP from "../../public/assets/interiores/aptAEP/aptaep1-_8_.webp";
import aptEDJ from "../../public/assets/interiores/aptEDJ/edj1-_11_.webp";

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
            <Image src={aptEDJ.src} alt="Imagem 1" width={500} height={300} />
            <div className="text-image">
              <span className="title">APT EDJ</span>
              <span className="date">2022</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Imagens que ocupará 100% da tela */}
      {/* <div className="galleryall">
        <Link href={"/projetos/casa-md"}>
          <img src={casaMD.src} alt="Imagem 4" />
          <div className="text-image">
            <span className="title">CASA MD</span>
            <span className="date">2023</span>
          </div>
        </Link>
      </div> */}

      <ScrollTop />
    </>
  );
};
