import { useLocation } from "react-router-dom";
import Seasons from "./Seasons";
import Characters from "./Characters";
import SingleCharacter from "./SingleCharacter";
import NewCharacter from "./NewCharacter";
import EditCharacter from "./EditCharacter";
import DeleteCharacter from "./DeleteCharacter";

export default function Display() {
    const location = useLocation();
    return (
        <>
            {location.state?.page === "seasons" && <Seasons/>}
            {location.state?.page === "characters" && <Characters/>}
            {location.state?.page === "characters/1" && <SingleCharacter/>}
            {location.state?.page === "characters/2" && <NewCharacter/>}
            {location.state?.page === "characters/3" && <EditCharacter/>}
            {location.state?.page === "/characters/4" && <DeleteCharacter/>}
        </>
    );
};