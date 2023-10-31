import { useContext } from "react";
import handleDeleteCharacter from "../../custom/handleDeleteCharacter";
import { Context } from "../../context/CreateContext";

export default function DeleteCharacter() {
    const {deleteChar, deleteCharacter} = useContext(Context);
    return (
        <>
            <h3>Delete Character</h3>
            <form onSubmit={(e) => handleDeleteCharacter(e, deleteCharacter)}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
                <button type="submit">submit</button>
            </form>
            <p>{deleteChar}</p>
        </>
    );
};