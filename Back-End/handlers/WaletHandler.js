let WaletModel = require("../models/waletModel");
let Joi = require("joi");

let walet_model = new WaletModel();

class WaletHandler {
  async InsertWalet(req, res) {
    try {
      let schema = {
        value: Joi.number().required(),
      };
      let validate = Joi.object(schema).validate(req.body);
      if (validate.error) {
        res.status(400).send({ error: validate.error.message });
      } else {
        let result = await walet_model.InsertWalet(req.userData.id, req.body.value);
        if (result.error) {
          res.status(500).send({ error: "there was a error" });
        } else {
          res.send({ status: "sucsses" });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "there was a error" });
    }
  }

  async InsertChange(req, res) {
    try {
      let schema = {
        walet_id: Joi.number().required(),
        value: Joi.number().required(),
        type: Joi.string().max(300).required(),
      };
      let validate = Joi.object(schema).validate(req.body);

      if (validate.error) {
        res.status(400).send({ error: validate.error.message });
      } else {
        if (req.body.type == "کاهش" || req.body.type == "افزایش") {
          let get_walet = await walet_model.GetWalet(req.userData.id, req.body.walet_id);
          if (get_walet.error) {
            res.status(500).send({ error: "there was a error" });
          } else {
            if (get_walet.length > 0) {
              let WaletVal = get_walet[0].value;
              let NewVal =
                req.body.type == "کاهش" ? WaletVal - req.body.value : WaletVal + req.body.value;
              let result_change_walet = await walet_model.changeWaletValue(
                req.body.walet_id,
                NewVal,
                req.userData.id,
              );

              if (result_change_walet.error) {
                res.status(400).send({ error: "there was a error" });
              } else {
                let result_insert_change = await walet_model.InsertChange(
                  req.body.walet_id,
                  req.body.type,
                  req.body.value,
                );
                if (result_insert_change.error) {
                  res.status(500).send({ error: "there was a error" });
                } else {
                  res.send({ status: "sucsses" });
                }
              }
            } else {
              res.status(400).send({ error: "walet not found" });
            }
          }
        } else {
          res.status(400).send({ error: "the type is not correct" });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "there was a error" });
    }
  }

  async GetWalets(req, res) {
    try {
      let result = await walet_model.GetWaletByUser(req.userData.id);
      if (result.error) {
        res.status(500).send({ error: "there was a error" });
      } else {
        res.send(result);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "there was a error" });
    }
  }

  async getChanges(req, res) {
    try {
      let schema = {
        walet_id: Joi.number().required(),
      };
      let validate = Joi.object(schema).validate(req.body);
      if (validate.error) {
        res.status(400).send({ error: validate.error.message });
      } else {
        let result = await walet_model.GetChangeByWalet(req.body.walet_id);
        if (result.error) {
          res.status(500).send({ error: "there was a error" });
        } else {
          res.send(result);
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "there was a error" });
    }
  }

  async DeleteWalet(req, res) {
    try {
      let schema = {
        walet_id: Joi.number().required(),
      };
      let validate = Joi.object(schema).validate(req.body);
      if (validate.error) {
        res.status(400).send({ error: validate.error.message });
      } else {
        let result = await walet_model.DeleteWalet(req.userData.id, req.body.walet_id);
        if (result.error) {
          res.status(500).send({ error: "there was a error" });
        } else {
          res.send({ status: "sucsses" });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "there was a error" });
    }
  }

  async GetWalet(req, res) {
    try {
      let schema = {
        walet_id: Joi.number().required(),
      };
      let validate = Joi.object(schema).validate(req.body);
      if (validate.error) {
        res.status(400).send({ error: validate.error.message });
      } else {
        let result = await walet_model.GetWalet(req.userData.id, req.body.walet_id);
        if (result.error) {
          res.status(500).send({ error: "there was a error" });
        } else {
          res.send(result);
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "there was a error" });
    }
  }
}

module.exports = WaletHandler;
