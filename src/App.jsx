import React from "react";
import {Creator} from "./creator";
import { MyImage } from "./hero-image";
import {Content} from "./content";
import { Attribution } from "./attribution";

function App () {
    return (
        <>
        <div className="main">
            <div className="parent-container">
                <MyImage />
                <Content />
                <Creator name = "Jules Wyvern"/>
            </div>
            <Attribution />
        </div>
        
        </>
    );
}

export default App;