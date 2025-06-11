importScripts(
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCFXIMqfZXZw-myVlD949aYSX4V2eTp-4E",
  authDomain: "android-780-debug.firebaseapp.com",
  projectId: "android-780-debug",
  storageBucket: "android-780-debug.appspot.com",
  messagingSenderId: "915041173471",
  appId: "1:915041173471:web:43de9661395fcedff48e6a",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("[Service Worker] Background message ", payload);
  const { title, body } = payload.data;

  self.registration.showNotification(title, {
    body,
    icon: "/firebase-logo.png",
  });
});
