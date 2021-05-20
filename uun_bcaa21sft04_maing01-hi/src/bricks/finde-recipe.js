//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "FindeRecipe",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const FindeRecipe = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
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
    recipeFind:UU5.PropTypes.func.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    ingredients:null,
    categoryList:null,
    recipeFind:()=>{}
  },
  //@@viewOff:defaultProps

  render({ingredients,categoryList,recipeFind}) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    if(!ingredients || !categoryList)return null;
    
    return(
      <div>
        <UU5.Forms.Form>
          <UU5.Bricks.Text></UU5.Bricks.Text>
          <UU5.Forms.SwitchSelector items={categoryList.map(category=>({category}))}>category</UU5.Forms.SwitchSelector>
          <UU5.Forms.Number>timeForPreparation</UU5.Forms.Number>
          <UU5.Bricks.Table>ingredients
            <UU5.Bricks.container>
              <label>ingredient</label>
              <input type='text' name="ingredient" value={ingredient.id} list='listid'/>
              <datalist id='listid'>
                {ingredients.map((ingredient)=>{<option label={ingredient.ingredientName} value={ingredient.ingredientID}/>})}
              </datalist>
              <UU5.Forms.Number value={ingredient.ingredientAmount}>amount</UU5.Forms.Number>
              <UU5.Bricks.Button>remove</UU5.Bricks.Button>
            </UU5.Bricks.container>
            <UU5.Bricks.Button>add</UU5.Bricks.Button>
          </UU5.Bricks.Table>

          <UU5.Bricks.Button onClick={recipeFind}>Send</UU5.Bricks.Button>
        </UU5.Forms.Form>
      </div>
    )

    /*return currentNestingLevel ? (
      <div {...attrs}>
        <div>Visual Component {STATICS.displayName}</div>
        {UU5.Utils.Content.getChildren(props.children, props, STATICS)}
      </div>
    ) : null;*/
    //@@viewOff:render
  },
});

export default FindeRecipe;
