const genshindb = require('genshin-db');

genshindb.setOptions({
    queryLanguages: ["Portuguese"],
    resultLanguage: "Portuguese",
    matchAliases: true,
    verboseCategories: true
})

module.exports = genshindb;