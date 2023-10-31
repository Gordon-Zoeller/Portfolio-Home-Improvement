export const charImage = (req, res) => {
    switch(req.params.charName) {
        case "timTaylor": res.status(200).sendFile("models/timTaylor.png", {root: "."});
        break;
        case "jillTaylor": res.status(200).sendFile("models/jillTaylor.png", {root: "."});
        break;
        case "bradTaylor": res.status(200).sendFile("models/bradTaylor.png", {root: "."});
        break;
        case "randyTaylor": res.status(200).sendFile("models/randyTaylor.png", {root: "."});
        break;
        case "markTaylor": res.status(200).sendFile("models/markTaylor.png", {root: "."});
        break;
        case "alBorland": res.status(200).sendFile("models/alBorland.png", {root: "."});
        break;
        case "wilsonWilson": res.status(200).sendFile("models/wilsonWilson.png", {root: "."});
        break;
        case "lisa": res.status(200).sendFile("models/lisa.png", {root: "."});
        break;
        case "heidiKeppert": res.status(200).sendFile("models/heidiKeppert.png", {root: "."});
        break;
        default: res.send("hello world");
    };
};