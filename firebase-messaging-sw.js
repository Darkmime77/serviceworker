// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js");
// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// eslint-disable-next-line
const firebaseConfig = {
  apiKey: "AIzaSyAd5laV6_2FEVFrVThpuYWkPeIwNtxrTqE",
  authDomain: "test-b4946.firebaseapp.com",
  projectId: "test-b4946",
  storageBucket: "test-b4946.appspot.com",
  messagingSenderId: "876318655081",
  appId: "1:876318655081:web:f8e43b681b67af27d298f8",
  measurementId: "G-6FGYT2T11F"
};
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// eslint-disable-next-line
const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  return self.showNotification(
    message.notification.title,
    message.notification
  );
});