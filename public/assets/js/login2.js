import { auth } from './firebase.js';  // firebase.js에서 auth 가져오기
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';  // 추가된 부분

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);  // 추가된 부분
    const user = userCredential.user;

    alert('Logged in successfully!');
    window.location.href = '/';  // 대시보드 페이지로 리디렉션

  } catch (error) {
    console.error('Error logging in: ', error);
    alert('Error logging in. Please check your input and try again.');
  }
});