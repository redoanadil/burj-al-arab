import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";

export const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}