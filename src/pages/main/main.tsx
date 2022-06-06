import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from "./main.module.scss";
import Calls from '../calls/calls';

const cx = classNames.bind(styles);

const Main = (): JSX.Element => {
 return (
     <div className={cx("container")}>
         <Calls></Calls>
     </div>
 )
}
export default Main;