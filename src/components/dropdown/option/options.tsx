import { IOptions } from "./interface";
import classNames from "classnames/bind";
import styles from "./options.module.scss";

const cx = classNames.bind(styles);

const Options = ({ options, onclick }: IOptions): JSX.Element => {
  return (
    <div className={cx("container")}>
      {options.map((option) => (
        <button
          type="button"
          className={cx("")}
          onClick={(event) => onclick(event)}
          id={String(option.id)}
        >
          {option.type}
        </button>
      ))}
    </div>
  );
};

export default Options;
