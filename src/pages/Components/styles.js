import styled from 'styled-components';

const gerarGridWidth = size => {
  if (!size || isNaN(size)) return 100;
  return (size / 12) * 100;
};

export const Container = styled.div`
  border-radius: 4px;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.05);
`;
export const Title = styled.h3`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  color: #616469;
  }
`;
export const Content = styled.div`
  padding: 25px 50px 0 50px;
  color: #616469;
  cursor: auto;
  & .title-h5 {
    padding-bottom: 30px;
  }
  & .MuiTableRow-root {
    background-color: #F7F7F7;
  }
  & .MuiIconButton-label {
    color: #cb1e25;
  }
  & .MuiInput-underline:before, .MuiInputBase-root {
    border-bottom: none;
  }
  & .MuiInputBase-root {
    padding: 0 !important;
  }
  & .MuiToolbar-regular {
    min-height: 0;
    padding: 0;
  }
  & .MuiInputAdornment-positionStart {
    margin: 0 8px
  }
  & .MuiInputAdornment-positionEnd {
    display: none;
  }
  & #detail-painel {
    border-left: 4px solid #cb1e25;
  }
}`;

export const PainelContent = styled.div`
  display: flex;
  justify-content: space-between;
  column-count: ${props => props.column};
  & .Painel-Content {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ced4da;
    align-items: center;

    & h5 {
      padding-bottom: 0;
      margin: 0;
    }
  }
  & .MuiInputBase-root {
    border-bottom: unset;
  }
  & .MuiInputBase-input {
    margin-right: 10px;
  }
  & .MuiInputBase-input:disabled {
    border-bottom: 1px solid #616469;
    background: transparent;
    text-align: right;
  }
  & .MuiInput-underline.Mui-disabled:before {
    border-bottom-style: none;
  }
  & .MuiInput-underline:hover {
    border-bottom: unset;
  }
`;
export const PainelContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & .Painel-Content-Row {
    width: 46%;
    border-radius: 4px;
    border: 1px solid #8888;
    padding: 10px;
    overflow-x: auto;
    justify-content: center;

    div {
      justify-content: center;
    }

    p {
      word-break: break-all;
      max-height: 160px;
    }
  }

  & .Painel-Content-Center {
    display: flex;
  }
`;
export const Line = styled.hr`
  display: block;
  border: 0;
  border-bottom: 1px dashed #c4c4c4;
  background: #c4c4c4;
`;

export const BoldLine = styled.hr`
  display: block;
  border: 0;
  border-bottom: 2px dashed #c4c4c4;
  background: #c4c4c4;
`;

export const PainelButton = styled.button`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #cb1e25;
  background-color: #ffffff;
  padding: 10px 20px;
  max-height: 50px;
  min-height: 40px;
  outline: none;
  cursor: pointer;
  border: 3px solid #cb1e25;
  border-radius: 7px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;

  &:hover {
    background-color: #cb1e25;
    color: #ffffff;
  }
  &:disabled,
  :hover {
    color: #ffffff;
    background-color: #d4d3d6;
    border: 1px solid #ffffff;
    cursor: default;
  }
`;

export const Card = styled.div`
  background: white;
  width: ${props => props.width};
  justify-content: space-around;
  padding: 2%;
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.25);
  border: 1px solid #dedede;
  margin: 10px;
  border-radius: 5px;
  & h4 {
    font-size: 18px;
    text-align: center;
  }
  & h5 {
    display: flex;
    flex: 1;
    line-height: 1em;
  }
  & .subtitle {
    margin: 30px 0px 20px 0;
  }
  & .subtitle:before,
  .subtitle:after,
  .subtitle-ie span.after,
  .subtitle-ie span.before {
    content: '';
    flex-grow: 1;
    margin: 0px 24px;
    background: linear-gradient(to right, #ced4da, #ced4da);
    background-size: 100% 1px;
    background-position: 0% 50%;
    background-repeat: repeat-x;
  }
`;
export const CardHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid #888888;
  padding-bottom: 10px;
  & h4 {
    margin-top: 0;
  }
`;

export const Column = styled.div`
  @media only screen and (max-width: 768px) {
    width: ${({ mobile }) => mobile && gerarGridWidth(mobile)}%;
  }

  @media only screen and (min-width: 768px) {
    width: ${({ tablet }) => tablet && gerarGridWidth(tablet)}%;
  }

  @media only screen and (min-width: 1000px) {
    width: ${({ desktop }) => desktop && gerarGridWidth(desktop)}%;
  }
`;
export const SubTitle = styled.h5`
  font-size: 16px;
  margin-top: 30px;
`;
