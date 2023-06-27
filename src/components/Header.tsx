import React from "react";
import { Menu, Layout, Avatar, Typography } from "antd";
import { MenuItems } from '../types/types'
import { Link } from "react-router-dom";

const menuItems = [
  {
    key: "1",
    label: "Подбор УЭЦН",
  },
  {
    key: "2",
    label: "Подбор ШГН",
  },
  {
    key: "3",
    label: "Оптимизация УЭЦН",
  },
  {
    key: "4",
    label: "Оптимизация ШГН",
  },
  {
    key: "5",
    label: "Глубина спуска ГНО",
  },
];

// type HeaderProps = {
//     menuItems: MenuItems[]
// }

export const Header: React.FC = () => {
  return (
    <Layout.Header
      style={{ padding: 0, display: "flex", backgroundColor: 'white', columnGap: '1vw', alignItems: 'center' }}
    >
      <Avatar src={"https://oissolutions.net/wp-content/uploads/2020/03/Artboard-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F@4x.png"}
        style={{margin: "auto 0 auto 1vw"}}
      />
      <Typography.Title
        level={4}
        style={{ margin: 0 }}
      >
        <Link to={'/'}>Белоруснефть</Link>
      </Typography.Title>
      <Menu
        mode="horizontal"
        disabledOverflow={true}
        items={menuItems}
      />
    </Layout.Header>
  );
};
