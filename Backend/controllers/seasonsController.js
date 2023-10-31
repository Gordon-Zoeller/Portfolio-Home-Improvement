export const seasons = (req, res) => {
    res.status(200).sendFile("models/seasons.json", {root: "."});
};