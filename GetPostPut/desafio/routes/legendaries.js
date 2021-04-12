var express = require('express');
const controller = require('../controller/controller');
var router = express.Router();


/* GET users listing. */
router.get("/", controller.get)
router.post("/", controller.post)
router.put("/:id", controller.put)
router.delete("/:id", controller.delete)

module.exports = router;
