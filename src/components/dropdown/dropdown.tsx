import React, { useState } from "react";
import classNames from "classnames/bind";
import { ReactComponent as ArrowDown } from "../../icons/arrowDown.svg";
import Options from "./option/options";
import styles from "./dropdown.module.scss";
import { IDropdown } from "./interface";

const cx = classNames.bind(styles);

const Dropdown = ({ name, options, onclick }: IDropdown): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={cx("container")}>
      <div className={cx("block")}>
        <div className="name">{name}</div>
        <button onClick={() => setOpened((prev) => !prev)}>
          <ArrowDown />
        </button>
      </div>
      {opened && <Options options={options} onclick={onclick} />}
    </div>
  );
};

Dropdown.defaultProps = {
  onclick: () => {},
  options: [],
};

export default Dropdown;
