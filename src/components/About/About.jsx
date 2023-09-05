import "./About.css";

const About = () => {
  return (
    <section className="about-section column justify-evenly" id="about">
      <div className="container column">
        <h2 className="about-header">Nasi specialisci</h2>
        <div className="description align-center">
          <div className="specialist-info">
            <h4>Imię Nazwisko [ dział ]</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              massa et lacus egestas cursus a non magna. Fusce scelerisque
              blandit nunc, id malesuada ex lobortis a.
            </p>
          </div>
          <div className="personal-photo"></div>
        </div>
        <div className="description align-center">
          <div className="specialist-info">
            <h4>Imię Nazwisko [ dział ]</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              massa et lacus egestas cursus a non magna. Fusce scelerisque
              blandit nunc, id malesuada ex lobortis a.
            </p>
          </div>
          <div className="personal-photo"></div>
        </div>
      </div>
    </section>
  );
};
export default About;
