import React from "react";
import PropTypes from "prop-types";
//--- @material-ui/core components ---//
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Row from './TableRows';
import Pagination from '../Pagination/Pagination'

function createData(name, fundo, tipo, quantidade, status, valor) {
  return {
    name,
    fundo,
    tipo,
    quantidade,
    status,
    valor,
    history: [
      { date: '05/04/2020', dadoId: '11091700', valor: 3 },
      { date: '07/04/2020', dadoId: 'Dado 1', valor: 1 },
    ],
  };
}
const rows = [
  createData('Operação', 9999999999, 'DEB', 999999999999, "Em Análise", 3.99),
  createData('Fundo de investimento', 9999999999, 'CRI', 9999999999, "Aprovado", 4.99),
  createData('Certificado de Recebíveis do Agronegócio', 999999999999, 'CRA', 999999999, "Cancelado", 3.79),
  createData('Certificado de Recebíveis Imobiliário', 999999999999, 'NP', 999999999999, "Em Análise", 2.5),
  createData('Debêntures', 99999999999, 'CRI', 999999999999, "Aprovado", 1.5),
];

export default function Tables(props) {

  return (
    <TableContainer>
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Coluna 1</TableCell>
            <TableCell align="left">Coluna 2</TableCell>
            <TableCell align="right">Coluna 3</TableCell>
            <TableCell align="right">Coluna 4</TableCell>
            <TableCell align="left">Coluna 5</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow/>
        </TableFooter>
      </Table>
      <Pagination pageCount={20}/>
    </TableContainer>
  );
}

Tables.propTypes = {
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
