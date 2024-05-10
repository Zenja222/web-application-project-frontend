import {Container, Nav, Navbar} from "react-bootstrap";
import {ALL_BOOKINGS_VIEW_PATH, ALL_ROOMS_VIEW_PATH} from "../../../routes/Routes";
import {Link} from "react-router-dom";


function INavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className="navbar-brand">Best Booking App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link me-4" to={ALL_BOOKINGS_VIEW_PATH}>Bookings</Link>
                        <Link className="nav-link" to={ALL_ROOMS_VIEW_PATH}>Rooms</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default INavbar;
