import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhwc-lYVxX0i-iHJfm8WdLfCnHXemJ3yw",
    authDomain: "tinder-clone-e3810.firebaseapp.com",
    databaseURL: "https://tinder-clone-e3810.firebaseio.com",
    projectId: "tinder-clone-e3810",
    storageBucket: "tinder-clone-e3810.appspot.com",
    messagingSenderId: "706461739014",
    appId: "1:706461739014:web:23d44fd09db157f33afb87"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore()

export default database