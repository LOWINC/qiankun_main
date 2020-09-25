import classNames from "classnames/bind";
import React from "react";
import style from "./index.module.css";

const cx = classNames.bind(style);

interface Props {
  isFooter: boolean;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        className={cx({
          layout: true,
        })}
      >
        <div className={cx("pages")}>{props.children}</div>
        {/* 指定 Modal 挂载的 HTML 节点 */}
        <div id='__za_qy_mountContainer'></div>
        <div className={cx("iphoneBottomPadding")}></div>
      </div>
    </div>
  );
};

export default Layout;
