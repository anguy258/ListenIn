exports.auth = (req, res, next) => {
    if (req.session.userid) {
        res.json({auth: true})
        next()
    }
    else res.json({auth: false})
}

// exports.authHome = (req, res, next) => {
//     if (req.session.userid) {
//         return res.redirect('http://localhost:3000/rooms')
//     }
//     else next()
// }