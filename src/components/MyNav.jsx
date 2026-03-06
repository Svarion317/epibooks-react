import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function EpicNav({ searchText, setSearchText }) {
  return (
    <Navbar expand="lg" className="site-nav py-3">
      <Container>
        <Navbar.Brand href="/" className="brand-mark">
          Epibooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-row">
            <Nav.Link href="/" className="nav-pill">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav-pill">
              About
            </Nav.Link>
            <Nav.Link href="#" className="nav-pill">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="search-wrap">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Cerca un libro per titolo..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default EpicNav;
