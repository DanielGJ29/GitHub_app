import {BrowserRouter, Switch,Route} from "react-router-dom"
import Layout from "./Layout/Layout";
import Follower from "./Pages/Follower/Follower";
import Repos from "./Pages/Repos/Repos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/Follower/:user" exact>
              <Follower/>
            </Route >

            <Route path="/Repos/:name" exact>
              <Repos/>
            </Route >
                
          </Layout>
          {/* <Route path="*" exact>
            <h1>Not Found</h1>
          </Route> */}
        </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
