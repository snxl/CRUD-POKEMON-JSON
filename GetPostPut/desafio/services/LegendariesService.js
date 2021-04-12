const LegendaryModel = require('../models/LegendaryModel');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs")
const path = require("path")
const jsonPokemon = path.join(__dirname, "../models/teste.json")

const id = uuidv4()

const LegendariesService = {
    createLegendary: (
        name, 
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience, 
        specialDefense
        ) => {
        const readJson = fs.readFileSync(jsonPokemon)
            
        const newLegendary = new LegendaryModel(
            id, 
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        );
        
        let jsonObjeto = JSON.parse(readJson)

        jsonObjeto.array.push(newLegendary)

        let transformarjson = JSON.stringify(jsonObjeto, null, 2)

        fs.writeFileSync(jsonPokemon, transformarjson)
    }
}

module.exports = LegendariesService;