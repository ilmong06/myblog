// import { auth } from './firebase.js';  // firebase.js에서 auth 가져오기
// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

// const signUpForm = document.getElementById('signUpForm');

// signUpForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const name = document.getElementById('name').value;

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // 사용자 프로필 업데이트 (이름 설정)
//     await user.updateProfile({
//       displayName: name
//     });

//     alert('Account created successfully!');
//     // 로그인 페이지로 리디렉션 (선택사항)
//     // window.location.href = '/login.html';  

//   } catch (error) {
//     console.error('Error signing up: ', error);
//     alert('Error signing up. Please check your input and try again.');
//   }
// });
import { auth } from './firebase.js';  // firebase.js에서 auth 가져오기
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 사용자 프로필 업데이트 (이름 설정)
    await user.updateProfile({
      displayName: name
    });

    alert('Account created successfully!');
    // 로그인 페이지로 리디렉션 (선택사항)
    // window.location.href = '/login.html';  

  } catch (error) {
    console.error('Error signing up: ', error);
    alert('Error signing up. Please check your input and try again.');
  }
});