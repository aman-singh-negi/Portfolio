// config.ts
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, Analytics } from 'firebase/analytics';

// Check if environment variables are properly loaded and log any missing ones
// This function is called immediately to validate environment setup
const validateEnvVars = () => {
  const requiredVars = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET',
    'VITE_FIREBASE_MESSAGING_SENDER_ID',
    'VITE_FIREBASE_APP_ID',
    'VITE_FIREBASE_MEASUREMENT_ID'
  ];
  
  const missingVars = requiredVars.filter(varName => 
    !import.meta.env[varName]
  );
  
  if (missingVars.length > 0) {
    console.warn(`Missing environment variables: ${missingVars.join(', ')}`);
    return false;
  }
  
  return true;
};

// Execute the validation
validateEnvVars();

// Safely access environment variables
const getEnvVar = (name: string) => {
  try {
    const value = import.meta.env[name];
    return value || '';
  } catch (error) {
    console.error(`Error accessing env var ${name}:`, error);
    return '';
  }
};

const firebaseConfig = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY'),
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVar('VITE_FIREBASE_APP_ID'),
  measurementId: getEnvVar('VITE_FIREBASE_MEASUREMENT_ID')
};

// Define proper types for Firebase instances
let app: ReturnType<typeof initializeApp> | undefined;
let db: Firestore | undefined;
let analytics: Analytics | null = null;

try {
  // ✅ Prevent duplicate initialization
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);

  // ✅ Analytics safely used only on client & non-localhost
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    try {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized");
    } catch (error) {
      console.error("Analytics init error", error);
      analytics = null;
    }
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
  // Provide fallback values to prevent crashes
  app = undefined;
  db = undefined;
}

export { app, db, analytics };
