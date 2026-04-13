import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

function post(titulo, comentario) {
    this.id = Date.now();
    this.title = titulo;
    this.comment = comentario;
}


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

app.get("/edit/:id", (req,res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("edit.ejs", {post});
});

app.post("/edit/:id", (req,res) => {
    const post = posts.find(p => p.id == req.params.id);

    post.title = req.body.title;
    post.comment = req.body.comment;

    console.log(req.params.id);
    console.log(posts);

    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Server running");
});