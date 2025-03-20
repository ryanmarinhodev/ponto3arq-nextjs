import { Header } from "../../components/header";
import Image2 from "../../assets/arquitetura/3.webp";
import Image3 from "../../assets/06.webp";
import "./dentroProject.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projetos = {
  "casa-at": {
    titulo: "Casa AT",
    descricao: "Uma casa moderna e sofisticada.",
    imagens: [Image2.src, Image3.src, Image2.src],
  },
  "casa-moderna": {
    titulo: "Casa Moderna",
    descricao: "Minimalismo e conforto em um só lugar.",
    imagens: [
      "/assets/arquitetura/3.webp",
      "/assets/arquitetura/2-CAPA.webp",
      "/assets/arquitetura/3.webp",
    ],
  },
};

export default function Projeto({ projeto }: { projeto: any }) {
  if (!projeto) return <h1>Projeto não encontrado</h1>;

  return (
    <>
      <Header />
      <div className="projeto-container">
        <div className="image-gallery">
          {projeto.imagens.map((img: string, index: number) => (
            <img
              className="projeto-imagem"
              key={index}
              src={img}
              alt={`Imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Gera as páginas estaticamente no build
export async function getStaticPaths() {
  const paths = Object.keys(projetos).map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const projeto = projetos[params.id as keyof typeof projetos] || null;

  return { props: { projeto } };
}
