import React from "react";
import FormCreate from "./FormCreate";
import FormList from "./FormList";

const App = () => {
    return(
        <div className="container">
        <h2>Forms app</h2>
        <FormCreate/>
        <hr />
        <h2>Forms</h2>
        <FormList />
        </div>
    )
}

export default App;