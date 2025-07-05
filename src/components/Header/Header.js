import React, {useState, useEffect} from "react";
import {Menu, Button, Drawer} from "antd";
import {MenuOutlined, HomeOutlined, UserOutlined, ProjectOutlined, ToolOutlined, MailOutlined} from "@ant-design/icons";
import "./Header.css";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestisce lo scroll per cambiare stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
      href: "#home",
    },
    {
      key: "about",
      icon: <UserOutlined />,
      label: "Chi Sono",
      href: "#about",
    },
    {
      key: "projects",
      icon: <ProjectOutlined />,
      label: "Progetti",
      href: "#projects",
    },
    {
      key: "skills",
      icon: <ToolOutlined />,
      label: "Competenze",
      href: "#skills",
    },
    {
      key: "contact",
      icon: <MailOutlined />,
      label: "Contatti",
      href: "#contact",
    },
  ];

  // Gestisce il click sui menu items
  const handleMenuClick = (e) => {
    setCurrent(e.key);
    setMobileMenuVisible(false);

    // Smooth scroll alla sezione
    const href = menuItems.find((item) => item.key === e.key)?.href;
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo/Nome */}
          <div className="logo">
            <h2>Il Tuo Nome</h2>
            <span>React Developer</span>
          </div>

          {/* Menu Desktop */}
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleMenuClick}
            className="desktop-menu"
            items={menuItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />

          {/* Hamburger Menu Mobile */}
          <Button type="text" icon={<MenuOutlined />} onClick={() => setMobileMenuVisible(true)} className="mobile-menu-button" />

          {/* Drawer Mobile */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setMobileMenuVisible(false)}
            open={mobileMenuVisible}
            className="mobile-drawer">
            <Menu
              mode="vertical"
              selectedKeys={[current]}
              onClick={handleMenuClick}
              items={menuItems.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: item.label,
              }))}
            />
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
