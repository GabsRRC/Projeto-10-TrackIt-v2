/*

Exibir o topo da página com a foto do usuário

*/

import React, { useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components"

export default function Header (){

    const {picture} =  useContext(UserContext);

    return(
        <Top>
            <div>Track It</div>
            <div><img src={picture} alt="user-icon"/> </div>
        </Top>
    )
}

//Styles

const Top = styled.div`
    z-index:2;
    position: fixed;
    height: 70px;
    width:100%;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: playball;
    font-weight: 400;
    font-size:38px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

div{
    margin:15px;
    display: flex;
}

img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
}
`