import {init, Models, RematchDispatch, RematchRootState} from "@rematch/core";
import loadingPlugin from "@rematch/loading";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import pkg from "../../package.json";
import {app} from "./app";

export const history = createBrowserHistory({
  basename: pkg.homepage,
});

export interface RootModel extends Models<RootModel> {
  app: typeof app;
}

const models: RootModel = {
  app: app,
};

export const store = init({
  models,
  plugins: [loadingPlugin() as any],
  redux: {
    reducers: {
      router: connectRouter(history),
    },
    middlewares: [routerMiddleware(history)],
  },
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
