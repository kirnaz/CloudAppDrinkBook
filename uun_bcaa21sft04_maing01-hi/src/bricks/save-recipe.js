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
  const path = require("path"),
//@fixme  const uuCookBook = require("??????");
  let recipeSaved = new cookBookLibrary(path.join(__dirname, "..", "..", "storage", "recipes.json"))
  
  async function UpdateLib(req, res) {
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
 
 
  render(props) {
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
/*