const express = require("express");
const prisma = require("../utils/prisma");
const router = express.Router();

// Create User
router.post("/", async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: { ...req.body, dob: new Date(req.body.dob) }
        })
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Users
router.get("/", async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        const user = await prisma.user.update({
            data: { ...req.body, dob: new Date(req.body.dob) },
            where: {
                id: req.params.id
            }
        })
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
//delete
router.delete("/:id", async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
