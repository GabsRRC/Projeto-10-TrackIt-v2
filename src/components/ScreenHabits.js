/*

Tela que exibe TODOS os hábitos ---- GET no AXIOS

*/
import styles from "../css/styles.css"
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import AddHabits from "./AddHabits";
import RenderHabits from "./RenderHabits";

export default function ScreenHabits (){

    return(
        <>
        <Container>
            <Header/>
            <AddHabits/>
            <RenderHabits/>
        </Container>
        <Footer/>
        </>
    )
}

//Styles

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:100px;

  .none{
    display: none;
  }

  a {
    text-decoration: none;
  }

`
