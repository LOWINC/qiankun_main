import "lib-flexible";
import React, {useEffect} from "react";
import {Provider} from "react-redux";
import pkg from "../package.json";
import {Router} from "./route";
import {store, history} from "./store";

console.log(`${pkg.name} v${pkg.version}`);

function App() {
  useEffect(() => {
    store.dispatch({
      type: "app/query",
    });
  });

  return (
    <div className='App'>
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    </div>
  );
}

export default App;
