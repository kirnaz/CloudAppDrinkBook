//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports
const main = Config.Css.css`
  display: flex;
  align-items: center;
  padding: 32px 0;  
  justify-content: flex-end;
`
const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Home = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    const [recipes, setRandomRecipes] = useState({ loading: false });
    useEffect(() => {
      const fetchData = async () => {
        if (!recipes.loading && !recipes.data) {
          setRandomRecipes({ loading: true })

          const response = await fetch(`http://localhost:3001/api/recipes/random`)
          const data = await response.json()

          if (data.error) {
            alert(data.error)
          } else {

            setRandomRecipes({ loading: false, data: data.value });
          }


        }
      }
      fetchData();
    })
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        {recipes.data && recipes.data.map((recipe) => (
          <button className={main} onClick={() => {
            UU5.Environment.getRouter().setRoute("view-recipe", { id: recipe.recipeID })
          }}>{recipe.recipeName}</button>
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

export default Home;
