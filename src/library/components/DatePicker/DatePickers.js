import React, { useState } from 'react';
import { Event, Close } from '@material-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormatHelper } from '../../helpers/format-extension';
import moment from 'moment';
import {DatePickerContainer, DatePickerContent } from './styles';

import { registerLocale } from  "react-datepicker";
import {endOfDay} from 'date-fns';
import pt from 'date-fns/locale/pt';
registerLocale('pt-BR', pt)

export default function DatePickers() {
  const [dataInicio, setDataInicio] = useState();
  const [dataFim, setDataFim] = useState();
  
  const handleChangeDates = dates => {
    const [start, end] = dates;
    setDataInicio(start);
    setDataFim(end ? endOfDay(end) : undefined);
  };
  const inputValue =
    moment(`${dataInicio}`).format('DD/MM/YYYY') +
    ' - ' +
    moment(`${dataFim}`).format('DD/MM/YYYY');

  const handleClearDatePicker = () => {
    setDataInicio();
    setDataFim();
  };

  return (
    <DatePickerContainer>
      <div>
        <DatePickerContent>
        <Event/>{' '}
          <DatePicker
            locale="pt-BR"
            selected={dataInicio}
            onChange={handleChangeDates}
            dateFormat="dd/MM/yy"
            placeholderText="de 00/00/00 até 00/00/00"
            className="datePicker"
            startDate={dataInicio}
            endDate={dataFim}
            selectsRange
            shouldCloseOnSelect={false}
            monthsShown={2}
            openToDate={new Date()}
            value={!dataFim ? new Date() : inputValue}
            filterDate={FormatHelper.isWeekday}
          /> 
          {
            dataInicio ?
            <Close onClick={handleClearDatePicker}/> : ""
          }
        </DatePickerContent>
        <p> Filtro período</p>
      </div>
    </DatePickerContainer>
  )
}