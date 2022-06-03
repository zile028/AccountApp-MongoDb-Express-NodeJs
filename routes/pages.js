const express = require("express")
const db = require("../config/dbConnect");
const router = express.Router();


router.get("/", (req, res) => {
    db.accounts.find((err, data) => {
        res.render("index", {data: data})
    })
})

router.get("/add", (req, res) => {
    res.render("add_account")
})

router.get("/edit", (req, res) => {
    db.accounts.find((err, data) => {
        res.render("edit_view", {data: data})
    })
})

router.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    db.accounts.findOne({"_id": db.ObjectId(id)}, (err, data) => {
        res.render("edit_form", {acc: data})
    })
})

module.exports = router