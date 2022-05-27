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
        <Footer/>
        </>
    )
}