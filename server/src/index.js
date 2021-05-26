const express = require("express");
const cors = require("cors");
const dataStorage = require("./dataStorage")
const app = express();
const port = 3001;

app.use(express.json())
app.use(cors({}))

app.get("/api/recipe/:id", getRecipe)

app.listen(port, () => {
    console.log(`on port ${port}`)
})

async function getRecipe(req,res){
    const data = await dataStorage.load()
    res.json(data.recipes[0])
}
