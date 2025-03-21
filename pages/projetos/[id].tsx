import { Header } from "../../components/header";
import Image2 from "../../assets/arquitetura/3.webp";
import Image3 from "../../assets/06.webp";
import Lightbox from "yet-another-react-lightbox";
import "./dentroProject.css";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Spinner } from "../../components/spinner/spinner";

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
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!projeto) return <h1>Projeto não encontrado</h1>;

  const abrirImagem = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <Header />
      <div className="projeto-container">
        <div className="image-gallery" onClick={() => setOpen(true)}>
          {projeto.imagens.map((img: string, index: number) => (
            <img
              className="projeto-imagem"
              key={index}
              src={img}
              alt={`Imagem ${index + 1}`}
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
