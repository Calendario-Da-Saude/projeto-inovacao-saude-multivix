const nodemailer = require("../nodemailer");

const transporte = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "calendariomultivix@gmail.com",
        pass: "jzcrblonwwileyya",
    }
});

let remetente = "Calendário da saúde multivix <calendariomultivix@gmail.com>";
let destinario = "guilherme.ismael777@gmail.com";
let assunto = "Enviando email nodemailer";
let corpoHtml =  "<h1>Teste html</h1> <p> email passo com html</p>";
let corpoTexto = "email passado como texto";

transporte.sendMail({
    from: remetente,
    to: destinario,
    subject: assunto,
    html: corpoHtml,
    text: corpoTexto,
})
.then(() => console.log("Email envaido com sucesso!"))
.catch((error) => console.log("erro ao enviar email:", error))