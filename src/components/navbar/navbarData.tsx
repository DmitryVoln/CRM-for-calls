import React from 'react';
import { ReactComponent as WheelSVG } from '../../icons/wheel.svg';
import { ReactComponent as Vector } from '../../icons/Vector.svg';
import { ReactComponent as Vector1 } from '../../icons/Vector1.svg';
import { ReactComponent as Vector2 } from '../../icons/Vector2.svg';
import { ReactComponent as Vector3 } from '../../icons/Vector3.svg';
import { ReactComponent as Vector5 } from '../../icons/Vector5.svg';
import { ReactComponent as Vector7 } from '../../icons/Vector7.svg';
import { ReactComponent as Vector8 } from '../../icons/Vector8.svg';
import { ReactComponent as Vector9 } from '../../icons/Vector9.svg';
import { ReactComponent as Vector11 } from '../../icons/Vector11.svg';



export const navbarData = [
  {
    title: 'Итоги',
    path: '/',
    icon: <Vector1 />,
    cName: 'nav-text'
  },
  {
    title: 'Заказы',
    path: '/reports',
    icon: <Vector />,
    cName: 'nav-text'
  },
  {
    title: 'Сообщения',
    path: '/products',
    icon: <Vector2 />,
    cName: 'nav-text'
  },
  {
    title: 'Звонки',
    path: '/team',
    icon: <Vector3 />,
    cName: 'nav-text'
  },
  {
    title: 'Контрагенты',
    path: '/messages',
    icon: <Vector9 />,
    cName: 'nav-text'
  },
  {
    title: 'Документы',
    path: '/support',
    icon: <Vector11 />,
    cName: 'nav-text'
  },
  {
    title: 'Исполнители',
    path: '/support',
    icon: <Vector7 />,
    cName: 'nav-text'
  },
  {
    title: 'Отчеты',
    path: '/support',
    icon: <Vector5 />,
    cName: 'nav-text'
  },
  {
    title: 'База знаний',
    path: '/support',
    icon: <Vector8 />,
    cName: 'nav-text'
  },
  {
    title: 'Настройки',
    path: '/support',
    icon: <WheelSVG />,
    cName: 'nav-text'
  }
];