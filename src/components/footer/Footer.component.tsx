import { Button, Icon, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import "./Footer.style.css";
// @ts-ignore
function Footer({ userInput, changeHandler,submitHandler }) {
  return (
    <div className="footer">
      <form noValidate autoComplete="off" className="inputForm" onSubmit={submitHandler}>
        <TextField
          id="standard-basic"
          label="Standard"
          style={{ flex: 0.9 }}
          value={userInput}
          onChange={(e) => changeHandler(e.target.value)}
        />
        <Button
          variant="contained"
          color="default"
          endIcon={
            <Icon>
              <SendIcon />
            </Icon>
          }
          onClick={submitHandler}
          style={{ flex: 0.1 }}
        >
        </Button>
      </form>
    </div>
  );
}

export default Footer;
