//import styles from "../css/styles.css"
import React, {useEffect, useContext, useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import UserContext from "./UserContext";


export default function ScreenToday (){

    const {token} = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    //const [habitDays, setHabitsDay] = useState( {days: []} );

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        
        const promise = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config
        );
    
        promise.then((response) => {
          setHabits([...response.data]);
          console.log(...response.data);
          console.log(habits);
        });
      }, []);


    return(
        <Container>
            <Header/>
                {habits.map((habit) => (<Today name={habit.name} key={habit.id} id={habit.id}  done={habit.done} currentSequence={habit.currentSequence}  highestSequence={habit.highestSequence} /> ))}
            <Footer/>
        </Container>
    )}



function Today ({name, done, currentSequence, highestSequence}){

    return(
        <ToDo>
            <p>{name}</p>
            <h6>Sequência atual: {currentSequence} dias</h6>
            <h6>Seu recorde: {highestSequence} dias</h6>
            <span className="check"> <ion-icon name="checkbox"></ion-icon> </span>
        </ToDo>
    )
}




const ToDo = styled.div`

width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    margin-top: 20px;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    position: relative;

    p{
        color: #666666;
        margin: 10px;
    }

    h6{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    color: #666666;
    margin: 10px;
    }

    ion-icon{
        position: absolute;
        top:0;
        right:0;
        color: #E7E7E7;
        font-size: 90px;
    }

`

const Container = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .none{
      display: none;
  }

  a {
    text-decoration: none;
  }

`