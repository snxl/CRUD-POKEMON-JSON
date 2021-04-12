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

        let jsonCarregado = fs.readFileSync(jsonPokemon)

        let jsonParaDeletar = JSON.parse(jsonCarregado)

        jsonParaDeletar.forEach(element => {
            
        });

        res.json(jsonParaDeletar)
    },
    put: (req, res) => {
        const { id } = req.params;

        let jsonCarregado = fs.readFileSync(jsonPokemon)
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