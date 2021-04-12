const path = require("path")
const fs = require("fs")
const jsonPokemon = path.join(__dirname, "./teste.json")

const readJson = fs.readFileSync(jsonPokemon)

let jsonObjeto = JSON.parse(readJson)

console.log(jsonObjeto.array)

//let transformarjson = JSON.stringify(jsonAdicionado, null, 2)

//fs.writeFileSync(jsonPokemon, transformarjson)