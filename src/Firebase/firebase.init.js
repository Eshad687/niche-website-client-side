import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuthorization = () => {

    initializeApp(firebaseConfig);
}
export default initializeAuthorization;