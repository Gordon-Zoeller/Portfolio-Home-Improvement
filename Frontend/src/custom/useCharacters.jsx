import { useState } from "react";

export function useCharacters() {
    const [characters, setCharacters] = useState([]);
    async function getCharacters() {
        try {
            const response = await fetch("http://localhost:5000/characters");
            if(response.ok === true) {
                const data = await response.json();
                setCharacters(data);
            } else {
                let error = new Error("Error: I was unable to retrieve the data you requested.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    return {characters, getCharacters};
};