require('../database/database').connect()

const bcrypt = require('bcryptjs')
const User = require('../models/user')

exports.register = async (req, res) => {
    try {
        const {first_name, last_name, email, password} = req.body
        
        if (!(first_name && last_name && email && password)) {
            return res.status(400).send("Invalid Input(s)")
        }

        const notUnique = await User.findOne({email})
        if (notUnique) {
            return res.status(409).send("User Already Exists")
        }

        encrypted_pw = await bcrypt.hash(password, 10)
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encrypted_pw,
        })

        res.status(201).json(user)
    }
    catch(err) {
        console.log(err)
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body

        if (!(email && password)) {
            res.status(400).send("Invalid Input(s)")
        }

        const user = await User.findOne({email})
        if (user && (await bcrypt.compare(password, user.password))) {
            // session = req.sesssion
            // session.userid = req.body.email
            // console.log(session)
            res.status(200).send('LOGGED IN')
        }
        res.status(400).send("Invalid Credentials")
    }
    catch (err) {
        console.log(err)
    }
}