import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import {
  requestNotificationPermission,
  listenForMessages,
} from "./NotificationManager";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = requestNotificationPermission();
    setToken(token);
    listenForMessages();
  }, []);

  return (
    <>
      <div>{token}</div>
    </>
  );
}

export default App;
