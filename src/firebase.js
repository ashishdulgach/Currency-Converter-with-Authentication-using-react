import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAEWFX1WRG5-afMrcQs-md8j-99JzNi2-E",
    authDomain: "reactapp-36a7c.firebaseapp.com",
    projectId: "reactapp-36a7c",
    storageBucket: "reactapp-36a7c.appspot.com",
    messagingSenderId: "1091186360820",
    appId: "1:1091186360820:web:c6f0b5828c16a3ac8939a1"

})

export const auth = app.auth()
export default app
