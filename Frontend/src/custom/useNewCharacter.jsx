import { useState } from "react"

export function useNewCharacter() {
    const [newChar, setNewChar] = useState([]);
    async function postNewChar(charName) {
        try {
            const response = await fetch(`http://localhost:5000/characters/2`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(charName)});
            if(response.ok === true) {
                const data = await response.json();
                setNewChar(data);
            } else {
                let error = new Error("Error: I was unable to retrieve the data you requested.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    return {newChar, postNewChar};
};