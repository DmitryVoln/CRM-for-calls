import React, { useState } from 'react';
import { useTable, TableOptions, Column } from "react-table";
 


type Cols = { [key: string]: string };
interface ITable {
  data: Cols[];
  columns: Column<{ [key: string]: string }>[];
}

const Table = ({data, columns}: ITable): JSX.Element => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  paddingRight: '50px',
                  fontFamily: "SF Pro Display",
                  fontStyle: 'normal',
                  fontWeight: '400px',
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: '#899cb1',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
              
                    style={{
                      paddingRight: '50px',
                      paddingTop: '22px',
                      paddingBottom: '22px',
                      borderBottom: 'solid 1px gray',
                      marginRight: 'px',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;