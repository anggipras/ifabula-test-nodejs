//Soal Interview Nomor 10
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());

app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Ifabula Test Service is Working");
});

app.get("/user", (req, resp) => {
    if (req.headers.scope === "user" && req.headers.userid === "ifabula") {
        return resp.send({ username: "username", password: "password"});
    }
    return resp.status(401).send({ responseCode: 401, responseMessage: "UNAUTHORIZED"});
});

app.post("/postuser", (req, resp) => {
    if (req.headers.scope === "user" && req.headers.userid === "ifabula") {
        return resp.send(req.body);
    }
    return resp.status(401).send({ responseCode: 401, responseMessage: "UNAUTHORIZED"});
});
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});