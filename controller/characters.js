const genshindb = require('../configs/genshindb')


exports.character = (req, res) => {
    res.send(genshindb.characters('names', {
        matchCategories: true
    }))
}

exports.character_single = (req, res) => {
    console.log(`Alguem pesquisou: ${req.params.name}`)
    res.send(genshindb.characters(req.params.name, {
        matchCategories: true
    }))
}