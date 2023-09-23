
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    border-radius: 5px;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: #fff;
    box-shadow: black;
  `;

export const CloseButton = styled.button`
    display: flex;
    padding: 4px;
    align-self: flex-end;
    border: 0;
  `;

export const ButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #d3d3d3;  
    margin-top: 1em;
    width: 20em;
    text-align: center;
  `;

export const ListMap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    background-color: #e9e9e9;
    width: 17em;
`

