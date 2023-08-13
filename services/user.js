const db = require('./db');
const bcrypt = require('bcrypt');

const User = {
    createUser: async (username, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        await db.query(query, [username, hashedPassword]);
    },
    findByUsername: async (username) => {
        const query = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await db.query(query, [username]);
        return rows[0];
    }
};

module.exports = User;