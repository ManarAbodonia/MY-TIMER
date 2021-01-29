/*--------import the vars and functions from the other pages---------*/
import {eventSubmit,addCounter} from "./app.js";

//The script will working on every time the button will be clicked.
eventSubmit.addEventListener("click",(e)=>{
    addCounter();
        e.preventDefault();
}) 
