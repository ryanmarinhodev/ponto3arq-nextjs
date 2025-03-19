import casaAT from "../../assets/arquitetura/2-CAPA.webp";

export const HomePage = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 1" />
          <div className="text-image">
            <span className="title">CASA AT</span>
            <span className="date">2023</span>
          </div>
        </div>
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 1" />
          <div className="text-image">
            <span className="title">CASA AT</span>
            <span className="date">2023</span>
          </div>
        </div>
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 1" />
          <div className="text-image">
            <span className="title">CASA AT</span>
            <span className="date">2023</span>
          </div>
        </div>
        <div className="gallery-item">
          <img src={casaAT.src} alt="Imagem 1" />
          <div className="text-image">
            <span className="title">CASA AT</span>
            <span className="date">2023</span>
          </div>
        </div>
      </div>
      {/* Imagens que ocupará 100% da tela */}
      <div className="galeryall">
        <img src={casaAT.src} alt="Imagem 4" />
      </div>
    </>
  );
};
