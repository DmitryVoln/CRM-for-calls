import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { ReactComponent as SearchSVG } from "../../icons/search.svg";
import { ReactComponent as IncomingSVG } from "../../icons/incoming.svg";
import { ReactComponent as OutgoingSVG } from "../../icons/outgoing.svg";
import { ICall } from "../../redux/reducers/slices.types";
import Dropdown from "../../components/dropdown/dropdown";
import Table from "../../components/table/table";
import styles from "./call.module.scss";

import { requestCalls } from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const cx = classNames.bind(styles);

const Calls = (): JSX.Element => {
  const [callsList, setCallsList] = useState<ICall[]>([]);
  const [callType, setCallType] = useState<string>("");
  const [isPlayer, setIsPlayer] = useState({ time: "", id: "" });

  const { calls } = useAppSelector((state) => state.callsReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestCalls());
  }, [dispatch]);

  useEffect(() => {
    if (callType) {
      setCallsList(
        calls.results.filter((call: ICall) => String(call.in_out) === callType)
      );
    } else {
      setCallsList(calls.results);
    }
  }, [calls.results, callType]);

  const handlePlayer = (id: string) => {
    setIsPlayer((prev) => {
      return { ...prev, id: id };
    });
  };

  const data = callsList.map((call) => {
    return {
      col1: call.in_out,
      col2: call.date,
      col3: call.person_avatar,
      col4: call.partner_data.phone,
      col5: call.partner_data.name,
      col6: call.status,
      col7: `${call.time} ${call.id}`,
    };
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "Тип",
        accessor: "col1",
        Cell: (props: any) =>
          props.value === 1 ? <IncomingSVG /> : <OutgoingSVG />,
      },
      {
        Header: "Время",
        accessor: "col2",
      },
      {
        Header: "Сотрудник",
        accessor: "col3",
        Cell: (props: any) => <img src={props.value} alt="avatar" />,
      },
      {
        Header: "Звонок",
        accessor: "col4",
      },
      {
        Header: "Источник",
        accessor: "col5",
      },
      {
        Header: "Оценка",
        accessor: "col6",
      },
      {
        Header: "Длительность",
        accessor: "col7",
        Cell: (props: any) => {
          return isPlayer.id && isPlayer.id === props.value.split(" ")[1] ? (
            <div className="">
              <audio controls>
                <source src={props.record} type="audio/ogg; codecs=vorbis" />
                Тег audio не поддерживается вашим браузером.
              </audio>
              <button onClick={() => handlePlayer("")}>x</button>
            </div>
          ) : (
            <button
              className=""
              onClick={() => {
                return handlePlayer(props.value.split(" ")[1]);
              }}
            >
              {props.value.split(" ")[0]}
            </button>
          );
        },
      },
    ],
    [isPlayer]
  );

  const dropDownProps = [
    { name: "Все типы" },
    { name: "Все сотрудники" },
    {
      name: "Все звонки",
      handleClick: (event: any) => {
        setCallType(event.target.id);
      },
      options: [
        { type: "Все звонки", id: "" },
        { type: "Входящие", id: "1" },
        { type: "Исходящие", id: "0" },
      ],
    },
    { name: "Все источники" },
    { name: "Все оценки" },
    { name: "Все звонки" },
  ];

  return (
    <div className={cx("")}>
      <div className={cx("header")}>
        <div className={cx("navbar")}>
          <div className={cx("left-bar")}>
            <div className={cx("left-bar__date")}>31.05.2022</div>
            <div className={cx("left-bar__progress")}>Новые звонки</div>
            <div className={cx("left-bar__progress")}> Качество разговоров</div>
            <div className={cx("left-bar__progress")}>Конверсия в заказ</div>
          </div>
          <div className={cx("right-bar")}>
            <div className={cx("left-bar__progress")}>поиск</div>
            <div className={cx("left-bar__progress")}>
              ИП Сидорова Александра Михайловна
            </div>
            <div className={cx("left-bar__progress")}>Лицо</div>
          </div>
        </div>
      </div>

      <div className={cx("main")}>
        <div className={cx("menu")}>
          <div className={cx("menu__info")}>
            <div className={cx("")}>Баланс</div>
            <div className={cx("")}>Дни</div>
          </div>
          <div className={cx("menu__dropdown")}>
            <div className={cx("menu__search")}>
              <button>
                <SearchSVG />
                Поиск по звонкам
              </button>
            </div>
            <div className={cx("menu_btns")}>
              {dropDownProps.map(({ name, options, handleClick }, index) => (
                <Dropdown
                  name={name}
                  options={options}
                  onclick={handleClick}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={cx("main")}>
          <Table data={data} columns={columns}></Table>
        </div>
      </div>
    </div>
  );
};

export default Calls;
