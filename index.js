import express from "express";

const port = 8000;
const app = express();

app.get("/hello", (req, res) => {
    res.send("Hey!");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
