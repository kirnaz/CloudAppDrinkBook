import UU5 from "uu5g04";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";

const STATICS = {
    //@@viewOn:statics
    displayName: Config.TAG + "Home",
    nestingLevel: "bigBoxCollection",
    //@@viewOff:statics
  };
  
  export const NavBar = createVisualComponent({
    ...STATICS,
  
  
    render(props) {

    return(
    <>
    <UU5.Bricks.NavBar colorSchema="primary">

        <UU5.Bricks.NavBar.Nav>

            <UU5.Bricks.NavBar.Nav.Item >
                <UU5.Bricks.Link onClick={() => UU5.Environment.getRouter().setRoute("home")}>
                    <UU5.Bricks.Icon icon="mdi-home" />Home
                    </UU5.Bricks.Link>
            </UU5.Bricks.NavBar.Nav.Item>

            <UU5.Bricks.NavBar.Nav.Item>
                <UU5.Bricks.Icon icon="mdi-plus" />Add Recipe
                </UU5.Bricks.NavBar.Nav.Item>
            <UU5.Bricks.NavBar.Nav.Item hidden={!props.hide}>
            <UU5.Bricks.Link onClick={()=>props.onViewOrHide()}>
                <UU5.Bricks.Icon icon="mdi-magnify"/>Search
                </UU5.Bricks.Link>
                </UU5.Bricks.NavBar.Nav.Item>
                <UU5.Bricks.NavBar.Nav.Item hidden={props.hide}>
                <UU5.Bricks.Link onClick={()=>props.onViewOrHide()}>
                <UU5.Bricks.Icon icon="mdi-magnify"/>Random recipes
                </UU5.Bricks.Link>
                </UU5.Bricks.NavBar.Nav.Item>
        </UU5.Bricks.NavBar.Nav>

    </UU5.Bricks.NavBar>
    
    </>
    )
}})

export default NavBar;