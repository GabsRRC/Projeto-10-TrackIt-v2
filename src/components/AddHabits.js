/*

Adicionar um hábito ---- POST no AXIOS

*/


import React, { useContext, useState } from "react";
import styled from "styled-components";
import Week from "./Week";
import UserContext from "./UserContext";
import axios from "axios";

export default function AddHabits (){
    const {token} = useContext(UserContext);
    const [visible, setVisible] = useState("hide");
    const [inputName, setInputName] = useState("");

    //console.log(token)

    function showAdd() {
        setVisible("")
    }

    function hideAdd(){
        setVisible("hide")
        setInputName("")
    }

    function sendHabits() {
        //event.preventDefault();
    
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const body = {
                name: inputName,
                days: [0, 2, 4, 6] 
            }
    
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body ,config);
    
            promise.then(res => {
                console.log(res.data)
                setInputName("")
                setVisible("hide")
            })
      }
   
    return(
        <Container>
            <Add>
                <div>
                    <p>Meus hábitos</p>
                    <span className="box" onClick={showAdd} >+</span>
                </div>
            </Add>
            <Box className={visible}>
                <input placeholder="nome do hábito" value={inputName} onChange={(e) => setInputName(e.target.value)} />
                <div>
                    <Week/>
                </div>
                <div className="end">
                    <p onClick={hideAdd}>cancelar</p>
                    <div className="button" onClick={sendHabits}>salvar</div>
                </div>
            </Box>
        </Container>
    )
}




const Container = styled.div`
.hide{
    display:none !important;
}
`

const Add = styled.div`

div{
    display: flex;
    justify-content: space-between;
    width: 340px;
    margin-bottom: 20px;
}

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;
}

.box{
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: #FFFFFF;
    font-size: 29px;
    font-family: 'Lexend Deca';
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
}
`


const Box = styled.div`

width: 340px;
height: 180px;
//background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
//align-items: center;
background-color: #FFFFFF;


input{
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 15px 0 5px 13px;
    font-family: 'Lexend Deca';
    //color: #dbdbdb;

    &::placeholder{
        color: #dbdbdb;
        padding-left: 10px;
    }
}

.end{
    display: flex;
    align-items:center;
    justify-content: flex-end;
    color: #52B6FF;
    margin: 25px 20px 0 0;
}

.button{
    width: 84px;
    height: 35px;
    background: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    display:flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    color: white;
    border-radius: 3px;
    margin-left: 25px;
}

div{
    display: flex;
}
`