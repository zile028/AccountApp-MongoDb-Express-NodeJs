const express = require("express");
const db = require("../config/dbConnect");
const router = express.Router();


router.get("/acc/:id", (req, res) => {
    const id = req.params.id;
    db.accounts.remove({"_id": db.ObjectId(id)}, (err, data) => {
        if (err) throw err;
        res.redirect("/edit");
    })
})


module.exports = router