import { useState } from "react";

export function useDeleteCharacter() {
    const [deleteChar, setDeleteChar] = useState([]);
    async function deleteCharacter(delChar) {
        try {
            const response = await fetch("http://localhost:5000/characters/4", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify(delChar)});
            if(response.ok === true) {
                const data = await response.json();
                setDeleteChar(data);
            } else {
                let error = new Error("Error: I was unable to retrieve the data you requested.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    return {deleteChar, deleteCharacter};
};