import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0JH33LnzXYXFg3DSXkIV3BUTC31sZ7GE",
    authDomain: "crwn-db-28054.firebaseapp.com",
    databaseURL: "https://crwn-db-28054.firebaseio.com",
    projectId: "crwn-db-28054",
    storageBucket: "",
    messagingSenderId: "815874742482",
    appId: "1:815874742482:web:a7ae0858f2361b7d"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select-account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
