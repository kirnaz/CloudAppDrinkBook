//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SaveRecipe",
  //@@viewOff:statics
};

export const SaveRecipe = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps
//  const path = require("path"),
//@fixme  const uuCookBook = require("??????");
 

 
render({children}) {
 async function createIngredient(req, res) {
    let {id, name} = req.body;
    if (
        name && typeof name === "string" && name.length < 30 &&
        id && typeof id === "string" && id.length < 25
    ) {
        const ingredients = {id, name, approved: false};
        try {
            let result = await dao.addIngredients(ingredients);
            res.status(200).json(result);
        } catch (e) {
            if (e.code === "DUPLICATE_CODE") {
                res.status(400).json({error: e})
            } else if (e.code === "FAILED_TO_STORE_INGREDIENTS") {
                res.status(500).json({error: e})
            } else {
                res.status(500).json({error: e})
            }
        }
    } else {
        res.status(400).json({
            "error": "Invalid dtoIn"
        })
    }
}



  
  async function createRecipe(req, res) {
    let {id, name, ingredientsList} = req.body;
    if (
        name && typeof name === "string" && name.length < 200 &&
        ingredientsList && ingredientsList.length > 0 && ingredientsList.length < 10 &&
        id && typeof id === "string" && id.length < 25
    ) {
        for (let i = 0; i< ingredientsList.length; i++) {
            try {
                await ingredientsDao.getingredients(ingredientsList[i])
            } catch (e) {
                if (e.code === "FAILED_TO_GET_INGREDIENTS") {
                    res.status(400).json({error: e})
                } else {
                    res.status(500).json({error: e})
                }
            }
        }
        const recipe = {id, name, ingredientsList};
        try {
            let result = await dao.addrecipe(book);
            res.status(200).json(result);
        } catch (e) {
            if (e.code === "DUPLICATE_CODE") {
                res.status(400).json({error: e})
            } else if (e.code === "FAILED_TO_STORE_RECIPE") {
                res.status(500).json({error: e})
            } else {
                res.status(500).json({error: e})
            }
        }
    } else {
        res.status(400).json({
            "error": "Invalid dtoIn"
        })
    }
}


    return children({createIngredient, createRecipe})},
});

export default SaveRecipe;


/* 
  async function UpdateAbl(req, res) {
      let {id, name, ingredientsList} = req.body;
      if (
          (id && typeof id === "string" && id.length < 25) &&
          (name && typeof name === "string" && name.length < 200) &&
          (ingredientsList && ingredientsList.length > 0 && ingredientsList.length < 10)
      ) {
          const recipe = {id, name, ingredientsList, howTo};
          try {
              let result = await cookBook.updateRecipe(recipe);
              res.status(200).json(result);
          } catch (e) {
              if (e.code === "FAILED_TO_GET_RECIPE") {
                  res.status(400).json({error: e})
              } else if (e.code === "FAILED_TO_UPDATE_RECIPE") {
                  res.status(500).json({error: e})
              } else {
                  res.status(500).json({error: e})
              }
          }
      } else {
          res.status(400).json({
              "error": "Invalid dtoIn"
          })
      }
  }
  
  module.exports = SaveRecipe;
*/ 
 
  //render(props) {}
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

/*    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div>Component {STATICS.displayName}</div>
        {UU5.Utils.Content.getChildren(props.children, props, STATICS)}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default SaveRecipe;
*/