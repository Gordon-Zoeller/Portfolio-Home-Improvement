export default function handleSingleCharacter(e, getCharacter, navigate) {
    e.preventDefault();
    navigate(`/characters/1/${e.target.fav.value}`);
    getCharacter(e.target.fav.value);
    e.target.fav.value = "";
};