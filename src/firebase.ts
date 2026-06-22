import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Senin yeni Matematik Firebase projenin bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyCGz8YolRIAju3yvOaXsSND8G1BUXrV_NE",
  authDomain: "matematikogrenciveli.firebaseapp.com",
  projectId: "matematikogrenciveli",
  storageBucket: "matematikogrenciveli.firebasestorage.app",
  messagingSenderId: "1021956702791",
  appId: "1:1021956702791:web:1c33144332fe0581c72762"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore veritabanını dışa aktar (Arena AI bunu kullanacak)
export const db = getFirestore(app);