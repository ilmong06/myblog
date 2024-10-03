const path = require('path');
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const app = express();

// MySQL 연결 풀 설정
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dkwjddl1379',  // 실제 비밀번호로 수정
    database: 'myblog',
    port: 3307,  // MySQL 포트
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// JSON 파싱을 위한 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 제공 (CSS, JS 등)
app.use(express.static(path.join(__dirname, 'assets')));


// 루트 경로에서 index.html 파일 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// 회원가입 페이지 제공
app.get('/html/sign-up.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'sign-up.html'));
});

// 로그인 페이지 제공
app.get('/html/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
});
// 로그인2 페이지 제공
app.get('/html/login2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login2.html'));
});

// 회원가입2 페이지 제공
app.get('/html/sign-up2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'sign-up2.html'));
});

// // 회원가입 API
// app.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         // 사용자가 이미 존재하는지 확인
//         const [existingUser] = await pool.query(
//             'SELECT * FROM users WHERE username = ? OR email = ?',
//             [username, email]
//         );

//         if (existingUser.length > 0) {
//             return res.status(400).json({ message: 'Username or email already exists' });
//         }

//         // 비밀번호 해싱
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // 사용자 데이터 삽입
//         const [result] = await pool.query(
//             'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
//             [username, email, hashedPassword]
//         );

//         res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
//     } catch (error) {
//         console.error(error);  // 서버 로그에 오류 출력
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // 로그인 API
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // 사용자 확인
//         const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

//         if (rows.length === 0) {
//             return res.status(400).json({ message: 'User not found' });
//         }

//         const user = rows[0];

//         // 비밀번호 검증
//         const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);

//         if (!isPasswordCorrect) {
//             return res.status(400).json({ message: 'Invalid password' });
//         }

//         res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         console.error(error);  // 서버 로그에 오류 출력
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// 서버 시작
app.listen(3005, () => {
    console.log('Server running on port 3005');
});