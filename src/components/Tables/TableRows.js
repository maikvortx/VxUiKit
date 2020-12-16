import React, {useState} from "react";
import PropTypes from "prop-types";
//--- @material-ui/core components ---//
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { FormatHelper } from '../../extensions/format-extension';

const useStyles = makeStyles();

export default function TableRows(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <TableRow className={classes.root} onClick={() => setOpen(!open)}>
        <TableCell component="th" scope="row" width='20%'>
          {row.name}
        </TableCell>
        <TableCell align="left" width='5%'>{row.tipo}</TableCell>
        <TableCell align="right" width='15%'>R$ {FormatHelper.formatCurrencyValue(row.fundo)}</TableCell>
        <TableCell align="right" width='15%'>R$ {FormatHelper.formatCurrencyValue(row.quantidade)}</TableCell>
        <TableCell align="left" width='10%'>{row.status}</TableCell>
        <TableCell width='5%'>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                História
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Fundo</TableCell>
                    <TableCell align="right">Quantidade</TableCell>
                    <TableCell align="right">Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.dadoId}</TableCell>
                      <TableCell align="right">{historyRow.valor}</TableCell>
                      <TableCell align="right">
                        R$ {FormatHelper.formatCurrencyValue(Math.round(historyRow.valor * row.valor * 100) / 100)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

TableRows.propTypes = {
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
