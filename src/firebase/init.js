// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCi2hx96aOWzXh7pwzDPkH5aHRS7nVIRLU',
    authDomain: 'swausays.firebaseapp.com',
    projectId: 'swausays',
    storageBucket: 'swausays.appspot.com',
    messagingSenderId: '415541910578',
    appId: '1:415541910578:web:e31a12bb4c1d4ff9e7b02b',
    measurementId: 'G-JESQKCJ080'
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db
