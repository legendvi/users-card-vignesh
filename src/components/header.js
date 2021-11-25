import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { getUsers } from "../helpers-dispatch/getUser";
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUser = () => {
    if (location.pathname === "/random-users") dispatch(getUsers());
    else navigate(-1);
  };
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark">
      <Container>
        <Navbar.Collapse id="navbarScroll">
          <Navbar.Brand>Random Users</Navbar.Brand>
        </Navbar.Collapse>
        <Button variant="success" onClick={newUser}>
          {location.pathname === "/random-users" ? "Refresh Users" : "Go Back"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
