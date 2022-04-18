import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom'

import Searched from '../component/Searched'
import SearchedSection from '../component/SearchedSection'
import {GiKnifeFork} from 'react-icons/gi'
export default function Detailspage() {
	// to store the fetched data in this state called cuisine
    const [details, setDetails] = useState({})
    const [activebutton, setActivebutton] = useState(true)
    let p = useParams();
	const fetchDetails = async (name) =>{
		    const response = await fetch(`https://api.spoonacular.com/recipes/${p.name}/information?apiKey=acc2c6c83e614d4d82978d2bcd9051b6&cuisine=${name}`);
		    const data = await response.json()
			console.log(data);
			console.log(data.results);
		    setDetails(data)
	}
	useEffect(()=> {
		console.log(p.name);
			fetchDetails(p.name)
	
	}, [p.name])

  return (
  	<Container>
  	
    <Grid>
    <Nav>
  		<Logo to={'/'}>
  			<GiKnifeFork/> deliciousness
  		</Logo>
  	</Nav>
    <Searched/>
        <SearchedSection/>
		<Detailswrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt=''/>
			</div>
			<Infocontainer>
				<Buttons className={activebutton? "active": "" } onClick={()=> setActivebutton(!activebutton)}>Instructions</Buttons>
				<Buttons className={activebutton? "": "active" } onClick={()=> setActivebutton(!activebutton)}>Ingredrient</Buttons>
				<div>
				{
					activebutton &&
					<h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
				}
				{
					!activebutton && <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
				}
				</div>
			</Infocontainer>
		</Detailswrapper>
	</Grid>
	</Container>
  )
}
const Logo = styled(Link) `
text-decoration:none;
font-size:1.2rem;
font-weight:400;
`
const Nav = styled.div `
padding:4rem 0;
display:flex;
justify-content:center;
align-items:flex-start;
svg {
	font-size:4rem;
}
`

const Detailswrapper = styled.div`

display:flex;


.active {
	background-color:#313131;
	color:white;
}
h2 {
	margin-bottom:2rem;

}
h3 {
	margin-top:3.4rem;

}
li {
	font-size:1.2rem;
	line-height:2.5rem;
}
ul {
	margin-top:2rem;
}
`
const Grid = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
flex-wrap:wrap;
width:100%;
height:100%;
`
const Container = styled.div`
background-color:#eee;
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;

`
const Buttons = styled.button`
padding:1rem 2rem;
color:#313131;
background-color:white;
border:2px solid black;
font-weight:600;
margin-right:2rem;

`
const Infocontainer = styled.div`
margin-left:7rem;

`



















