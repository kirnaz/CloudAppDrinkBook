//@@viewOn:imports
import Config from "./config/config";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";
import UU5 from "uu5g04";
import Uu5Tiles from "uu5tilesg02";
//@@viewOff:imports

const STATICS = {
    //@@viewOn:statics
    displayName: Config.TAG + "AboutRecipe",
    //@@viewOff:statics
  };

export const AboutRecipe = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "aboutRecipe",
  //@@viewOff:statics

  render() {
    const recipeSchema = [
      {
        "recipeName": "Gin & Tonic",
        "numberOfPortions": 1,
        "timeForPreparation": 5,
        "category": 1,
        "listOfIngredients": [
          {
            "ingredientName": "Gin",
            "ingredientAmount": 70,
            "ingredientMeasure": "ml"
          },
          {
            "ingredientName": "Tonic water",
            "ingredientAmount": 50,
            "ingredientMeasure": "ml"
          }
        ],
        "steps": [
          "In a glass filled with ice cubes, add gin and tonic.",
          "Put a straw into the glass."
        ],
        "recipeID": "2cb62b3c43b"
      },
      {
        "recipeName": "Cuba Libre",
        "numberOfPortions": 1,
        "timeForPreparation": 5,
        "category": 1,
        "listOfIngredients": [
          {
            "ingredientName": "Rum",
            "ingredientAmount": 50,
            "ingredientMeasure": "ml"
          },
          {
            "ingredientName": "Coca-Cola",
            "ingredientAmount": 100,
            "ingredientMeasure": "ml"
          },
          {
            "ingredientName": "lime",
            "ingredientAmount": 1,
            "ingredientMeasure": "slice"
          }
        ],
        "steps": [
          "Pour rum into the glass",
          "Add coca-cola",
          "Add lime slice"
        ],
        "recipeID": "bae3d0b0329"
      },
      {
        "recipeName": "Frozen Irish Coffee",
        "numberOfPortions": 2,
        "timeForPreparation": 20,
        "category": 3,
        "listOfIngredients": [
          {
            "ingredientName": "Strong black coffee",
            "ingredientAmount": 470,
            "ingredientMeasure": "g"
          },
          {
            "ingredientName": "Sweetened cream",
            "ingredientAmount": 355,
            "ingredientMeasure": "ml"
          },
          {
            "ingredientName": "Irish whiskey",
            "ingredientAmount": 90,
            "ingredientMeasure": "ml"
          },
          {
            "ingredientName": "Melted chocolate",
            "ingredientAmount": 1,
            "ingredientMeasure": "bar"
          }
        ],
        "steps": [
          "Pour coffee into ice molds and freeze",
          "Pour sweetened cream into ice molds and freeze",
          "Whip the remaining cream",
          "Take 4 cubes of frozen coffee, place in a blender, add whiskey and blend",
          "add 2 cubes of frozen cream and a spoon of chocolate"
        ],
        "recipeID": "0649f7a197e"
      }
    ]
    function renderItem(item) {
      console.log(item.data);
      return (
        <UU5.Bricks.Card>{item.data.recipeName}</UU5.Bricks.Card>
        //<RecipeGrid recipe={item.data} colorSchema="green" />
      );
    }
    //@@viewOn:render
    return (
    <>
    <UU5.Bricks.Section>
    <Uu5Tiles.Grid
      data={recipeSchema}
      tileHeight="auto"
      tileMinWidth={200}
      tileMaxWidth={400}
      tileSpacing={8}
      rowSpacing={8}
    >
      {renderItem}
    </Uu5Tiles.Grid>
    </UU5.Bricks.Section>
    </>
    );
    //@@viewOff:render
  },
});

export default AboutRecipe; 