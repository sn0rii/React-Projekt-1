import "./Offer.css";
import OfferList from "./OfferList";
import { offers } from "../../data/offers";

const Offer = () => {
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
