import { Icon, Text } from "@arc-ui/components";
import { FunctionComponent, useState } from "react";
import "./sideNavbar.css";

export interface MenuItem {
  title: string;
  icon: string;
  href: string;
}
export interface MenuItems extends MenuItem {
  subMenu?: MenuItems[];
}
export interface SideNavbarProps {
  menuItems: MenuItems[];
  children: React.ReactNode;
}

const SideNavbar: FunctionComponent<SideNavbarProps> = ({
  menuItems,
  children,
}) => {
  const [activeMenu, setactiveMenu] = useState(menuItems[0].title);
  const [activeSubMenu, setactiveSubMenu] = useState("");
  return (
    <section>
      <div className="sideNavBar__layer1">
        <div className="sideNavbar__controlLayer">
          {menuItems.map((menuItem) => (
            <>
              <div
                key={menuItem.icon}
                className={`sideNavbar__menuItem ${
                  activeMenu === menuItem.title &&
                  "sideNavbar__menuItem__active"
                }`}
              >
                <a
                  key={menuItem.icon}
                  className="sideNavbar__menuLink"
                  href={menuItem.href}
                  onClick={(e) => {
                    setactiveMenu(menuItem.title);
                    setactiveSubMenu(
                      menuItem.subMenu != undefined &&
                        menuItem.subMenu.length > 0
                        ? menuItem.title
                        : ""
                    );
                  }}
                >
                  <Text size="l" key={menuItem.icon}>
                    <Icon icon={menuItem.icon} size={32} isInline></Icon>{" "}
                    {menuItem.title}
                  </Text>
                </a>
              </div>
              {activeSubMenu === menuItem.title &&
                menuItem.subMenu != undefined && (
                  <div
                    className="sideNavbar__subMenuWrapper"
                    key={menuItem.title}
                  >
                    {menuItem.subMenu.map((subMenu) => (
                      <div
                        className="sideNavbar__subMenuContainer"
                        key={subMenu.title}
                      >
                        <a
                          className="sideNavbar__menuLink"
                          href={subMenu.href}
                          key={subMenu.title}
                        >
                          <Text size="m" key={subMenu.title}>
                            {subMenu.title}
                          </Text>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
            </>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SideNavbar;
