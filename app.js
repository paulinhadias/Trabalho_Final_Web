const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos Estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rota Principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// AJAX
app.get("/destaques", (req, res) => {
  res.json({
    titulo: "Jogo do Ano 2025",
    descricao: "Um dos títulos mais premiados e aclamados pela crítica em 2025.",
    imagem: "https://cdn1.epicgames.com/spt-assets/330dace5ffc74156987f91d454ac544b/project-w-1kt2x.jpg"
  });
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Array para guardar votos
const votos = [];

app.post("/votar", (req, res) => {
  
  const { nome, email, jogo } = req.body;
  if (!nome || !email || !jogo) {
    return res.status(400).json({ mensagem: "Dados incompletos" });
  }
  votos.push({ nome, email, jogo });
  res.json({ mensagem: "Voto registrado com sucesso!" });

});

