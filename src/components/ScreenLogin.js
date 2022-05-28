/*

Tela que exibe o login

*/


import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logos from "../img/logos.svg"
import axios from 'axios';
import UserContext from "./UserContext";
import {Helmet} from "react-helmet";
import Loading from "./Loading";



export default function ScreenLogin (){

    const {setToken} = useContext(UserContext);
    const {setPicture} =  useContext(UserContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    function fazerLogin(event) {
      event.preventDefault();

      setIsLoading(true);

      const body = {
        email: email,
        password: senha
      }

      const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)
      promise
      .then(res => {
        setToken(res.data.token)
        setPicture(res.data.image)
        navigate("/habitos")
      })
      .catch(err => {
        alert("Algo deu errado, tente novamente");
        setIsLoading(false);
        setEmail('');
        setSenha('');
      })
    }

    return(
        <>  
            <Helmet>
                <style>{"body { background-color: #FFFFFF; }"}</style>
            </Helmet>
            <Container >
              <form onSubmit={fazerLogin}>
                <img src={logos} alt="logo trackit"/>
                <input placeholder="email" type="email" value={email} required onChange={e => setEmail(e.target.value)} disabled={isLoading} />
                <input placeholder="senha" type="password" value={senha} required onChange={e => setSenha(e.target.value)} disabled={isLoading}/>
                <button className="button" type="submit" disabled={isLoading}> {" "} {isLoading ? <Loading /> : "Entrar"}</button>
                <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
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
    margin:3px;

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
    padding: 0;
    margin:0;
    border: none;
    background: transparent;
}

`;

