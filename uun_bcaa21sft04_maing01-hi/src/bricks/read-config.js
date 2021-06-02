//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ReadConfig",
  //@@viewOff:statics
};

// priklad pouziti: <ReadConfig>{({ categories }) => <ViewRecipe categories={categories} />}<ReadConfig>
export const ReadConfig = createComponent({
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
    const [categories, setCategories] = useState({ loading: false });
    useEffect(() => {
      const fetchData = async () => {
        if (!categories.loading && !categories.data) {
          setCategories({ loading: true })

          const response = await fetch(`http://localhost:3001/api/categories`)
          const data = await response.json()

          if (data.error) {
            alert(data.error)
          } else {

            setCategories({ loading: false, data: data.value });
          }


        }
      }
      fetchData();
    })
    //@@viewOn:render
    return children({ categories: categories.data })
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

export default ReadConfig;
