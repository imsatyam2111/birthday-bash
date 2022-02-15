import * as firebase from 'firebase/app'
import '@firebase/firestore' // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDE-rRzMzIB1HP85GlakBtyHqAog0caFiE",
  authDomain: "birthday-bash-8e608.firebaseapp.com",
  projectId: "birthday-bash-8e608",
  storageBucket: "birthday-bash-8e608.appspot.com",
  messagingSenderId: "789623493728",
  appId: "1:789623493728:web:08a76abaebf2c4a054df05"
})

const rsf = new ReduxSagaFirebase(myFirebaseApp);

export { rsf };