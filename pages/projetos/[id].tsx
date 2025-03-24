import { Header } from "../../components/header";
import Lightbox from "yet-another-react-lightbox";
import "./dentroProject.css";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Spinner } from "../../components/spinner/spinner";
import { ScrollTop } from "../../components/scroll-top/scroll";
import Image from "next/image";

const projetos = {
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
    imagens: ["/assets/arquitetura/casaGlc/glc1-_1__1.webp"],
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
