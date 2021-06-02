//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";

import EditRecipe from "../bricks/edit-recipe";
import ReadRecipes from "../bricks/read-recipes";
import ReadConfig from "../bricks/read-config";
import ReadIngredients from "../bricks/read-ignredients";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "EditRecipe",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const ViewRecipePage = createVisualComponent({
  ...STATICS,


  render(props) {
    if (props.params.id == null) {
        alert('Invalid url');
        return;
      }
  
      const [recipe, setRecipe] = useState({ loading: false });
      useEffect(() => {
        const fetchData = async () => {
          if (!recipe.loading && !recipe.data) {
            setRecipe({ loading: true })
  
            const response = await fetch(`http://localhost:3001/api/recipe/${props.params.id}`)
            const data = await response.json()
  
            if (data.error) {
              alert(data.error)
            } else {
  
              setRecipe({ loading: false, data: data.value });
            }
  
          }
        }
        fetchData();
      })
  
      if (recipe.loading || !recipe.data) {
        return <UU5.Bricks.Loading/>
      }
  
      return (
        <EditRecipe recipe={recipe.data}/>
      )
  },
});

export default EditRecipePage;