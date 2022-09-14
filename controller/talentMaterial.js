const genshindb = require('../configs/genshindb')

exports.material = (req, res) => {
    res.send(genshindb.materials(req.params.material))
}

