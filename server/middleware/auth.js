exports.auth = (req, res, next) => {
    if (req.session.userid) {
        next()
    }
    else {
        return res.redirect('/login')
    }
}

exports.authHome = (req, res, next) => {
    if (req.session.userid) {
        return res.redirect('/home')
    }
    else next()
}