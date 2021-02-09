import React from "react";
import "./Chat-Body-style.css";
// @ts-ignore
function Chat({ messages, myUserName }) {
  return (
    <div className="body">
      {
        // @ts-ignore
        messages
          // @ts-ignore
          .sort((a, b) => {
            return b.time - a.time;
          })
          // @ts-ignore
          .map((item) => {
            const isUser = () => {
              if (item.user === myUserName) {
                //   console.log(true);
                return true;
              } else {
                //   console.log(false);
                return false;
              }
            };
            return (
              <div className="chat-wrapper">
                  {item.user}
                <div
                  className={`messages ${isUser() ? "myMessage" : ""}`}
                  key={item.id}
                >
                  {item.message}
                </div>
              </div>
            );
          })
      }
    </div>
  );
}

export default Chat;
