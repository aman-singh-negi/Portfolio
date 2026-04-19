// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZcEyag7tXZihnVx2euHay8mGcUV7c6Og",
  authDomain: "portfolio-contact-form-da242.firebaseapp.com",
  projectId: "portfolio-contact-form-da242",
  storageBucket: "portfolio-contact-form-da242.firebasestorage.app",
  messagingSenderId: "1042866481173",
  appId: "1:1042866481173:web:0347d85ed3243d13dbc61c",
  measurementId: "G-PN84B9CSTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only if supported (prevents errors in environments where it's not available)
let analytics = null;

// Create a function to initialize analytics safely
const initializeAnalytics = async () => {
  try {
    const isAnalyticsSupported = await isSupported();
    if (isAnalyticsSupported) {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialized successfully');
    } else {
      console.log('Firebase Analytics is not supported in this environment');
    }
  } catch (error) {
    console.error('Error initializing Firebase Analytics:', error);
  }
};

// Call the initialization function
initializeAnalytics();

export { db, analytics };