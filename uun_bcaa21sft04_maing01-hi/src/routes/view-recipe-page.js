//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
import ViewRecipe from "./view-recipe"
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ViewRecipe",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const ViewRecipePage = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

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
      return <UU5.Bricks.Loading />
    }

    return (
      <ViewRecipe recipe={recipe.data} />
    )
  },
});

export default ViewRecipePage;
