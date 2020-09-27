import {loadMicroApp} from "qiankun";
import React, {useEffect} from "react";
import {Icon, NavBar, TabBar} from "zarm";
const TabIcon = Icon.createFromIconfont(
  "//at.alicdn.com/t/font_1340918_lpsswvb7yv.js"
);

export default function Qiankun() {
  useEffect(() => {
    loadMicroApp({
      name: "qiankun_sub_sub",
      entry:
        process.env.NODE_ENV === "production"
          ? `${window.location.origin}/sub/`
          : "//localhost:10091/sub/",
      container: "#__qiankun_container_sub",
    });
  }, []);

  return (
    <div>
      <NavBar
        left={
          <Icon
            type='arrow-left'
            theme='primary'
            onClick={() => window.history.back()}
          />
        }
        title='这是标题'
      />
      <div id='__qiankun_container_sub'></div>
      <TabBar visible={true} activeKey={"home"}>
        <TabBar.Item
          itemKey='home'
          title='主页'
          icon={<TabIcon type='home' />}
        />
        <TabBar.Item
          itemKey='found'
          title='保险'
          icon={<TabIcon type='insurance' />}
          badge={{shape: "circle"}}
        />
        <TabBar.Item
          itemKey='me'
          title='我的'
          icon={<TabIcon type='user' />}
          badge={{shape: "dot"}}
        />
      </TabBar>
    </div>
  );
}
