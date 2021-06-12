import firebase from 'firebase/app'
import 'firebase/storage'
import "firebase/firestore"
import "firebase/auth"
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID,
})
export const auth=app.auth();
export default app
const projectStorage = firebase.storage();
const projectFirestore= firebase.firestore();
const timestamp=firebase.firestore.FieldValue.serverTimestamp;
export{projectFirestore,projectStorage, timestamp}