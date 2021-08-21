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
  margin: 200px auto;
  @media only screen and (max-width: 500px) {
    width: 80%;
  }
`;
export const ModalCloseBtn = styled.p`
  color: #343434;
  float: right;
  font-size: 49px;
  font-weight: 300;
  &:hover {
    color: #cb1e25;
    cursor: pointer;
  }
`;
export const ModalHeader = styled.div`
  margin: 30px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 20px;
  & h3 {
    padding-bottom: 20px;
    margin-bottom: 10px;
    position: relative;
    :before {
      content : "";
      position: absolute;
      left    : 0;
      bottom  : 0;
      height  : 1px;
      width   : 10%; 
      border-bottom: 3px solid #CB1E25;
    }
  }
`;
export const ModalBody = styled.div`
  margin: 30px;
`;
export const ModalButton = styled.div`
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
