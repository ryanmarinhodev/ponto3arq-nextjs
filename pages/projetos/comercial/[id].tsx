import { Header } from "../../../components/header";
import Lightbox from "yet-another-react-lightbox";
import "../dentroProject.css";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect } from "react";
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
  "clinica-sa": {
    titulo: "Clínica",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/comercial/clinicaSA/01-CAPA.png",
      "/assets/comercial/clinicaSA/02.png",
      "/assets/comercial/clinicaSA/03.png",
      "/assets/comercial/clinicaSA/04.png",
      "/assets/comercial/clinicaSA/PLANTABAIXA-PAVIMENTOSUPERIOR.jpg",
      "/assets/comercial/clinicaSA/PLANTABAIXA-TÉRREO.jpg",
    ],
  },
  "mostra-19": {
    titulo: "Clínica",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/comercial/mostra19/mostra01-_1_.webp",
      "/assets/comercial/mostra19/mostra01-_2_.webp",
      "/assets/comercial/mostra19/mostra01-_3_.webp",
      "/assets/comercial/mostra19/mostra01-_4_.webp",
      "/assets/comercial/mostra19/mostra01-_5_.webp",
      "/assets/comercial/mostra19/mostra01-_6_.webp",
      "/assets/comercial/mostra19/mostra01-_7_.webp",
      "/assets/comercial/mostra19/mostra01-_8_.webp",
      "/assets/comercial/mostra19/mostra01-_9_.webp",
      "/assets/comercial/mostra19/mostra01-_10_.webp",
      "/assets/comercial/mostra19/mostra01-_11_.webp",
      "/assets/comercial/mostra19/mostra01-_12_.webp",
      "/assets/comercial/mostra19/PLANTA-BAIXA.jpg",
    ],
  },
  "mostra-22": {
    titulo: "Clínica",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/comercial/mostra22/mostra01-_1_.webp",
      "/assets/comercial/mostra22/mostra01-_2_.webp",
      "/assets/comercial/mostra22/mostra01-_3_.webp",
      "/assets/comercial/mostra22/mostra01-_4_.webp",
      "/assets/comercial/mostra22/mostra01-_5_.webp",
      "/assets/comercial/mostra22/mostra01-_6_.webp",
      "/assets/comercial/mostra22/mostra01-_7_.webp",
      "/assets/comercial/mostra22/mostra01-_8_.webp",
      "/assets/comercial/mostra22/mostra01-_9_.webp",
      "/assets/comercial/mostra22/mostra01-_10_.webp",
      "/assets/comercial/mostra22/mostra01-_11_.webp",
      "/assets/comercial/mostra22/mostra01-_12_.webp",
      "/assets/comercial/mostra22/mostra01-_13_.webp",
      "/assets/comercial/mostra22/mostra01-_14_.webp",
      "/assets/comercial/mostra22/mostra01-_15_.webp",
      "/assets/comercial/mostra22/mostra01-_16_.webp",
      "/assets/comercial/mostra22/mostra01-_17_.webp",
      "/assets/comercial/mostra22/mostra01-_18_.webp",
      "/assets/comercial/mostra22/mostra01-_19_.webp",
    ],
  },
  "mostra-23": {
    titulo: "Clínica",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/comercial/mostra23/mostra1-_1_.webp",
      "/assets/comercial/mostra23/mostra1-_2_.webp",
      "/assets/comercial/mostra23/mostra1-_3_.webp",
      "/assets/comercial/mostra23/mostra1-_4_.webp",
      "/assets/comercial/mostra23/mostra1-_5_.webp",
      "/assets/comercial/mostra23/mostra1-_6_.webp",
      "/assets/comercial/mostra23/mostra1-_7_.webp",
      "/assets/comercial/mostra23/mostra1-_8_.webp",
      "/assets/comercial/mostra23/mostra1-_9_.webp",
      "/assets/comercial/mostra23/mostra1-_10_.webp",
      "/assets/comercial/mostra23/mostra1-_11_.webp",
      "/assets/comercial/mostra23/mostra1-_12_.webp",
      "/assets/comercial/mostra23/mostra1-_13_.webp",
      "/assets/comercial/mostra23/mostra1-_14_.webp",
      "/assets/comercial/mostra23/mostra1-_15_.webp",
      "/assets/comercial/mostra23/mostra1-_16_.webp",
      "/assets/comercial/mostra23/mostra1-_17_.webp",
      "/assets/comercial/mostra23/planta.jpg",
    ],
  },
  semog: {
    titulo: "Clínica",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/comercial/semog/01.webp",
      "/assets/comercial/semog/02.webp",
      "/assets/comercial/semog/03.webp",
      "/assets/comercial/semog/04.webp",
      "/assets/comercial/semog/PLANTA-BAIXA.jpg",
    ],
  },
  "mostra-24": {
    titulo: "Clínica",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/comercial/mostra24/01.webp",
      "/assets/comercial/mostra24/02.webp",
      "/assets/comercial/mostra24/03.webp",
      "/assets/comercial/mostra24/04.webp",
      "/assets/comercial/mostra24/05.webp",
      "/assets/comercial/mostra24/06.webp",
      "/assets/comercial/mostra24/07.webp",
      "/assets/comercial/mostra24/08.webp",
      "/assets/comercial/mostra24/09.webp",
      "/assets/comercial/mostra24/10.webp",
      "/assets/comercial/mostra24/PLANTA-BAIXA.jpg",
    ],
  },
  domus: {
    titulo: "Clínica",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [
      "/assets/comercial/domus/02.webp",
      "/assets/comercial/domus/03.webp",
      "/assets/comercial/domus/04.webp",
      "/assets/comercial/domus/05.webp",
      "/assets/comercial/domus/06.webp",
      "/assets/comercial/domus/07.webp",
      "/assets/comercial/domus/08.webp",
      "/assets/comercial/domus/09.webp",
      "/assets/comercial/domus/10.webp",
      "/assets/comercial/domus/11.webp",
      "/assets/comercial/domus/12.webp",
      "/assets/comercial/domus/13.webp",
      "/assets/comercial/domus/15.webp",
      "/assets/comercial/domus/17.webp",
      "/assets/comercial/domus/18.webp",
      "/assets/comercial/domus/19.webp",
      "/assets/comercial/domus/20.webp",
      "/assets/comercial/domus/21.webp",
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
