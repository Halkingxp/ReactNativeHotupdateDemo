import React from "react";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HotUpdateApp from "./HotUpdateApp"
import App from "./App"

const switchNavigarot = createSwitchNavigator({
    HotUpdateApp,
    App,
},{
    initialRouteName:"HotUpdateApp",
});


export default createAppContainer(switchNavigarot);

