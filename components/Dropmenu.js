"use client";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useStateContext } from "@/context/store";

function Dropmenu({ tags, children }) {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const { activeTag, setActiveTag } = useStateContext();
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div onClick={handleClick}>{children}</div>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {tags?.map((option) => (
          <MenuItem
            key={option.name}
            selected={option === activeTag}
            onClick={() => {
              handleClose;
              setActiveTag(option.name);
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Dropmenu;
