import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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

initializeApp(firebaseConfig)

export const db = getFirestore()
