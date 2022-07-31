import React from "react";
import Typography from "@mui/material/Typography";
import { ListItem } from "./SideBar";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const UserCategory = () => {
  return (
    <>
      <Typography color="text.secondary" fontSize=".8em">
        User
      </Typography>
      <ListItem>
        <AccountCircleOutlinedIcon />
        Profile
      </ListItem>
      <ListItem>
        <LogoutOutlinedIcon />
        Logout
      </ListItem>
    </>
  );
};

export default UserCategory;
