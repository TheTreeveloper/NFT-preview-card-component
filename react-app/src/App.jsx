import React from "react";
import {Creator} from "./creator";
import { MyImage } from "./hero-image";
import {Content} from "./content";

function App () {
    return (
        <>
        <div className="parent-container">
            <MyImage />
            <Content />
            <Creator name = "Jules Wyvern"/>
        </div>
        
        </>
    );
}

export default App;