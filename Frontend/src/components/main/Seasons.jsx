import { useContext } from "react";
import { Context } from "../../context/CreateContext";

export default function Seasons() {
    const {seasons} = useContext(Context);
    return (
        <>
            <h3>Seasons</h3>
            <ul>
                {seasons.map(season => <li key={season.id}>{season.season}</li>)}
            </ul>
        </>
    );
};