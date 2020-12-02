import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  display: block;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(22, 22, 22, 0.4);
`;
export const ModalContent = styled.div`
  border: 1px solid #c12c2c;
  background-color: #fefefe;
  border-radius: 4px;
  background-color: #fefefe solid;
  height: auto;
  width: ${props => props.width || '50%'};
  padding: 20px;
  margin: 2% auto;
  @media only screen and (max-width: 500px) {
    width: 80%;
  }
`;
export const ModalCloseBtn = styled.p`
  color: #cb1e25;
  float: right;
  font-size: 49px;
  font-weight: 300;
  &:hover {
    cursor: pointer;
    color: #343434;
  }
`;
export const ModalContentInfo = styled.div`
  margin: 30px;
  & h4 {
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  & h5 {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
export const ModalButton = styled.div`
  border-top: 1px solid #c4c4c4;
  padding: 30px 0;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & button:disabled {
    background-color: #d4d3d6;
  }
`;
