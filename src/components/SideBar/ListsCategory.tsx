import Typography from "@mui/material/Typography";
import { ListItem } from "./SideBar";
import React from "react";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { ListLink } from "./SideBar";

const ListsCategory = () => {
  return (
    <>
      <Typography color="text.secondary" fontSize=".8em">
        Lists
      </Typography>

      <ListItem>
        <ListLink to="/users">
          <PersonOutlineIcon />
          Users
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/products">
          <StoreIcon />
          Products
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/orders">
          <PaymentIcon />
          Orders
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/deleviry">
          <LocalShippingIcon />
          Delivery
        </ListLink>
      </ListItem>
    </>
  );
};

export default ListsCategory;
