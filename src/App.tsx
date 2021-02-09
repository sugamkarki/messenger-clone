import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "./Firebase";
import Header from "./components/header/Header.component";
import Body from "./components/Chat/Chat-Body.component";
import Footer from "./components/footer/Footer.component";
function App() {
  const [username, setUsername] = useState("");
  const allMessages = [
    {
      id: 1,
      user: "sugam",
      time: 1612878324569,
      message: "hello dude",
    },
    {
      id: 2,
      user: "hari",
      time: 1612878324570,
      message: "hello back",
    },
    {
      id: 3,
      user: "ram",
      time: 1612878324571,
      message: "hello hello",
    },
    {
      id: 4,
      user: "ram",
      time: 1612878324572,
      message: "Hola Senorita",
    },
  ];
  // console.log(messages);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const fetchData = async () => {
    const db = firebase.firestore();
    const fetchedData = await db.collection("messages").get();
    setMessages(
      // @ts-ignore
      fetchedData.docs.map((doc) => {
        return { ...doc.data(), documentId: doc.id };
      })
    );
  };
  // @ts-ignore
  useEffect(() => {
    let name = "";
    // @ts-ignore
    while (name.length <= 0) {
      // @ts-ignore
      name = prompt("enter your name");
      // name = "sugam";
    }
    const db = firebase.firestore();

    // @ts-ignore
    setUsername(name);
    db.collection("messages").onSnapshot(() => {
      fetchData();
    });
  }, []);
  // @ts-ignore
  const changeHandler = (e) => {
    setText(e);
  };
  // @ts-ignore
  const submitHandler = (e) => {
    e.preventDefault();
    if (text) {
      const id = messages.length + 1;
      const newMessages = {
        id: id,
        user: username,
        time: Date.now(),
        message: text,
      };
      const db = firebase.firestore();
      db.collection("messages").add(newMessages);
      // @ts-ignore
      // setMessages(newMessages);
      setText("");
    }
  };
  //@ts-ignore
  const clearMessages = (e) => {
    const db = firebase.firestore();
    db.collection("messages")
      .get()
      //@ts-ignore
      .then((res) => {
        //@ts-ignore
        res.forEach((element) => {
          element.ref.delete();
        });
      });
  };
  // console.log(messages);
  return (
    <div className="App">
      <h1 className="App App__welcomeHeader">
        Welcome to messenger, {username}
      </h1>
      <div className="container">
        <Header username={username} clearMessages={clearMessages} />
        <Body messages={messages} myUserName={username} />
        <Footer
          userInput={text}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
}

export default App;
