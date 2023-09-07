import "./About.css";
import Workers from "./Workers";

const About = () => {
  const workers = [
    {
      name: "Imię Nazwisko",
      department: "[dział]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a.",
      photo: <div className="personal-photo"></div>,
    },
    {
      name: "Imię Nazwisko",
      department: "[dział]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a.",
      photo: <div className="personal-photo"></div>,
    },
  ];

  return (
    <section className="about-section column justify-evenly" id="about">
      <div className="container column">
        <h2 className="about-header">Nasi specialisci</h2>

        {workers.map((worker, index) => (
          <Workers
            key={index}
            name={worker.name}
            department={worker.department}
            description={worker.description}
            photo={worker.photo}
          />
        ))}
      </div>
    </section>
  );
};
export default About;
