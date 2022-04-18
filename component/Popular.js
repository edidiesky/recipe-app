/** The trending component */
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
/** the carousel is the splide component while the splidesplide is then individual object */
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom'

export default function Popular() {
  // setting the response data to a state called trending
  const [trending, setTrending] = useState([])
  /** getting the json data from the data base */
    const getTrendingdata = async () => {
      //set the localstorage

      const Checkrecipes = localStorage.getItem("trending")
      if (Checkrecipes) {
        setTrending(JSON.parse(Checkrecipes))
      }else{

      const response = await fetch("https://api.spoonacular.com/recipes/random?apiKey=acc2c6c83e614d4d82978d2bcd9051b6&number=20");
      const data = await response.json()
      localStorage.setItem('trending', JSON.stringify(data.recipes))
      console.log(data);
      setTrending(data.recipes)
      }

    }
    useEffect(()=> {
      getTrendingdata()
    }, [])
  return (
    <Wrapper>

      <h3>Trending picks</h3>
      <Splide options={
        {
          perPage:4,
          gap:"5rem",
          drag:"free",
        }
      }>
        {
          trending.map((items)=> {
            return (
                <SplideSlide key={items.id}>
              <Card >
              <Link to={'/recipes/' + items.id}>
                <Gradient></Gradient>
                <p>{items.title}</p>
                <img src={items.image} alt='product'/>
                </Link>
              </Card>
                </SplideSlide>
            )
          })
        }
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
width:70vw;
display:flex;
flex-direction:column;
`
const Card = styled.div`
height: 25rem;
border-radius: 2rem;
overflow:hidden;
position:relative
 img {
   border-radius:2rem;
   position:absolute;
   left:0;
   right:0;
   object-fit:cover;
   width:100%;
   height:100%;
 }
 p{
   position:absolute;
   z-index:2;
   bottom:0;
   left:50%;
   transform:translate(-50%, 0);
   color:white;
   width:100%;
   text-align:center;
   display:flex;
   justify-content:center;
   font-size:1.3rem;
   font-weight:600;
   height:40%;
 }
`
const Gradient = styled.div`
position:absolute;
width:100%;
height:100%;
z-index:5;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
`
