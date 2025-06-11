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
    requestNotificationPermission().then(setToken);

    console.log(token, "dffsdfsd");

    listenForMessages();
  }, [token]);

  return (
    <div>
      <input value={token || ""} readOnly />
    </div>
  );
}

export default App;
