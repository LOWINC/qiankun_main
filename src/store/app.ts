import {get} from "lodash";
import {Toast} from "zarm";
import {Dispatch} from "./index";

const initState = {
  partner: {},
};
type Store = typeof initState;

export const app = {
  name: "app",
  state: {
    ...initState,
  },
  reducers: {
    save(state: Store, payload: Partial<Store>): Store {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    onError(payload: any) {
      const httpMsg = get(payload, "response.data.message");
      httpMsg &&
        Toast.show({
          content: httpMsg,
        });
    },
  }),
};
