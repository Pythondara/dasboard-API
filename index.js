import express from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log("Time ", Date.now());
    next();
});

app.get("/hello", (req, res) => {
    throw new Error("!!!Error!!!");
});

app.use("/users", userRouter);

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(401).send(err.message);
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// 'hel?lo' = hello , helo
// 'hel+lo' = hello, helo, helllllllllllllllllllllllo
// 'hel*lo' = hello, helsdfsdfwewefsdfsdfsdfsdfsdfsfsfsdfslo
// 'he(la)?lo' = hello, helalo
// '/.*a$/' = a mean is ending of string example = dfgdfgjfgjdfgdnmfbgdfnma
