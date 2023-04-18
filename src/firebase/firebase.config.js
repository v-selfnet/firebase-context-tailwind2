import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3fD6SLZw8U2UpPfD9CPE44_kl13lFE2I",
  authDomain: "context-tailwind.firebaseapp.com",
  projectId: "context-tailwind",
  storageBucket: "context-tailwind.appspot.com",
  messagingSenderId: "741901587624",
  appId: "1:741901587624:web:2cd4943c26d9f526505e9d"
};

const app = initializeApp(firebaseConfig);
export default app;