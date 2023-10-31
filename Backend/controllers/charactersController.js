import charID from "../models/characters.json" assert {type: "json"};

const characters = (req, res) => {
    res.status(200).json(charID); //sendFile("models/characters.json", {root: "."});
};

const singleCharacter = (req, res) => {
    const character = charID.find(char => char.firstName === req.params.firstName);
    res.status(200).json(character);
};

const newCharacter = (req, res) => {
    charID.push({...req.body, id: charID.length + 1});
    res.status(200).json("Your character was added - check the list of characters to see the one you added.");
};

const editCharacter = (req, res) => {
    const character = charID.find(char => char.firstName === req.body.oldFirstname && char.lastName === req.body.oldLastname);
    character.firstName = req.body.newFirstname;
    character.lastName = req.body.newLastname;
    character.job = req.body.newJob;
    res.status(200).json("Your character was edited - check the list of characters to see the changes.");
};

const deleteCharacter = (req, res) => {
    console.log(req.body);
    const index = charID.findIndex(char => char.firstName === req.body.firstName && char.lastName === req.body.lastName);
    charID.splice(index, 1);
    res.status(200).json("Character successfully deleted.");
};

export {characters, singleCharacter, newCharacter, editCharacter, deleteCharacter};