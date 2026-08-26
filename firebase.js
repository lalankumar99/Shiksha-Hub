// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmZ4bKHE_siwDC5LGcobdxGeDSnVfiuHY",
  authDomain: "bseb-b12ba.firebaseapp.com",
  projectId: "bseb-b12ba",
  storageBucket: "bseb-b12ba.firebasestorage.app",
  messagingSenderId: "379716858804",
  appId: "1:379716858804:web:e92eebd6843553084af8e1",
  measurementId: "G-X49FDGMSN6"
};

// Firebase initialize
const app = initializeApp(firebaseConfig);

// Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export
export {
  app,
  analytics,
  auth,
  db,
  storage
};