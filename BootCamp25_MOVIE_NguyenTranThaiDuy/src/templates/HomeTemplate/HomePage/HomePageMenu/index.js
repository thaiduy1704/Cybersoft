import React, { useState } from "react";
import { Radio, Space, Tabs } from "antd";

const { TabPane } = Tabs;
export default function HomeMenu() {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Tabs tabPosition={tabPosition}>
        <TabPane
          tab={
            <img
              src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
              className="rounded-full w-14"
            />
          }
          key="1"
        >
          Content of Tab 1
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
              className="rounded-full w-14"
            />
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
              className="rounded-full w-14"
            />
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  );
}
