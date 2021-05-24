//Main GET call made it here

const router = require('express').Router();
const Todo = require("../models/Todo");



//routes will be here...

router.get("/", async(req, res) => {//<------Main GET
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo})
})


module.exports = router;