const express = require('express')
const router = require('express').Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "mynameisvineetgoyalandthisisjwtsecret";


router.post('/createuser', [
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password', 'Invalid password').isLength({ min: 5 })],
    async (req, res) => {


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: secPass
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

router.post('/loginuser',
    [

        body('email').isEmail(),
        body('password', 'Invalid password').isLength({ min: 5 })],



    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let userData = await User.findOne({ email: req.body.email });
            if (!userData) {
                return res.status(400).json({ error: "Try logging in with correct credentials" });
            }

            const isPasswordMatch = await bcrypt.compare(req.body.password, userData.password);
            if (!isPasswordMatch) {
                return res.status(400).json({ error: "Try logging in with correct credentials" });
            }

            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            res.json({ success: true, authToken: authToken });

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router;
