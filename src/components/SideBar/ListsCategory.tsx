import Typography from "@mui/material/Typography";
import { ListItem } from "./SideBar";
import React from "react";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const ListsCategory = () => {
  return (
    <>
      <Typography color="text.secondary" fontSize=".8em">
        Lists
      </Typography>

      <ListItem>
        <PersonOutlineIcon />
        Users
      </ListItem>
      <ListItem>
        <StoreIcon />
        Products
      </ListItem>
      <ListItem>
        <PaymentIcon />
        Orders
      </ListItem>
      <ListItem>
        <LocalShippingIcon />
        Delivery
      </ListItem>
    </>
  );
};

export default ListsCategory;
