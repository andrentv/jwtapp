import styled from "styled-components";

export const Table = styled.table`
  width: 100%; 
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 20px;
  padding: 20px;
  color: #787171;
  margin-top: 20px;
  border: 1px solid darkgray;
  
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
 
  padding: 10px 0;
  text-align: left;
  width: ${(props) => (props.width ? `${props.width}px` : `auto`)};
`;


