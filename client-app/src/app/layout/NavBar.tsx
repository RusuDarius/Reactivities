import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface NavbarProps {
  openForm: () => void;
}

const NavBar = ({ openForm }: NavbarProps) => {
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
          <Button
            positive
            content="Create activity"
            onClick={() => openForm()}
          ></Button>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;
