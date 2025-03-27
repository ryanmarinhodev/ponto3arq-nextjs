import "./styles.css";
import Link from "next/link";

export default function Contato() {
  const whatsappMessage =
    "Olá, vim pelo site e gostaria de saber mais informações sobre os serviços!";
  const whatsappNumber = "5583991321818";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="container">
      <h1>João Pessoa</h1>
      <p>Av. Silvino Chaves, 360 - Manaíra, João Pessoa - PB, 58038-420</p>
      <p>
        Telefone:
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          +55 (83) 99132-1818
        </a>
      </p>
      <p>
        Email:
        <Link
          legacyBehavior
          href="mailto:contato@ponto3arq.com.br?subject=Contato pelo site&body=Olá, vim pelo site e gostaria de obter mais informações."
        >
          <a>contato@ponto3arq.com.br</a>
        </Link>
      </p>
    </div>
  );
}
