import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Button, CardGroup } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mon Projet React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#features">Fonctionnalités</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="App">
        <header className="App-header">
          <h1>Bienvenue dans mon application React</h1>
        </header>

        <CardGroup>
  <Card>
    <Card.Img variant="top" src={require('./image1.jpeg').default} />
    <Card.Body>
      <Card.Title>Carte 1</Card.Title>
      <Card.Text>
        Description de la carte 1.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={require('./image2.jpeg').default} />
    <Card.Body>
      <Card.Title>Carte 2</Card.Title>
      <Card.Text>
        Description de la carte 2.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={require('./image3.jpeg').default} />
    <Card.Body>
      <Card.Title>Carte 3</Card.Title>
      <Card.Text>
        Description de la carte 3.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

        <Button variant="primary">Mon Bouton</Button>
      </div>
    </>
  );
}

export default App;
