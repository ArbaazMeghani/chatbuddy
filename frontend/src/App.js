import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import keys from "./config/keys"

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(keys.CHAT_SERVICE_URL);
    socket.on("chat-message", data => {
      console.log(data)
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's {response}
    </p>
  );
}

export default App;