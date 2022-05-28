/*

Exibir o rodapé da página

*/


import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import { buildStyles } from "react-circular-progressbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer(){

    const {percent} = useContext(UserContext);

    return(
        <Bottom>
            <div className="teste">
                <Link to="/habitos" > <div>Hábitos</div> </Link>
                <Link to="/historico" > <div>Histórico</div> </Link>
            </div>
            <Link to="/hoje" ><div className="main-button button">
          <CircularProgressbar
            value={percent}
            text={"Hoje"}
            background="#FFFFFF"
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </div></Link>
        </Bottom>
    )
}


const Bottom = styled.div`
position: fixed;
bottom: 0;
width:100%;
height: 70px;
background: #FFFFFF;

.main-button {
    background-color: #52b6ff;
    width: 91px;
    height: 91px;
    border-radius: 100%;
    //margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.teste{
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #52B6FF;
    margin: 25px 50px 25px 50px;
}

.button{
    width: 91px;
    height: 91px;
    background: #52B6FF;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 15px;
    text-align: center;
    border-radius: 49px;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #FFFFFF;
    font-weight: 400;
    //font-size: 17.976px;
}

p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF !important;
}

a {
    text-decoration: none;
    color: #52B6FF;
  }
`