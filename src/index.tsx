import * as React from "react";
import * as ReactDOM from "react-dom";
import FiniteStateEditor from "./FiniteStateEditor";

var fse = <FiniteStateEditor states={[
    {
        type: "starting",
        name: "Q1",
        position: {
            x: 800,
            y: 200
        },
        key: 0
    }, {
        type: "normal",
        name: "Q2",
        position: {
            x: 250,
            y: 200
        },
        key: 1
    } 
]} relations={[{
    between: [1, 0],
    key: 0,
    forwardLabel: "hello"
}]}/>;

ReactDOM.render(
    fse,
    document.getElementById("container")
);