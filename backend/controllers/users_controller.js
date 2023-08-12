import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js'

const profile = async function (req, res) {
    const user = await User.findById(req.userId);
    return res.json({ user });
}

const register = async function (req, res) {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ message: 'Please enter all the details' })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.json({ message: 'User already registered' });
        }
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
        return res.cookie('token', token).json({ success: true, message: 'User registered successfully', data: newUser })
    } catch (err) {
        return res.json({ error: err })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'Please enter all the details' })
        }
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15s' });
        return res.cookie('token', token).json({ success: true, message: 'LoggedIn Successfully', user })
    } catch (err) {
        return res.json(`Error in logging in : ${err.message}`);
    }
}

export default { profile, register, login };