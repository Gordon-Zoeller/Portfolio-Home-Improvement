import express from "express";
import seasonsRoute from "./routes/seasonsRoute.js";
import charactersRoute from "./routes/charactersRoutes.js";
import imagesRoute from "./routes/imagesRoute.js";

const app = express();
const PORT = 5000; //when I deploy I wont't need a port, because GitHub will provide one; npm i dotenv; import "dotenv/config"; const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./views/public"));
app.use((req, res, next) => { //custom cors
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    next();
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use("/seasons", seasonsRoute);
app.use("/characters", charactersRoute);
app.use("/models", imagesRoute);

app.use((req, res) => {
    res.status(404).send("404 Page Not Found");
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || "Internal Server Error.");
});

app.listen(PORT, () => console.log("The server is running on port:", PORT));