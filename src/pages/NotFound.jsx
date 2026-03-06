import Container from "react-bootstrap/Container";

function NotFound() {
  return (
    <Container className="my-5 text-center">
      <h2>Pagina non trovata</h2>
      <p className="text-secondary">Controlla l'indirizzo oppure torna alla home.</p>
    </Container>
  );
}

export default NotFound;
