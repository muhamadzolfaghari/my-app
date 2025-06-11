import { messaging, getToken, onMessage } from "./firebase";

const VAPID_KEY =
  "BP9BoG447icaYrAdcVzfUG4Zfy9VCW1pVjNUJBkj6DHL4lkNswcM75bv4nICGyZyZ6g_QNaTtHDCBMeES8D4vhQ";

export async function requestNotificationPermission() {
  try {
    alert("Notification permission status: " + navigator.serviceWorker);
    alert("Notification permission status: " + !!Notification);

    if (!("serviceWorker" in navigator)) {
      return;
    }

    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey: VAPID_KEY });
      console.log("FCM Token:", token);

      return token;

      // Save this token to your backend to send push notifications
    } else {
      console.warn("Permission denied for notifications");
    }
  } catch (error) {
    alert("Error requesting notification permission: " + error);
    console.error("Error getting FCM token:", error);
  }
}

export function listenForMessages() {
  onMessage(messaging, (payload) => {
    console.log("Message received in foreground: ", payload);
    // You can show a toast, update UI, etc.
  });
}
