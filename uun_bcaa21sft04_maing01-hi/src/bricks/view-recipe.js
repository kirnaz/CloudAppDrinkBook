//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports
const main = Config.Css.css`
  border-radius: 4px;
  border: 2px solid #005da7;
`
const firstRow = Config.Css.css`
  display: flex;
  align-items: center;
  padding: 32px 0;  
  justify-content: flex-end
`

const secondRow = Config.Css.css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: 32px 0;  
`

const recipeName = Config.Css.css`
  display: flex;
  font-size: 28pt;
  color: black;
  flex-grow: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 16px 0;
`

const ingridientContainer = Config.Css.css`
  display: flex;
  flex-grow: 2;
  
  .uu5-bricks-table-table {
    margin-bottom: 0;
  }
`

const preparation = Config.Css.css`
  display: flex;
  font-size: 20pt;
  color: black;
  flex-grow: 2;
  text-align: center;
  justify-content: center;
  padding: 16px 0;
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
        <div className={firstRow}>

          <UU5.Bricks.Label content="Ingredients for" />
          <UU5.Forms.Number value={numberOfPortions} min={1} rounded={true} decimals={0} decimalsViewRounded="round" onChange={(component) => {
            const initialValue = props.recipe.numberOfPortions;
            const value = +component.value;

            setListOfIngridients(listOfIngredients.map(ingredient => Object.assign({}, ingredient, { ingredientAmount: ingredient.initialAmount / initialValue * value })))
            setNumberOfPortions(value)

          }} />
        </div>

        <div className={secondRow}>
          <UU5.Bricks.Span className={recipeName}>{props.recipe.recipeName}</UU5.Bricks.Span>
          <UU5.Bricks.Table className={ingridientContainer}>
            <UU5.Bricks.Table.TBody>
              {listOfIngredients.map((ingredient, i) => (
                <UU5.Bricks.Table.Tr key={i}>
                  <UU5.Bricks.Table.Td content={ingredient.ingredientName} />
                  <UU5.Bricks.Table.Td content={`${ingredient.ingredientAmount} ${ingredient.ingredientMeasure}`} />
                </UU5.Bricks.Table.Tr>
              ))}
            </UU5.Bricks.Table.TBody>
          </UU5.Bricks.Table>
        </div>

        <div>
          <UU5.Bricks.Span className={preparation}>Preparation</UU5.Bricks.Span>
          <UU5.Bricks.Table>
            <UU5.Bricks.Table.TBody>
              {props.recipe.steps.map((step, index) => (
                <UU5.Bricks.Table.Tr key={index}>
                  <UU5.Bricks.Table.Td content={`${index + 1}. ${step}`} />
                </UU5.Bricks.Table.Tr>
              ))}
            </UU5.Bricks.Table.TBody>
          </UU5.Bricks.Table>
        </div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default ViewRecipe;
