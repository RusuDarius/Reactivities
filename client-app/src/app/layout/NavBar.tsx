import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: 10 }}
          ></img>
          Reactivities
        </MenuItem>
        <MenuItem as={NavLink} to="/activities" name="Activities" />
        <MenuItem>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create activity"
          ></Button>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;
