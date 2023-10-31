import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/CreateContext";

export default function Links() {
    const {getCharacters, getSeasons} = useContext(Context);
    return (
        <>
            <ul className="routes">
                <li><NavLink className="text-dec-none" to="/seasons" state={{page: "seasons"}} onClick={() => getSeasons()}>Seasons</NavLink></li>
                <li><NavLink className="text-dec-none" to="/characters" state={{page: "characters"}} onClick={() => getCharacters()}>Characters</NavLink></li>
                <li><NavLink className="text-dec-none" to="/characters/1" state={{page: "characters/1"}}>Favorite Character</NavLink></li>
                <li><NavLink className="text-dec-none" to="/characters/2" state={{page: "characters/2"}}>New Character</NavLink></li>
                <li><NavLink className="text-dec-none" to="/characters/3" state={{page: "characters/3"}}>Edit Character</NavLink></li>
                <li><NavLink className="text-dec-none" to="/characters/4" state={{page: "/characters/4"}}>Delete Character</NavLink></li>
            </ul>
        </>
    );
};