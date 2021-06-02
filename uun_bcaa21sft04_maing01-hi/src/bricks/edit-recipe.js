//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent,useState } from "uu5g04-hooks";
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
    id:null,
    recipe: null,
    ingredients: null,
    categoryList: null,
    recipeEdit: () => { },
    recipeDelete: () => { },
    ingredientSave: () => { }
  },
  //@@viewOff:defaultProps

  render({ recipe, ingredients, categoryList, recipeEdit, recipeDelete, ingredientSave }) {
    //@@viewOn:hooks
    const [recipee, setRecipee] = useState(recipe);
    //@@viewOff:hooks

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

    function _addLine() {
        const newArray = steps.concat("");
        setSteps(newArray);  
    }

    function _removeLine(i) {
      if (steps.length > 1) {
        const newArray = steps.filter((_, index) => index !== i);
        setSteps(newArray);
        setResult(JSON.stringify(steps));
      }
    }
    function _onChangeLine(value, index) {
      setResult(JSON.stringify(steps));
    }

    const [steps, setSteps] = useState(recipe.steps);
    const [result, setResult] = useState(recipe.steps);

    function _addLine(){
      console.log("line+");
      recipe.steps=[...recipe.steps,""];
      setRecipee(recipe)
      //render( recipe, ingredients, categoryList, recipeEdit, recipeDelete, ingredientSave );
    }

    console.log(recipe);
    console.log(ingredients);
    console.log(categoryList);



    if (!recipe || !ingredients || !categoryList) return null

    return (

      <div>
        {/*<UU5.Bricks.Header>
          My recipes
        </UU5.Bricks.Header>*/}
        <UU5.Bricks.Button onClick={recipeDelete}>Delete</UU5.Bricks.Button>
        <UU5.Bricks.Button onClick={recipeEdit}>Save</UU5.Bricks.Button>

        <UU5.Forms.Form>

          <UU5.Forms.Text name="recipeName" value={recipe.recipeName} label="Name" required/>
          <UU5.Forms.Number name="timeForPreparation" value={recipe.timeForPreparation} min={1} label="Time fo preparation" required/>
          <UU5.Forms.Number name="numberOfPortions" value={recipe.numberOfPortions} min={1} label="Number of portions" required/>
          <UU5.Forms.SwitchSelector name="category" items={categoryList.map(value => ({ value: value.name }))} label="Category" value={categoryList.find((cat)=>cat.id===recipe.category).name} /*onChange={({ value }) => this.setState({ size: value })}*/ required/>
          <UU5.Bricks.Table name="listOfIngredients" label="Ingredients">
            <UU5.Bricks.Table.TBody>
              {recipe.listOfIngredients.map((ingredient) => (
                <UU5.Bricks.Table.Tr>
                <UU5.Bricks.Table.Td >
                  {/*<label>ingredient</label>
                  <input type='text' name="ingredient" value={ingredient.ingredientName} list='listid' />
                  <datalist id='listid'>
                    {ingredients.map((ingredient) => { <option label={ingredient.ingredientName} value={ingredients.find((ing)=>ingredient.ingredientName===ing.ingredientName).ingredientID} /> })}
                  </datalist>*/}
                    <UU5.Forms.Select label="ingredient" value={ingredient.ingredientName} required>
                      {ingredients.map((ingredient) => {return <UU5.Forms.Select.Option value={ingredient.ingredientName}/>})}
                    </UU5.Forms.Select>
                  <UU5.Forms.Number name="ingredientAmount" value={ingredient.ingredientAmount} min={1} label={`amount (${ingredient.ingredientMeasure})`} required/>
                  <UU5.Bricks.Button>remove</UU5.Bricks.Button>
                  </UU5.Bricks.Table.Td></UU5.Bricks.Table.Tr>
              ))}
            </UU5.Bricks.Table.TBody>
            <UU5.Bricks.Table.Tr><UU5.Bricks.Table.Td>
            <UU5.Bricks.Button>add</UU5.Bricks.Button>
            <UU5.Bricks.Button>add new</UU5.Bricks.Button></UU5.Bricks.Table.Td></UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table>
          <UU5.Bricks.Table>
            <UU5.Bricks.Table.TBody>
              {recipe.steps.map((step, index) => (
                <UU5.Bricks.Table.Tr key={index}>
                  <UU5.Bricks.Table.Td><UU5.Forms.Text value={step} name={"step" + index} onBlur={(value) => _onChangeLine(value.value, index)}required/></UU5.Bricks.Table.Td>
                  <UU5.Bricks.Button onClick={_removeLine}>Remove</UU5.Bricks.Button>
                </UU5.Bricks.Table.Tr>
              ))}
              <UU5.Forms.Text name="test" value={result} hidden={true} />
              </UU5.Bricks.Table.TBody>
              <UU5.Bricks.Table.TFoot>
            <UU5.Bricks.Table.Tr><UU5.Bricks.Table.Td>
            <UU5.Bricks.Button onClick={_addLine}>add</UU5.Bricks.Button></UU5.Bricks.Table.Td></UU5.Bricks.Table.Tr></UU5.Bricks.Table.TFoot>

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
