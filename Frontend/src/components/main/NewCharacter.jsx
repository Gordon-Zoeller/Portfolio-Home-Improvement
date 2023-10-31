import { useContext } from "react";
import { Context } from "../../context/CreateContext";
import handleNewCharacter from "../../custom/handleNewCharacter";

export default function NewCharacter() {
    const {newChar, postNewChar} = useContext(Context);
    return (
        <>
            <h3>New Character</h3>
            <form onSubmit={(e) => handleNewCharacter(e, postNewChar)}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
                <button type="submit">submit</button>
            </form>
            <p>{newChar}</p>
        </>
    );
};