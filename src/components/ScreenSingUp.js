/*

Tela que exibe o cadastro ---- POST no AXIOS

*/


import React, {useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import styled from "styled-components";
import axios from 'axios'
import {Helmet} from "react-helmet";
import Loading from "./Loading";
import logos from "../img/logos.svg"

export default function ScreenSingUp (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function singUp(event){
      event.preventDefault();
      setIsLoading(true);

      const body = {
        email: email,
        name: name,
        image: picture,
        password: password
      }

      const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
      promise
      .then(res => {
        navigate("/");
        setIsLoading(false);
      })
      .catch(err => {
        alert("Algo deu errado, tente novamente");
        setIsLoading(false);
      })
    }

    return(
        <>  
            <Helmet>
                <style>{"body { background-color: #FFFFFF; }"}</style>
            </Helmet>
            <Container>
              <form onSubmit={singUp}>
                <img src={logos} alt="track it logo"/>
                <input placeholder="email" type="email" value={email} required onChange={e => setEmail(e.target.value)} disabled={isLoading}/>
                <input placeholder="senha" type="password" value={password} required onChange={e => setPassword(e.target.value)} disabled={isLoading}/>
                <input placeholder="nome" type="text" value={name} required onChange={e => setName(e.target.value)} disabled={isLoading}/>
                <input placeholder="foto" type="text" value={picture} required onChange={e => setPicture(e.target.value)} disabled={isLoading}/>
                <button type="submit" className="button" disabled={isLoading}>{" "} {isLoading ? <Loading /> : "Cadastrar"}</button>
                <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
              </form>
            </Container>
        </>
    )
}


//Styles

const Container = styled.div`

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
    color: #666666;
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
    border: none;
    background: transparent;
  }
`;

