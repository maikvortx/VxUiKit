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
`;
export const Title = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  color: #616469;
  }
  h1 {
    color: #cb1e25;
  }
`;