import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { useStore } from "../stores/store";

const NavBar = () => {
  const { activityStore } = useStore();

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
            onClick={() => activityStore.openForm()}
          ></Button>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;
