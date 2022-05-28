//import styles from "../css/styles.css"
import React, {useEffect, useContext, useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import UserContext from "./UserContext";
import dayjs from "dayjs"
import "dayjs/locale/pt-br";



export default function ScreenToday (){

    const {token, percent, setPercent} = useContext(UserContext);
    const {reload, setReload} = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    function checkIsMark(obj) {
        if (obj.done) {
          return obj;
        }
      }

    const filter = habits.filter(checkIsMark);
    const percentage = Math.round((100 / habits.length) * filter.length);
    setPercent(percentage);

    dayjs.locale("pt-br");


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
      }, [reload]);


      if (percent > 0){
        return(
        <Container>
            <Header/>
                <h5>{dayjs().format("dddd, DD/MM")}</h5>
                <h4>{percent}% dos hábitos concluídos</h4>
                {habits.map((habit) => (<Today name={habit.name} key={habit.id} id={habit.id}  done={habit.done} currentSequence={habit.currentSequence}  highestSequence={habit.highestSequence} /> ))}
            <Footer/>
        </Container>
        )
      } else {
          return (
        <Container>
            <Header/>
                <h5>{dayjs().format("dddd, DD/MM")}</h5>
                <h3>Nenhum hábito concluído ainda</h3>
                {habits.map((habit) => (<Today name={habit.name} key={habit.id} id={habit.id}  done={habit.done} currentSequence={habit.currentSequence}  highestSequence={habit.highestSequence} /> ))}
            <Footer/>
        </Container>
          )
      }
}



function Today ({name, done, currentSequence, highestSequence, id}){

    const {token} = useContext(UserContext);
    const {reload, setReload} = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function check (id){
 
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
          const promise = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
            config
          );
    
          promise.then((res) => {
            console.log(res.data)
            setReload(res)
          });
    }

    function uncheck (id){

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);

        promise.then(res => {
            console.log(res.data)
            setReload(res)
        })
    }


    return(
        <ToDo>
            <p>{name}</p>
            <h6 style={done === true ? {color:"green"}: {}}>Sequência atual: {currentSequence} dias </h6>
            <h6 style={currentSequence === highestSequence && currentSequence > 0 ? {color:"green"}: {}}>Seu recorde: {highestSequence} dias</h6>
            <span className="check"> <ion-icon name="checkbox" style={done === true ? {color:"green"}: {}}    onClick={done === false ? () => check(id) : () => uncheck(id)}  ></ion-icon> </span>
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
    color: #E7E7E7;

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
        //color: #E7E7E7;
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

  h5{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;




color: #126BA5;
  }

  h4{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: green;
}

h3{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #BABABA;
}

  .none{
      display: none;
  }

  a {
    text-decoration: none;
  }

`