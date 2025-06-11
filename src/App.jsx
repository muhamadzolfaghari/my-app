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
    listenForMessages();
  }, [token]);

  return (
    <div>
      <button
        onClick={() => {
          alert("Requesting notification permission...");
          requestNotificationPermission().then(setToken);
        }}
      >
        get mohammad reza token
      </button>
      <input value={token || ""} readOnly />
    </div>
  );
}

export default App;
