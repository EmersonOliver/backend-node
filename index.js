const express = require('express');


const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Ola"
    });
});

app.get("/produtos", (req, res)=>{
    res.json([
        {
            nome:"TV"

        },
        {
            nome:"SOFA"
        }
    ])
})

const PORT = 3000;

app.listen(process.env.PORT || PORT,  ()=>{
    console.log('Estou rodando na porta ' + PORT)
});