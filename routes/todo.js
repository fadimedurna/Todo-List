//CRUD operations
const router = require('express').Router();
const Todo = require("../models/Todo");


//routes
router
    .post("/add/todo", (req, res) => { 

        const { todo } = req.body;
        const newTodo = new Todo({ todo }) 
        
        //save the todo data
        newTodo.save()
        .then(() => { 
            //res.json({msg: "User Added Successfully!"})
            console.log("Todo added successfully!");
            res.redirect("/"); //redirecting user to homepage

        }).catch((err) => console.log(err))

    })
    .get("/delete/todo/:_id", (req, res) => {
        
        const { _id } = req.params;
        
        Todo.deleteOne({ _id })
        .then(() => {
            
            console.log("Deleted Todo Successfully!");
            res.redirect("/"); //redirecting user to homepage
        
        })
        .catch((err) => console.log(err));
        
    });


module.exports = router;