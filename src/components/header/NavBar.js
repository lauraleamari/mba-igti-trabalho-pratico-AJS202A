import { Navbar, Nav, NavDropdown, Button, Form,FormControl } from 'react-bootstrap';

export default function NavBar() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Livros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Form inline>
            <FormControl type="text" placeholder="Busca..." className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}