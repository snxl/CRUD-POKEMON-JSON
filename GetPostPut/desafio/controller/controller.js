const fs = require("fs")
const path = require("path")
const jsonPokemon = path.join(__dirname, "../models/teste.json")
const services = require("../services/LegendariesService.js")

const controller = {
    get: (req, res) => {
        res.sendFile(jsonPokemon)
    },
    delete: (req, res) => {
        const { id } = req.params;

        let readJson = fs.readFileSync(jsonPokemon)
        let jsonObjeto = JSON.parse(readJson)

        jsonObjeto.array.forEach(element => {
            if(element.id == id){
                element.name = null, 
                element.description = null, 
                element.type = null, 
                element.healthPoints = null, 
                element.specialAttack = null, 
                element.defense = null, 
                element.attack = null, 
                element.experience = null, 
                element.specialDefense = null
            }
        })
        
        let transformarjson = JSON.stringify(jsonObjeto, null, 2)

        fs.writeFileSync(jsonPokemon, transformarjson)

        res.status(200).send("checar com GET")
        
    },
    put: (req, res) => {
        const { id } = req.params;

        let readJson = fs.readFileSync(jsonPokemon)
        let jsonObjeto = JSON.parse(readJson)

        const { 
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        } = req.body;

        jsonObjeto.array.forEach(element => {
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
        })
        
        let transformarjson = JSON.stringify(jsonObjeto, null, 2)

        fs.writeFileSync(jsonPokemon, transformarjson)

        res.status(200).send("checar com GET")
    },
    post: (req, res) => {
        const { 
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        } = req.body;

        const legendary = services.createLegendary(
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
        
        return res.json(legendary);
    }
}

module.exports = controller