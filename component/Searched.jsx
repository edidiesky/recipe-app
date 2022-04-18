import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
export default function Searched() {
  const [food, setFood] = useState('')
   const Navigate = useNavigate()
  const Handlesubmit =(e)=> {
    e.preventDefault()
    Navigate('/cuisine/' + food)
  }
  return (
    <Form onSubmit={Handlesubmit}>
      <input type='text' placeholder='Get your foods here' value={food} onChange={(e)=> setFood(e.target.value)}/>
   <FaSearch /> 
    </Form>
  )
}

const Form  = styled.form`
width:70%;
margin:0 auto;
display:flex;
align-items:center;
background: #313131;
border-radius:10px;
padding:1rem 3rem;
justify-content:center;
input {
all:unset;
width:100%;
background:transparent;
font-size:1.5rem;
color:white;

}
svg {
  font-size:16px;
  color:white;
}
`

