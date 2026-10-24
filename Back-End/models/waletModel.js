const pool = require('../utils/modelUtils');

class WaletModel {
	async GetWaletByUser(user_id) {
		try {
			let res = await pool.query(`SELECT * FROM walet WHERE user_id = ?`, [user_id]);
			let data = res[0];
			return data;
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}
	}
	async GetChangeByWalet(walet_id) {
		try {
			let res = await pool.query(`SELECT * FROM walet_change WHERE walet_id = ?`, [walet_id]);
			let data = res[0];
			return data;
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}

  }
  async GetWalet(user_id,walet_id) {
		try {
			let res = await pool.query(`SELECT * FROM walet WHERE id = ? AND user_id = ?`, [walet_id,user_id]);
			let data = res[0];
			return data;
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}
	}
	async changeWaletValue(walet_id, new_value,user_id) {
		try {
			let res = await pool.query(`UPDATE walet SET value = ? WHERE id = ? AND user_id = ?;`, [new_value, walet_id,user_id]);
			return res;
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}
	}
	async InsertChange(walet_id, type, value) {
		try {
			let res = await pool.query(`INSERT INTO walet_change (walet_id,type,value) VALUES (?,?,?)`, [walet_id, type, value]);
			return { status: 'sucsses' };
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}
	}
	async InsertWalet(user_id, value) {
		try {
			let res = await pool.query(`INSERT INTO walet (user_id,value) VALUES (?,?)`, [user_id, value]);
			return { status: 'sucsses' };
		} catch (er) {
			console.log(er);
			return { error: 'there was a error' };
		}
  }

  async DeleteWalet(user_id, walet_id) {
    try {
      let res = await pool.query(`
        DELETE FROM walet WHERE id = ? AND user_id = ?;`, [walet_id, user_id]);
      return { status: 'sucsses' };
    } catch (er) {
     	console.log(er);
			return { error: 'there was a error' };
    }
  }
}

module.exports = WaletModel;
