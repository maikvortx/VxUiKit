import styled from 'styled-components';

export const Box = styled.div`
  display: "block";
  background-color: ${props => props.bgColor || "#525252"};
  width: 80px;
  height: 80px;
  border: 0.5px solid #C4C4C4;
  border-radius: 4px 4px 0 0;
`;
export const Tag = styled.div`
  display: "block";
  background-color: #F7F7F7;
  width: 80px;
  text-align: center;
  padding: 5px 0;
  margin-bottom: 15px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;