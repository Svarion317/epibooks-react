import Container from "react-bootstrap/Container";

function Welcome() {
  return (
    <section className="hero-banner">
      <Container>
        <p className="hero-kicker mb-2">Biblioteca digitale</p>
        <h1 className="hero-title">Scopri il tuo prossimo fantasy</h1>
        <p className="hero-subtitle mb-0">
          Esplora il catalogo, apri i dettagli del libro e leggi i commenti della
          community.
        </p>
      </Container>
    </section>
  );
}

export default Welcome;
