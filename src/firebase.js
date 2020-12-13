import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCOGjFISNjB7XvDev3NHEQGPg4ErPZCaVI",
        authDomain: "todo-app-phase-second.firebaseapp.com",
        databaseURL: "https://todo-app-phase-second.firebaseio.com",
        projectId: "todo-app-phase-second",
        storageBucket: "todo-app-phase-second.appspot.com",
        messagingSenderId: "724571623845",
        appId: "1:724571623845:web:e53bf10985ba142ff8584c",
        measurementId: "G-WVCGHWJ999"
      })

const db = firebaseApp.firestore()
export default db