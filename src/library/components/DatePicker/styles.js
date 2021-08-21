import styled from 'styled-components';

export const DatePickerContainer = styled.div`
    display: flex;
    align-items: flex-start;
  }
  & select,
   input[type='text'],
   input[type='number'],
   textarea {
    background: transparent;
    outline: none;
    padding: 10px;
    margin: 0;
  }
  & .datePicker {
    max-width: 250px;
  }
  & .MuiSvgIcon-root {
    color: #A5A4BF;
  }
  & p {
    background: white;
    width: 143px;
    padding-left: 6px;
    transform: translate(-10px, -57px) scale(0.75);
    color: #0000008a;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const DatePickerContent = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  padding-left: 10px;
  outline: none;
  border: 1px solid #e6e7e7 !important;
  border-radius: 4px !important;
  margin: 0;

  & input[type='text'] {
    border: none;
    padding: 8px;
  }
  & .datePicker {
    border: none;
  }
  & .MuiSvgIcon-root{
    color: #A5A4BF;
  }
  & .react-datepicker {
  display: flex;
  }

`;