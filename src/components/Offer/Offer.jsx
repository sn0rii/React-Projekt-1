import "./Offer.css";
import OfferList from "./OfferList";

const Offer = () => {
  const offers = [
    { title: "Usługa 1", isNew: true },
    { title: "Usługa 2", isNew: false },
    { title: "Usługa 3", isNew: true },
    { title: "Usługa 4", isNew: false },
    { title: "Usługa 5", isNew: false },
    { title: "Usługa 6", isNew: false },
    ,
  ];

  return (
    <section className="offer-section wrap column" id="offer">
      <div className="column">
        <h2 className="offer-header">Czym zajmuje się nasza firma?</h2>
        <div className="offer-section-container justify-center wrap">
          {offers.map((offer, index) => (
            <OfferList key={index} title={offer.title} isNew={offer.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Offer;
