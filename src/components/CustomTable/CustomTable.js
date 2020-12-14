import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//--- @material-ui/core components ---//
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Row from './CustomTableRow';
import Pagination from '../Pagination/Pagination'


import styles from "./customTableStyle";

const useStyles = makeStyles(styles);

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '05/04/2020', dadoId: '11091700', valor: 3 },
      { date: '07/04/2020', dadoId: 'Dado 1', valor: 1 },
    ],
  };
}
const rows = [
  createData('Dado 1', 159, 6.0, 24, 4.0, 3.99),
  createData('Dado 2', 237, 9.0, 37, 4.3, 4.99),
  createData('Dado 3', 262, 16.0, 24, 6.0, 3.79),
  createData('Dado 4', 305, 3.7, 67, 4.3, 2.5),
  createData('Dado 5', 356, 16.0, 49, 3.9, 1.5),
];

export default function CustomTable(props) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Coluna 1</TableCell>
            <TableCell align="right">Coluna 2</TableCell>
            <TableCell align="right">Coluna 3</TableCell>
            <TableCell align="right">Coluna 4</TableCell>
            <TableCell align="right">Coluna 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {/* <Pagination /> */}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

CustomTable.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};
