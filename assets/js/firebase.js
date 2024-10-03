import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAfiRIkNZesOTlkfQTWizBqdDkjmWJQvRo",
  authDomain: "ilmongblog.firebaseapp.com",
  projectId: "ilmongblog",
  storageBucket: "ilmongblog.appspot.com",
  messagingSenderId: "25466040786",
  appId: "1:25466040786:web:24b5dd6019a7118a80d80b"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 인증 기능 가져오기
const auth = getAuth(app);

// auth 객체를 다른 파일에서 사용할 수 있도록 export
export { auth };