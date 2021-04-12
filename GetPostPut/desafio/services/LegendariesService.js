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
        let readJson = fs.readFileSync(jsonPokemon)
            
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
    },
    putLegendarie: (objeto) =>{
        let readJson = fs.readFileSync(jsonPokemon)
        let jsonObjeto = JSON.parse(readJson)

        const corpo = {...objeto}

        const {
            res,
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
        } = corpo

        let newData = jsonObjeto.array.forEach(element => {
            if(element.id == id){
                element.name = name, 
                element.description = description, 
                element.type = type, 
                element.healthPoints = healthPoints, 
                element.specialAttack = specialAttack, 
                element.defense = defense, 
                element.attack = attack, 
                element.experience = experience, 
                element.specialDefense = specialDefense
            }

            let transformarjson = JSON.stringify(jsonObjeto, null, 2)

            fs.writeFileSync(jsonPokemon, transformarjson)

            res.send("checar com get")
            
        });
        
    }
}

module.exports = LegendariesService;