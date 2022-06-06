import classNames from "classnames/bind";
import styles from "./navbar.module.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <>
      <nav className={cx("nav-menu")}>
        <ul className={cx("nav-menu-items")}>
          {navbarData.map((item, index) => {
            return (
              <li key={index} className={cx("list-item")}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
