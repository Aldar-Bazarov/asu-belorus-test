import React from "react";
import { Layout, Menu, theme } from "antd";
import { MenuItems } from "../types/types";
import { Link } from "react-router-dom";

const sliderItems = [
  {
    key: "1",
    label: "Актуализация ИМ",
    route: "/updateIM",
  },
  {
    key: "2",
    label: "Подбор ГНО",
    route: "/selectionGNO",
  },
  {
    key: "3",
    label: 'Расчёт "что - если"',
    route: "/calculation",
  },
];

const Slider: React.FC = () => {
  return (
    <Layout.Sider width={200}>
      <Menu
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
      >
        {sliderItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.route}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Slider;
