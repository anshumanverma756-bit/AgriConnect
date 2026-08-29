import dotenv from "dotenv"
import express from "express"


dotenv.config({
  path: "./.env",
});

let username = process.env.username;

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req,res) =>{
  res.send("what's up");

});

app.get("/require", (req, res) => {
  res.send("Welcome to the require page")
});


app.listen(port ,() =>{
  console.log(`Example app is listening http://localhost:${port}`);
});

