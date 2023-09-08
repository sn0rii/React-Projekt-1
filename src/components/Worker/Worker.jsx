import "./Worker.css";

const Worker = ({ name, department, description, photo }) => {
  return (
    <>
      <div className="description align-center">
        <div className="specialist-info">
          <h4>
            {name} {department}
          </h4>
          <p>{description}</p>
        </div>
        {photo}
      </div>
    </>
  );
};
export default Worker;
