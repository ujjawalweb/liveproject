import React from "react";


import Home from "./Home";
import Blog from "./Blog";
import Cloud from "./Cloud";
import Data from "./Data";
import Career from "./Career";
import Contact from "./Contact";
import Agile from "./Agile";
import { Route, Switch} from "react-router-dom";



function App() {
  return (
 <>



 <main>
            <Switch>
        <Route path="/" component={Home} exact/>

        </Switch>
        </main>
 </>
  );
}

export default App;
