import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer align-center justify-evenly">
      <div className="footer-container align-center justify-between">
        <div className="footer-text">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <div className="footer-paragraph">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
