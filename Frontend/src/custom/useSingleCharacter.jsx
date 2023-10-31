import { useState } from "react";

export function useSingleCharacter() {
    const [character, setCharacter] = useState([]);
    async function getCharacter(firstName) {
        try {
            const response = await fetch(`http://localhost:5000/characters/1/${firstName}`, {method: "POST", body: JSON.stringify(firstName)});
            if(response.ok === true) {
                const data = await response.json();
                setCharacter(data);
            } else {
                let error = new Error("Error: I was unable to retrieve the data you requested.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    return {character, getCharacter};
};

//headers: {"Content-Type": "application/json"},