import React from "react";
import Typography from "@mui/material/Typography";
import { ListItem } from "./SideBar";

import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const UsefullCategory = () => {
  return (
    <>
      <Typography color="text.secondary" fontSize=".8em">
        Usefull
      </Typography>
      <ListItem>
        <InsertChartIcon />
        Stats
      </ListItem>
      <ListItem>
        <NotificationsNoneOutlinedIcon />
        Notifications
      </ListItem>
    </>
  );
};

export default UsefullCategory;
