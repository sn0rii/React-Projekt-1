const OfferList = ({ title, isNew }) => {
  return (
    <>
      <div className={"service column align-center justify-center"}>
        {title}
        {isNew ? <div className="under-text">"nowość"</div> : ""}
        {isNew ? <div className="circle"></div> : ""}
      </div>
    </>
  );
};
export default OfferList;
