//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent,useEffect,useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ReadIgnredients",
  //@@viewOff:statics
};

export const ReadIgnredients = createComponent({
  ...STATICS,



  render({children}) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:hooks
    //@@viewOff:hooks

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const [ingredients, setIngredients] = useState({ loading: false });
    useEffect(() => {
      const fetchData = async () => {
        if (!ingredients.loading && !ingredients.data) {
          setIngredients({ loading: true })

          const response = await fetch(`http://localhost:3001/api/ingredients/list`)
          const data = await response.json()

          if (data.error) {
            alert(data.error)
          } else {

            setIngredients({ loading: false, data: data.value });
          }


        }
      }
      fetchData();
    })

    return children({ ingredients: ingredients.data })

    /*let ingredients;
    useEffect(() => {
      async function fetchData(){

          const response = await fetch("http://localhost:3001/api/ingredients/list", {
            "method": "GET",
            "headers": {}
          })
          .then(response => {
            console.log("response"+response);
          })
          .catch(err => {
            console.error(err);
          });
          const data = await response.json()
          setIsLoaded(true);

          if (data.error) {
            alert(data.error)
          } else {
            ingredients=data.itemList;
            console.table(itemList);
            //ingredients=data.value;
          }

      }
      fetchData();
    })

    return children({ingredients})*/
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

export default ReadIgnredients;
