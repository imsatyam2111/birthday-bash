import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDE-rRzMzIB1HP85GlakBtyHqAog0caFiE",
  authDomain: "birthday-bash-8e608.firebaseapp.com",
  projectId: "birthday-bash-8e608",
  storageBucket: "birthday-bash-8e608.appspot.com",
  messagingSenderId: "789623493728",
  appId: "1:789623493728:web:08a76abaebf2c4a054df05"
};

const fireDb = firebase.initializeApp(firebaseConfig);
const db = getFirestore(fireDb);

export { db };
export default fireDb.collection;