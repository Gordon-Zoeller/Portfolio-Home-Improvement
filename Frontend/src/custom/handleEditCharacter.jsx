export default function handleEditCharacter(e, editCharacter) {
    e.preventDefault();
    const editedChar = {
        oldFirstname: e.target.oldFirstname.value,
        oldLastname: e.target.oldLastname.value,
        oldJob: e.target.oldJob.value,
        newFirstname: e.target.newFirstname.value,
        newLastname: e.target.newLastname.value,
        newJob: e.target.newJob.value,
    };
    editCharacter(editedChar);
    e.target.oldFirstname.value = "";
    e.target.oldLastname.value = "";
    e.target.oldJob.value = "";
    e.target.newFirstname.value = "";
    e.target.newLastname.value = "";
    e.target.newJob.value = "";
};