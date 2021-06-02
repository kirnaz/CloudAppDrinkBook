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
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    recipe: null,
    ingredients: null,
    categoryList: null,
    recipeEdit: () => { },
    recipeDelete: () => { },
    ingredientSave: () => { }
  },
  //@@viewOff:defaultProps

  render({ recipe, ingredients, categoryList, recipeEdit, recipeDelete, ingredientSave }) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    //const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    //const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    function editRecipe(opt) {
      //TODO projde všechny ingredience a nové vytvoří

      recipeEdit(opt.values);
    }

    if (!recipe || !ingredients || !categoryList) return <h1>Error</h1>

    console.log(recipe);
    console.log(ingredients);
    console.log(categoryList);

    return (
      <div>
        <UU5.Bricks.Header>
          My recipes
        </UU5.Bricks.Header>
        <UU5.Bricks.Button onClick={recipeDelete}>Delete</UU5.Bricks.Button>
        <UU5.Bricks.Button onClick={recipeEdit}>Save</UU5.Bricks.Button>

        <UU5.Forms.Form>
          <UU5.Forms.Text name="recipeName" value={recipe.recipeName} label="Name" />
          <UU5.Forms.Number name="timeForPreparation" value={recipe.timeForPreparation} min={1} label="Time fo preparation" />
          <UU5.Forms.Number name="numberOfPortions" value={recipe.numberOfPortions} min={1} label="Number of portions" />
          <UU5.Forms.SwitchSelector name="category" items={categoryList.map(value => ({ value: value.name }))} label="Category" /*value={} onChange={({ value }) => this.setState({ size: value })}*/ />
          <UU5.Bricks.Table name="listOfIngredients" label="Ingredients">
            <UU5.Bricks.Table.TBody>
              {recipe.listOfIngredients.map((ingredient) => {
                <UU5.Bricks.container>
                  123
              <label>ingredient</label>
                  <input type='text' name="ingredient" value={ingredient.id} list='listid' />
                  <datalist id='listid'>
                    {ingredients.map((ingredient) => { <option label={ingredient.ingredientName} value={ingredient.ingredientID} /> })}
                  </datalist>
                  <UU5.Forms.Number value={ingredient.ingredientAmount} label="amount" />
                  <UU5.Bricks.Button>remove</UU5.Bricks.Button>
                </UU5.Bricks.container>
              })}
            </UU5.Bricks.Table.TBody>
            <UU5.Bricks.Button>add</UU5.Bricks.Button>
          </UU5.Bricks.Table>
          <UU5.Bricks.Table>
            <UU5.Bricks.Table.TBody>
              {recipe.steps.map((step, index) => (
                <UU5.Bricks.Table.Tr key={index}>
                  <UU5.Bricks.Table.Td ><UU5.Forms.Text value={step} /></UU5.Bricks.Table.Td>
                </UU5.Bricks.Table.Tr>
              ))}
            </UU5.Bricks.Table.TBody>

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
