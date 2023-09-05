import "./Offer.css";

const Offer = () => {
  return (
    <section className="offer-section wrap column" id="offer">
      <div className="column">
        <h2 className="offer-header">Czym zajmuje się nasza firma?</h2>
        <div className="offer-section-container justify-center wrap">
          <div className="service column align-center justify-center">
            <div className="circle"></div>
            Usługa 1<div className="under-text">(nowość)</div>
          </div>
          <div className="service column align-center justify-center">
            Usługa 2
          </div>
          <div className="service column align-center justify-center">
            Usługa 3
          </div>
          <div className="service column align-center justify-center">
            Usługa 4
          </div>
          <div className="service column align-center justify-center">
            Usługa 5
          </div>
          <div className="service column align-center justify-center">
            Usługa 6
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offer;
