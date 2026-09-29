const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const user = await User.create({
            name: name,
            email: email,
            password: password
        });

        res.status(201).json({
            message: "User registered successfully",
            user: user
        });

    } catch (error) {

        if (error.name === "SequelizeUniqueConstraintError") {

            return res.status(403).json({
                message: "Email already exists"
            });
        }

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

module.exports = router;