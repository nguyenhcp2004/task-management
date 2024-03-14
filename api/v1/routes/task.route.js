const express = require("express");
const router = express.Router();
const controller = require("../controllers/task.controller")
const validate = require("../validates/task.validate")



router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

router.patch("/change-status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.post("/create",validate.create, controller.create);

router.patch("/edit/:id", controller.edit);

router.patch("/delete/:id", controller.delete);

router.get("/list", controller.list);




module.exports = router;