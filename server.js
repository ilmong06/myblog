const path = require('path');
const express = require('express');
const app = express();

// JSON 파싱을 위한 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 제공 (CSS, JS 등)
app.use(express.static(path.join(__dirname, 'assets')));

// 루트 경로에서 index.html 파일 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'html', 'index.html'));
});
// 회원가입 페이지 제공
app.get('/html/sign-up.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'sign-up.html'));
});

// 로그인 페이지 제공
app.get('/html/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
});
app.listen(3005, () => {
    console.log('Server running on port 3005');
});

// 회원가입 API
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const [existingUser] = await pool.query(
            'SELECT * FROM users WHERE username = ? OR email = ?',
            [username, email]
        );
        
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await pool.query(
            'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// 로그인 API (단순한 예시로 비밀번호 검증만 포함)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const [user] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        if (user.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user[0].password_hash);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
