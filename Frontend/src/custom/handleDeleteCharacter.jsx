export default function handleDeleteCharacter(e, deleteCharacter) {
    e.preventDefault();
    const delChar = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
    };
    deleteCharacter(delChar);
    e.target.firstName.value = "";
    e.target.lastName.value = "";
};