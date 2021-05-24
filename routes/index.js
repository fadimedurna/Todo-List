//Main GET call made it here

const router = require('express').Router();
const Todo = require("../models/Todo");



//routes will be here...

router.get("/", (req, res) => {//<------Main GET
    const allTodo = Todo.find();
    res.render("index", {todo: allTodo})
})


module.exports = router;