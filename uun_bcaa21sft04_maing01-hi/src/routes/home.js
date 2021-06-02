//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
import NavBar from "../bricks/navbar"
//@@viewOff:imports
const button = Config.Css.css`
  padding: 32px;  
  font-size: 18pt;
  width: 400px;
  margin: 32px;
`
const buttons = Config.Css.css`
  display: flex;
  align-items: center;
  padding: 32px 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const heading = Config.Css.css`
  padding : 32px;
  text-align: center;
  font-size: 20pt

`
const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Home = createVisualComponent({
  ...STATICS,


  render(props) {


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
  
    return (
      <div>
        <NavBar />
        <UU5.Bricks.Heading className={heading}>Random Recipes</UU5.Bricks.Heading>
        <div className={buttons}>
          {recipes.data && recipes.data.map((recipe) => (
            <button className={button} onClick={() => {
              UU5.Environment.getRouter().setRoute("view-recipe", { id: recipe.recipeID })
            }}>{recipe.recipeName}</button>
          ))}
        </div>


      </div>
    );

  },
});

export default Home;
