const dbParam = require("./config/dbConfig")
const express = require("express");
const routes = require("./routes");


const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))
app.use(routes)


/*--------------SERVER LISTENER--------------*/
app.listen(3000, () => {
    console.log(dbParam.msg);
    console.log(dbParam.link);
})