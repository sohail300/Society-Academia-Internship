import express from 'express'
import dotenv from 'dotenv'
import { Contact, User } from '../db/schema.js'

dotenv.config();
const router = express.Router();

const secretKey = process.env.SECRET_KEY;

router.post('/register', async (req, res) => {
    try {
        const { name, number, email, aadhar, password, cpassword,address, district, state, pin } = req.body;

        if (!name || !number || !email || !aadhar || !password || !cpassword ||!address || !district || !state || !pin) {
            return res.status(401).send('Invalid Credentails');
        }

        if(password!==cpassword){
            return res.status(403).send("Passwords don't match");
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(403).send('User already Exists');
        } else {
            const obj = {
                name, number, email, aadhar, password, address, district, state, pin
            }

            const newUser = new User(obj);
            await newUser.save()
            console.log('User saved');
            return res.status(201).json({ msg: "Successfully Created User!" });
        }
    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password })

        if (user) {
            const token = jwt.sign({ id: user._id, role: 'user' }, secretKey, { expiresIn: '1h' })
            return res.status(200).json(token);
            // return res.status(200).json("Login Successful");
        } else {
            return res.status(403).send('Invalid Credentials');
        }
    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

router.post('/sendotp', async (req, res) => {
    try {
        const { name, number } = req.body;

        if (!name || !number) {
            req.status(401).send("Invalid Credentials");
        }

        client.verify.v2.services
            .create({ friendlyName: 'RescueRadar Verify Service' })
            .then((service) => {
                console.log(service.sid)
                client.verify.v2.services(service.sid)
                    .verifications
                    .create({ to: number, channel: 'sms' })
                    .then(verification => console.log(verification.status));

                res.status(200).json({ "msg": 'OTP sent successfully', "Service_sid": service.sid });
            })

    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

router.post('/verifyotp', async (req, res) => {
    try {
        const { otp, number, service_sid } = req.body;

        if (!otp || !number || !service_sid) {
            req.status(401).send("Invalid Credentials");
        }

        client.verify.v2.services(service_sid)
            .verificationChecks
            .create({ to: number, code: otp })
            .then(verification_check => console.log(verification_check.status));
        res.status(200).send('OTP verified successfully')

    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

router.get('/profile', async (req, res) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            req.status(401).send("Invalid Credentials");
        }

        const response = await User.findById(_id)

        if (!response) {
            res.status(403).send("No Response")
        } else {
            res.status(201).json({ "data": response })
        }
    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

router.put('/profile', async (req, res) => {
    try {
        const { _id, name } = req.body;

        if (!name || _id) {
            req.status(401).send("Invalid Credentials");
        }

        const updatedResponse = await User.findByIdAndUpdate({ _id }, { "name": name })

        if (!updatedResponse) {
            res.status(403).send("Not Updated")
        } else {
            res.status(201).send("Updated")
        }
    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

router.post('/contact', async (req, res) => {
    try {
        const { name, number, description } = req.body;

        if (!name || !number || !description) {
            req.status(401).send("Invalid Credentials");
        }

        const obj = { name, number, description };
        const newContact = new Contact(obj);
        await newContact.save();
        console.log('Emergency Case saved');
        return res.status(201).json({ msg: "Success!" });
    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

export default router;