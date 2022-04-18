import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import styled from 'styled-components'
import {GiNoodles, GiChopSticks} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

export default function SearchedSection() {
  return (
    <List>
        <Slink to ={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Nigerian</h4>
        </Slink>
        <Slink to ={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to ={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Japanese'}>
            <GiNoodles/>
            <h4>Japanese</h4>
           
        </Slink>
        
       
    </List>
  )
}
const List = styled.div`
display:flex;
justify-content:center;
margin:20px;
gap:20px;
`
const Slink = styled(NavLink)`
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
text-decoration:none;
flex-direction:column;
height:60px;
width:60px;
cursor:pointer;
background-color:#313131;
svg {
    color:white;
    font-size:20px;
}
h4 {
    color:white;
    font-size:10px;
}
`




