import express from 'express'
import dotenv from 'dotenv'
import { Admin } from '../db/schema.js'

dotenv.config();
const router = express.Router();

const secretKey = process.env.SECRET_KEY;

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Admin.findOne({ email, password })

        if (user) {
            const token = jwt.sign({ id: user._id, role: 'admin' }, secretKey, { expiresIn: '1h' })
            return res.status(200).json(token);
            // return res.status(200).json("Login Successful");
        } else {
            return res.status(403).send('Invalid Credentials');
        }
    } catch (err) {
        return res.status(500).send({ 'Internal Error': err });
    }
})

export default router;