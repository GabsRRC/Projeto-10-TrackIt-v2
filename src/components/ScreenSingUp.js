/*

Tela que exibe o cadastro

*/


import React, {useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import styled from "styled-components";
import logos from "../img/logos.svg"
import axios from 'axios'

export default function ScreenSingUp (){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    const navigate = useNavigate();

    function singUp(event){
      event.preventDefault();

      const body = {
        email: email,
        name: name,
        image: picture,
        password: senha
      }
      const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
      promise
      .then(res => {
        console.log(res.data)
        navigate("/")
      })
      .catch(err => {
        console.log(err)
      })
    }

    return(
        <>  
            <Box>
              <form onSubmit={singUp}>
                <img src={logos} alt="track it logo"/>
                <input placeholder="email" type="email" value={email} required onChange={e => setEmail(e.target.value)}/>
                <input placeholder="senha" type="password" value={senha} required onChange={e => setSenha(e.target.value)}/>
                <input placeholder="nome" type="text" value={name} required onChange={e => setName(e.target.value)}/>
                <input placeholder="foto" type="text" value={picture} required onChange={e => setPicture(e.target.value)}/>
                <button type="submit" className="button">Cadastrar</button>
                <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
              </form>
            </Box>
        </>
    )
}


//Styles

const Box = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;

  a {
    text-decoration: none;
  }

  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    //color: #DBDBDB;
    margin: 3px;

    &::placeholder{
        color: #dbdbdb;
        padding-left: 10px;
    }
  }

  .button {
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin: 5px;
  }

  p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 15px;
  }

  img{
      margin-top: 30px;
      margin-bottom: 20px;
  }

  form{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  button{
    border: 0;
    padding: 0;
  }
`;

