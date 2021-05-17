//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "EditRecipe",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const EditRecipe = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    recipe:UU5.PropTypes.shape({
      recipeID:UU5.PropTypes.string.isRequired,
      recipeName:UU5.PropTypes.string.isRequired,
      numberOfPortions:UU5.PropTypes.number.isRequired,
      timeForPreparation:UU5.PropTypes.number.isRequired,
      listOfIngredients:UU5.PropTypes.arrayOf(
        UU5.PropTypes.shape({
          ingredientID:UU5.PropTypes.string.isRequired,
          ingredientAmount:UU5.PropTypes.number.isRequired
        }).isRequired
      ).isRequired,
      steps:UU5.PropTypes.string.isRequired

    }).isRequired,
    ingredients:UU5.PropTypes.arrayOf(
      UU5.PropTypes.shape({
        ingredientID:UU5.PropTypes.string.isRequired,
        ingredientName:UU5.PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    categoryList:UU5.PropTypes.arrayOf(
      UU5.PropTypes.shape({
        id:UU5.PropTypes.string.isRequired,
        name:UU5.PropTypes.string.isRequired
      })
    ).isRequired,
    recipeEdit:UU5.PropTypes.func.isRequired,
    recipeDelete:UU5.PropTypes.func.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    recipe:null,
    ingredients:null,
    categoryList:null,
    recipeEdit:()=>{},
    recipeDelete:()=>{}
  },
  //@@viewOff:defaultProps

  render({recipe,ingredients,categoryList,recipeEdit,recipeDelete}) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    if(!recipe || !ingredinets || !categoryList) return null;
    
    return(
      <div>
        <UU5.Bricks.Header>
          My recipes
        </UU5.Bricks.Header>
        <UU5.Bricks.Button onClick={recipeDelete}>Delete</UU5.Bricks.Button>
        <UU5.Bricks.Button onClick={recipeEdit}>Save</UU5.Bricks.Button>

        <UU5.Forms.Form>
          <UU5.Forms.Text value={recipe.name}>name</UU5.Forms.Text>
          <UU5.Forms.Number value={recipe.timeForPreparation}>timeForPreparation</UU5.Forms.Number>
          <UU5.Forms.Number value={recipe.numberOfPortions}>numberOfPortions</UU5.Forms.Number>
          <UU5.Forms.SwitchSelector>category</UU5.Forms.SwitchSelector>
          <UU5.Bricks.Table>ingredients
            {recipe.listOfIngredients.map((ingredient)=>{
            <UU5.Bricks.container>
              <label>ingredient</label>
              <input type='text' name="ingredient" value={ingredient.id} list='listid'/>
              <datalist id='listid'>
                {ingredients.map((ingredient)=>{<option label={ingredient.ingredientName} value={ingredient.ingredientID}/>})}
              </datalist>
              <UU5.Forms.Number value={ingredient.ingredientAmount}>amount</UU5.Forms.Number>
              <UU5.Bricks.Button>remove</UU5.Bricks.Button>
            </UU5.Bricks.container>
            })}
            <UU5.Bricks.Button>add</UU5.Bricks.Button>
          </UU5.Bricks.Table>
          <UU5.Bricks.Table>{recipe.steps}
            <UU5.Forms.Text>name</UU5.Forms.Text>
          </UU5.Bricks.Table>


        </UU5.Forms.Form>
      </div>
    )
    /*
    return currentNestingLevel ? (
      <div {...attrs}>
        <div>Visual Component {STATICS.displayName}</div>
        {UU5.Utils.Content.getChildren(props.children, props, STATICS)}
      </div>
    ) : null;*/
    //@@viewOff:render
  },
});

export default EditRecipe;
