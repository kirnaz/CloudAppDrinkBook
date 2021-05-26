//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports
const main = Config.Css.css`
  border-radius: 4px;
  border: 2px solid #005da7;


`
const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ViewRecipe",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const ViewRecipe = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [listOfIngredients, setListOfIngridients] = useState(props.recipe.listOfIngredients.map(ingredient => Object.assign({}, ingredient, { initialAmount: ingredient.ingredientAmount })))
    const [numberOfPortions, setNumberOfPortions] = useState(props.recipe.numberOfPortions)

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Label className={main} content="Ingredients for" />
        <UU5.Forms.Number value={numberOfPortions} min={1} rounded={true} decimals={0} decimalsViewRounded="round" onChange={(component) => {
          const initialValue = props.recipe.numberOfPortions;
          const value = +component.value;

          setListOfIngridients(listOfIngredients.map(ingredient => Object.assign({}, ingredient, { ingredientAmount: ingredient.initialAmount / initialValue * value })))
          setNumberOfPortions(value)

        }} />
        <UU5.Bricks.Span style={{ color: "red", fontSize: "30px" }}>{props.recipe.recipeName}</UU5.Bricks.Span>
        <UU5.Bricks.Table>
          <UU5.Bricks.Table.TBody>
            {listOfIngredients.map(ingredient => (
              <UU5.Bricks.Table.Tr>
                <UU5.Bricks.Table.Td content={ingredient.ingredientName} />
                <UU5.Bricks.Table.Td content={`${ingredient.ingredientAmount} ${ingredient.ingredientMeasure}`} />
              </UU5.Bricks.Table.Tr>
            ))}
          </UU5.Bricks.Table.TBody>
        </UU5.Bricks.Table>
        <UU5.Bricks.Span style={{ color: "black", fontSize: "30px" }}>Preparation</UU5.Bricks.Span>
        <UU5.Bricks.Table>
          <UU5.Bricks.Table.TBody>
            {props.recipe.steps.map((step, index) => (
              <UU5.Bricks.Table.Tr>
                <UU5.Bricks.Table.Td content={`${index + 1}. ${step}`} />
              </UU5.Bricks.Table.Tr>
            ))}
          </UU5.Bricks.Table.TBody>
        </UU5.Bricks.Table>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default ViewRecipe;
