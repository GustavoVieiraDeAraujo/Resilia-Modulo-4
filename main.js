//Importando modulo
import express from "express"

const app =  express()
const router = express.Router()

// Middleware
app.use(express.json())

// Banco de dados 'mocado'
let BdPiadas = []

//retorna dica
router.get("/tips", (request, response) => {
    try{
        if(BdPiadas.length === 0 ){
            throw new Error('Não temos dicas no momento')
        }else{
            const indexAleatorio = Math.floor(Math.random() * BdPiadas.length)
            response.status(200).send(BdPiadas[indexAleatorio])
        }
    }catch(e){
        response.status(400).send(`Falha ao gerar a dica. Erro => ${e.message}`)
    }
})

// cria dica
router.post("/create", (request, response) => {
    //Para passar a dica na rota, basta adicionar "/:dica" na rota existente
    //Depois trocar "request.body.dica" por "request.params.dica"
    try{
        BdPiadas.push(request.body.dica)
        response.status(201).send("Dica criada com sucesso")
    }catch(e){
        response.status(400).send(`Falha ao criar a piada. Erro => ${e.message}`)
    }
})

app.use("/dicas", router)

app.listen(3000, ()=>{
    console.log("API rodando na porta 3000")
})