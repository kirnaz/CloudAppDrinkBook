//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ReadRecipes",
  //@@viewOff:statics
};
export const ReadRecipes = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ children }) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface
    const [recipes, setRecipes] = useState({ loading: false });
    useEffect(() => {
      const fetchData = async () => {
        if (!recipes.loading && !recipes.data) {
          setRecipes({ loading: true })

          const response = await fetch(`http://localhost:3001/api/recipes/list`)
          const data = await response.json()

          if (data.error) {
            alert(data.error)
          } else {

            setRecipes({ loading: false, data: data.value });
          }


        }
      }
      fetchData();
    })
    //@@viewOn:render
    return children({ recipes: recipes.data })
    /*const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div>Component {STATICS.displayName}</div>
        {UU5.Utils.Content.getChildren(props.children, props, STATICS)}
      </div>
    ) : null;*/
    //@@viewOff:render
  },
});

export default ReadRecipes;

