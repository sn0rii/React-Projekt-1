import "./About.css";

import Worker from "./Worker";
import { workers } from "../../data/workers";

const About = () => {
  return (
    <section className="about-section column justify-evenly" id="about">
      <div className="container column">
        <h2 className="about-header">Nasi specialisci</h2>

        {workers.map(({ name, department, description, photo }, index) => (
          <Worker
            key={index}
            name={name}
            department={department}
            description={description}
            photo={photo}
          />
        ))}
      </div>
    </section>
  );
};
export default About;
