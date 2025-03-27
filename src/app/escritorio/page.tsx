import Image from "next/image";
import ImagemGR from "../../../public/imageGR.jpg";
import "./styles.css";

export default function Escritorio() {
  return (
    <div className="container">
      <Image src={ImagemGR} alt="Imagem" width={500} height={300} />
      <span>O ESCRITÓRIO</span>
      <p>
        - PONTO3 ARQUITETURA por Gesiel Soares e Raphael Barbosa, desde 2013. Em
        seus projetos, as linhas retas e curvas se equilibram de forma sutil e
        se harmonizam através da matéria-prima de bases neutras, com um
        resultado atemporal e sofisticado. “Buscamos constantemente superar
        expectativas, criando ambientes que reflitam a personalidade e as
        necessidades de nossos clientes”. Da estação de trabalho do duo emergem
        residenciais, comerciais e interiores que transbordam para todo o
        território nacional. Acreditam que a arquitetura vai além de criar
        estruturas físicas, é a arte de transformar espaços em lugares
        significativos e cheios de propósito, trazendo aos seus projetos
        inovação, tecnologia e avanço.
      </p>
    </div>
  );
}
