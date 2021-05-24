const express = require("express");
const mongoose = require('mongoose');


const app = express();


//connect to the mongoose db
mongoose.connect("mongodb://localhost/ToDo_List", { //ToDo_List:db 

    useNewUrlParser: true,
    useUnifiedTopology :true

}, () => {console.log(`Connection made with MongoDB successufully!`)});



//middlewares
app.use(express.urlencoded({ extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


//routes
app.use(require("./routes/index"));
app.use(require('./routes/todo'));


//server configurations...
port= process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started listening on port: ${port}`);
})
