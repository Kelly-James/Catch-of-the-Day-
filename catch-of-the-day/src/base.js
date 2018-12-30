import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB2o1HRtFZvco_rFKIVS27V7zppC2GuKsQ",
        authDomain: "catch-of-the-day-kll-jms.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-kll-jms.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;