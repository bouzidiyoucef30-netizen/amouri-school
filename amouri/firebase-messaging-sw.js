importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA3SGQ8Z85i3xbWfgA_Bbte4blE86sgyhc",
  authDomain: "school-attendance-b070a.firebaseapp.com",
  projectId: "school-attendance-b070a",
  storageBucket: "school-attendance-b070a.firebasestorage.app",
  messagingSenderId: "532437656644",
  appId: "1:532437656644:web:9e57a4192d3ac007eec811",
});

const messaging = firebase.messaging();

// إشعارات الخلفية (عندما يكون المتصفح مغلقاً أو الموقع في الخلفية)
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || "تذكير", {
    body: body || "",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    dir: "rtl",
    lang: "ar",
  });
});
