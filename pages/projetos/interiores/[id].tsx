import { Header } from "../../../components/header";
import Lightbox from "yet-another-react-lightbox";
import "../dentroProject.css";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Spinner } from "../../../components/spinner/spinner";
import { ScrollTop } from "../../../components/scroll-top/scroll";
import Image from "next/image";

// Definindo o tipo para o projeto
interface Projeto {
  titulo: string;
  descricao: string;
  imagens: string[];
}

const projetos: Record<string, Projeto> = {
  "apt-aep": {
    titulo: "Casa aep",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/interiores/aptAEP/aptaep1-_1_.webp",
      "/assets/interiores/aptAEP/aptaep1-_2_.webp",
      "/assets/interiores/aptAEP/aptaep1-_3_.webp",
      "/assets/interiores/aptAEP/aptaep1-_4_.webp",
      "/assets/interiores/aptAEP/aptaep1-_5_.webp",
      "/assets/interiores/aptAEP/aptaep1-_6_.webp",
      "/assets/interiores/aptAEP/aptaep1-_7_.webp",
      "/assets/interiores/aptAEP/aptaep1-_8_.webp",
      "/assets/interiores/aptAEP/aptaep1-_9_.webp",
      "/assets/interiores/aptAEP/aptaep1-_10_.webp",
      "/assets/interiores/aptAEP/aptaep1-_11_.webp",
      "/assets/interiores/aptAEP/aptaep1-_12_.webp",
      "/assets/interiores/aptAEP/aptaep1-_13_.webp",
      "/assets/interiores/aptAEP/aptaep1-_14_.webp",
      "/assets/interiores/aptAEP/aptaep1-_15_.webp",
      "/assets/interiores/aptAEP/aptaep1-_16_.webp",
      "/assets/interiores/aptAEP/aptaep1-_17_.webp",
      "/assets/interiores/aptAEP/planta.jpg",
    ],
  },
  "apt-edj": {
    titulo: "Casa EdJ",
    descricao: "Apartamento moderno e sofisticado.",
    imagens: [
      "/assets/interiores/aptEDJ/edj1-_1_.webp",
      "/assets/interiores/aptEDJ/edj1-_2_.webp",
      "/assets/interiores/aptEDJ/edj1-_3_.webp",
      "/assets/interiores/aptEDJ/edj1-_4_.webp",
      "/assets/interiores/aptEDJ/edj1-_5_.webp",
      "/assets/interiores/aptEDJ/edj1-_6_.webp",
      "/assets/interiores/aptEDJ/edj1-_7_.webp",
      "/assets/interiores/aptEDJ/edj1-_8_.webp",
      "/assets/interiores/aptEDJ/edj1-_9_.webp",
      "/assets/interiores/aptEDJ/edj1-_10_.webp",
      "/assets/interiores/aptEDJ/edj1-_11_.webp",
      "/assets/interiores/aptEDJ/edj1-_12_.webp",
      "/assets/interiores/aptEDJ/edj1-_13_.webp",
      "/assets/interiores/aptEDJ/edj1-_14_.webp",
      "/assets/interiores/aptEDJ/edj1-_15_.webp",
      "/assets/interiores/aptEDJ/edj1-_16_.webp",
      "/assets/interiores/aptEDJ/edj1-_17_.webp",
      "/assets/interiores/aptEDJ/edj1-_18_.webp",
      "/assets/interiores/aptEDJ/edj1-_19_.webp",
      "/assets/interiores/aptEDJ/edj1-_20_.webp",
      "/assets/interiores/aptEDJ/edj1-_21_.webp",
      "/assets/interiores/aptEDJ/edj1-_22_.webp",
      "/assets/interiores/aptEDJ/edj1-_23_.webp",
      "/assets/interiores/aptEDJ/edj1-_24_.webp",
      "/assets/interiores/aptEDJ/edj1-_25_.webp",
      "/assets/interiores/aptEDJ/edj1-_26_.webp",
      "/assets/interiores/aptEDJ/edj1-_27_.webp",
      "/assets/interiores/aptEDJ/edj1-_28_.webp",
      "/assets/interiores/aptEDJ/PLANTA BAIXA.jpg",
    ],
  },
  "apt-eea": {
    titulo: "Casa eea",
    descricao: "Apartamento moderno e sofisticado.",
    imagens: [
      "/assets/interiores/aptEEA/apt2-_1_.webp",
      "/assets/interiores/aptEEA/apt2-_2_.webp",
      "/assets/interiores/aptEEA/apt2-_3_.webp",
      "/assets/interiores/aptEEA/apt2-_4_.webp",
      "/assets/interiores/aptEEA/apt2-_5_.webp",
      "/assets/interiores/aptEEA/apt2-_6_.webp",
      "/assets/interiores/aptEEA/apt2-_7_.webp",
      "/assets/interiores/aptEEA/apt2-_8_.webp",
      "/assets/interiores/aptEEA/apt2-_9_.webp",
      "/assets/interiores/aptEEA/apt2-_10_.webp",
      "/assets/interiores/aptEEA/apt2-_11_.webp",
      "/assets/interiores/aptEEA/apt2-_12_.webp",
      "/assets/interiores/aptEEA/apt2-_13_.webp",
      "/assets/interiores/aptEEA/apt2-_14_.webp",
      "/assets/interiores/aptEEA/apt2-_15_.webp",
      "/assets/interiores/aptEEA/apt2-_16_.webp",
      "/assets/interiores/aptEEA/apt2-_17_.webp",
      "/assets/interiores/aptEEA/apt2-_18_.webp",
      "/assets/interiores/aptEEA/apt2-_19_.webp",
      "/assets/interiores/aptEEA/apt2-_20_.webp",
      "/assets/interiores/aptEEA/apt2-_21_.webp",
      "/assets/interiores/aptEEA/apt2-_22_.webp",
      "/assets/interiores/aptEEA/apt2-_23_.webp",
      "/assets/interiores/aptEEA/apt2-_24_.webp",
      "/assets/interiores/aptEEA/apt2-_25_.webp",
      "/assets/interiores/aptEEA/apt2-_26_.webp",
      "/assets/interiores/aptEEA/apt2-_27_.webp",
      "/assets/interiores/aptEEA/apt2-_28_.webp",
      "/assets/interiores/aptEEA/apt2-_29_.webp",
      "/assets/interiores/aptEEA/apt2-_30_.webp",
      "/assets/interiores/aptEEA/apt2-_31_.webp",
      "/assets/interiores/aptEEA/apt2-_32_.webp",
      "/assets/interiores/aptEEA/apt2-_33_.webp",
      "/assets/interiores/aptEEA/apt2-_34_.webp",
      "/assets/interiores/aptEEA/apt2-_35_.webp",
      "/assets/interiores/aptEEA/apt2-_36_.webp",
      "/assets/interiores/aptEEA/apt2-_37_.webp",
      "/assets/interiores/aptEEA/apt2-_38_.webp",
      "/assets/interiores/aptEEA/apt2-_39_.webp",
      "/assets/interiores/aptEEA/apt2-_40_.webp",
      "/assets/interiores/aptEEA/apt2-_41_.webp",
      "/assets/interiores/aptEEA/apt2-_42_.webp",
      "/assets/interiores/aptEEA/apt2-_43_.webp",
      "/assets/interiores/aptEEA/apt2-_44_.webp",
      "/assets/interiores/aptEEA/apt2-_44_.webp", // Repetição de imagem com o mesmo nome
      "/assets/interiores/aptEEA/PLANTA BAIXA.jpg",
    ],
  },

  "apt-rbc": {
    titulo: "Casa aep",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/interiores/aptRBC/01.webp",
      "/assets/interiores/aptRBC/02.webp",
      "/assets/interiores/aptRBC/03.webp",
      "/assets/interiores/aptRBC/04.webp",
      "/assets/interiores/aptRBC/05.webp",
      "/assets/interiores/aptRBC/06.webp",
      "/assets/interiores/aptRBC/07.webp",
      "/assets/interiores/aptRBC/08.webp",
      "/assets/interiores/aptRBC/09.webp",
      "/assets/interiores/aptRBC/10.webp",
      "/assets/interiores/aptRBC/11.webp",
      "/assets/interiores/aptRBC/12.webp",
      "/assets/interiores/aptRBC/13.webp",
      "/assets/interiores/aptRBC/14.webp",
      "/assets/interiores/aptRBC/PLANTA BAIXA.jpg",
    ],
  },
  "apt-tep": {
    titulo: "Casa aep",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/interiores/aptTEP/casa1-_1_.webp",
      "/assets/interiores/aptTEP/casa1-_2_.webp",
      "/assets/interiores/aptTEP/casa1-_3_.webp",
      "/assets/interiores/aptTEP/casa1-_4_.webp",
      "/assets/interiores/aptTEP/casa1-_5_.webp",
      "/assets/interiores/aptTEP/casa1-_6_.webp",
      "/assets/interiores/aptTEP/casa1-_7_.webp",
      "/assets/interiores/aptTEP/casa1-_8_.webp",
      "/assets/interiores/aptTEP/casa1-_9_.webp",
      "/assets/interiores/aptTEP/casa1-_10_.webp",
      "/assets/interiores/aptTEP/casa1-_11_.webp",
      "/assets/interiores/aptTEP/casa1-_12_.webp",
      "/assets/interiores/aptTEP/casa1-_13_.webp",
      "/assets/interiores/aptTEP/casa1-_14_.webp",
      "/assets/interiores/aptTEP/casa1-_15_.webp",
      "/assets/interiores/aptTEP/casa1-_16_.webp",
      "/assets/interiores/aptTEP/casa1-_17_.webp",
      "/assets/interiores/aptTEP/casa1-_18_.webp",
      "/assets/interiores/aptTEP/casa1-_19_.webp",
      "/assets/interiores/aptTEP/casa1-_20_.webp",
      "/assets/interiores/aptTEP/casa1-_21_.webp",
      "/assets/interiores/aptTEP/casa1-_22_.webp",
      "/assets/interiores/aptTEP/casa1-_23_.webp",
      "/assets/interiores/aptTEP/casa1-_24_.webp",
      "/assets/interiores/aptTEP/casa1-_25_.webp",
      "/assets/interiores/aptTEP/casa1-_26_.webp",
      "/assets/interiores/aptTEP/casa1-_27_.webp",
      "/assets/interiores/aptTEP/casa1-_28_.webp",
      "/assets/interiores/aptTEP/casa1-_29_.webp",
      "/assets/interiores/aptTEP/casa1-_30_.webp",
      "/assets/interiores/aptTEP/casa1-_31_.webp",
      "/assets/interiores/aptTEP/casa1-_32_.webp",
      "/assets/interiores/aptTEP/casa1-_33_.webp",
      "/assets/interiores/aptTEP/casa1-_34_.webp",
      "/assets/interiores/aptTEP/casa1-_35_.webp",
      "/assets/interiores/aptTEP/casa1-_36_.webp",
      "/assets/interiores/aptTEP/casa1-_37_.webp",
      "/assets/interiores/aptTEP/casa1-_38_.webp",
      "/assets/interiores/aptTEP/planta.jpg",
    ],
  },

  "apt-fef": {
    titulo: "Casa aep",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/interiores/aptFEF/fef01-_1_.webp",
      "/assets/interiores/aptFEF/fef01-_2_.webp",
      "/assets/interiores/aptFEF/fef01-_3_.webp",
      "/assets/interiores/aptFEF/fef01-_4_.webp",
      "/assets/interiores/aptFEF/fef01-_5_.webp",
      "/assets/interiores/aptFEF/fef01-_6_.webp",
      "/assets/interiores/aptFEF/fef01-_7_.webp",
      "/assets/interiores/aptFEF/fef01-_8_.webp",
      "/assets/interiores/aptFEF/fef01-_9_.webp",
      "/assets/interiores/aptFEF/fef01-_10_.webp",
      "/assets/interiores/aptFEF/fef01-_11_.webp",
      "/assets/interiores/aptFEF/fef01-_12_.webp",
      "/assets/interiores/aptFEF/fef01-_13_.webp",
      "/assets/interiores/aptFEF/fef01-_14_.webp",
      "/assets/interiores/aptFEF/fef01-_15_.webp",
      "/assets/interiores/aptFEF/fef01-_16_.webp",
      "/assets/interiores/aptFEF/fef01-_17_.webp",
      "/assets/interiores/aptFEF/fef01-_18_.webp",
      "/assets/interiores/aptFEF/fef01-_19_.webp",
      "/assets/interiores/aptFEF/fef01-_20_.webp",
      "/assets/interiores/aptFEF/fef01-_21_.webp",
      "/assets/interiores/aptFEF/fef01-_22_.webp",
      "/assets/interiores/aptFEF/fef01-_23_.webp",
      "/assets/interiores/aptFEF/fef01-_24_.webp",
      "/assets/interiores/aptFEF/fef01-_25_.webp",
      "/assets/interiores/aptFEF/fef01-_26_.webp",
      "/assets/interiores/aptFEF/planta.jpg",
    ],
  },
  "casa-mem": {
    titulo: "Casa aep",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/interiores/aptMEM/A.webp",
      "/assets/interiores/aptMEM/B.webp",
      "/assets/interiores/aptMEM/C.webp",
      "/assets/interiores/aptMEM/D.webp",
      "/assets/interiores/aptMEM/E.webp",
      "/assets/interiores/aptMEM/F.webp",
      "/assets/interiores/aptMEM/G.webp",
      "/assets/interiores/aptMEM/H.webp",
      "/assets/interiores/aptMEM/I.webp",
      "/assets/interiores/aptMEM/J.webp",
      "/assets/interiores/aptMEM/K.webp",
      "/assets/interiores/aptMEM/L.webp",
      "/assets/interiores/aptMEM/M.webp",
      "/assets/interiores/aptMEM/O.webp",
      "/assets/interiores/aptMEM/P.webp",
      "/assets/interiores/aptMEM/Q.webp",
    ],
  },
};

export default function Projeto({ projeto }: { projeto: Projeto | null }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
