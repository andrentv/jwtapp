import styled from "styled-components";

export const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  padding: 20px;
  box-shadow: 2px 2px 2px #ccc;
  border-radius: 10px;
  border: 2px solid grey;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
`;
 
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Input = styled.input`
  min-width: 20em;
  padding: 13px;
  margin: 0px 20px 0px 20px;
  border-radius: 50px;
  color: #342929;
  border: 2px solid darkgray;
  
`;


export const Button = styled.button`
  min-width: 200px;
  padding: 20px;
  border-radius: 50px;
  margin: 50px;
  color: #787171;
  border: 2px solid darkgray;
  cursor: pointer;
  transition: border-color 0.25s; 
`;

export const Span = styled.div`
  width: 240px;  
  color: #787171;
  margin-top: 30px;
  
`;




