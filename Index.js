import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

function post(titulo, comentario) {
    this.title = titulo;
    this.comment = comentario;
};


app.get("/", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/create", (req, res) => {
    const p1 = new post(req.body["post-title"],req.body["post-comment"]);
    posts.push(p1);

    res.redirect("/");
});   

app.listen(port, () => {
    console.log("Server running");
});