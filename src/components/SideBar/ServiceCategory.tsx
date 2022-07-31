import React from "react";
import Typography from "@mui/material/Typography";
import { ListItem } from "./SideBar";

import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const ServicesCategory = () => {
  return (
    <>
      <Typography color="text.secondary" fontSize=".8em">
        Services
      </Typography>
      <ListItem>
        <SettingsSystemDaydreamOutlinedIcon />
        System Health
      </ListItem>
      <ListItem>
        <PsychologyOutlinedIcon />
        Logs
      </ListItem>
      <ListItem>
        <SettingsOutlinedIcon />
        Settings
      </ListItem>
    </>
  );
};

export default ServicesCategory;
