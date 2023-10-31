import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/CreateContext";
import handleSingleCharacter from "../../custom/handleSingleCharacter";

export default function SingleCharacter() {
    const {character, getCharacter} = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
            <h3>Favorite Character</h3>
            <form onSubmit={(e) => {handleSingleCharacter(e, getCharacter, navigate)}}>
                <label htmlFor="fav">Who is your favorite character?</label>
                <input type="text" name="fav" id="fav" />
                <button type="submit">submit</button> 
            </form>
            <p>{character?.firstName} {character?.lastName}</p>
            <p>{character?.job}</p>
            {character?.img && <img src={character?.img} alt="character portrait" />}
        </>
    );
};