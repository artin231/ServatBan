const pool = require('../utils/modelUtils');

class UserModel {
	async GetUserById(id) {
		try {
			let res = await pool.query(`SELECT * FROM user WHERE id = ?`, [id]);
			let data = res[0];
			return data;
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}

	}
	async GetUserByEmail(email) {
		try {
			let res = await pool.query(`SELECT * FROM user WHERE email = ?`, [email]);
			let data = res[0];
			return data;
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}
	}
	async InsertUser(name, email, password) {
		try {
			let res = await pool.query(`INSERT INTO user(name,email,password) VALUES (?,?,?)`, [name, email, password]);
			return res;
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}
	}
}
module.exports = UserModel;
