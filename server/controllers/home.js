exports.home = (req, res) => {
    try {
        res.send('HOMEPAGE')
    }
    catch(err) {
        console.log(err)
    }
}