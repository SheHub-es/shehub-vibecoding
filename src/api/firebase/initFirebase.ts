import { initializeApp, getApps } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});

export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
