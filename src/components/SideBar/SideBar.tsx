import React from "react";
import { styled } from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Typography from "@mui/material/Typography";
import ListsCategory from "./ListsCategory";
import UsefullCategory from "./UsefullCategory";
import ServicesCategory from "./ServiceCategory";
import UserCategory from "./UserCategory";

///////////////////////////////////////////////
// styles
///////////////////////////////////////////////

const Container = styled("main")`
  display: flex;
  min-height: 100vh;
`;

const ContentWrapper = styled("section")`
  flex: 4;
`;

const SidebarWrapper = styled("article")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Top = styled("div")`
  display: grid;
  place-items: center;
  height: 3.125rem;

  span {
    font-size: 1.25rem;
    font-weight: bold;
    color: #6439ff;
  }
`;
const Center = styled("div")`
  padding-left: 0.5rem;
`;
const Bottom = styled("div")`
  margin-top: auto;
`;

const List = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ListItem = styled("li")`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ece8ff;
  }
`;

export const ListLink = styled(Link)`
  display: flex;
  gap: 0.5em;
  text-decoration: none;
  color: #6439ff;
`;

const MainCategory = () => (
  <>
    <Typography color="text.secondary" fontSize=".8em">
      Main
    </Typography>
    <ListItem>
      <ListLink to="/">
        <DashboardIcon />
        Dashboard
      </ListLink>
    </ListItem>
  </>
);

///////////////////////////////////////////////////

const SideBar = () => {
  return (
    <Container>
      <SidebarWrapper>
        <Top>
          <span>Admin</span>
        </Top>

        <Divider />

        <Center>
          <List>
            <MainCategory />
            <ListsCategory />
            <UsefullCategory />
            <ServicesCategory />
            <UserCategory />
          </List>
        </Center>

        <Bottom>Bottom</Bottom>
      </SidebarWrapper>

      <Divider orientation="vertical" flexItem />

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default SideBar;
