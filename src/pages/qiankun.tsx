import React, {useEffect} from "react";
import {loadMicroApp} from "qiankun";

export default function Qiankun() {
  useEffect(() => {
    loadMicroApp({
      name: "qiankun_sub_jiexin",
      entry:
        process.env.NODE_ENV === "production"
          ? `${window.location.origin}/jiexin/`
          : "//localhost:10091/jiexin/",
      container: "#__qiankun_container_jiexin",
    });
  }, []);

  return (
    <div>
      <div className='header'>header</div>
      <div id='__qiankun_container_sub_0'></div>
      <div className='footer'>footer</div>
    </div>
  );
}
