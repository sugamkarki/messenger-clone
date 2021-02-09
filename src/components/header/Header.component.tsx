import React from "react";
import "./Header.styles.css";
import { Avatar, Button } from "@material-ui/core";
// @ts-ignore
function Header({ username ,clearMessages}) {
  return (
    <div className="header">
      <div className="user__name">
        <Avatar alt={username} src="/static/images/avatar/1.jpg" />
        <p className="user__name user__p"> {username.toUpperCase()}</p>
      </div>
      <div className="header header__clear-button">
        <Button variant="outlined" color="secondary" onClick={clearMessages}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export default Header;
