import { useContext } from "react";
import { Context } from "../../context/CreateContext";
import handleEditCharacter from "../../custom/handleEditCharacter";

export default function EditCharacter() {
    const {editedChar, editCharacter} = useContext(Context);
    return (
        <>
            <h3>Edit Character</h3>
            <form onSubmit={(e) => handleEditCharacter(e, editCharacter)}>
                <label htmlFor="oldFirstname">Old Firstname</label>
                <input type="text" name="oldFirstname" id="oldFirstname" />
                <label htmlFor="oldLastname">Old Lastname</label>
                <input type="text" name="oldLastname" id="oldLastname" />
                <label htmlFor="oldJob">Old Job</label>
                <input type="text" name="oldJob" id="oldJob" />
                <hr />
                <label htmlFor="newFirstname">New FirstName</label>
                <input type="text" name="newFirstname" id="newFirstname" />
                <label htmlFor="newLastname">New Lastname</label>
                <input type="text" name="newLastname" id="newLastname" />
                <label htmlFor="newJob">New Job</label>
                <input type="text" name="newJob" id="newJob" />
                <button type="submit">submit</button>
            </form>
            <p>{editedChar}</p>
        </>
    );
};