import React from "react";
import {Creator} from "./creator";
import { MyImage } from "./hero-image";

function App () {
    return (
        <>
        <div className="parent-container">
            <MyImage />
            <Creator name = "Jules Wyvern"/>
        </div>
        
        </>
    );
}

export default App;