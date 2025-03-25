import { Header } from "../../components/header";
import Lightbox from "yet-another-react-lightbox";
import "./dentroProject.css";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect } from "react";
import { Spinner } from "../../components/spinner/spinner";
import { ScrollTop } from "../../components/scroll-top/scroll";
import Image from "next/image";

// Definindo o tipo para o projeto
interface Projeto {
  titulo: string;
  descricao: string;
  imagens: string[];
}

// Dados dos projetos
const projetos: Record<string, Projeto> = {
  "casa-at": {
    titulo: "Casa AT",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/arquitetura/casaAt/1.webp",
      "/assets/arquitetura/casaAt/2-CAPA.webp",
      "/assets/arquitetura/casaAt/3.webp",
      "/assets/arquitetura/casaAt/4.webp",
      "/assets/arquitetura/casaAt/planta.jpg",
    ],
  },
  "casa-ehe": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaEhe/01.webp",
      "/assets/arquitetura/casaEhe/02.webp",
      "/assets/arquitetura/casaEhe/03.webp",
      "/assets/arquitetura/casaEhe/04.webp",
      "/assets/arquitetura/casaEhe/05.webp",
      "/assets/arquitetura/casaEhe/06.webp",
      "/assets/arquitetura/casaEhe/planta1.jpg",
      "/assets/arquitetura/casaEhe/planta2.jpg",
      "/assets/arquitetura/casaEhe/planta3.jpg",
    ],
  },
  "casa-fel": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaFel/1.webp",
      "/assets/arquitetura/casaFel/2.webp",
      "/assets/arquitetura/casaFel/3.webp",
      "/assets/arquitetura/casaFel/4.webp",
      "/assets/arquitetura/casaFel/5.webp",
      "/assets/arquitetura/casaFel/6-planta1.jpg",
      "/assets/arquitetura/casaFel/07-planta2.jpg",
      "/assets/arquitetura/casaFel/08-planta3.jpg",
    ],
  },
  "casa-glc": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaGlc/glc1-_1_.webp",
      "/assets/arquitetura/casaGlc/glc1-_2_.webp",
      "/assets/arquitetura/casaGlc/glc1-_3_.webp",
      "/assets/arquitetura/casaGlc/glc1-_4_.webp",
      "/assets/arquitetura/casaGlc/glc1-_5_.webp",
      "/assets/arquitetura/casaGlc/glc1-_6_.webp",
      "/assets/arquitetura/casaGlc/glc1-_7_.webp",
      "/assets/arquitetura/casaGlc/glc1-_8_.webp",
      "/assets/arquitetura/casaGlc/glc1-_9_.webp",
      "/assets/arquitetura/casaGlc/glc1-_10_.webp",
      "/assets/arquitetura/casaGlc/glc1-_11_.webp",
      "/assets/arquitetura/casaGlc/glc1-_12_.webp",
      "/assets/arquitetura/casaGlc/glc1-_13_.webp",
      "/assets/arquitetura/casaGlc/glc1-_14_.webp",
      "/assets/arquitetura/casaGlc/glc1-_15_.webp",
      "/assets/arquitetura/casaGlc/glc1-_16_.webp",
      "/assets/arquitetura/casaGlc/glc1-_17_.webp",
      "/assets/arquitetura/casaGlc/glc1-_18_.webp",
      "/assets/arquitetura/casaGlc/glc1-_19_.webp",
      "/assets/arquitetura/casaGlc/glc1-_20_.webp",
      "/assets/arquitetura/casaGlc/glc1-_21_.webp",
      "/assets/arquitetura/casaGlc/glc1-_22_.webp",
      "/assets/arquitetura/casaGlc/glc1-_23_.webp",
      "/assets/arquitetura/casaGlc/glc1-_24_.webp",
      "/assets/arquitetura/casaGlc/glc1-_25_.webp",
      "/assets/arquitetura/casaGlc/plantabaixa.jpg",
      "/assets/arquitetura/casaGlc/plantaterreo.jpg",
    ],
  },
  "casa-ieg": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaIEG/casaieg1-_1_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_2_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_3_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_4_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_5_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_6_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_7_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_8_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_9_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_10_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_11_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_12_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_13_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_14_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_15_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_16_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_17_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_18_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_19_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_20_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_21_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_22_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_23_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_24_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_25_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_26_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_27_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_28_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_29_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_30_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_31_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_32_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_33_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_34_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_35_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_36_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_37_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_38_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_39_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_40_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_41_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_42_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_43_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_44_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_45_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_46_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_47_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_48_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_49_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_50_.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_51__1.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_52__1.webp",
      "/assets/arquitetura/casaIEG/casaieg1-_53__2.webp",
    ],
  },
  "casa-lcf": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaLCF/01.webp",
      "/assets/arquitetura/casaLCF/02-capa.webp",
      "/assets/arquitetura/casaLCF/03.webp",
      "/assets/arquitetura/casaLCF/plantabaixa-pavimento.jpg",
      "/assets/arquitetura/casaLCF/plantabaixa-terreo.jpg",
    ],
  },
  "casa-tee": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaTEE/01.webp",
      "/assets/arquitetura/casaTEE/02.webp",
      "/assets/arquitetura/casaTEE/03.webp",
      "/assets/arquitetura/casaTEE/04.webp",
      "/assets/arquitetura/casaTEE/05.webp",
    ],
  },
  "casa-sqc": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaSQC/01.webp",
      "/assets/arquitetura/casaSQC/02.webp",
      "/assets/arquitetura/casaSQC/03.webp",
      "/assets/arquitetura/casaSQC/04.webp",
      "/assets/arquitetura/casaSQC/05.webp",
      "/assets/arquitetura/casaSQC/capasqc.webp",
    ],
  },
  "casa-md": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaMD/01.webp",
      "/assets/arquitetura/casaMD/02.webp",
      "/assets/arquitetura/casaMD/04.webp",
      "/assets/arquitetura/casaMD/05.webp",
      "/assets/arquitetura/casaMD/06-.webp",
      "/assets/arquitetura/casaMD/06.webp",
      "/assets/arquitetura/casaMD/07.webp",
      "/assets/arquitetura/casaMD/08.webp",
      "/assets/arquitetura/casaMD/09.webp",
      "/assets/arquitetura/casaMD/-09.webp",
      "/assets/arquitetura/casaMD/10.webp",
      "/assets/arquitetura/casaMD/11.webp",
      "/assets/arquitetura/casaMD/--12.webp",
      "/assets/arquitetura/casaMD/-12.webp",
      "/assets/arquitetura/casaMD/12.webp",
      "/assets/arquitetura/casaMD/13.webp",
      "/assets/arquitetura/casaMD/15.webp",
      "/assets/arquitetura/casaMD/16.webp",
      "/assets/arquitetura/casaMD/17.webp",
      "/assets/arquitetura/casaMD/18.webp",
      "/assets/arquitetura/casaMD/19.webp",
      "/assets/arquitetura/casaMD/-23-capa.webp",
      "/assets/arquitetura/casaMD/24.webp",
      "/assets/arquitetura/casaMD/25.webp",
      "/assets/arquitetura/casaMD/26.webp",
      "/assets/arquitetura/casaMD/27.webp",
      "/assets/arquitetura/casaMD/28.webp",
      "/assets/arquitetura/casaMD/29.webp",
      "/assets/arquitetura/casaMD/29_1.webp",
      "/assets/arquitetura/casaMD/30.webp",
      "/assets/arquitetura/casaMD/31.webp",
      "/assets/arquitetura/casaMD/32.webp",
      "/assets/arquitetura/casaMD/33.webp",
      "/assets/arquitetura/casaMD/34.webp",
      "/assets/arquitetura/casaMD/35.webp",
      "/assets/arquitetura/casaMD/36.webp",
      "/assets/arquitetura/casaMD/37.webp",
      "/assets/arquitetura/casaMD/38.webp",
      "/assets/arquitetura/casaMD/39.webp",
    ],
  },
  "apt-aep": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/casaSQC/01.webp",
      "/assets/arquitetura/casaSQC/02.webp",
      "/assets/arquitetura/casaSQC/03.webp",
      "/assets/arquitetura/casaSQC/04.webp",
      "/assets/arquitetura/casaSQC/05.webp",
      "/assets/arquitetura/casaSQC/capasqc.webp",
    ],
  },
};

export default function Projeto({ projeto }: { projeto: Projeto | null }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Atualizado para não usar setTimeout
  }, []);

  if (!projeto) return <h1>Projeto não encontrado</h1>;

  const abrirImagem = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <div className="projeto-container">
        <div className="image-gallery" onClick={() => setOpen(true)}>
          {projeto.imagens.map((img: string, index: number) => (
            <Image
              className="projeto-imagem"
              key={index}
              src={img}
              alt={`Imagem ${index + 1}`}
              width={700}
              height={300}
              onClick={() => abrirImagem(index)}
            />
          ))}

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={projeto.imagens.map((src: string) => ({ src }))}
            index={index}
          />
        </div>
      </div>
      <ScrollTop />
    </>
  );
}

// gerando páginas no build
export async function getStaticPaths() {
  const paths = Object.keys(projetos).map((id) => ({
    params: { id },
  }));

  return { paths, fallback: "blocking" }; //garantir que a página esteja totalmente gerada
}

// Recupera os dados do projeto com base no id
export async function getStaticProps({ params }: { params: { id: string } }) {
  const projeto = projetos[params.id as keyof typeof projetos] || null;

  return { props: { projeto } };
}
