import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length < 10) {
    res.send(tweets);
  } else {
    res.send(tweets.slice(tweets.length - 10, tweets.length));
  }
});
app.post("/tweets", (req, res) => {
  let user = req.body;
  let userFind = users.find((element) => element.username === user.username);
  user.avatar = userFind.avatar
  tweets.push(user)  
  res.send("OK")
});

app.listen(5000);