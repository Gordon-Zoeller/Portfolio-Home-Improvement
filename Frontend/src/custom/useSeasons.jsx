import { useState } from "react";

export function useSeasons() {
    const [seasons, setSeasons] = useState([]);
    async function getSeasons() {
        try {
            const response = await fetch("http://localhost:5000/seasons");
            if(response.ok === true) {
                const data = await response.json();
                setSeasons(data);
            } else {
                let error = new Error("Error: I was unable to retrieve the data you requested.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    return {seasons, getSeasons};
};