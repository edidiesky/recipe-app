/** this is where all the vegge and the trending components */
import React from 'react'
import styled from 'styled-components'
import Popular from '../component/Popular'
import Veggie from '../component/Veggie'
import Searched from '../component/Searched'
import SearchedSection from '../component/SearchedSection'
import { Route } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Container>
        <Searched/>
        <SearchedSection/>
        
        <Veggie/>
        <Popular/>
        </Container>
        
    </div>
  )
}



const Container = styled.div`
background-color:#eee;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`






