import styled from "styled-components";


export default function Week (){

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
            {weekDays.map(eachDay)  }
        </Container>
    )
}

function eachDay (props){
    return(
        <Days key={props.id} > {props.letter} </Days>
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