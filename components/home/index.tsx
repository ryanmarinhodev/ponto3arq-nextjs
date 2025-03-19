import casaAT from "../../assets/arquitetura/2-CAPA.webp";

export const HomePage = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 1" />
        </div>
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 2" />
        </div>
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 3" />
        </div>
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 4" />
        </div>
      </div>

      {/* Imagens que ocupará 100% da tela */}
      <div className="galeryall">
        <img src={casaAT.src} alt="Imagem 4" />
      </div>
    </>
  );
};
