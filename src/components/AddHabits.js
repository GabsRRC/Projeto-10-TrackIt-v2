/*

Adicionar um hábito ---- POST no AXIOS

*/


import React, { useContext, useState } from "react";
import styled from "styled-components";
//import Week from "./Week";
import UserContext from "./UserContext";
import axios from "axios";
import Loading from "./Loading";

export default function AddHabits (){
    const {token} = useContext(UserContext);
    const [visible, setVisible] = useState("hide");
    const [inputName, setInputName] = useState("");
    const {selectDay, setSelectDay} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const {reload, setReload} = useContext(UserContext);
    //const {loading, setLoading} = useContext(UserContext);

    function showAdd() {
        setVisible("")
    }

    function hideAdd(){
        setVisible("hide")
        setSelectDay([])
    }


    function sendHabits() {

            setIsLoading(true);
            //setLoading(true);
    
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const body = {
                name: inputName,
                days: selectDay
            }
    
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body ,config);
    
            promise
            .then(res => {
                setInputName("")
                setVisible("hide")
                setIsLoading(false)
                setSelectDay([])
                setReload(res);
                //setLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                //setLoading(false)
                alert("Algo deu errado, tente novamente");
              })

      }

    return(
        <Containerr>
            <Add>
                <div>
                    <p>Meus hábitos</p>
                    <span className="box" onClick={showAdd} >+</span>
                </div>
            </Add>
            <Box className={visible}>
                <input placeholder="nome do hábito" value={inputName} onChange={(e) => setInputName(e.target.value)} disabled={isLoading}/>
                <div>
                    <Week/>
                </div>
                <div className="end">
                    <p onClick={hideAdd}>Cancelar</p>
                    <div className="button" onClick={sendHabits}>{" "} {isLoading ? <Loading /> : "Salvar"}</div>
                </div>
            </Box>
        </Containerr>
    )
}
 // {loading ? {} : {setSelectDay([...selectDay, props.id]);}


function Week (){

    //const {loading, setLoading} = useContext(UserContext);
    const {selectDay, setSelectDay} = useContext(UserContext);

    function eachDay (props){

        return(
            <Days key={props.id}  onClick={() => {setSelectDay([...selectDay, props.id])} }


              style={selectDay.includes(props.id)? { backgroundColor: "#CFCFCF", color: "#FFFFFF" }: {}} > {props.letter} </Days>
        )
    }

    const weekDays = [
        { id: 0, letter: 'D' },
        { id: 1, letter: 'S' },
        { id: 2, letter: 'T' },
        { id: 3, letter: 'Q' },
        { id: 4, letter: 'Q' },
        { id: 5, letter: 'S' },
        { id: 6, letter: 'S' }
    ]

    return (
        <Container>
            {weekDays.map(eachDay)}
        </Container>
    )
}



const Container = styled.div`
    margin-left: 10px;
    display: flex;
`

const Days = styled.div`
    width: 30px;
    height: 30px;
    margin: 3px;
    border: 1px solid #D5D5D5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    color: #d5d5d5;
    font-family: 'Lexend Deca';
    
    color: #d5d5d5;


    div{
        display: flex;
    }
`



const Containerr = styled.div`
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