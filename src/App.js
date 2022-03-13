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
        <Route path="/liveproject" component={Home} exact/>
        <Route path="/cloud"  component={Cloud} />
        <Route path="/data"  component={Data} />
        <Route path="/agile"  component={Agile} />
        <Route path="/Blog" component={Blog}   />
        <Route path="/career"  component={Career} />
        <Route path="/contact" component={Contact} />
        </Switch>
        </main>
 </>
  );
}

export default App;
