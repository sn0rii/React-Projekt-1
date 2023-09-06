import "./Offer.css";
import OfferList from "./OfferList";

const Offer = () => {
  const offers = [
    { title: "Usługa 1", isNew: true },
    { title: "Usługa 2", isNew: false },
    { title: "Usługa 3", isNew: false },
    { title: "Usługa 4", isNew: true },
    { title: "Usługa 5", isNew: false },
    { title: "Usługa 6", isNew: true },
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

//  <section className="offer-section wrap column" id="offer">
//       <div className="column">
//         <h2 className="offer-header">Czym zajmuje się nasza firma?</h2>
//         <div className="offer-section-container justify-center wrap">
//           <div className="service column align-center justify-center">
//             <div className="circle"></div>
//             Usługa 1<div className="under-text">(nowość)</div>
//           </div>
//           <div className="service column align-center justify-center">
//             Usługa 2
//           </div>
//           <div className="service column align-center justify-center">
//             Usługa 3
//           </div>
//           <div className="service column align-center justify-center">
//             Usługa 4
//           </div>
//           <div className="service column align-center justify-center">
//             Usługa 5
//           </div>
//           <div className="service column align-center justify-center">
//             Usługa 6
//           </div>
//         </div>
//       </div>
//     </section>
