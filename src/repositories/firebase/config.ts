import {FirebaseConfig} from 'src/modules/firebase';
export const config:FirebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'stanislav-beresnev.firebaseapp.com',
    databaseURL: 'https://stanislav-beresnev.firebaseio.com',
    projectId: 'stanislav-beresnev',
    storageBucket: 'stanislav-beresnev.appspot.com',
    messagingSenderId: '806162403021',
};
