import { useContext } from "react";
import { Context } from "../../context/CreateContext";

export default function Characters() {
    const {characters} = useContext(Context);
    return (
        <>
            <h3>Characters</h3>
            <ul>
                {characters.map(character => <li key={character.id}>{character.firstName} {character.lastName}</li>)}
            </ul>
        </>
    );
};