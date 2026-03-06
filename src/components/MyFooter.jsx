function MyFooter() {
  return (
    <footer className="site-footer mt-5">
      <div className="container">
        <div className="row g-4 footer-top">
          <div className="col-12 col-md-4">
            <h3 className="footer-brand mb-2">Epibooks</h3>
            <p className="footer-copy mb-3">
              Il tuo e-shop di libri fantasy, romance, horror e storia.
            </p>
            <p className="footer-copy mb-0">Spedizione gratuita da 29,90€</p>
          </div>

          <div className="col-6 col-md-2">
            <h4 className="footer-title">Catalogo</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Novita</a>
              </li>
              <li>
                <a href="#">Best seller</a>
              </li>
              <li>
                <a href="#">Offerte</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h4 className="footer-title">Assistenza</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Contatti</a>
              </li>
              <li>
                <a href="#">Resi e rimborsi</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-copy">Sconti e consigli di lettura ogni settimana.</p>
            <div className="footer-newsletter">
              <input type="email" className="form-control form-control-sm" placeholder="Email" />
              <button type="button" className="btn btn-sm footer-newsletter-btn">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mb-0">Epibooks 2026</p>
          <p className="mb-0">Pagamenti sicuri · Visa · Mastercard · PayPal</p>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
