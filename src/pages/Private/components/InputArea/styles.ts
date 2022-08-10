import styled from 'styled-components';

export const Container = styled.div`
   
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 20px;
    padding: 20px;
    color: #787171;
    margin-top: 20px;
    display: flex;
    align-items: center;
    border: 1px solid darkgray;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
    color: #787171;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    color: #787171;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    color: #787171;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
/*
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #787171;
    border-radius: 5px;
    color: #787171;
    background-color: white;
`;
*/

export const Option = styled.option`
    color: #787171; 
`;

export const Button = styled.button`
  padding: 5px 40px;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  border-radius: 50px;
  margin: 10px;
  color: #787171;
  border: 2px solid darkgray;
  cursor: pointer;
  transition: border-color 0.25s;
  
`;
