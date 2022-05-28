import React, {useEffect, useContext, useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import UserContext from "./UserContext";

export default function ScreenHistory (){

    const {token} = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        
        const promise = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config
        );
    
        promise.then((response) => {
          setHabits([...response.data]);
          console.log(...response.data);
          console.log(habits);
        });
      }, []);

    return(
        <>
        <Header/>
        <Container>
          <h5>Histórico</h5>
          <h6>Em breve você poderá ver o histórico dos seus hábitos aqui!</h6>
        </Container>
        <Footer/>
        </>
    )
}

const Container = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //width: 300px;

  h5{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;


color: #126BA5;
  }
  h6{
  font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
width: 280px;
color: #666666;
}


  .none{
      display: none;
  }

  a {
    text-decoration: none;
  }

`