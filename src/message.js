import useInterval from "@use-it/interval";
import React, { Component, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./message.css";

class message extends Component {
  state = {
    text: {
      recipient: "",
      textmessage: "",
    },
  };

  sendText = (message) => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(
      `http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${message}`
    ).catch((err) => console.error(err));
  };

  render() {
    const { text } = this.state;

    return (
      <div className="messageBox">
        <a> Your Phone Number </a>
        <input
          value={text.recipient}
          onChange={(e) =>
            this.setState({ text: { ...text, recipient: e.target.value } })
          }
        />
        {this.props.isSend && this.sendText("hello")}
      </div>
    );
  }
}

export default message;
