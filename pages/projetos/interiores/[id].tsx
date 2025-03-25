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
    titulo: "Casa AT",
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
