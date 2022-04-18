import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom'


export default function Cuisine() {
	// to store the fetched data in this state called cuisine
    const [cuisine, setCuisine] = useState([])
    let p = useParams();
	const getCuisine = async (name) =>{
		    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=acc2c6c83e614d4d82978d2bcd9051b6&cuisine=${name}`);
		    const data = await response.json()
			console.log(data);
			console.log(data.results);
		    setCuisine(data.results)
	}
	useEffect(()=> {
		console.log(p.name);
			getCuisine(p.name)
	
	}, [p.name])

  return (
	  <Container>

		  <Grid>
			  {
			  cuisine.map((cuisineitems) => {
				  return (
					  <Card key={cuisineitems.id}>
						  <img src={cuisineitems.image} alt='imdhfjf'/>
						  </Card>
		   
					  )
			  })}
		  </Grid>
	  </Container>
		)
}
const Grid = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
width:80%;
height:80%;
`
const Container = styled.div`
background-color:#eee;
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;

`



const Card = styled.div`
margin:10px;
img {
	width:100%;
	border-radius:2rem;
}
a{
	text-decoration:none;

}
h4 {
	text-align:center;
	padding:1rem;
}
`













