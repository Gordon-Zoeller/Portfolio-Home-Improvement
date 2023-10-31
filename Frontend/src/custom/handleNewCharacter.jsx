export default function handleNewCharacter(e, postNewChar) {
    e.preventDefault();
    const newChar = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
    };
    postNewChar(newChar);
    e.target.firstName.value = "";
    e.target.lastName.value = "";
};