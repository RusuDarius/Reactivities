import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: 10 }}
          ></img>
          Reactivities
        </MenuItem>
        <MenuItem name="Activities" />
        <MenuItem>
          <Button positive content="Create activity"></Button>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;
