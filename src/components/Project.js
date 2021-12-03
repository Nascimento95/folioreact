import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
const ContainerProject =styled.div`
    width:100%;
    height : 500px;
    background:white;
    padding-top:30px;
    display:flex;
    // justify-content:center;
    flex-direction:column;
    align-items:center;
    @import url('https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap');
    h3{
        font-family: 'Ceviche One', cursive;
        // padding-top:50px
        text-align:center;
        color:black;
    }

`
const BoxProject =styled.div`
    margin-top:20px;
    width:100px;
    height:100px;
    background-color: red;
`

const Project = () => {
    return (
        <ContainerProject>
            <h3>mes projets </h3>
        <Zoom >
            <BoxProject>
                <p>dd</p>
            </BoxProject>
            <BoxProject>
            <p>dd</p>
            </BoxProject>
            <BoxProject>
            <p>dd</p>
            </BoxProject>
            <BoxProject>
            <p>dd</p>
            </BoxProject>
        </Zoom>
        </ContainerProject>
    )
}

export default Project