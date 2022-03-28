const express = require('express');
const path = require('path');
require('dotenv').config()
const Filme = require("./model/filmes");
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());




const catalogo = [
  {
      id: 1,
      nome: "Jurassic Park",
      ano: 1993,
      genero: "Aventura",
      tipo: "filme",
      descricao:"Durante um tour o parque sofre falta de energia eléctrica o que faz que um dinossauro clonado saia do seu claustro.",
      imagem: "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/4/941620150620-uau-posters-filme-jurassic-world-2.jpg",
  },
  {
    id: 2,
    nome: "O Demolidor",
    ano: 1994,
    genero: "Policial",
    tipo: "filme",
    descricao:"Durante um tour o parque sofre falta de energia eléctrica o que faz que um dinossauro clonado saia do seu claustro.",
    imagem: "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/4/941620150620-uau-posters-filme-jurassic-world-2.jpg",
  },
  {
    id: 3,
    nome: "Jurassic Park",
    ano: 1994,
    genero: "Aventura",
    tipo: "filme",
    descricao:"Durante um tour o parque sofre falta de energia eléctrica o que faz que um dinossauro clonado saia do seu claustro.",
    imagem: "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/4/941620150620-uau-posters-filme-jurassic-world-2.jpg",
  }
]


//Rotas //

app.get("/", async (req, res) => {
  const filmes = await Filme.findAll();

  res.render("index", {
    filmes,
  });
});



app.post("/add",(req, res) => {
  const catalogo = req.body;
  filme.id = catalogo.length + 1;
  catalogo.push(filme);
  message = `Parabéns! Filme cadastrado com sucesso!`;
  setTimeout(() => {
      message = ""
  }, 5000);
  res.redirect("/");
})

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id
  const filme = catalogo[id-1]
  res.render("detalhes.ejs", { filme:filme })
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro.ejs")
}); 


app.listen(port || process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${port}`));