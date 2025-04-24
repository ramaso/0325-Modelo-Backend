const express = require ("express")

const router = express.Router();

const userController = require("../models/user.model")

router.get("/users", userController.getUsers)

/* router.get("/users", (req, res) => {

    res.send("GET USERS OK")
}) */

router.post("/users", userController.postUser)

router.delete("/users", userController.deleteUser)

module.exports = router

