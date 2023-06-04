const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const UserModel = require("../src/models/user.model");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/cadastrado", async (req, res) => {
  res.send("logado com sucesso!")
});

app.post("/users", async (req, res) => {
  try {
    const { nome, email, pass } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pass, saltRounds);

    const user = await UserModel.create({
      nome: nome,
      email: email,
      pass: hashedPassword,
    });

    // res.status(201).json(user);
    res.send("<h1>Cadastrado com sucesso</h1>")
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).send("Email ou senha inválidos");
    }

    const acharSenha = await bcrypt.compare(pass, user.pass);

    if (!acharSenha) {
      return res.status(401).send("Email ou senha inválidos");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // res.status(200).json({ token });
    res.redirect("http://localhost:5500/cadastrado")
  } catch (error) {
    res.status(500).send(error.message);
  }
});


const port = 5500;

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}!`);
});
