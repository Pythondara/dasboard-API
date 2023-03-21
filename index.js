import express from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.get("/hello", (req, res) => {
    // res.send("Hey!");
    res.end();
});

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// 'hel?lo' = hello , helo
// 'hel+lo' = hello, helo, helllllllllllllllllllllllo
// 'hel*lo' = hello, helsdfsdfwewefsdfsdfsdfsdfsdfsfsfsdfslo
// 'he(la)?lo' = hello, helalo
// '/.*a$/' = a mean is ending of string example = dfgdfgjfgjdfgdnmfbgdfnma
