const Nav = () => {
  return (
    <section className="first-section">
      <div className="background-shade"></div>
      <div className="nav-bar-background"></div>
      <div className="container column">
        <nav className="nav-bar align-center justify-between">
          <div className="nav-bar-text">moja firma</div>
          <ul className="nav-bar-text hidden">
            <li>
              <a href="#about">o nas</a>
            </li>
            <li>
              <a href="#offer">oferta</a>
            </li>
            <li className="not-allowed">kontakt</li>
          </ul>
        </nav>
        <div className="first-section-text column">
          <h1 className="header">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="first-section-paragraph">
            Nie wierz nam na słowo - sprawdź
          </p>
          <a href="#offer" className="btn align-center justify-center">
            oferta
          </a>
        </div>
      </div>
    </section>
  );
};
export default Nav;
