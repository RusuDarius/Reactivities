import {
  Button,
  Container,
  Menu,
  MenuItem,
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

const NavBar = () => {
  const {
    userStore: { user, logout },
  } = useStore();

  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: 10 }}
          ></img>
          Places
        </MenuItem>
        <MenuItem as={NavLink} to="/activities" name="Activities" />
        <MenuItem as={NavLink} to="/errors" name="Errors" />
        <MenuItem>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create activity"
          ></Button>
        </MenuItem>
        <MenuItem position="right">
          <Image
            src={user?.image || "/assets/user.png"}
            avatar
            spaced="right"
          />
          <Dropdown pointing="top left" text={user?.displayName}>
            <DropdownMenu>
              <DropdownItem
                as={Link}
                to={`/profile/${user?.username}`}
                text="My Profile"
                icon="user"
              ></DropdownItem>
              <DropdownItem
                onClick={logout}
                text="Logout"
                icon="power"
              ></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
