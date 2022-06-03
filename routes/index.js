const express = require("express");
const router = express.Router();


router.use("/", require("./pages"))
router.use("/save", require("./save"))
router.use("/delete", require("./delete"))
// router.use("/add", require("./add"))
// router.use("/edit", require("./edit"))


module.exports = router