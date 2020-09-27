import {replace} from "connected-react-router";
import React from "react";
import {useDispatch} from "react-redux";
import {Dispatch} from "../store";

const Index: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();

  const goto = (path: string) => {
    dispatch(replace(path));
  };

  return (
    <div>
      <button onClick={() => goto("/qiankun/sub/index")}>
        跳转到子应用 index
      </button>
      <button onClick={() => goto("/qiankun/sub/home")}>
        跳转到子应用 home
      </button>
    </div>
  );
};

export default Index;
