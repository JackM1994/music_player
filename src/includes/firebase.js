import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '{{apiKey}}',
  authDomain: 'music-3821b.firebaseapp.com',
  projectId: 'music-3821b',
  storageBucket: 'music-3821b.appspot.com',
  appId: '1:947180860765:web:206a7de1dfe9a7da58e4b4',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
