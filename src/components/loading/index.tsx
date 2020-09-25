import classNames from "classnames/bind";
import React from "react";
import style from "./index.module.css";

const cx = classNames.bind(style);

export default function Loading() {
  return (
    <div className={cx("loading")}>
      <div className={cx("spinner")}>
        <div className={cx("bounce-1")}></div>
        <div className={cx("bounce-2")}></div>
      </div>
    </div>
  );
}
