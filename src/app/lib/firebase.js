import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig={
    apiKey:"AIzaSyBoITrmf2Cqi-iw05zfvJqlVEIza1eegH0",
    authDomain:"room-searcher-87ea6.firebaseapp.com",
    projectId:"room-searcher-87ea6",
    storageBucket:"room-searcher-87ea6.appspot.com",
    messagingSenderId:"575799173676",
    appId:"1:575799173676:web:0e09880d8f102089fba789",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};