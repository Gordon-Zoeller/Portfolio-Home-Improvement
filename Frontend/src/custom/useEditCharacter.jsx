import { useState } from "react";

export function useEditCharacter() {
    const [editedChar, setEditChar] = useState([]);
    async function editCharacter(edChar) {
        try {
            const response = await fetch("http://localhost:5000/characters/3", {method: "PATCH", headers: {"Content-Type": "application/json"}, body: JSON.stringify(edChar)});
            if(response.ok === true) {
                const data = await response.json();
                setEditChar(data);
            } else {
                let error = new Error("Error: I was unable to retrieve the data you requested.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    return {editedChar, editCharacter};
};