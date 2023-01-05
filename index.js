import React from "react";
import  ReactDOM  from "react-dom/client";
        const heading = React.createElement("h1",
         {id :"title",

        }, 
        "Namaste Everyone!"
        );
        console.log(heading); // object is seen
        const heading2 = React.createElement("h1",
         {id :"title",

        }, 

        
        "Everyone!"
        );

        const head = React.createElement("div",{id:"container"},[heading,heading2]);

        const root = ReactDOM.createRoot(document.getElementById("root"))

        //passing the react element inside the root
        //one root and one render method
        root.render(heading)  
