// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth'; // Thêm các dịch vụ bạn cần

const firebaseConfig = {
  apiKey: "AIzaSyCPcb34OkJE1bHbBDk_LltoA9x0AvAYWLY",
  authDomain: "your-auth-domain",
  projectId: "ai-travel-planner-dfa4c",
  storageBucket: "ai-travel-planner-dfa4c.appspot.com",
  messagingSenderId: "197009292221",
  appId: "1:197009292221:android:63f3ec5cc82e767b16f0d4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
