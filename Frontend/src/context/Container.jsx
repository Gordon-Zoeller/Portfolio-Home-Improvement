import { Context } from "./CreateContext";
import { useCharacters } from "../custom/useCharacters";
import { useSeasons } from "../custom/useSeasons";
import { useSingleCharacter } from "../custom/useSingleCharacter";
import { useNewCharacter } from "../custom/useNewCharacter";
import { useEditCharacter } from "../custom/useEditCharacter";
import { useDeleteCharacter } from "../custom/useDeleteCharacter";

export default function Container({children}) {
    const {characters, getCharacters} = useCharacters();
    const {seasons, getSeasons} = useSeasons();
    const {character, getCharacter} = useSingleCharacter();
    const {newChar, postNewChar} = useNewCharacter();
    const {editedChar, editCharacter} = useEditCharacter();
    const {deleteChar, deleteCharacter} = useDeleteCharacter();
    return (
        <>
            <Context.Provider value={{
                characters,
                getCharacters,
                seasons,
                getSeasons,
                character,
                getCharacter,
                newChar,
                postNewChar,
                editedChar,
                editCharacter,
                deleteChar,
                deleteCharacter,
            }}>
                {children}
            </Context.Provider>
        </>
    );
};