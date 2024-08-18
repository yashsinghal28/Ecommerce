import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:singhal.ysll@gmail.com">
        <Button>Contact: singhal.ysll@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
