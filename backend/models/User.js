const db = require("../db");

const createUser = async ({ username, email, password }) => {
    const result = await db.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, password]
    );
    return result.rows[0];
};

const findUserByEmail = async (email) => {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
};

const findUserById = async (id) => {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { createUser, findUserByEmail, findUserById };
