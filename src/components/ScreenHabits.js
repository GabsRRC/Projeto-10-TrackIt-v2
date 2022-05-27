/*

Tela que exibe TODOS os hábitos

*/
import styles from "../css/styles.css"
import React, { useContext} from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import AddHabits from "./AddHabits";
import UserContext from "./UserContext";
import RenderHabits from "./RenderHabits";

export default function ScreenHabits (){

    const {token} = useContext(UserContext);

    console.log(token)

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
