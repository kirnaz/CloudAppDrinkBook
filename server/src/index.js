const express = require("express");
const cors = require("cors");
const dataStorage = require("./dataStorage");
const { uid } = require("uid");
const joi = require("joi");
const shuffle = require('array-shuffle')

const app = express();
const port = 3001;

app.use(express.json())
app.use(cors({}))

app.post("/api/recipe/create", addRecipe);
app.get("/api/recipe/:id", getRecipe);
app.put("/api/recipe/:id", editRecipe);
app.delete("/api/recipe/:id", deleteRecipe);
app.get("/api/recipes/list", listRecipes);
app.post("/api/recipes/find", findRecipes);
app.post("/api/ingredient/create", addIngredient);
app.get("/api/ingredients/list", listIngredients);
app.get("/api/categories", getCategories);
app.get("/api/recipes/random", getRandomRecipes);

app.listen(port, () => {
    console.log(`on port ${port}`)
})

async function addRecipe(req, res) {

    const schema = joi.object({
        "recipeName": joi.string().required(),
        "numberOfPortions": joi.number().required(),
        "timeForPreparation": joi.number().required(),
        "category": joi.number().required(),
        "listOfIngredients": joi.array().items(joi.object(
            {
                "ingredientName": joi.string().required(),
                "ingredientAmount": joi.number().required(),
                "ingredientMeasure": joi.string().required()
            })).required()
        ,
        "steps": joi.array().items(joi.string()).required()
    })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.json({ error: error.message })
    }

    const data = await dataStorage.load();

    const id = uid();
    const recipe = Object.assign({}, req.body, { recipeID: id });
    data.recipes.push(recipe)

    await dataStorage.save(data)

    res.json({ value: recipe })
}


async function getRecipe(req, res) {


    const data = await dataStorage.load()
    const id = req.params.id
    const returnedRecipe = data.recipes.find(recipe => {
        return recipe.recipeID === id
    })

    if (returnedRecipe === undefined) {
        res.json({ error: "The recipe was not found" })
    } else {
        res.json({ value: returnedRecipe })
    }

}

async function editRecipe(req, res) {

    const schema = joi.object({
        "recipeName": joi.string(),
        "numberOfPortions": joi.number(),
        "timeForPreparation": joi.number(),
        "category": joi.number(),
        "listOfIngredients": joi.array().items(joi.object(
            {
                "ingredientName": joi.string().required(),
                "ingredientAmount": joi.number().required(),
                "ingredientMeasure": joi.string().required()
            }))
        ,
        "steps": joi.array().items(joi.string())
    })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.json({ error: error.message })
    }

    const data = await dataStorage.load();

    const id = req.params.id
    const returnedRecipe = data.recipes.find(recipe => {
        return recipe.recipeID === id
    });

    if (returnedRecipe === undefined) {
        res.json({ error: "The recipe was not found" })
    } else {
        const edittedRecipe = Object.assign(returnedRecipe, req.body);

        await dataStorage.save(data);

        res.json({ value: edittedRecipe })
    }
}

async function deleteRecipe(req, res) {
    const data = await dataStorage.load();

    const id = req.params.id
    const filteredRecipes = data.recipes.filter(recipe => {
        return recipe.recipeID !== id
    });

    data.recipes = filteredRecipes;

    await dataStorage.save(data);

    res.json({ value: {} })
}

async function listRecipes(req, res) {
    const data = await dataStorage.load();

    res.json({ value: data.recipes })
}


async function findRecipes(req, res) {

    const schema = joi.object({
        "recipeNameQuery": joi.string().max(255),
        "timeForPreparationMax": joi.number(),
        "category": joi.number(),
        "ingredientNames": joi.array().max(3).items(joi.string())
    })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.json({ error: error.message })
    }

    //name, timeforprep, category, ingredientsName
    const data = await dataStorage.load();

    const foundRecipes = data.recipes.filter(recipe => {

        return (
            (req.body.recipeName === undefined || recipe.recipeName.toLowerCase().includes(req.body.recipeNameQuery.toLowerCase())) &&
            (req.body.timeForPreparationMax === undefined || req.body.timeForPreparationMax >= recipe.timeForPreparation) &&
            (req.body.category === undefined || req.body.category === recipe.category) &&
            (req.body.ingredientNames === undefined || recipe.listOfIngredients.filter(ingredient => {
                return req.body.ingredientNames.includes(ingredient.ingredientName)
            }).length === req.body.ingredientNames.length)
        )
    })
    res.json({ value: foundRecipes })

}

async function addIngredient(req, res) {

    const schema = joi.object({
        "ingredientName": joi.string().max(50).required()
    })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.json({ error: error.message })
    }

    const data = await dataStorage.load();

    const id = uid();
    const ingredient = Object.assign({}, req.body, { ingredientID: id });
    data.ingredients.push(ingredient)

    await dataStorage.save(data)

    res.json({ value: ingredient })
}

async function listIngredients(req, res) {
    const data = await dataStorage.load();

    res.json({ value: data.ingredients })
}

async function getCategories(req, res) {
    const data = await dataStorage.load();
    const categories = data.categories

    res.json({ value: categories })
}

async function getRandomRecipes(req, res) {
    const data = await dataStorage.load();
    const random = shuffle(data.recipes).slice(0, 5);

    res.json({ value: random })

}