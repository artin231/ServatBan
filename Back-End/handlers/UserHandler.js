const UserModel = require('../models/UserModel');
const user_model = new UserModel();
const Joi = require('joi');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserHandler {
	async Login(req, res) {
		try {
			let schema = {
				email: Joi.string().email().min(3).max(300).required(),
				password: Joi.string().min(3).max(400).required()
			};
			let validate = Joi.object(schema).validate(req.body);

			if (validate.error) {
				return res.status(400).send({ error: validate.error.message });
			} else {
        let checkMailUser = await user_model.GetUserByEmail(req.body.email);
        if (checkMailUser.error) {
       			return res.status(500).send({ error: 'there was a error' });
        } else {
          if (checkMailUser.length == 0) {
            return res.status(400).send({ error: 'the email or password is not correct' });
          } else {
					  let validate_pass = await bcrypt.compare(req.body.password, checkMailUser[0].password);
					  if (!validate_pass) {
						  return res.status(400).send({ error: 'the email or password is not correct' })
					  } else {
						  let token = jwt.sign({ id: checkMailUser[0].id }, process.env.SECRET_KEY, { expiresIn: '1h' });
						  res.cookie("token", token, {
							  httpOnly: true,
							  secure: true,
							  sameSite: "lax",
							  maxAge: 60 * 60 * 1000
						  });
						  res.send({ status: 'succses' });

					  }
				  }
				}
			}
    } catch (er) {
     	console.log(er);
			return res.status(500).send({ error: 'there was a error' });
		}
	}

	async SignUp(req, res) {
		try {
			let schema = {
				name: Joi.string().min(3).max(200).required(),
				email: Joi.string().email().min(3).max(300).required(),
				password: Joi.string().min(3).max(400).required()
			};
			let validate = Joi.object(schema).validate(req.body);

			if (validate.error) {
				return res.status(400).send({ error: validate.error.message });
			} else {
        let result = await user_model.GetUserByEmail(req.body.email);

        if (result.error) {
          return res.status(500).send({ error: 'there was a error' });
        } else {
        		if (result.length > 0) {
              return res.status(400).send({ error: 'the email is not unique' });
            } else {
            let password = await bcrypt.hash(req.body.password, 10);
					  let insert_res = await user_model.InsertUser(req.body.name, req.body.email, password);

					  if (insert_res.error) {
						  console.log(insert_res.error);
						  return res.status(500).send('there was a error');
					  } else {
							res.send({ status: 'succses' });
					  }
          }
        }

			}
		} catch (er) {
			console.log(er);
			res.status(500).send('there was a error');
		}
	}

	async Profile(req, res) {
    let user = await user_model.GetUserById(req.userData.id);
    if (user.error) {
   			res.status(500).send('there was a error');
    } else {
        if (user.length == 0) {
        return res.send({ error: 'the user was not found' });
      } else {
			  let data_send = { id: user[0].id, name: user[0].name, email: user[0].email, date_joined: user[0].date_joined };
			  res.send(data_send);
		  }
		}

	}

	async LogOut(req, res) {
		try {
			res.clearCookie('token', {
				httpOnly: true,
				secure: true,
				sameSite: 'lax'
			});
			res.send({ status: 'succses' });
		} catch (er) {
			console.log(er)
			return res.status(500).send({ error: 'there was a error' });
		}
	}
}


module.exports = UserHandler;
