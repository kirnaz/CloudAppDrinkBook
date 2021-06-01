//@@viewOn:imports
import Config from "./config/config";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";

//@@viewOff:imports

const STATICS = {
    //@@viewOn:statics
    displayName: Config.TAG + "aboutRecipe",
    //@@viewOff:statics
  };

export const aboutRecipe = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "aboutRecipe",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return <div>Hello World3!</div>;
    //@@viewOff:render
  },
});

export default AboutRecipe;