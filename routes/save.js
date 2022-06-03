const express = require("express")
const db = require("../config/dbConnect");
const router = express.Router();

router.post("/add", (req, res) => {
    const reqBody = req.body;
    db.accounts.insertOne(reqBody, null, (err, data) => {
        if (err) throw err;
        res.redirect("/");
    })
})

router.post("/edit", (req, res) => {
    const reqBody = req.body;
    const id = reqBody.id
    delete (reqBody.id)

    db.accounts.update({"_id": db.ObjectId(id)}, {$set: reqBody}, (err) => {
        if (err) throw err;
        res.redirect("/")
    })
})


module.exports = router